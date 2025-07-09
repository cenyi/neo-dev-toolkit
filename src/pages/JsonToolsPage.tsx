import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { findPageByPath } from '@/config/seo-pages';
import { Link } from 'react-router-dom';
import { FileJson, FileCode, GitCompare, Shuffle, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const JsonToolsPage: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  // Get SEO configuration from seo-pages.ts
  const seoConfig = findPageByPath(`/:lang/json`);
  const tdk = seoConfig?.tdk?.[lang as keyof typeof seoConfig.tdk] || seoConfig?.tdk?.en;

  const jsonTools = [
    {
      path: `/${lang}/json/formatter`,
      icon: FileJson,
      title: t('tools.json.formatter.title'),
      description: t('tools.json.formatter.description'),
      color: 'text-blue-500'
    },
    {
      path: `/${lang}/json/schema-validator`,
      icon: FileCode,
      title: t('tools.json.schemaValidator.title'),
      description: t('tools.json.schemaValidator.description'),
      color: 'text-green-500'
    },
    {
      path: `/${lang}/json/codegen`,
      icon: Code,
      title: t('tools.json.codegen.title'),
      description: t('tools.json.codegen.description'),
      color: 'text-purple-500'
    },
    {
      path: `/${lang}/json/diff`,
      icon: GitCompare,
      title: t('tools.json.diff.title'),
      description: t('tools.json.diff.description'),
      color: 'text-orange-500'
    },
    {
      path: `/${lang}/json/mock`,
      icon: Shuffle,
      title: t('tools.json.mock.title'),
      description: t('tools.json.mock.description'),
      color: 'text-indigo-500'
    },
    {
      path: `/${lang}/json/to-dart`,
      icon: Code,
      title: t('tools.json.toDart.title'),
      description: t('tools.json.toDart.description'),
      color: 'text-cyan-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
<Helmet>
  <title>{tdk?.title || 'JSON Developer Tools'} - Neo Dev Toolkit</title>
  <meta name="description" content={tdk?.description || "Professional JSON tools: formatter, validator, schema checker, diff tool & mock generator. Free, privacy-focused, no signup required."} />
  <meta name="keywords" content={tdk?.keywords || "JSON tools, JSON formatter, JSON validator, JSON schema, JSON diff, JSON mock generator"} />
</Helmet>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">JSON Developer Tools</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive collection of JSON tools for developers. Format, validate, compare, and generate JSON data with our professional-grade utilities built with <Link to="https://lovable.dev" className="text-primary hover:underline">Lovable AI</Link>.
        </p>
      </header>

      <h2 className="text-2xl font-semibold mb-6 text-center">Available JSON Tools</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jsonTools.map(({ path, icon: Icon, title, description, color }) => (
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
        <h3 className="text-2xl font-semibold mb-4">Why Choose Our JSON Tools?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <h4 className="text-lg font-medium mb-2">Privacy Focused</h4>
            <p className="text-muted-foreground text-sm">
              All JSON processing happens locally in your browser. Your data never leaves your device.
            </p>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-medium mb-2">Professional Grade</h4>
            <p className="text-muted-foreground text-sm">
              Built with modern web technologies and designed for professional developers.
            </p>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-medium mb-2">Free & Open</h4>
            <p className="text-muted-foreground text-sm">
              No registration required. Use all features for free with no limitations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JsonToolsPage;