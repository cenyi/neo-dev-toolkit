
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Home, FileJson, Network, Text, Key, Code, LayoutGrid, Clock, Hash, Edit } from 'lucide-react';
import ThemeToggle from './nav/ThemeToggle';
import LanguageSwitcher from './nav/LanguageSwitcher';
import ToolDropdown from './nav/ToolDropdown';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { lang = 'en' } = useParams<{ lang?: string }>();

  const jsonTools = useMemo(() => [
      { path: `/${lang}/json/formatter`, name: 'JSON Formatter & Validator' },
      { path: `/${lang}/json/schema-validator`, name: 'JSON Schema Validator' },
      { path: `/${lang}/json/codegen`, name: 'Generate Code Types' },
      { path: `/${lang}/json/diff`, name: 'Diff Tool' },
      { path: `/${lang}/json/mock`, name: 'Mock Data Generator' },
      { path: `/${lang}/json/to-dart`, name: 'JSON to Dart Converter' }
    ], [lang]);

  const networkTools = useMemo(() => [
    { path: `/${lang}/network/url-encoder`, name: 'URL Encoder / Decoder' },
    { path: `/${lang}/network/base64-encoder`, name: 'Base64 Encoder / Decoder' },
    { path: `/${lang}/network/ip-lookup`, name: 'IP Lookup' },
    { path: `/${lang}/network/jwt-decoder`, name: 'JWT Decoder' },
  ], [lang]);

  const textTools = useMemo(() => [
    { path: `/${lang}/text/case-converter`, name: 'Case Converter' },
    { path: `/${lang}/text/word-counter`, name: 'Word & Character Counter' },
    { path: `/${lang}/text/text-reverser`, name: 'Text Reverser' },
    { path: `/${lang}/text/whitespace-remover`, name: 'Whitespace Remover' },
    { path: `/${lang}/text/lorem-ipsum-generator`, name: 'Lorem Ipsum Generator' },
    { path: `/${lang}/text/text-diff`, name: 'Text Comparison Tool' }
  ], [lang]);

  const editorTools = useMemo(() => [
    { path: `/${lang}/editor/markdown`, name: 'Markdown Editor' },
    { path: `/${lang}/editor/mermaid`, name: 'Mermaid Editor' }
  ], [lang]);

  const timeTools = useMemo(() => [
    { path: `/${lang}/time/timestamp-converter`, name: 'Timestamp Converter' },
    { path: `/${lang}/time/timezone-converter`, name: 'Timezone Converter' },
    { path: `/${lang}/time/date-calculator`, name: 'Date Calculator' }
  ], [lang]);

  const cryptoTools = useMemo(() => [
    { path: `/${lang}/crypto/jwt-decoder`, name: 'JWT Decoder' },
    { path: `/${lang}/crypto/encryption`, name: 'Encryption Tool' },
  ], [lang]);

  const navItems = useMemo(() => [
    { path: `/${lang}`, key: 'home', icon: Home },
    { path: `/${lang}/json`, key: 'json', icon: FileJson, tools: jsonTools, dropdownWidth: 'w-56' },
    { path: `/${lang}/network`, key: 'network', icon: Network, tools: networkTools, dropdownWidth: 'w-64' },
    { path: `/${lang}/text`, key: 'text', icon: Text, tools: textTools, dropdownWidth: 'w-64' },
    { path: `/${lang}/regex`, key: 'regex', icon: Hash },
    { path: `/${lang}/editor`, key: 'editor', icon: Edit, tools: editorTools, dropdownWidth: 'w-52' },
    { path: `/${lang}/time`, key: 'time', icon: Clock, tools: timeTools, dropdownWidth: 'w-64' },
    { path: `/${lang}/crypto`, key: 'encryption', icon: Key, tools: cryptoTools, dropdownWidth: 'w-56' }
  ], [lang]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 max-w-full px-2 sm:px-4 mb-4 bg-gradient-to-r from-background/90 to-background/70 backdrop-blur-md border border-border/60 rounded-b-2xl shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between p-4 px-4 py-3">
        <div className="flex flex-wrap items-center gap-0.5 sm:gap-1 px-2 md:flex-nowrap md:space-x-2 md:overflow-x-auto md:hide-scrollbar md:gap-2 md:[scrollbar-width:none] md:[-ms-overflow-style:none] md:[&::-webkit-scrollbar]:hidden">
          {navItems.map(({ path, key, icon: Icon, tools, dropdownWidth }) => {
            if (tools) {
              return (
                <ToolDropdown
                  key={key}
                  navKey={key}
                  tools={tools}
                  Icon={Icon}
                  contentWidth={dropdownWidth}
                />
              );
            }
            return (
              <Link key={path} to={path!} title={t(`navTitles.${key}`)}>
                <button
                  className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center space-x-2 transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:shadow-md ${
                    location.pathname === path ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {Icon && <Icon size={16} />}
                  <span>{t(`nav.${key}`)}</span>
                </button>
              </Link>
            );
          })}
        </div>
        
        <div className="flex items-center space-x-3 ml-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
