
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useJwtDecoder } from '@/hooks/useJwtDecoder';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import JsonEditor from './JsonEditor';
import CodeEditor from './CodeEditor';

const JwtDecoder: React.FC = () => {
  const { t } = useTranslation();
  const { token, setToken, decoded, clearAll } = useJwtDecoder();

  return (
    <div className="p-4 space-y-4 max-w-7xl mx-auto">
      <div className="flex flex-wrap items-center gap-4">
        <Button onClick={clearAll} variant="destructive">
          {t('common.clear', 'Clear')}
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.jwtDecoder.encodedToken', 'Encoded Token')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <CodeEditor
                value={token}
                onChange={setToken}
                placeholder={t('tools.jwtDecoder.placeholder', 'Paste your JWT here')}
                language="plaintext"
              />
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          {decoded.error && (
            <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>{t('common.error', 'Error')}</AlertTitle>
              <AlertDescription>{decoded.error}</AlertDescription>
            </Alert>
          )}

          <Card>
            <CardHeader>
              <CardTitle>{t('tools.jwtDecoder.header', 'Header')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[150px]">
                <JsonEditor
                  value={decoded.header ? JSON.stringify(decoded.header, null, 2) : ''}
                  readOnly
                  placeholder={t('tools.jwtDecoder.headerPlaceholder', 'Decoded header will appear here')}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('tools.jwtDecoder.payload', 'Payload')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <JsonEditor
                  value={decoded.payload ? JSON.stringify(decoded.payload, null, 2) : ''}
                  readOnly
                  placeholder={t('tools.jwtDecoder.payloadPlaceholder', 'Decoded payload will appear here')}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JwtDecoder;
