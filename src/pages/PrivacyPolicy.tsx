
import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-foreground">
      <h1 className="text-4xl font-bold mb-2 text-center">{t('privacy.title')}</h1>
      <p className="text-center text-muted-foreground mb-8">{t('privacy.lastUpdated')}</p>
      
      <div className="space-y-6 text-muted-foreground">
        <p>{t('privacy.introduction')}</p>
        
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">{t('privacy.informationWeCollectTitle')}</h2>
          <p>{t('privacy.informationWeCollectText')}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">{t('privacy.cookiesTitle')}</h2>
          <p>{t('privacy.cookiesText')}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">{t('privacy.thirdPartyServicesTitle')}</h2>
          <p>{t('privacy.thirdPartyServicesText')}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">{t('privacy.changesToPolicyTitle')}</h2>
          <p>{t('privacy.changesToPolicyText')}</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-foreground">{t('privacy.contactUsTitle')}</h2>
          <p>{t('privacy.contactUsText')}</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
