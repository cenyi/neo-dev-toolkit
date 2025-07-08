import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Key, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CryptoToolsPage: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const cryptoTools = [
    {
      path: `/${lang}/crypto/jwt-decoder`,
      icon: Key,
      title: t('tools.crypto.jwtDecoder.title'),
      description: t('tools.crypto.jwtDecoder.description'),
      color: 'text-yellow-500'
    },
    {
      path: `/${lang}/crypto/encryption`,
      icon: Lock,
      title: t('tools.crypto.encryption.title'),
      description: t('tools.crypto.encryption.description'),
      color: 'text-cyan-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Helmet>
        <title>{t('tools.crypto.title')}</title>
        <meta name="description" content={t('tools.crypto.description')} />
      </Helmet>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">{t('tools.crypto.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('tools.crypto.description')}
        </p>
      </header>

      <h2 className="text-2xl font-semibold mb-6 text-center">{t('tools.availableTools')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cryptoTools.map(({ path, icon: Icon, title, description, color }) => (
          <Link key={path} to={path} className="group">
            <Card className="h-full hover:shadow-lg transition-shadow duration-200 border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent">
                    <Icon size={24} className={color} />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <section className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">{t('whyChooseUs.title')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <h4 className="text-lg font-medium mb-2">{t('whyChooseUs.privacyFocused.title')}</h4>
            <p className="text-muted-foreground text-sm">
              {t('whyChooseUs.privacyFocused.description')}
            </p>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-medium mb-2">{t('whyChooseUs.professionalGrade.title')}</h4>
            <p className="text-muted-foreground text-sm">
              {t('whyChooseUs.professionalGrade.description')}
            </p>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-medium mb-2">{t('whyChooseUs.freeAndOpen.title')}</h4>
            <p className="text-muted-foreground text-sm">
              {t('whyChooseUs.freeAndOpen.description')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoToolsPage;