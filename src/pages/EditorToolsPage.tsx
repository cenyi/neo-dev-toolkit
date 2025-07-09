import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { findPageByPath } from '@/config/seo-pages';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FileCode, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const EditorToolsPage: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  // Get SEO configuration from seo-pages.ts
  const seoConfig = findPageByPath(`/:lang/editor`);
  const tdk = seoConfig?.tdk?.[lang as keyof typeof seoConfig.tdk] || seoConfig?.tdk?.en;

  const editorTools = [
    {
      path: `/${lang}/editor/markdown`,
      icon: FileCode,
      title: t('tools.editor.markdown.title'),
      description: t('tools.editor.markdown.description'),
      color: 'text-yellow-500'
    },
    {
      path: `/${lang}/editor/mermaid`,
      icon: Code,
      title: t('tools.editor.mermaid.title'),
      description: t('tools.editor.mermaid.description'),
      color: 'text-indigo-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
<Helmet>
  <title>{tdk?.title || t('tools.editor.meta.title')} - Neo Dev Toolkit</title>
  <meta name="description" content={tdk?.description || t('tools.editor.meta.description')} />
  <meta name="keywords" content={tdk?.keywords || "editor tools, markdown editor, mermaid editor, code editor, online editor"} />
</Helmet>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">{t('tools.editor.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('tools.editor.subtitle')}
        </p>
      </header>

        <h2 className="text-2xl font-semibold mb-6 text-center">{t('tools.editor.toolsTitle')}</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {editorTools.map(({ path, icon: Icon, title, description, color }) => (
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
          <h2 className="text-2xl font-semibold mb-4">{t('tools.editor.experience.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{t('tools.editor.experience.livePreview.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('tools.editor.experience.livePreview.description')}
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{t('tools.editor.experience.syntaxHighlighting.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('tools.editor.experience.syntaxHighlighting.description')}
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{t('tools.editor.experience.exportReady.title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('tools.editor.experience.exportReady.description')}
              </p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default EditorToolsPage;
