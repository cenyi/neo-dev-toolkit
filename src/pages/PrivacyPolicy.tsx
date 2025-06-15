
import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">{t('footer.privacy')}</h1>
      <p>{t('common.comingSoon')}</p>
    </div>
  );
};

export default PrivacyPolicy;
