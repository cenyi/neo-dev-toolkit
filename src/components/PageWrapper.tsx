import React from 'react';
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
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children, description, keywords }) => {
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
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4 py-8">
          <div id="navigation">
            <Navigation />
          </div>
          <BreadcrumbNav />
          <main id="main-content" className="mt-8 focus:outline-none" tabIndex={-1}>
            {children}
            <InternalLinks />
          </main>
          <Footer />
        </div>
      </div>
    </AccessibilityEnhancements>
  );
};

export default PageWrapper;