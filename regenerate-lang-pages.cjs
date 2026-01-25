const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src/pages');

// 创建一个简单的函数来获取locale数据
function getLocaleData(code) {
  // 从各自的locale文件读取
  const localeFilePath = path.join(__dirname, `src/i18n/locales/${code}.js`);
  if (!fs.existsSync(localeFilePath)) {
    return null;
  }
  const content = fs.readFileSync(localeFilePath, 'utf-8');
  // 简单解析description和keywords
  const descMatch = content.match(/"description":\s*"([^"]+)"/);
  const keysMatch = content.match(/"keywords":\s*"([^"]+)"/);
  return {
    description: descMatch ? descMatch[1] : '',
    keywords: keysMatch ? keysMatch[1] : ''
  };
}
const languages = [
  { code: 'zh', locale: 'zh', langCode: 'zh-CN', title: 'JSON 工具 - 格式化、比较和转换 | 在线' },
  { code: 'ja', locale: 'ja', langCode: 'ja-JP', title: 'JSONツール - フォーマット、比較、変換 | オンライン' },
  { code: 'ko', locale: 'ko', langCode: 'ko-KR', title: 'JSON 도구 - 형식, 비교, 변환 | 온라인' },
  { code: 'es', locale: 'es', langCode: 'es-ES', title: 'Herramientas JSON - Formatear, Comparar y Convertir | En línea' },
  { code: 'pt', locale: 'pt', langCode: 'pt-BR', title: 'Ferramentas JSON - Format, Comparar e Converter | Online' },
  { code: 'fr', locale: 'fr', langCode: 'fr-FR', title: 'Outils JSON - Formater, Comparer et Convertir | En ligne' },
  { code: 'de', locale: 'de', langCode: 'de-DE', title: 'JSON-Tools - Formatieren, Vergleichen und Konvertieren | Online' },
  { code: 'ru', locale: 'ru', langCode: 'ru-RU', title: 'JSON Инструменты - Форматирование, Сравнение и Конвертация | Онлайн' },
  { code: 'ar', locale: 'ar', langCode: 'ar-SA', title: 'أدوات JSON - تنسيق ومقارنة وتحويل | أونلاين', dir: 'rtl' }
];

console.log('🔄 开始重新生成所有语言页面...\n');

// 读取英文版作为模板
const englishFilePath = path.join(pagesDir, 'index.astro');
const englishContent = fs.readFileSync(englishFilePath, 'utf-8');

// 分割英文版为头部和主体部分
// 找到Sidebar组件的位置
const sidebarIndex = englishContent.indexOf('  <Sidebar slot="sidebar" t={t} />');
if (sidebarIndex === -1) {
  console.log('❌ 无法找到Sidebar组件');
  process.exit(1);
}

// 找到Sidebar行之后的换行符
const newlineAfterSidebar = englishContent.indexOf('\n', sidebarIndex);
if (newlineAfterSidebar === -1) {
  console.log('❌ 无法找到Sidebar后的换行符');
  process.exit(1);
}

// 检查是否有第二个换行符（空行）
let bodyStartIndex = newlineAfterSidebar + 1;
if (englishContent[bodyStartIndex] === '\n') {
  bodyStartIndex++;
}

const englishBody = englishContent.slice(bodyStartIndex);

// 找到Sidebar组件的位置（在头部之后）
languages.forEach(lang => {
  console.log(`正在生成 ${lang.code}/index.astro...`);

  // 获取locale数据
  const localeData = getLocaleData(lang.locale);
  if (!localeData) {
    console.log(`  ✗ 无法读取${lang.locale}的locale数据`);
    return;
  }

  // 创建新的头部
  const newHead = `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Sidebar from '../../components/Sidebar.astro';
import { locales } from '../../i18n/locales.js';
import LanguageSwitcher from '../../components/LanguageSwitcher.astro';

// ${lang.code.toUpperCase()} 首页，固定使用${lang.code}语言
const lang = '${lang.langCode}';
const t = locales['${lang.locale}'];
---

<BaseLayout
  title="${lang.title}"
  lang={lang}
  ${lang.dir ? `dir="${lang.dir}"` : ''}
  description="${localeData.description}"
  keywords="${localeData.keywords}">
  <Sidebar slot="sidebar" t={t} />
  <div slot="header">
    <LanguageSwitcher currentLocale="${lang.locale}" />
  </div>
`;

  // 组合头部和英文版的主体部分
  const newContent = newHead + englishBody;

  // 写入文件
  const filePath = path.join(pagesDir, lang.code, 'index.astro');
  fs.writeFileSync(filePath, newContent, 'utf-8');

  const lineCount = newContent.split('\n').length;
  console.log(`  ✓ 生成完成：${lineCount} 行\n`);
});

console.log('✨ 所有语言页面重新生成完成！');
console.log('\n📝 生成总结：');
console.log(`- 处理了 ${languages.length} 个语言文件`);
console.log('- 基于英文版模板，确保结构完全一致');
console.log('- 各语言文件保留了独立的头部配置（导入、语言设置等）');
console.log('- JavaScript代码部分与英文版完全相同\n');
