
import React, { useEffect } from 'react';

const APP_NAME = "DevTools Hub";
const SEPARATOR = "|";
const HOME_TAGLINE = "Online Developer Tools";

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children }) => {
  useEffect(() => {
    if (title === APP_NAME) {
      document.title = `${APP_NAME} - ${HOME_TAGLINE}`;
    } else {
      document.title = `${title} ${SEPARATOR} ${APP_NAME}`;
    }
  }, [title]);

  return <>{children}</>;
};

export default PageWrapper;
