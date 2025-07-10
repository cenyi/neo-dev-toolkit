
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
      title: t('tools.json.title'),
      links: [
        { path: `/${lang}/json/formatter`, name: t('tools.json.formatter.title') },
        { path: `/${lang}/json/schema-validator`, name: t('tools.json.schemaValidator.title') },
        { path: `/${lang}/json/diff`, name: t('tools.json.diff.title') },
        { path: `/${lang}/json/codegen`, name: t('tools.json.codegen.title') }
      ]
    },
    {
      title: t('tools.text.title'),
      links: [
        { path: `/${lang}/text/case-converter`, name: t('tools.text.caseConverter.title') },
        { path: `/${lang}/text/word-counter`, name: t('tools.text.wordCounter.title') },
        { path: `/${lang}/text/text-diff`, name: t('tools.text.textDiff.title') },
        { path: `/${lang}/regex`, name: t('tools.regex.title') }
      ]
    },
    {
      title: t('tools.network.title'),
      links: [
        { path: `/${lang}/network/url-encoder`, name: t('tools.network.urlEncoder.title') },
        { path: `/${lang}/network/base64-encoder`, name: t('tools.network.base64Encoder.title') },
        { path: `/${lang}/network/jwt-decoder`, name: t('tools.jwtDecoder.title') },
        { path: `/${lang}/network/ip-lookup`, name: t('tools.network.ipLookup.title') }
      ]
    },
    {
      title: t('tools.other.title'),
      links: [
        { path: `/${lang}/editor/markdown`, name: t('tools.editor.markdown.title') },
        { path: `/${lang}/editor/mermaid`, name: t('tools.editor.mermaid.title') },
        { path: `/${lang}/time/timestamp-converter`, name: t('tools.time.timestampConverter.title') },
        { path: `/${lang}/crypto/encryption`, name: t('tools.crypto.title') }
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
        </div>
      </div>

    </footer>
  );
};

export default Footer;
