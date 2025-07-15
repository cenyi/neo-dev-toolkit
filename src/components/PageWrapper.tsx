import React, { useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Navigation from './Navigation';
import Footer from './Footer';
import BreadcrumbNav from './BreadcrumbNav';
import AccessibilityEnhancements from './AccessibilityEnhancements';
import InternalLinks from './InternalLinks';

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
  description?: string;
  keywords?: string;
  fullWidth?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children, description, keywords, fullWidth = false }) => {
  const location = useLocation();
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  // 初始化时从本地存储恢复语言设置
  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang) {
      // 更新i18n语言
      if (i18n.language !== savedLang) {
        i18n.changeLanguage(savedLang);
      }
      // 更新URL以匹配保存的语言
      if (!location.pathname.startsWith(`/${savedLang}`)) {
        const newPath = location.pathname.replace(/^\/[^\/]+/, `/${savedLang}`);
        navigate(newPath, { replace: true });
      }
    }
  }, [i18n, navigate, location.pathname]);

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
  const isHomePage = location.pathname === `/${lang}` || location.pathname === '/';
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Русский' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
  ];

  useEffect(() => {
    if (fullWidth) {
      document.body.classList.add('full-width');
    } else {
      document.body.classList.remove('full-width');
    }
    return () => {
      document.body.classList.remove('full-width');
    };
  }, [fullWidth]);

  return (
    <AccessibilityEnhancements>
      <Helmet>
        <title>{title === 'Developer Tools Hub' ? `${title} - Free Developer Tools` : `${title} | DevTools Hub`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://tojsons.com${window.location.pathname}`} />
        <meta property="og:site_name" content="Developer Tools Hub" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={`https://tojsons.com${window.location.pathname}`} />
      {languages.map(lang => (
        <link
          key={lang.code}
          rel="alternate"
          hrefLang={lang.code}
          href={`https://tojsons.com/${lang.code}${window.location.pathname.replace(/^\/[^\/]+/, '')}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`https://tojsons.com/en${window.location.pathname.replace(/^\/[^\/]+/, '')}`} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": title,
          "url": `https://tojsons.com${window.location.pathname}`,
          "description": description,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `https://tojsons.com/${lang}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
</Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        {fullWidth ? (
          <>
            <Navigation fullWidth={fullWidth} />
            {!isHomePage && <BreadcrumbNav />}
            <main id="main-content" className="focus:outline-none" tabIndex={-1}>
              {children}
              <InternalLinks />
            </main>
            <Footer fullWidth={fullWidth} />
          </>
        ) : (
          <div className="container mx-auto px-4 py-8">
            <div id="navigation">
              <Navigation fullWidth={fullWidth} />
            </div>
            {!isHomePage && <BreadcrumbNav />}
            <main id="main-content" className="mt-8 focus:outline-none" tabIndex={-1}>
              {children}
              <InternalLinks />
            </main>
            <Footer />
          </div>
        )}
      </div>
    </AccessibilityEnhancements>
  );
};

export default PageWrapper;