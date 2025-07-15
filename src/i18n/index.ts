
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { ja } from './locales/ja';
import { es } from './locales/es';
import { fr } from './locales/fr';
import { de } from './locales/de';
import { ru } from './locales/ru';
import { pt } from './locales/pt';
import { ko } from './locales/ko';
import { zh } from './locales/zh';

const resources = {
  en,
  ja,
  es,
  fr,
  de,
  ru,
  pt,
  ko,
  zh,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // 默认语言
    fallbackLng: 'en', // 检测失败时回退到英语
    // 禁用自动检测，由组件手动控制语言
    detection: false,
    fallbackLng: 'en',
    whitelist: ['en', 'es', 'fr', 'de', 'pt', 'ru', 'ja', 'ko', 'zh'], // 白名单
    interpolation: {
      escapeValue: false,
    },
    react: {
    useSuspense: false,
    wait: true, // 等待语言文件加载完成后再渲染组件
    bindI18n: 'languageChanged loaded', // 当语言改变或加载时重新绑定
    bindI18nStore: 'added', // 当store添加时重新绑定
    // 确保组件挂载时也能获取到最新的语言
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    reloadOnPrerender: process.env.NODE_ENV === 'development'
  },
    debug: false, // 关闭debug模式
  });

export default i18n;
