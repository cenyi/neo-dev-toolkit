// i18n Main Module
import config from './config.js';

// 导入所有翻译
import enTranslations from './translations/en.json';
import zhTranslations from './translations/zh.json';
import jaTranslations from './translations/ja.json';
import koTranslations from './translations/ko.json';
import esTranslations from './translations/es.json';
import ptTranslations from './translations/pt.json';
import frTranslations from './translations/fr.json';
import deTranslations from './translations/de.json';
import ruTranslations from './translations/ru.json';
import arTranslations from './translations/ar.json';

const translations = {
  en: enTranslations,
  zh: zhTranslations,
  ja: jaTranslations,
  ko: koTranslations,
  es: esTranslations,
  pt: ptTranslations,
  fr: frTranslations,
  de: deTranslations,
  ru: ruTranslations,
  ar: arTranslations
};

let currentLocale = config.defaultLocale;

export function initI18n(locale) {
  // 从多个来源检测语言
  const detectedLocale = locale ||
                       localStorage.getItem('preferredLocale') ||
                       getBrowserLocale() ||
                       config.defaultLocale;

  if (translations[detectedLocale]) {
    currentLocale = detectedLocale;
  }

  // 设置文档语言和方向
  document.documentElement.lang = currentLocale;
  const direction = config.localeInfo[currentLocale]?.direction || 'ltr';
  document.documentElement.dir = direction;

  return currentLocale;
}

export function t(key, locale = currentLocale) {
  const keys = key.split('.');
  let value = translations[locale];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}

export function getLocale() {
  return currentLocale;
}

export function setLocale(locale) {
  if (translations[locale]) {
    currentLocale = locale;
    localStorage.setItem('preferredLocale', locale);

    // 更新文档语言和方向
    document.documentElement.lang = locale;
    const direction = config.localeInfo[locale]?.direction || 'ltr';
    document.documentElement.dir = direction;

    // 触发语言切换事件
    window.dispatchEvent(new CustomEvent('localeChange', { detail: { locale } }));
  }
}

export function getBrowserLocale() {
  const browserLang = navigator.language.split('-')[0];
  return translations[browserLang] ? browserLang : null;
}

export function getAvailableLocales() {
  return config.locales.map(locale => ({
    code: locale,
    ...config.localeInfo[locale]
  }));
}

export function getLocaleInfo(locale) {
  return config.localeInfo[locale];
}

export function isRTL(locale) {
  return config.rtlLocales.includes(locale);
}

export default {
  initI18n,
  t,
  getLocale,
  setLocale,
  getBrowserLocale,
  getAvailableLocales,
  getLocaleInfo,
  isRTL,
  config
};
