
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useEncryptionTool, Algorithm } from '@/hooks/useEncryptionTool';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Copy, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import CodeEditor from './CodeEditor';

const EncryptionTool: React.FC = () => {
  const { t } = useTranslation();
  const { input, setInput, output, algorithm, setAlgorithm, regenerate, algorithms } = useEncryptionTool();

  const currentAlgorithm = algorithms.find(a => a.value === algorithm);

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      toast.success(t('editor.copySuccess'));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{t('tools.crypto.title')}</CardTitle>
          <CardDescription>{t('tools.crypto.description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="algorithm">{t('encryption.algorithm')}</Label>
            <Select value={algorithm} onValueChange={(value: Algorithm) => setAlgorithm(value)}>
              <SelectTrigger>
                <SelectValue placeholder={t('encryption.selectAlgorithm')} />
              </SelectTrigger>
              <SelectContent>
                {algorithms.map((algo) => (
                  <SelectItem key={algo.value} value={algo.value}>
                    {algo.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="input">{t('encryption.inputText')}</Label>
            <CodeEditor
              value={input}
              onChange={setInput}
              placeholder={t('encryption.inputPlaceholder')}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="output">{t('encryption.output')}</Label>
              <div className="flex gap-2">
                {algorithm === 'uuid' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={regenerate}
                    className="text-xs"
                  >
                    <RefreshCw size={14} className="mr-1" />
                    {t('encryption.regenerate')}
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopy}
                  disabled={!output}
                  className="text-xs"
                >
                  <Copy size={14} className="mr-1" />
                  {t('common.copy')}
                </Button>
              </div>
            </div>
            <CodeEditor
              value={output}
              onChange={() => {}}
              readOnly
              placeholder={t('encryption.outputPlaceholder')}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EncryptionTool;
