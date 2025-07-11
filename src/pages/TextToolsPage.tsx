import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { findPageByPath } from '@/config/seo-pages';
import { Link } from 'react-router-dom';
import { Type, Hash, RotateCcw, Eraser, FileText, GitCompare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TextToolsPage: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  // Get SEO configuration from seo-pages.ts
  const seoConfig = findPageByPath(`/:lang/text`);
  const tdk = seoConfig?.tdk?.[lang as keyof typeof seoConfig.tdk] || seoConfig?.tdk?.en;

  const textTools = [
    {
      path: `/${lang}/text/case-converter`,
      icon: Type,
      title: t('tools.text.caseConverter.title'),
      description: t('tools.text.caseConverter.description'),
      color: 'text-purple-500'
    },
    {
      path: `/${lang}/text/word-counter`,
      icon: Hash,
      title: t('tools.text.wordCounter.title'),
      description: t('tools.text.wordCounter.description'),
      color: 'text-blue-500'
    },
    {
      path: `/${lang}/text/text-reverser`,
      icon: RotateCcw,
      title: t('tools.text.textReverser.title'),
      description: t('tools.text.textReverser.description'),
      color: 'text-green-500'
    },
    {
      path: `/${lang}/text/whitespace-remover`,
      icon: Eraser,
      title: t('tools.text.whitespaceRemover.title'),
      description: t('tools.text.whitespaceRemover.description'),
      color: 'text-orange-500'
    },
    {
      path: `/${lang}/text/lorem-ipsum-generator`,
      icon: FileText,
      title: t('tools.text.loremIpsumGenerator.title'),
      description: t('tools.text.loremIpsumGenerator.description'),
      color: 'text-indigo-500'
    },
    {
      path: `/${lang}/text/text-diff`,
      icon: GitCompare,
      title: t('tools.text.textDiff.title'),
      description: t('tools.text.textDiff.description'),
      color: 'text-red-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
<Helmet>
  <title>{tdk?.title || t('tools.text.title')} - Neo Dev Toolkit</title>
  <meta name="description" content={tdk?.description || t('tools.text.description')} />
  <meta name="keywords" content={tdk?.keywords || "text tools, case converter, word counter, text reverser, lorem ipsum generator"} />
</Helmet>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">{t('tools.text.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('tools.text.subtitle')}
        </p>
      </header>

        <h2 className="text-2xl font-semibold mb-6 text-center">{t('tools.text.utilityTools')}</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {textTools.map(({ path, icon: Icon, title, description, color }) => (
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
          <h2 className="text-2xl font-semibold mb-4">{t('tools.text.whyUse.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{t('tools.text.whyUse.realTime.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('tools.text.whyUse.realTime.description')}
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{t('tools.text.whyUse.privacy.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('tools.text.whyUse.privacy.description')}
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{t('tools.text.whyUse.multiPurpose.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('tools.text.whyUse.multiPurpose.description')}
              </p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default TextToolsPage;
