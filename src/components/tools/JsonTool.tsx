import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from '@/hooks/use-toast';
import { AlertCircle, CheckCircle } from 'lucide-react';
import JsonEditor from './JsonEditor';

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
  const validateJsonManually = () => {
    if (isValid && input.trim()) {
      toast({
        title: "Valid",
        description: "JSON is valid"
      });
    } else if (!input.trim()) {
      toast({
        title: "Empty",
        description: "请输入JSON内容",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Invalid",
        description: validationError || "JSON格式无效",
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
      {/* 工具栏 */}
      <div className="flex flex-wrap gap-2 mb-1 p-2 bg-background border py-px rounded-sm">
        <Button onClick={formatJson} disabled={!isValid && input.trim() !== ''} className="text-sm font-extrabold">
          {t('common.format')}
        </Button>
        <Button onClick={minifyJson} disabled={!isValid && input.trim() !== ''} className="text-sm font-extrabold">
          {t('common.minify')}
        </Button>
        <Button onClick={copyToClipboard} className="text-sm font-extrabold">
          {t('common.copy')}
        </Button>
        <Button onClick={clearAll} variant="destructive" className="text-sm font-extrabold">
          {t('common.clear')}
        </Button>
      </div>

      {/* 编辑器区域 */}
      <div className="flex-1 flex gap-4 min-h-0">
        {/* 左侧输入 */}
        <div className="flex-1 flex flex-col bg-background border rounded-lg min-w-0 min-h-0 overflow-hidden">
          <div className="flex items-center justify-between px-4 pt-4 mb-3">
            <h3 className="text-lg font-semibold">Input</h3>
            {input.trim() && <div className="flex items-center gap-2">
              {isValid ? (
                <div className="flex items-center gap-1 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Valid JSON</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">Invalid JSON</span>
                </div>
              )}
            </div>}
          </div>

          {validationError && (
            <div className="mx-4 mb-3">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  {validationError}
                </AlertDescription>
              </Alert>
            </div>
          )}

          <div className="flex-1 min-h-[150px] px-4 pb-4 overflow-hidden">
            <JsonEditor
              value={input}
              onChange={handleInputChange}
              placeholder={t('tools.json.placeholder')}
            />
          </div>
        </div>

        {/* 右侧输出 */}
        <div className="flex-1 flex flex-col bg-background border rounded-lg min-w-0 min-h-0 overflow-hidden">
          <h3 className="text-lg font-semibold mb-3 px-4 pt-4">Output</h3>
          <div className="flex-1 min-h-[150px] px-4 pb-4 overflow-hidden">
            <JsonEditor value={output} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonTool;
