
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { CompactToolsLinks } from './AllPagesLinks';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentYear = new Date().getFullYear();

  // 工具分类链接 - 根据内部链接SEO最佳实践
  const toolCategories = [
    {
      title: 'JSON Tools',
      links: [
        { path: `/${lang}/json/formatter`, name: 'JSON Formatter' },
        { path: `/${lang}/json/schema-validator`, name: 'Schema Validator' },
        { path: `/${lang}/json/diff`, name: 'JSON Diff' },
        { path: `/${lang}/json/codegen`, name: 'Code Generator' }
      ]
    },
    {
      title: 'Text Tools',
      links: [
        { path: `/${lang}/text/case-converter`, name: 'Case Converter' },
        { path: `/${lang}/text/word-counter`, name: 'Word Counter' },
        { path: `/${lang}/text/text-diff`, name: 'Text Diff' },
        { path: `/${lang}/regex`, name: 'Regex Tool' }
      ]
    },
    {
      title: 'Network Tools',
      links: [
        { path: `/${lang}/network/url-encoder`, name: 'URL Encoder' },
        { path: `/${lang}/network/base64-encoder`, name: 'Base64 Encoder' },
        { path: `/${lang}/network/jwt-decoder`, name: 'JWT Decoder' },
        { path: `/${lang}/network/ip-lookup`, name: 'IP Lookup' }
      ]
    },
    {
      title: 'Other Tools',
      links: [
        { path: `/${lang}/editor/markdown`, name: 'Markdown Editor' },
        { path: `/${lang}/editor/mermaid`, name: 'Mermaid Editor' },
        { path: `/${lang}/time/timestamp-converter`, name: 'Timestamp Converter' },
        { path: `/${lang}/crypto/encryption`, name: 'Encryption Tool' }
      ]
    }
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* 工具分类内部链接区域 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {toolCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-foreground hover:text-primary transition-colors"
                      title={`${link.name} - Free Online Tool`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* 原有的Footer内容 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left border-t border-border pt-8">
          <div className="col-span-2 md:col-span-1">
             <h3 className="text-lg font-semibold text-foreground">{t('home.title')}</h3>
             <p className="text-muted-foreground text-sm mt-2">{t('footer.description')}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t('footer.legal')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to={`/${lang}/privacy`} className="text-base text-foreground hover:text-primary">{t('footer.privacy')}</Link></li>
              <li><Link to={`/${lang}/terms`} className="text-base text-foreground hover:text-primary">{t('footer.terms')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t('footer.company')}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to={`/${lang}/about`} className="text-base text-foreground hover:text-primary">{t('footer.about')}</Link></li>
            </ul>
          </div>
            <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t('footer.friendlyLinks')}</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-base text-foreground hover:text-primary">{t('footer.lovable')}</a></li>
              <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-base text-foreground hover:text-primary">{t('footer.vercel')}</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-base text-foreground hover:text-primary">{t('footer.github')}</a></li>
              <li><a href="https://www.deepseek.com" target="_blank" rel="noopener noreferrer" className="text-base text-foreground hover:text-primary">{t('footer.deepseek')}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-base text-muted-foreground">{t('footer.copyright', { year: currentYear })}</p>
          <div className="mt-2">
            <Link to={`/${lang}/sitemap`} className="text-sm text-foreground hover:text-primary transition-colors">
              Site Map
            </Link>
          </div>
        </div>
      </div>
      
      {/* SEO优化：紧凑版工具链接 */}
      <CompactToolsLinks />
    </footer>
  );
};

export default Footer;
