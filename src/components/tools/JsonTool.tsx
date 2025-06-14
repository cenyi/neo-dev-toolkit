import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import * as beautify from 'js-beautify';

const JsonTool: React.FC = () => {
  const {
    t
  } = useTranslation();
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
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex gap-6 h-[calc(100vh-200px)]">
        {/* 左侧输入区域 */}
        <div className="flex-1 neu-card flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Input</h3>
          <Textarea 
            placeholder={t('tools.json.placeholder')} 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            className="neu-input flex-1 resize-none border-0 mb-4" 
          />
          <div className="flex flex-wrap gap-2">
            <Button onClick={formatJson} className="neu-button border-0">
              {t('common.format')}
            </Button>
            <Button onClick={minifyJson} className="neu-button border-0">
              {t('common.minify')}
            </Button>
            <Button onClick={validateJson} className="neu-button border-0">
              {t('common.validate')}
            </Button>
            <Button onClick={clearAll} variant="destructive" className="neu-button border-0">
              {t('common.clear')}
            </Button>
          </div>
        </div>

        {/* 右侧输出区域 */}
        <div className="flex-1 neu-card flex flex-col">
          <h3 className="text-xl font-semibold mb-4">Output</h3>
          <Textarea 
            value={output} 
            readOnly 
            className="neu-input flex-1 resize-none border-0 mb-4" 
          />
          <div className="flex gap-2">
            <Button onClick={copyToClipboard} className="neu-button border-0">
              {t('common.copy')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonTool;
