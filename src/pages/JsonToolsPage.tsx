import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FileJson, FileCode, GitCompare, Shuffle, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const JsonToolsPage: React.FC = () => {
  const { t } = useTranslation();

  const jsonTools = [
    {
      path: '/json/formatter',
      icon: FileJson,
      title: t('jsonToolsPage.tools.formatter.title'),
      description: t('jsonToolsPage.tools.formatter.description'),
      color: 'text-blue-500'
    },
    {
      path: '/json/schema-validator',
      icon: FileCode,
      title: t('jsonToolsPage.tools.schemaValidator.title'),
      description: t('jsonToolsPage.tools.schemaValidator.description'),
      color: 'text-green-500'
    },
    {
      path: '/json/codegen',
      icon: Code,
      title: t('jsonToolsPage.tools.codeGen.title'),
      description: t('jsonToolsPage.tools.codeGen.description'),
      color: 'text-purple-500'
    },
    {
      path: '/json/diff',
      icon: GitCompare,
      title: t('jsonToolsPage.tools.diffTool.title'),
      description: t('jsonToolsPage.tools.diffTool.description'),
      color: 'text-orange-500'
    },
    {
      path: '/json/mock',
      icon: Shuffle,
      title: t('jsonToolsPage.tools.mockDataGenerator.title'),
      description: t('jsonToolsPage.tools.mockDataGenerator.description'),
      color: 'text-indigo-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">{t('jsonToolsPage.mainTitle')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('jsonToolsPage.mainDescription')}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <h2 className="text-2xl font-semibold mb-4">{t('jsonToolsPage.whyChoose.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{t('jsonToolsPage.whyChoose.privacy.title')}</h3>
            <p className="text-muted-foreground text-sm">
              {t('jsonToolsPage.whyChoose.privacy.description')}
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{t('jsonToolsPage.whyChoose.professional.title')}</h3>
            <p className="text-muted-foreground text-sm">
              {t('jsonToolsPage.whyChoose.professional.description')}
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{t('jsonToolsPage.whyChoose.free.title')}</h3>
            <p className="text-muted-foreground text-sm">
              {t('jsonToolsPage.whyChoose.free.description')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JsonToolsPage;