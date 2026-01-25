// i18n Configuration
export const config = {
  defaultLocale: 'en',
  locales: ['en', 'zh', 'ja', 'ko', 'es', 'pt', 'fr', 'de', 'ru', 'ar'],
  fallbackLocale: 'en',

  // RTL languages
  rtlLocales: ['ar'],

  // Language metadata
  localeInfo: {
    en: { name: 'English', nativeName: 'English', flag: '🇺🇸', direction: 'ltr' },
    zh: { name: 'Chinese', nativeName: '简体中文', flag: '🇨🇳', direction: 'ltr' },
    ja: { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', direction: 'ltr' },
    ko: { name: 'Korean', nativeName: '한국어', flag: '🇰🇷', direction: 'ltr' },
    es: { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', direction: 'ltr' },
    pt: { name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', direction: 'ltr' },
    fr: { name: 'French', nativeName: 'Français', flag: '🇫🇷', direction: 'ltr' },
    de: { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', direction: 'ltr' },
    ru: { name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', direction: 'ltr' },
    ar: { name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', direction: 'rtl' }
  }
};

export default config;
