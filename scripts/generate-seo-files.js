import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 支持的语言
const languages = ['en', 'ja', 'es', 'fr', 'de', 'ru', 'pt', 'ko'];

// 基础域名
const baseUrl = 'https://tojsons.com';

// 所有页面路由配置
const routes = [
  // 首页
  { path: '', priority: '1.0', changefreq: 'daily' },
  
  // 主要工具分类页面
  { path: '/json', priority: '0.9', changefreq: 'weekly' },
  { path: '/network', priority: '0.7', changefreq: 'weekly' },
  { path: '/text', priority: '0.6', changefreq: 'weekly' },
  { path: '/time', priority: '0.5', changefreq: 'weekly' },
  { path: '/editor', priority: '0.8', changefreq: 'weekly' },
  { path: '/crypto', priority: '0.4', changefreq: 'weekly' },
  { path: '/regex', priority: '0.8', changefreq: 'weekly' },
  
  // JSON 工具页面
  { path: '/json/formatter', priority: '0.9', changefreq: 'weekly' },
  { path: '/json/schema-validator', priority: '0.8', changefreq: 'weekly' },
  { path: '/json/codegen', priority: '0.8', changefreq: 'weekly' },
  { path: '/json/diff', priority: '0.8', changefreq: 'weekly' },
  { path: '/json/mock', priority: '0.7', changefreq: 'weekly' },
  { path: '/json/to-dart', priority: '0.7', changefreq: 'weekly' },
  
  // 网络工具页面
  { path: '/network/url-encoder', priority: '0.7', changefreq: 'weekly' },
  { path: '/network/base64-encoder', priority: '0.7', changefreq: 'weekly' },
  { path: '/network/ip-lookup', priority: '0.6', changefreq: 'weekly' },
  { path: '/network/jwt-decoder', priority: '0.6', changefreq: 'weekly' },
  
  // 文本工具页面
  { path: '/text/case-converter', priority: '0.6', changefreq: 'weekly' },
  { path: '/text/word-counter', priority: '0.6', changefreq: 'weekly' },
  { path: '/text/text-reverser', priority: '0.5', changefreq: 'weekly' },
  { path: '/text/whitespace-remover', priority: '0.5', changefreq: 'weekly' },
  { path: '/text/lorem-ipsum-generator', priority: '0.5', changefreq: 'weekly' },
  { path: '/text/text-diff', priority: '0.6', changefreq: 'weekly' },
  
  // 编辑器工具页面
  { path: '/editor/markdown', priority: '0.7', changefreq: 'weekly' },
  { path: '/editor/mermaid', priority: '0.7', changefreq: 'weekly' },
  
  // 时间工具页面
  { path: '/time/timestamp-converter', priority: '0.5', changefreq: 'weekly' },
  { path: '/time/timezone-converter', priority: '0.5', changefreq: 'weekly' },
  { path: '/time/date-calculator', priority: '0.5', changefreq: 'weekly' },
  
  // 加密工具页面
  { path: '/crypto/encryption', priority: '0.4', changefreq: 'weekly' },
  { path: '/crypto/jwt-decoder', priority: '0.4', changefreq: 'weekly' },
  
  // 其他页面
  { path: '/about', priority: '0.5', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'monthly' },
  { path: '/terms', priority: '0.3', changefreq: 'monthly' },
  { path: '/sitemap', priority: '0.4', changefreq: 'monthly' }
];

// 生成sitemap.xml
function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  routes.forEach(route => {
    languages.forEach(lang => {
      const url = route.path === '' ? `${baseUrl}/${lang}` : `${baseUrl}/${lang}${route.path}`;
      
      sitemap += `  <!-- ${route.path || 'Homepage'} - Priority: ${route.priority} -->
`;
      sitemap += `  <url>
`;
      sitemap += `    <loc>${url}</loc>
`;
      if (route.path !== '') {
        sitemap += `    <lastmod>${currentDate}</lastmod>
`;
      }
      sitemap += `    <priority>${route.priority}</priority>
`;
      sitemap += `    <changefreq>${route.changefreq}</changefreq>
`;
      
      // 添加多语言链接
      languages.forEach(altLang => {
        const altUrl = route.path === '' ? `${baseUrl}/${altLang}` : `${baseUrl}/${altLang}${route.path}`;
        sitemap += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}"/>
`;
      });
      
      sitemap += `  </url>

`;
    });
  });

  sitemap += `</urlset>`;
  
  return sitemap;
}

// 生成robots.txt
function generateRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
}

// 主函数
function main() {
  try {
    // 确保public目录存在
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // 生成sitemap.xml
    const sitemapContent = generateSitemap();
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf8');
    console.log('✅ sitemap.xml generated successfully');

    // 生成robots.txt
    const robotsContent = generateRobots();
    fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent, 'utf8');
    console.log('✅ robots.txt generated successfully');

    console.log(`\n📊 Generated sitemap with ${routes.length * languages.length} URLs`);
    console.log(`🌐 Languages: ${languages.join(', ')}`);
    console.log(`🔗 Base URL: ${baseUrl}`);
    
  } catch (error) {
    console.error('❌ Error generating SEO files:', error);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateSitemap, generateRobots, routes, languages };