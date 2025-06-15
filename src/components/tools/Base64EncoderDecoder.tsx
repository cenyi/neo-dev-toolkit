
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBase64EncoderDecoder } from '@/hooks/useBase64EncoderDecoder';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Base64EncoderDecoder: React.FC = () => {
  const { t } = useTranslation();
  const { input, setInput, output, error, handleEncode, handleDecode, clearAll } = useBase64EncoderDecoder();

  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <Button onClick={handleEncode}>{t('tools.base64.encode', 'Encode')}</Button>
        <Button onClick={handleDecode}>{t('tools.base64.decode', 'Decode')}</Button>
        <Button onClick={clearAll} variant="destructive">{t('common.clear', 'Clear')}</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.base64.input', 'Input')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('tools.base64.inputPlaceholder', 'Enter text to encode or decode')}
              className="h-64"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.base64.output', 'Output')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={output}
              readOnly
              placeholder={t('tools.base64.outputPlaceholder', 'Result will appear here')}
              className="h-64 bg-muted"
            />
          </CardContent>
        </Card>
      </div>

      {error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>{t('common.error', 'Error')}</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Base64EncoderDecoder;
