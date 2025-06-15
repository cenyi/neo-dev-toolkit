
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="col-span-2 md:col-span-1">
             <h3 className="text-lg font-semibold text-foreground">{t('home.title')}</h3>
             <p className="text-muted-foreground text-sm mt-2">{t('footer.description')}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t('footer.legal')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/privacy" className="text-base text-foreground hover:text-primary transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms" className="text-base text-foreground hover:text-primary transition-colors">{t('footer.terms')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t('footer.company')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-base text-foreground hover:text-primary transition-colors">{t('footer.about')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t('footer.friendlyLinks')}</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-base text-foreground hover:text-primary transition-colors">{t('footer.vercel')}</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-base text-foreground hover:text-primary transition-colors">{t('footer.github')}</a></li>
              <li><a href="https://www.deepseek.com" target="_blank" rel="noopener noreferrer" className="text-base text-foreground hover:text-primary transition-colors">{t('footer.deepseek')}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-base text-muted-foreground">{t('footer.copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
