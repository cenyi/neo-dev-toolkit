
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from '@/hooks/use-toast';
import JsonToolbar from './JsonToolbar';
import JsonInputArea from './JsonInputArea';
// 移除 import JsonOutputArea from './JsonOutputArea';

const JsonTool: React.FC = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(true);
  const lastValidJsonRef = useRef<string | null>(null);

  // 实时校验并自动格式化 JSON
  const validateAndFormatJson = (jsonString: string) => {
    if (!jsonString.trim()) {
      setValidationError(null);
      setIsValid(true);
      lastValidJsonRef.current = null;
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
    const formatted = validateAndFormatJson(input);
    // 自动格式化，仅在有效且未是格式化后的内容时触发
    // 防止死循环：只有当输入内容不同于格式化结果时才 setInput
    if (isValid && input.trim() && formatted !== input) {
      setInput(formatted ?? '');
    }
    // eslint-disable-next-line
  }, [input]);

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  // 工具栏按钮功能（部分已失效，但为兼容保留，便于扩展）
  const formatJson = () => {
    if (!isValid) {
      toast({
        title: "Error",
        description: "请先修复JSON格式错误",
        variant: "destructive"
      });
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setInput(formatted);
      toast({
        title: "Success",
        description: "JSON formatted successfully"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid JSON format",
        variant: "destructive"
      });
    }
  };
  const minifyJson = () => {
    if (!isValid) {
      toast({
        title: "Error",
        description: "请先修复JSON格式错误",
        variant: "destructive"
      });
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setInput(minified);
      toast({
        title: "Success",
        description: "JSON minified successfully"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid JSON format",
        variant: "destructive"
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(input);
    toast({
      title: "Copied",
      description: "内容已复制到剪贴板"
    });
  };
  const clearAll = () => {
    setInput('');
    setValidationError(null);
    setIsValid(true);
  };

  return (
    <div className="h-screen flex flex-col px-4">
      <JsonToolbar
        onFormat={formatJson}
        onMinify={minifyJson}
        onCopy={copyToClipboard}
        onClear={clearAll}
        isFormatMinifyDisabled={!isValid && input.trim() !== ''}
      />

      {/* 仅保留输入区域 */}
      <div className="flex-1 flex gap-4 min-h-0">
        <JsonInputArea
          value={input}
          onChange={handleInputChange}
          placeholder={t('tools.json.placeholder')}
          isValid={isValid}
          validationError={validationError}
        />
      </div>
    </div>
  );
};

export default JsonTool;
