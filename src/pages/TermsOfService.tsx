
import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfService: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-foreground">
      <h1 className="text-4xl font-bold mb-2 text-center">{t('terms.title')}</h1>
      <p className="text-center text-muted-foreground mb-8">{t('terms.lastUpdated')}</p>
      
      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">{t('terms.acceptanceTitle')}</h2>
          <p>{t('terms.acceptanceText')}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">{t('terms.useOfServiceTitle')}</h2>
          <p>{t('terms.useOfServiceText')}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">{t('terms.disclaimerTitle')}</h2>
          <p>{t('terms.disclaimerText')}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">{t('terms.limitationTitle')}</h2>
          <p>{t('terms.limitationText')}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">{t('terms.changesToTermsTitle')}</h2>
          <p>{t('terms.changesToTermsText')}</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
