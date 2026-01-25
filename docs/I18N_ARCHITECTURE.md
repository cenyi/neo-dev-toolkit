# 多语言国际化架构设计方案

## 📋 项目概述

为 JSON Formatter 工具设计可扩展的多语言国际化（i18n）架构，支持日语、韩语、西班牙语、葡萄牙语、法语、德语、俄语、阿拉伯语等多种语言。

---

## 🎯 设计目标

### 1. 可扩展性
- ✅ 添加新语言只需创建翻译文件，无需修改核心代码
- ✅ 支持语言包按需加载，减少首屏加载时间
- ✅ 支持社区贡献翻译

### 2. 性能优化
- ✅ 语言包懒加载
- ✅ 翻译缓存机制
- ✅ 最小化打包体积

### 3. 开发体验
- ✅ 类型安全的翻译键
- ✅ 翻译缺失检测
- ✅ 支持热更新

### 4. 用户体验
- ✅ 自动语言检测
- ✅ 无缝语言切换
- ✅ 本地存储语言偏好

---

## 🏗️ 架构设计

### 目录结构

```
src/
├── i18n/
│   ├── index.js                 # i18n 配置和导出
│   ├── locales.js               # 当前语言（临时保留）
│   ├── config.js                # i18n 配置文件
│   └── translations/            # 翻译文件目录
│       ├── en.json              # 英文
│       ├── zh.json              # 简体中文
│       ├── ja.json              # 日语
│       ├── ko.json              # 韩语
│       ├── es.json              # 西班牙语
│       ├── pt.json              # 葡萄牙语
│       ├── fr.json              # 法语
│       ├── de.json              # 德语
│       ├── ru.json              # 俄语
│       ├── ar.json              # 阿拉伯语
│       └── ...                  # 其他语言
├── pages/
│   ├── index.astro              # 主页
│   ├── zh/
│   │   └── index.astro          # 中文页（保留）
│   └── [lang]/                  # 未来可能的语言子目录
└── components/
    └── LanguageSwitcher.astro   # 语言切换组件
```

---

## 📝 翻译文件格式

### JSON 格式（推荐）

```json
{
  "meta": {
    "language": "English",
    "code": "en",
    "direction": "ltr",
    "version": "1.0.0"
  },
  "ui": {
    "title": "JSON Formatter & Multi-Format Converter",
    "description": "The Ultimate JSON Toolkit"
  },
  "buttons": {
    "collapseAll": "Collapse All",
    "expandAll": "Expand All",
    "removeComments": "Remove Comments",
    "compressCopy": "Compress JSON & Copy",
    "escapeCopy": "Escape & Copy JSON",
    "jsonToXml": "JSON to XML & Copy",
    "jsonToYaml": "JSON to YAML & Copy",
    "jsonToTs": "JSON to TypeScript & Copy",
    "jsonToCsv": "JSON to CSV & Copy",
    "jsonToExcel": "JSON to Excel & Copy",
    "jsonToHtml": "JSON to HTML & Copy",
    "jsonToTable": "JSON to Table",
    "jsonToSchema": "JSON Schema",
    "jsonToPdf": "JSON to PDF",
    "jsonToDart": "JSON to Dart",
    "jsonToC": "JSON to C",
    "jsonToGo": "JSON to Go",
    "jsonToRust": "JSON to Rust",
    "jsonToPython": "JSON to Python",
    "jsonCompare": "JSON Compare",
    "clear": "Clear",
    "history": "History"
  },
  "messages": {
    "yamlSuccess": "YAML copied to clipboard!",
    "tableSuccess": "Table generated successfully!",
    "schemaSuccess": "JSON Schema generated successfully!",
    "htmlSuccess": "HTML copied to clipboard!",
    "pdfSuccess": "PDF export initiated!",
    "dartSuccess": "Dart code copied to clipboard!",
    "cSuccess": "C code copied to clipboard!",
    "goSuccess": "Go code copied to clipboard!",
    "rustSuccess": "Rust code copied to clipboard!",
    "pythonSuccess": "Python code copied to clipboard!",
    "parsingError": "Error",
    "enterExtractionFn": "Please enter an extraction function",
    "enterData": "Please enter data to process"
  },
  "placeholders": {
    "inputPlaceholder": "Paste your JSON, URL params, XML, or YAML data here...",
    "extractionPlaceholder": "e.g., obj => obj.name or obj => obj.data"
  },
  "hints": {
    "smartInput": "Smart Input: Auto-detects JSON, URL, XML, YAML & 15+ formats"
  }
}
```

---

## 🔧 实现方案

### 方案 A：Astro i18n 集成（推荐）⭐

#### 优点
- ✅ Astro 原生支持
- ✅ 自动路由生成
- ✅ SEO 友好
- ✅ 类型安全

#### 实现

**1. 配置 `astro.config.mjs`**

```javascript
import { defineConfig } from 'astro/config';
import { i18n } from 'astro-i18next';

export default defineConfig({
  integrations: [
    i18n({
      defaultLocale: 'en',
      locales: ['en', 'zh', 'ja', 'ko', 'es', 'pt', 'fr', 'de', 'ru', 'ar'],
      fallbackLocale: 'en',
      routing: {
        prefixDefaultLocale: false
      }
    })
  ]
});
```

**2. 安装依赖**

```bash
npm install astro-i18next i18next
```

**3. 创建翻译文件**

将现有的 `locales.js` 拆分为独立的 JSON 文件：
- `src/i18n/translations/en.json`
- `src/i18n/translations/zh.json`
- `src/i18n/translations/ja.json`
- 等等...

**4. 使用翻译**

```astro
---
import { t, } from 'astro-i18next';

const title = t('ui.title');
---

<h1>{title}</h1>
```

**5. 客户端使用**

```javascript
import i18next from 'i18next';
import translations from '../i18n/translations/en.json';

i18next.init({
  lng: 'en',
  resources: {
    en: { translation: translations }
  }
});

// 使用
const title = i18next.t('ui.title');
```

---

### 方案 B：自定义 i18n 系统

#### 架构

**1. i18n 核心模块 (`src/i18n/index.js`)**

```javascript
import enTranslations from './translations/en.json';
import zhTranslations from './translations/zh.json';

const translations = {
  en: enTranslations,
  zh: zhTranslations
  // 未来添加更多语言
};

let currentLocale = 'en';

export function initI18n(locale) {
  currentLocale = locale || getBrowserLocale() || 'en';
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
    localStorage.setItem('locale', locale);
    document.documentElement.lang = locale;
  }
}

export function getBrowserLocale() {
  const browserLang = navigator.language.split('-')[0];
  return translations[browserLang] ? browserLang : null;
}

export function getAvailableLocales() {
  return Object.keys(translations);
}
```

**2. 语言切换组件 (`src/components/LanguageSwitcher.astro`)**

```astro
---
const { currentLocale = 'en' } = Astro.props;
const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];
---

<div class="language-switcher">
  <select id="language-select" class="language-select">
    {locales.map(locale => (
      <option
        value={locale.code}
        selected={currentLocale === locale.code}>
        {locale.flag} {locale.name}
      </option>
    ))}
  </select>
</div>

<script>
  document.getElementById('language-select').addEventListener('change', (e) => {
    const newLocale = e.target.value;
    localStorage.setItem('preferredLocale', newLocale);
    window.location.href = `/${newLocale === 'en' ? '' : newLocale + '/'}`;
  });
</script>

<style>
  .language-switcher {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
  }

  .language-select {
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    background: var(--bg-color);
    color: var(--text-color);
    cursor: pointer;
    font-size: 14px;
  }
</style>
```

---

## 🌍 语言优先级实现计划

### 阶段 1：核心语言（立即实现）
1. ✅ **英语 (en)** - 已完成
2. ✅ **简体中文 (zh)** - 已完成

### 阶段 2：高优先级语言（3个月内）
3. **日语 (ja)** - 日本开发者市场
4. **韩语 (ko)** - 韩国技术社区
5. **西班牙语 (es)** - 全球第二大母语

### 阶段 3：中优先级语言（6个月内）
6. **葡萄牙语 (pt)** - 巴西市场
7. **法语 (fr)** - 欧洲和非洲
8. **德语 (de)** - 欧洲技术中心

### 阶段 4：扩展语言（按需）
9. **俄语 (ru)** - 东欧市场
10. **阿拉伯语 (ar)** - 中东市场（需要RTL支持）

---

## 📋 翻译文件创建模板

### 日语 (ja.json) 示例

```json
{
  "meta": {
    "language": "日本語",
    "code": "ja",
    "direction": "ltr"
  },
  "ui": {
    "title": "JSONフォーマッター＆マルチフォーマットコンバーター",
    "description": "究極のJSONツールキット"
  },
  "buttons": {
    "collapseAll": "すべて折りたたむ",
    "expandAll": "すべて展開",
    "jsonToYaml": "JSON→YAML変換",
    "jsonToTable": "JSON→テーブル",
    "jsonCompare": "JSON比較"
  },
  "messages": {
    "yamlSuccess": "YAMLをクリップボードにコピーしました！",
    "tableSuccess": "テーブルを生成しました！",
    "parsingError": "エラー"
  }
}
```

### 韩语 (ko.json) 示例

```json
{
  "meta": {
    "language": "한국어",
    "code": "ko",
    "direction": "ltr"
  },
  "ui": {
    "title": "JSON 포맷터 및 멀티 포맷 변환기",
    "description": "궁극의 JSON 툴킷"
  },
  "buttons": {
    "collapseAll": "모두 접기",
    "expandAll": "모두 펼치기",
    "jsonToYaml": "JSON→YAML 변환",
    "jsonToTable": "JSON→테이블",
    "jsonCompare": "JSON 비교"
  }
}
```

### 西班牙语 (es.json) 示例

```json
{
  "meta": {
    "language": "Español",
    "code": "es",
    "direction": "ltr"
  },
  "ui": {
    "title": "Formateador JSON y Convertidor Multiformato",
    "description": "El Kit de Herramientas JSON Definitivo"
  },
  "buttons": {
    "collapseAll": "Contraer Todo",
    "expandAll": "Expandir Todo",
    "jsonToYaml": "JSON a YAML",
    "jsonToTable": "JSON a Tabla",
    "jsonCompare": "Comparar JSON"
  }
}
```

---

## 🛠️ 实施步骤

### Step 1: 重构现有翻译（1天）
1. ✅ 将 `locales.js` 拆分为 JSON 文件
2. ✅ 创建 `src/i18n/translations/` 目录
3. ✅ 迁移现有翻译到 `en.json` 和 `zh.json`
4. ✅ 创建 `src/i18n/index.js` 核心模块

### Step 2: 添加 i18n 配置（1天）
1. ✅ 创建 `src/i18n/config.js`
2. ✅ 实现语言检测和切换逻辑
3. ✅ 添加本地存储语言偏好

### Step 3: 创建语言切换器（1天）
1. ✅ 实现 `LanguageSwitcher` 组件
2. ✅ 添加到所有页面
3. ✅ 样式优化

### Step 4: 添加新语言（持续）
1. ✅ 创建日语翻译文件
2. ✅ 创建韩语翻译文件
3. ✅ 创建西班牙语翻译文件
4. ✅ 测试语言切换

### Step 5: 优化和文档（1天）
1. ✅ 性能优化（懒加载）
2. ✅ 编写贡献指南
3. ✅ 更新文档

---

## 🚀 高级特性

### 1. 自动语言检测

```javascript
function detectLocale() {
  // 1. 检查 URL 参数
  const urlParams = new URLSearchParams(window.location.search);
  const urlLocale = urlParams.get('lang');
  if (urlLocale && translations[urlLocale]) {
    return urlLocale;
  }

  // 2. 检查本地存储
  const savedLocale = localStorage.getItem('preferredLocale');
  if (savedLocale && translations[savedLocale]) {
    return savedLocale;
  }

  // 3. 检查浏览器语言
  const browserLocale = navigator.language.split('-')[0];
  if (translations[browserLocale]) {
    return browserLocale;
  }

  // 4. 默认语言
  return 'en';
}
```

### 2. 按需加载语言包

```javascript
async function loadLocale(locale) {
  if (translations[locale]) {
    return translations[locale];
  }

  // 动态导入
  const localeModule = await import(`./translations/${locale}.json`);
  translations[locale] = localeModule.default;

  return localeModule.default;
}
```

### 3. RTL（从右到左）语言支持

```css
/* 阿拉伯语等 RTL 语言 */
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

[dir="rtl"] .output-controls {
  flex-direction: row-reverse;
}

[dir="rtl"] .sidebar {
  border-right: none;
  border-left: 1px solid var(--border-color);
}
```

### 4. 翻译完整性检查

```javascript
function checkTranslationCompleteness(locale) {
  const baseKeys = getAllTranslationKeys('en');
  const targetKeys = getAllTranslationKeys(locale);

  const missing = baseKeys.filter(key => !targetKeys.includes(key));

  if (missing.length > 0) {
    console.warn(`Missing translations for ${locale}:`, missing);
  }

  return {
    complete: missing.length === 0,
    missing,
    percentage: ((baseKeys.length - missing.length) / baseKeys.length * 100).toFixed(2)
  };
}
```

---

## 📊 翻译管理工具

### 方案 1: 使用 i18n-ally（VS Code 插件）

**功能**：
- ✅ 翻译键自动补全
- ✅ 翻译完整性检查
- ✅ 批量编辑翻译

### 方案 2: 使用 Lokalise

**功能**：
- ✅ 可视化翻译管理
- ✅ 专业翻译服务集成
- ✅ 翻译记忆库

### 方案 3: 使用 Crowdin

**功能**：
- ✅ 社区翻译支持
- ✅ 上下文截图
- ✅ 翻译审批流程

---

## 🎯 SEO 优化

### 1. 语言标签

```html
<html lang="en">
<html lang="zh">
<html lang="ja">
```

### 2. hreflang 标签

```html
<link rel="alternate" hreflang="en" href="https://tojsons.com/" />
<link rel="alternate" hreflang="zh" href="https://tojsons.com/zh/" />
<link rel="alternate" hreflang="ja" href="https://tojsons.com/ja/" />
<link rel="alternate" hreflang="x-default" href="https://tojsons.com/" />
```

### 3. 语言特定的 meta 标签

```astro
---
const locale = Astro.currentLocale;
const meta = {
  en: {
    title: "JSON Formatter & Multi-Format Converter",
    description: "The Ultimate JSON Toolkit - Format, Convert, Validate JSON online"
  },
  zh: {
    title: "JSON 格式化与多格式转换工具",
    description: "终极 JSON 工具集 - 在线格式化、转换、验证 JSON"
  },
  ja: {
    title: "JSONフォーマッター＆マルチフォーマットコンバーター",
    description: "究極のJSONツールキット - JSONをオンラインでフォーマット、変換、検証"
  }
};
---

<meta name="description" content={meta[locale].description} />
```

---

## 📈 性能优化策略

### 1. 代码分割

```javascript
// 按语言分割
const translations = {
  en: () => import('./translations/en.json'),
  zh: () => import('./translations/zh.json'),
  ja: () => import('./translations/ja.json')
};
```

### 2. 缓存策略

```javascript
// Service Worker 缓存翻译文件
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('i18n-v1').then((cache) => {
      return cache.addAll([
        '/i18n/translations/en.json',
        '/i18n/translations/zh.json'
      ]);
    })
  );
});
```

### 3. CDN 分发

```javascript
// 将翻译文件部署到 CDN
const CDN_BASE = 'https://cdn.tojsons.com/i18n';

async function loadLocale(locale) {
  const response = await fetch(`${CDN_BASE}/${locale}.json`);
  return await response.json();
}
```

---

## 🤝 社区贡献流程

### 1. Fork 项目
```bash
git clone https://github.com/YOUR-USERNAME/neo-dev-toolkit.git
```

### 2. 创建语言文件
```bash
cp src/i18n/translations/en.json.template src/i18n/translations/ja.json
```

### 3. 翻译内容
编辑 `ja.json`，翻译所有键值对

### 4. 提交 PR
```bash
git add src/i18n/translations/ja.json
git commit -m "i18n: Add Japanese translation"
git push origin feature/japanese-translation
```

### 5. 翻译检查清单
- ✅ 所有 UI 文本已翻译
- ✅ 所有按钮文字已翻译
- ✅ 所有错误消息已翻译
- ✅ 所有占位符已翻译
- ✅ 保持 JSON 格式正确
- ✅ 特殊字符已转义
- ✅ 测试语言切换功能

---

## 📚 相关资源

### 工具和库
- [Astro i18n](https://docs.astro.build/en/guides/internationalization/)
- [i18next](https://www.i18next.com/)
- [formatjs](https://formatjs.io/)
- [Lokalise](https://lokalise.com/)
- [Crowdin](https://crowdin.com/)

### 文档
- [MDN Web Docs - Internationalization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [W3C Internationalization](https://www.w3.org/International/)
- [Google Localization Guide](https://support.google.com/locale/answer/173119)

---

## ✅ 检查清单

### 功能完整性
- [ ] 支持多语言路由
- [ ] 语言切换器组件
- [ ] 自动语言检测
- [ ] 本地存储语言偏好
- [ ] URL 参数语言切换
- [ ] 翻译文件按需加载
- [ ] RTL 语言支持（阿拉伯语）

### 翻译质量
- [ ] 所有语言翻译完整
- [ ] 术语一致性
- [ ] 文化适配
- [ ] 上下文准确

### 性能优化
- [ ] 语言包懒加载
- [ ] 翻译缓存
- [ ] CDN 分发
- [ ] Gzip 压缩

### SEO 优化
- [ ] hreflang 标签
- [ ] 语言特定的 meta 标签
- [ ] 语言特定的 sitemap
- [ ] 结构化数据

---

## 🎉 总结

通过这个多语言国际化架构，我们可以：

1. ✅ **轻松添加新语言** - 只需创建翻译文件
2. ✅ **优秀的用户体验** - 自动检测，无缝切换
3. ✅ **高性能** - 懒加载，按需加载
4. ✅ **SEO 友好** - 正确的 meta 标签和 hreflang
5. ✅ **社区友好** - 简单的贡献流程

**推荐优先实现语言**：
1. 🇯🇵 日语 - 日本开发者市场
2. 🇰🇷 韩语 - 韩国技术社区
3. 🇪🇸 西班牙语 - 全球第二大母语

---

**下一步行动**：是否开始实施这个架构？我可以帮您：
1. 重构现有的翻译系统
2. 创建第一组新语言文件（日语/韩语/西班牙语）
3. 实现语言切换组件
4. 更新文档

请告诉我您的选择！🚀
