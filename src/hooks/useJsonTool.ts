
import { useState, useEffect, useRef } from 'react';
import { toast } from '@/hooks/use-toast';
import i18n from '@/i18n';
import { useTranslation } from 'react-i18next';
import { useJsonConversion } from './useJsonConversion';
import { useJsonExtraction } from './useJsonExtraction';
import { useJsonHistory } from './useJsonHistory';
import { useJsonGraph } from './useJsonGraph';

export const useJsonTool = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isMinified, setIsMinified] = useState(false);
  const lastValidJsonRef = useRef<string | null>(null);
  const isMinifyingRef = useRef(false);
  const [extractPath, setExtractPath] = useState('');
  const [outputContent, setOutputContent] = useState<string | null>(null);
  const [outputTitle, setOutputTitle] = useState<string | null>(null);

  // 集成历史记录功能
  const { history, addToHistory, removeFromHistory, clearHistory } = useJsonHistory();

  // 集成图形功能
  const { graphData, generateJsonGraph, clearGraph } = useJsonGraph();

  // 实时校验并自动格式化 JSON
  const validateAndFormatJson = (jsonString: string) => {
    if (!jsonString.trim()) {
      setValidationError(null);
      setIsValid(true);
      lastValidJsonRef.current = null;
      setOutputContent(null);
      setOutputTitle(null);
      return jsonString;
    }
    try {
      const parsed = JSON.parse(jsonString);
      setValidationError(null);
      setIsValid(true);
      lastValidJsonRef.current = JSON.stringify(parsed, null, 2); // 美化格式
      
      // 添加到历史记录（只在有效JSON时）
      addToHistory(jsonString);
      
      return lastValidJsonRef.current;
    } catch (error) {
      setIsValid(false);
      setOutputContent(null);
      setOutputTitle(null);
      if (error instanceof SyntaxError) {
        const errorMessage = error.message;
        const match = errorMessage.match(/at position (\d+)/);
        if (match) {
          const position = parseInt(match[1]);
          const lines = jsonString.substring(0, position).split('\n');
          const line = lines.length;
          const column = lines[lines.length - 1].length + 1;
          setValidationError(t('tools.json.syntaxErrorAtPosition', { 
            message: errorMessage, 
            line, 
            column 
          }));
        } else {
          setValidationError(t('tools.json.syntaxErrorGeneric', { message: errorMessage }));
        }
      } else {
        setValidationError(t('tools.json.unknownParseError'));
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
  }, [input, t]);

  const handleInputChange = (value: string) => {
    setInput(value);
    setIsMinified(false);
    setOutputContent(null);
    setOutputTitle(null);
    clearGraph();
  };

  const handleToggleMinifyFormat = () => {
    setOutputContent(null);
    setOutputTitle(null);
    clearGraph();
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
    setOutputContent(null);
    setOutputTitle(null);
    clearGraph();
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
    setOutputContent(null);
    setOutputTitle(null);
    clearGraph();
  };

  // 从历史记录中选择项目
  const handleSelectFromHistory = (content: string) => {
    setInput(content);
    setIsMinified(false);
    setOutputContent(null);
    setOutputTitle(null);
    clearGraph();
  };

  // 生成JSON结构图
  const handleGenerateGraph = () => {
    if (!isValid || !input.trim()) {
      toast({
        title: i18n.t('toasts.common.error'),
        description: i18n.t('toasts.error.invalidJson'),
        variant: 'destructive',
      });
      return;
    }

    generateJsonGraph(input);
    setOutputContent(graphData);
    setOutputTitle(t('tools.json.graphTitle'));
  };

  const { handleExtractValue } = useJsonExtraction({
    input,
    isValid,
    extractPath,
    setOutputContent,
    setOutputTitle,
  });

  const { handleConvertToYaml, handleConvertToXml, handleConvertToCsv } = useJsonConversion({
    input,
    isValid,
    setOutputContent,
    setOutputTitle,
  });

  // 当图形数据更新时，更新输出内容
  useEffect(() => {
    if (graphData && outputTitle === t('tools.json.graphTitle')) {
      setOutputContent(graphData);
    }
  }, [graphData, outputTitle, t]);

  return {
    input,
    handleInputChange,
    isValid,
    validationError,
    outputContent,
    outputTitle,
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
    handleGenerateGraph,
    // 历史记录相关
    history,
    handleSelectFromHistory,
    removeFromHistory,
    clearHistory,
  };
};
