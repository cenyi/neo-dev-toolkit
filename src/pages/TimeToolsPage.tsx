import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Clock, Globe, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TimeToolsPage: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const timeTools = [
    {
      path: `/${lang}/time/timestamp-converter`,
      icon: Clock,
      title: t('time.timestamp.title'),
      description: t('time.timestamp.description'),
      color: 'text-blue-500'
    },
    {
      path: `/${lang}/time/timezone-converter`,
      icon: Globe,
      title: t('time.timezone.title'),
      description: t('time.timezone.description'),
      color: 'text-green-500'
    },
    {
      path: `/${lang}/time/date-calculator`,
      icon: Calendar,
      title: t('time.dateCalculator.title'),
      description: t('time.dateCalculator.description'),
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
<Helmet>
  <title>{t('time.meta.title')}</title>
  <meta name="description" content={t('time.meta.description')} />
</Helmet>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">{t('time.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('time.subtitle')}
        </p>
      </header>

        <h2 className="text-2xl font-semibold mb-6 text-center">{t('time.toolsTitle')}</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {timeTools.map(({ path, icon: Icon, title, description, color }) => (
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
          <h2 className="text-2xl font-semibold mb-4">{t('time.calculations.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{t('time.calculations.precise.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('time.calculations.precise.description')}
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{t('time.calculations.global.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('time.calculations.global.description')}
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{t('time.calculations.developerFriendly.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('time.calculations.developerFriendly.description')}
              </p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default TimeToolsPage;