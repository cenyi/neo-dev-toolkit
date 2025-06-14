import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from '@/hooks/use-toast';
import JsonToolbar from './JsonToolbar';
import JsonInputArea from './JsonInputArea';
import JsonEditor from './JsonEditor';

const JsonTool: React.FC = () => {
  const { t } = useTranslation();
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
    if (!isValid || !input.trim()) {
      toast({
        title: "错误",
        description: "请输入有效的JSON内容",
        variant: "destructive"
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
          title: "成功",
          description: "已格式化并复制到剪贴板"
        });
        setIsMinified(false);
      } else {
        const parsed = JSON.parse(input);
        const minified = JSON.stringify(parsed);
        isMinifyingRef.current = true;
        setInput(minified);
        navigator.clipboard.writeText(minified);
        toast({
          title: "成功",
          description: "已压缩并复制到剪贴板"
        });
        setIsMinified(true);
      }
    } catch (error) {
      toast({
        title: "错误",
        description: "无效的JSON格式",
        variant: "destructive"
      });
    }
  };

  const copyToClipboard = () => {
    if (!input.trim()) {
      toast({
        title: "提示",
        description: "内容为空，无需复制"
      });
      return;
    }
    navigator.clipboard.writeText(input);
    toast({
      title: "已复制",
      description: "内容已复制到剪贴板"
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

  const handleExtractValue = () => {
    if (!isValid || !input.trim()) {
      toast({ title: "错误", description: "请输入有效的JSON内容", variant: "destructive" });
      return;
    }
    if (!extractPath.trim()) {
      toast({ title: "错误", description: "请输入要提取的字段路径", variant: "destructive" });
      return;
    }

    try {
      const parsedJson = JSON.parse(input);
      const value = getValueByPath(parsedJson, extractPath);

      if (value === undefined) {
        setExtractedValue(null);
        toast({ title: "未找到", description: "在指定路径未找到值", variant: "destructive" });
      } else {
        const resultString = JSON.stringify(value, null, 2);
        setExtractedValue(resultString);
        navigator.clipboard.writeText(resultString);
        toast({ title: "成功", description: "已提取字段值并复制到剪贴板" });
      }
    } catch (error) {
      setExtractedValue(null);
      toast({ title: "错误", description: "解析JSON或提取值时出错", variant: "destructive" });
    }
  };

  return (
    <div className="h-screen flex flex-col px-2">
      <JsonToolbar
        onMinify={handleToggleMinifyFormat}
        onCopy={copyToClipboard}
        onClear={clearAll}
        isFormatMinifyDisabled={!input.trim() || !isValid}
        onExtract={handleExtractValue}
        extractPath={extractPath}
        onExtractPathChange={setExtractPath}
      />
      
      <div className="flex-1 flex flex-col gap-4 min-h-0 pt-2">
        <div className="flex-1 flex min-h-0">
          <JsonInputArea
            value={input}
            onChange={handleInputChange}
            placeholder={t('tools.json.placeholder')}
            isValid={isValid}
            validationError={validationError}
          />
        </div>
        {extractedValue !== null && (
          <div className="flex-shrink-0">
            <h3 className="text-lg font-semibold mb-2">提取的值</h3>
            <div className="h-[250px]">
              <JsonEditor value={extractedValue} readOnly={true} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JsonTool;
