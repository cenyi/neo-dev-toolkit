
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useUrlEncoderDecoder } from '@/hooks/network/useUrlEncoderDecoder';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Copy } from 'lucide-react';
import { toast } from 'sonner';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const UrlEncoderDecoder: React.FC = () => {
  const { t } = useTranslation();
  const { input, setInput, output, error, handleEncode, handleDecode, clearAll } = useUrlEncoderDecoder();

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      toast.success(t('editor.copySuccess', 'Copied to clipboard'));
    }
  };

  return (
    <ToolPageLayout
      title={t('tools.url.title', 'URL Encoder / Decoder')}
      description={t('tools.url.description', 'Encode or decode URLs for safe web transmission')}
    >
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="input">{t('url.input', 'Input Text')}</Label>
            <Textarea
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('url.inputPlaceholder', 'Enter text or URL to encode/decode')}
              className="min-h-[120px] font-mono"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button onClick={handleEncode} disabled={!input.trim()}>
              {t('url.encode', 'Encode')}
            </Button>
            <Button onClick={handleDecode} disabled={!input.trim()}>
              {t('url.decode', 'Decode')}
            </Button>
            <Button onClick={clearAll} variant="outline">
              {t('common.clear', 'Clear')}
            </Button>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>{t('common.error', 'Error')}</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="output">{t('url.output', 'Output')}</Label>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                disabled={!output}
                className="text-xs"
              >
                <Copy size={14} className="mr-1" />
                {t('common.copy', 'Copy')}
              </Button>
            </div>
            <Textarea
              id="output"
              value={output}
              readOnly
              placeholder={t('url.outputPlaceholder', 'Encoded/decoded result will appear here')}
              className="min-h-[120px] font-mono bg-muted"
            />
          </div>
        </CardContent>
      </Card>
    </ToolPageLayout>
  );
};

export default UrlEncoderDecoder;
