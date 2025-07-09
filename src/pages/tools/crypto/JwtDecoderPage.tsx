import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { findPageByPath } from '@/config/seo-pages';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface DecodedJwt {
  header: object;
  payload: JwtPayload;
}

const JwtDecoderPage: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { lang: currentLang } = useParams<{ lang: string }>();
  const [token, setToken] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Get SEO configuration from seo-pages.ts
  const seoConfig = findPageByPath(`/:lang/jwt`);
  const tdk = seoConfig?.tdk?.[currentLang as keyof typeof seoConfig.tdk] || seoConfig?.tdk?.en;

  const decoded = useMemo<DecodedJwt | null>(() => {
    if (!token) {
      setError(null);
      return null;
    }
    try {
      const header = jwtDecode(token, { header: true });
      const payload = jwtDecode<JwtPayload>(token);
      setError(null);
      return { header, payload };
    } catch (e) {
      setError(t('tools.crypto.jwtDecoder.invalidToken'));
      return null;
    }
  }, [token, t]);

  const handleCopy = (content: object) => {
    navigator.clipboard.writeText(JSON.stringify(content, null, 2));
    toast({ description: t('common.copySuccess') });
  };

  return (
    <>
      <Helmet>
        <title>{tdk?.title || t('tools.crypto.jwtDecoder.title')} - Neo Dev Toolkit</title>
        <meta name="description" content={tdk?.description || t('tools.crypto.jwtDecoder.description')} />
        <meta name="keywords" content={tdk?.keywords || "JWT decoder, JSON Web Token, JWT validator, token decoder, authentication"} />
      </Helmet>
      <div className="p-4 space-y-4">
        <div className="relative">
          <Textarea
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder={t('tools.crypto.jwtDecoder.placeholder')}
            className="h-48 pr-10"
          />
          {token && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => setToken('')}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {error && <p className="text-destructive">{error}</p>}

        {decoded && (
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Header</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => handleCopy(decoded.header)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="text-sm bg-muted p-2 rounded-md overflow-x-auto">
                  {JSON.stringify(decoded.header, null, 2)}
                </pre>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Payload</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => handleCopy(decoded.payload)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <pre className="text-sm bg-muted p-2 rounded-md overflow-x-auto">
                  {JSON.stringify(decoded.payload, null, 2)}
                </pre>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default JwtDecoderPage;