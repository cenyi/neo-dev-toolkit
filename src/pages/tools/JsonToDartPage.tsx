import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import JsonToDartConverter from '../../components/tools/json/JsonToDartConverter';
import { findPageByPath } from '@/config/seo-pages';

const JsonToDartPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || i18n.language || 'en';
  
  // Get SEO configuration from seo-pages.ts
  const seoConfig = findPageByPath(`/:lang/json/to-dart`);
  const tdk = seoConfig?.tdk?.[currentLang as keyof typeof seoConfig.tdk] || seoConfig?.tdk?.en;
  
  // Debug: Log the values to console

  return (
    <div className="h-screen flex flex-col">
      <Helmet>
        <title>{tdk?.title || t('tools.json.toDart.title')} - Neo Dev Toolkit</title>
        <meta name="description" content={tdk?.description || t('tools.json.toDart.description')} />
        <meta name="keywords" content={tdk?.keywords || "JSON to Dart, Dart class generator, JSON converter, Flutter development"} />
      </Helmet>
      
      <div className="flex-1 overflow-hidden">
        <JsonToDartConverter />
      </div>
    </div>
  );
};

export default JsonToDartPage;