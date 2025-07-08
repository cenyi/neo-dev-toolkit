import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Network, Link as LinkIcon, Eye, Key } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const NetworkToolsPage: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const networkTools = [
    {
      path: `/${lang}/network/url-encoder`,
      icon: LinkIcon,
      title: t('tools.network.urlEncoder.title'),
      description: t('tools.network.urlEncoder.description'),
      color: 'text-green-500'
    },
    {
      path: `/${lang}/network/base64-encoder`,
      icon: Network,
      title: t('tools.network.base64Encoder.title'),
      description: t('tools.network.base64Encoder.description'),
      color: 'text-blue-500'
    },
    {
      path: '/network/ip-lookup',
      icon: Eye,
      title: t('tools.network.ipLookup.title'),
      description: t('tools.network.ipLookup.description'),
      color: 'text-purple-500'
    },
    {
      path: '/network/jwt-decoder',
      icon: Key,
      title: t('tools.network.jwtDecoder.title'),
      description: t('tools.network.jwtDecoder.description'),
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
<Helmet>
  <meta name="description" content={t('tools.network.description')} />
</Helmet>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">{t('tools.network.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('tools.network.subtitle')}
        </p>
      </header>

        <h2 className="text-2xl font-semibold mb-6 text-center">{t('tools.network.utilityTools')}</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {networkTools.map(({ path, icon: Icon, title, description, color }) => (
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
          <h2 className="text-2xl font-semibold mb-4">{t('tools.network.secureTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{t('tools.network.clientSideProcessing.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('tools.network.clientSideProcessing.description')}
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{t('tools.network.noDataStorage.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('tools.network.noDataStorage.description')}
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{t('tools.network.instantResults.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('tools.network.instantResults.description')}
              </p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default NetworkToolsPage;