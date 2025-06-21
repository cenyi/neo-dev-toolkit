
import React, { useEffect } from 'react';

const APP_NAME = "DevTools Hub";
const SEPARATOR = "|";
const HOME_TAGLINE = "Free Developer Tools";

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
  description?: string;
  keywords?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children, description, keywords }) => {
  useEffect(() => {
    // Update page title with optimized length (40-60 characters)
    if (title === APP_NAME) {
      document.title = `${APP_NAME} - ${HOME_TAGLINE}`;
    } else {
      document.title = `${title} ${SEPARATOR} ${APP_NAME}`;
    }

    // Update meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    // Update meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title !== APP_NAME) {
      ogTitle.setAttribute('content', `${title} - Free Developer Tool`);
    }

    // Update canonical URL for specific pages
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && title !== APP_NAME) {
      const currentPath = window.location.pathname;
      canonical.setAttribute('href', `https://afunning.com${currentPath}`);
    }
  }, [title, description, keywords]);

  return <>{children}</>;
};

export default PageWrapper;
