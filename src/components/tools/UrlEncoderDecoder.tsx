
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useUrlEncoderDecoder } from '@/hooks/useUrlEncoderDecoder';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UrlEncoderDecoder: React.FC = () => {
  const { t } = useTranslation();
  const { input, setInput, output, error, handleEncode, handleDecode, clearAll } = useUrlEncoderDecoder();

  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <Button onClick={handleEncode}>{t('tools.urlEncoder.encode', 'Encode')}</Button>
        <Button onClick={handleDecode}>{t('tools.urlEncoder.decode', 'Decode')}</Button>
        <Button onClick={clearAll} variant="destructive">{t('common.clear', 'Clear')}</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.urlEncoder.input', 'Input')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('tools.urlEncoder.inputPlaceholder', 'Enter text to encode or decode')}
              className="h-64"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.urlEncoder.output', 'Output')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={output}
              readOnly
              placeholder={t('tools.urlEncoder.outputPlaceholder', 'Result will appear here')}
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

export default UrlEncoderDecoder;
