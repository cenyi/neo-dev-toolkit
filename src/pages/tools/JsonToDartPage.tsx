import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import JsonToDartConverter from '@/components/tools/json/JsonToDartConverter';

const JsonToDartPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen flex flex-col">
      <Helmet>
        <title>{t('tools.json.toDart.title')} - Neo Dev Toolkit</title>
        <meta name="description" content={t('tools.json.toDart.description')} />
        <meta name="keywords" content="JSON to Dart, Dart class generator, JSON converter, Flutter development" />
      </Helmet>
      
      <div className="flex-1 overflow-hidden">
        <JsonToDartConverter />
      </div>
    </div>
  );
};

export default JsonToDartPage;