import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileJson, FileText, Network, Edit, Clock, Shield, Regex, Home, Info, FileCheck, Scale } from 'lucide-react';
import { FullToolsDirectory } from './AllPagesLinks';

interface ToolLink {
  path: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface ToolCategory {
  title: string;
  description: string;
  tools: ToolLink[];
}

const SiteMap: React.FC = () => {
  const { t } = useTranslation();
  const { lang = 'en' } = useParams<{ lang: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t('siteMap.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('siteMap.subtitle')}
        </p>
      </div>

      {/* 使用统一的全站工具目录组件 */}
      <FullToolsDirectory />

      {/* SEO 信息 */}
      <div className="mt-16 text-center">
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">{t('siteMap.about.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('siteMap.about.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;