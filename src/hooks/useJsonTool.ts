import { useState, useEffect, useRef } from 'react';
import { toast } from '@/hooks/use-toast';
import i18n from '@/i18n';
import { dump as toYaml } from 'js-yaml';
import { parse as toXml } from 'js2xmlparser';
import { parse as json2csv } from 'json2csv';

const getValueByPath = (obj: any, path: string): any => {
  try {
    const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(p => p);
    let current = obj;
    for (const key of keys) {
      if (current === null || typeof current !== 'object' || !(key in current)) {
        return undefined;
      }
      current = current[key];
    }
    return current;
  } catch (error) {
    return undefined;
  }
};

export const useJsonTool = () => {
  const [input, setInput] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isMinified, setIsMinified] = useState(false);
  const lastValidJsonRef = useRef<string | null>(null);
  const isMinifyingRef = useRef(false);
  const [extractPath, setExtractPath] = useState('');
  const [extractedValue, setExtractedValue] = useState<string | null>(null);

  // 实时校验并自动格式化 JSON
  const validateAndFormatJson = (jsonString: string) => {
    if (!jsonString.trim()) {
      setValidationError(null);
      setIsValid(true);
      lastValidJsonRef.current = null;
      setExtractedValue(null);
      return jsonString;
    }
    try {
      const parsed = JSON.parse(jsonString);
      setValidationError(null);
      setIsValid(true);
      lastValidJsonRef.current = JSON.stringify(parsed, null, 2); // 美化格式
      return lastValidJsonRef.current;
    } catch (error) {
      setIsValid(false);
      setExtractedValue(null);
      if (error instanceof SyntaxError) {
        const errorMessage = error.message;
        const match = errorMessage.match(/at position (\d+)/);
        if (match) {
          const position = parseInt(match[1]);
          const lines = jsonString.substring(0, position).split('\n');
          const line = lines.length;
          const column = lines[lines.length - 1].length + 1;
          setValidationError(`JSON语法错误: ${errorMessage} (第${line}行，第${column}列)`);
        } else {
          setValidationError(`JSON语法错误: ${errorMessage}`);
        }
      } else {
        setValidationError('未知的JSON解析错误');
      }
      return jsonString;
    }
  };

  // 仅在输入或校验状态变化时校验
  useEffect(() => {
    if (isMinifyingRef.current) {
      isMinifyingRef.current = false;
      validateAndFormatJson(input);
      return;
    }

    const formatted = validateAndFormatJson(input);
    // 自动格式化，仅在有效且未是格式化后的内容时触发
    // 防止死循环：只有当输入内容不同于格式化结果时才 setInput
    if (isValid && input.trim() && formatted !== input) {
      setInput(formatted ?? '');
      setIsMinified(false);
    }
    // eslint-disable-next-line
  }, [input]);

  const handleInputChange = (value: string) => {
    setInput(value);
    setIsMinified(false);
    setExtractedValue(null);
  };

  const handleToggleMinifyFormat = () => {
    setExtractedValue(null);
    if (!isValid || !input.trim()) {
      toast({
        title: i18n.t('toasts.common.error'),
        description: i18n.t('toasts.error.invalidJson'),
        variant: 'destructive',
      });
      return;
    }

    try {
      if (isMinified) {
        const parsed = JSON.parse(input);
        const formattedJson = JSON.stringify(parsed, null, 2);
        setInput(formattedJson);
        navigator.clipboard.writeText(formattedJson);
        toast({
          title: i18n.t('toasts.common.success'),
          description: i18n.t('toasts.success.formattedAndCopied'),
        });
        setIsMinified(false);
      } else {
        const parsed = JSON.parse(input);
        const minified = JSON.stringify(parsed);
        isMinifyingRef.current = true;
        setInput(minified);
        navigator.clipboard.writeText(minified);
        toast({
          title: i18n.t('toasts.common.success'),
          description: i18n.t('toasts.success.minifiedAndCopied'),
        });
        setIsMinified(true);
      }
    } catch (error) {
      toast({
        title: i18n.t('toasts.common.error'),
        description: i18n.t('toasts.error.invalidJsonFormat'),
        variant: 'destructive',
      });
    }
  };

  const copyToClipboard = () => {
    setExtractedValue(null);
    if (!input.trim()) {
      toast({
        title: i18n.t('toasts.common.info'),
        description: i18n.t('toasts.info.emptyContent'),
      });
      return;
    }
    navigator.clipboard.writeText(input);
    toast({
      title: i18n.t('toasts.common.success'),
      description: i18n.t('toasts.success.copied'),
    });
  };

  const clearAll = () => {
    setInput('');
    setValidationError(null);
    setIsValid(true);
    setIsMinified(false);
    setExtractPath('');
    setExtractedValue(null);
  };

  const handleExtractValue = () => {
    if (!isValid || !input.trim()) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.invalidJson'), variant: 'destructive' });
      return;
    }
    if (!extractPath.trim()) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.missingPath'), variant: 'destructive' });
      return;
    }

    try {
      const parsedJson = JSON.parse(input);
      const value = getValueByPath(parsedJson, extractPath);

      if (value === undefined) {
        setExtractedValue(null);
        toast({ title: i18n.t('toasts.common.notFound'), description: i18n.t('toasts.error.notFound'), variant: 'destructive' });
      } else {
        const resultString = JSON.stringify(value, null, 2);
        setExtractedValue(resultString);
        navigator.clipboard.writeText(resultString);
        toast({ title: i18n.t('toasts.common.success'), description: i18n.t('toasts.success.extractedAndCopied') });
      }
    } catch (error) {
      setExtractedValue(null);
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.extractError'), variant: 'destructive' });
    }
  };

  const handleConvertToYaml = () => {
    if (!isValid || !input.trim()) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.invalidJson'), variant: 'destructive' });
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const yamlString = toYaml(parsed);
      navigator.clipboard.writeText(yamlString);
      toast({ title: i18n.t('toasts.common.success'), description: i18n.t('toasts.success.convertedToYamlAndCopied') });
    } catch (error) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.conversionFailed'), variant: 'destructive' });
    }
  };

  const handleConvertToXml = () => {
    if (!isValid || !input.trim()) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.invalidJson'), variant: 'destructive' });
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const xmlString = toXml('root', parsed, {});
      navigator.clipboard.writeText(xmlString);
      toast({ title: i18n.t('toasts.common.success'), description: i18n.t('toasts.success.convertedToXmlAndCopied') });
    } catch (error) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.conversionFailed'), variant: 'destructive' });
    }
  };

  const handleConvertToCsv = () => {
    if (!isValid || !input.trim()) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.invalidJson'), variant: 'destructive' });
      return;
    }
    try {
      const parsed = JSON.parse(input);
      if (!Array.isArray(parsed)) {
        toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.csvConversionRequiresArray'), variant: 'destructive' });
        return;
      }
      const csvString = json2csv(parsed);
      navigator.clipboard.writeText(csvString);
      toast({ title: i18n.t('toasts.common.success'), description: i18n.t('toasts.success.convertedToCsvAndCopied') });
    } catch (error) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.conversionFailed'), variant: 'destructive' });
    }
  };

  return {
    input,
    handleInputChange,
    isValid,
    validationError,
    extractedValue,
    handleToggleMinifyFormat,
    copyToClipboard,
    clearAll,
    isFormatMinifyDisabled: !input.trim() || !isValid,
    handleExtractValue,
    extractPath,
    onExtractPathChange: setExtractPath,
    handleConvertToYaml,
    handleConvertToXml,
    handleConvertToCsv,
  };
};
