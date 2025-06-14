
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from '@/hooks/use-toast';
import JsonToolbar from './JsonToolbar';
import JsonInputArea from './JsonInputArea';
import JsonOutputArea from './JsonOutputArea';

const JsonTool: React.FC = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(true);

  // 实时校验JSON格式
  const validateJson = (jsonString: string) => {
    if (!jsonString.trim()) {
      setValidationError(null);
      setIsValid(true);
      return;
    }
    try {
      JSON.parse(jsonString);
      setValidationError(null);
      setIsValid(true);
    } catch (error) {
      setIsValid(false);
      if (error instanceof SyntaxError) {
        // 提取更详细的错误信息
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
    }
  };

  // 当输入内容变化时自动校验
  useEffect(() => {
    validateJson(input);
  }, [input]);

  const handleInputChange = (value: string) => {
    setInput(value);
  };
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
      setOutput(formatted);
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
      setOutput(minified);
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
    navigator.clipboard.writeText(output);
    toast({
      title: "Copied",
      description: "Output copied to clipboard"
    });
  };
  const clearAll = () => {
    setInput('');
    setOutput('');
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

      {/* 编辑器区域 */}
      <div className="flex-1 flex gap-4 min-h-0">
        <JsonInputArea
          value={input}
          onChange={handleInputChange}
          placeholder={t('tools.json.placeholder')}
          isValid={isValid}
          validationError={validationError}
        />
        <JsonOutputArea value={output} />
      </div>
    </div>
  );
};

export default JsonTool;
