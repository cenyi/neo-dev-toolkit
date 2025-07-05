
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBase64EncoderDecoder } from '@/hooks/network/useBase64EncoderDecoder';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SimpleCodeEditor from '../editor/SimpleCodeEditor';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const Base64EncoderDecoder: React.FC = () => {
  const { t } = useTranslation();
  const { input, setInput, output, error, handleEncode, handleDecode, clearAll } = useBase64EncoderDecoder();

  return (
    <ToolPageLayout
      title={t('tools.text.base64.title')}
      description={t('tools.text.base64.description')}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-4">
          <Button onClick={handleEncode}>{t('tools.text.base64.encode')}</Button>
          <Button onClick={handleDecode}>{t('tools.text.base64.decode')}</Button>
          <Button onClick={clearAll} variant="destructive">{t('common.clear')}</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-3">{t('tools.text.base64.input')}</h3>
              <div className="h-80 border rounded-md">
                <SimpleCodeEditor
                  value={input}
                  onChange={setInput}
                  placeholder={t('tools.text.base64.inputPlaceholder')}
                  minHeight="300px"
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-3">{t('tools.text.base64.output')}</h3>
              <div className="h-80 border rounded-md">
                <SimpleCodeEditor
                  value={output}
                  onChange={() => {}}
                  readOnly
                  placeholder={t('tools.text.base64.outputPlaceholder')}
                  minHeight="300px"
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
    </ToolPageLayout>
  );
};

export default Base64EncoderDecoder;
