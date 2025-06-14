
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from '@/hooks/use-toast';
import JsonToolbar from './JsonToolbar';
import JsonInputArea from './JsonInputArea';

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

  const minifyAndCopy = () => {
    if (!isValid || !input.trim()) {
      toast({
        title: "错误",
        description: "请输入有效的JSON内容",
        variant: "destructive"
      });
      return;
    }

    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      navigator.clipboard.writeText(minified);
      toast({
        title: "成功",
        description: "已压缩并复制到剪贴板"
      });
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
  };

  return (
    <div className="h-screen flex flex-col px-4">
      <JsonToolbar
        onMinify={minifyAndCopy}
        onCopy={copyToClipboard}
        onClear={clearAll}
        isFormatMinifyDisabled={!input.trim() || !isValid}
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
