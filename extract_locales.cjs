const fs = require('fs');
const data = require('./src/i18n/locales.js');

const langs = ['en', 'zh', 'ja', 'ko', 'es', 'pt', 'fr', 'de', 'ru', 'ar'];

langs.forEach(lang => {
  const content = `// ${lang.toUpperCase()} translations
export default ${JSON.stringify(data[lang], null, 2)};
`;
  fs.writeFileSync(`src/i18n/locales/${lang}.js`, content);
  console.log(`Created ${lang}.js`);
});
