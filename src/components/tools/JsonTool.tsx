
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import * as beautify from 'js-beautify';

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
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">{t('tools.json.title')}</h1>
        <p className="text-lg opacity-70">{t('tools.json.description')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="neu-card">
          <h3 className="text-xl font-semibold mb-4">Input</h3>
          <Textarea
            placeholder={t('tools.json.placeholder')}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="neu-input min-h-[400px] resize-none border-0"
          />
          <div className="flex flex-wrap gap-2 mt-4">
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

        <div className="neu-card">
          <h3 className="text-xl font-semibold mb-4">Output</h3>
          <Textarea
            value={output}
            readOnly
            className="neu-input min-h-[400px] resize-none border-0"
          />
          <div className="flex gap-2 mt-4">
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
