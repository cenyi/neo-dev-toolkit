
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useIpLookup } from '@/hooks/useIpLookup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const IpLookup: React.FC = () => {
  const { t } = useTranslation();
  const { ipAddress, setIpAddress, handleLookup, data, error, isLoading, clear, handleMyIpLookup } = useIpLookup();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLookup();
    }
  };

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{t('tools.ipLookup.title', 'IP Address Lookup')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Input
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('tools.ipLookup.placeholder', 'Enter IP address or domain')}
              className="flex-grow"
            />
            <Button onClick={handleLookup} disabled={isLoading || !ipAddress}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {t('tools.ipLookup.lookup', 'Lookup')}
            </Button>
            <Button onClick={handleMyIpLookup} disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {t('tools.ipLookup.myIp', 'Lookup My IP')}
            </Button>
            <Button onClick={clear} variant="destructive" disabled={isLoading}>{t('common.clear', 'Clear')}</Button>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>{t('common.error', 'Error')}</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}

      {data && (
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.ipLookup.results', 'Lookup Results')}</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="p-4 bg-muted rounded-md overflow-x-auto text-sm">
              {JSON.stringify(data, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default IpLookup;
