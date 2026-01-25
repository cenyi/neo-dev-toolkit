// i18n Main Module
import config from './config.js';

// 导入所有翻译（从拆分的locale文件）
import enTranslations from './locales/en.js';
import zhTranslations from './locales/zh.js';
import jaTranslations from './locales/ja.js';
import koTranslations from './locales/ko.js';
import esTranslations from './locales/es.js';
import ptTranslations from './locales/pt.js';
import frTranslations from './locales/fr.js';
import deTranslations from './locales/de.js';
import ruTranslations from './locales/ru.js';
import arTranslations from './locales/ar.js';

const translations = {
  en: enTranslations.default,
  zh: zhTranslations.default,
  ja: jaTranslations.default,
  ko: koTranslations.default,
  es: esTranslations.default,
  pt: ptTranslations.default,
  fr: frTranslations.default,
  de: deTranslations.default,
  ru: ruTranslations.default,
  ar: arTranslations.default
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

export { translations as locales };
export default {
  initI18n,
  t,
  getLocale,
  setLocale,
  getBrowserLocale,
  getAvailableLocales,
  getLocaleInfo,
  isRTL,
  config,
  translations
};
