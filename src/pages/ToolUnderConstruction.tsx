
import React from 'react';
import { useTranslation } from 'react-i18next';

const ToolUnderConstruction: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{t('common.comingSoon')}!</h1>
      <p className="text-lg text-muted-foreground">{t('underConstruction.description')}</p>
    </div>
  );
};

export default ToolUnderConstruction;
