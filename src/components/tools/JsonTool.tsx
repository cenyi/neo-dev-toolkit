
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import JsonEditor from './JsonEditor';

const JsonTool: React.FC = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const formatJson = () => {
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

  const validateJson = () => {
    try {
      JSON.parse(input);
      toast({
        title: "Valid",
        description: "JSON is valid"
      });
    } catch (error) {
      toast({
        title: "Invalid",
        description: `JSON is invalid: ${error.message}`,
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
  };

  return (
    <div className="h-screen flex flex-col p-4">
      {/* 工具栏 */}
      <div className="flex flex-wrap gap-2 mb-4 p-4 neu-card">
        <Button onClick={formatJson} className="neu-button border-0">
          {t('common.format')}
        </Button>
        <Button onClick={minifyJson} className="neu-button border-0">
          {t('common.minify')}
        </Button>
        <Button onClick={validateJson} className="neu-button border-0">
          {t('common.validate')}
        </Button>
        <Button onClick={copyToClipboard} className="neu-button border-0">
          {t('common.copy')}
        </Button>
        <Button onClick={clearAll} variant="destructive" className="neu-button border-0">
          {t('common.clear')}
        </Button>
      </div>

      {/* 编辑器区域 */}
      <div className="flex-1 flex gap-4">
        {/* 左侧输入区域 */}
        <div className="flex-1 flex flex-col neu-card">
          <h3 className="text-lg font-semibold mb-3 px-4 pt-4">Input</h3>
          <div className="flex-1 px-4 pb-4">
            <JsonEditor
              value={input}
              onChange={setInput}
              placeholder={t('tools.json.placeholder')}
            />
          </div>
        </div>

        {/* 右侧输出区域 */}
        <div className="flex-1 flex flex-col neu-card">
          <h3 className="text-lg font-semibold mb-3 px-4 pt-4">Output</h3>
          <div className="flex-1 px-4 pb-4">
            <JsonEditor
              value={output}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonTool;
