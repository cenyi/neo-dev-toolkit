
import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-foreground">
      <h1 className="text-4xl font-bold mb-6 text-center">{t('about.title')}</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">{t('about.missionTitle')}</h2>
          <p className="text-lg text-muted-foreground">
            {t('about.missionText')}
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('about.featuresTitle')}</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li className="text-lg">{t('about.feature1')}</li>
            <li className="text-lg">{t('about.feature2')}</li>
            <li className="text-lg">{t('about.feature3')}</li>
            <li className="text-lg">{t('about.feature4')}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
