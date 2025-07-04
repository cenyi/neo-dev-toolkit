
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

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground mb-4">
            We value your feedback and suggestions! If you have any questions, feature requests, or encounter any issues with our tools, please don't hesitate to reach out to us.
          </p>
          <div className="bg-accent/50 p-4 rounded-lg border border-border">
            <h3 className="text-lg font-medium mb-2">Get in Touch</h3>
            <p className="text-muted-foreground">
              Email us at: <span className="font-mono text-sm bg-background px-2 py-1 rounded border">cenyi2024[at]gmail[dot]com</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <em>Please replace [at] with @ and [dot] with . when sending your email.</em>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Built with Lovable AI</h2>
          <p className="text-lg text-muted-foreground">
            This platform was built using <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Lovable AI</a>, demonstrating the power of AI-assisted web development. 
            All tools are designed with privacy and security in mind, processing data locally in your browser whenever possible.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
