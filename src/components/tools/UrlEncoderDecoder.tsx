
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useUrlEncoderDecoder } from '@/hooks/useUrlEncoderDecoder';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CodeEditor from './CodeEditor';

const UrlEncoderDecoder: React.FC = () => {
  const { t } = useTranslation();
  const { input, setInput, output, error, handleEncode, handleDecode, clearAll } = useUrlEncoderDecoder();

  return (
    <div className="p-4 space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <Button onClick={handleEncode}>{t('tools.text.urlEncoder.encode')}</Button>
        <Button onClick={handleDecode}>{t('tools.text.urlEncoder.decode')}</Button>
        <Button onClick={clearAll} variant="destructive">{t('common.clear')}</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.text.urlEncoder.input')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 border rounded-md">
              <CodeEditor
                value={input}
                onChange={setInput}
                placeholder={t('tools.text.urlEncoder.inputPlaceholder')}
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.text.urlEncoder.output')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 border rounded-md">
              <CodeEditor
                value={output}
                onChange={() => {}}
                readOnly
                placeholder={t('tools.text.urlEncoder.outputPlaceholder')}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>{t('common.error')}</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default UrlEncoderDecoder;
