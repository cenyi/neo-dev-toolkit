
import 'react-i18next';
import { ReactNode } from 'react';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof import('../i18n/index').default;
    };
  }
}

// Fix the type conflict between ReactI18NextChildren and ReactNode
declare global {
  namespace React {
    type ReactI18NextChildren = ReactNode;
  }
}
