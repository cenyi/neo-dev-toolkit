
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileJson, Network, Text, Key, Code, LayoutGrid, Clock, Hash, Edit } from 'lucide-react';
import ThemeToggle from './nav/ThemeToggle';
import LanguageSwitcher from './nav/LanguageSwitcher';
import ToolDropdown from './nav/ToolDropdown';
// 优化导航菜单栏结束
const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const jsonTools = [
    { path: '/json/formatter', name: 'JSON Formatter & Validator' },
    { path: '/json/schema-validator', name: 'JSON Schema Validator' },
    { path: '/json/codegen', name: 'Generate Code Types' },
    { path: '/json/diff', name: 'Diff Tool' },
    { path: '/json/mock', name: 'Mock Data Generator' }
  ];

  const networkTools = [
    { path: '/network/url-encoder', name: 'URL Encoder / Decoder' },
    { path: '/network/base64-encoder', name: 'Base64 Encoder / Decoder' },
    { path: '/network/ip-lookup', name: 'IP Lookup' },
    { path: '/network/jwt-decoder', name: 'JWT Decoder' },
  ];

  const textTools = [
    { path: '/text/case-converter', name: 'Case Converter' },
    { path: '/text/word-counter', name: 'Word & Character Counter' },
    { path: '/text/text-reverser', name: 'Text Reverser' },
    { path: '/text/whitespace-remover', name: 'Whitespace Remover' },
    { path: '/text/lorem-ipsum-generator', name: 'Lorem Ipsum Generator' },
    { path: '/text/text-diff', name: 'Text Comparison Tool' }
  ];

  const editorTools = [
    { path: '/editor/markdown', name: 'Markdown Editor' },
    { path: '/editor/mermaid', name: 'Mermaid Editor' }
  ];

  const timeTools = [
    { path: '/time/timestamp-converter', name: 'Timestamp Converter' },
    { path: '/time/timezone-converter', name: 'Timezone Converter' },
    { path: '/time/date-calculator', name: 'Date Calculator' }
  ];

  const navItems = [
    { path: '/', key: 'home', icon: Home },
    { path: '/json', key: 'json', icon: FileJson, tools: jsonTools, dropdownWidth: 'w-56' },
    { path: '/network', key: 'network', icon: Network, tools: networkTools, dropdownWidth: 'w-64' },
    { path: '/text', key: 'text', icon: Text, tools: textTools, dropdownWidth: 'w-64' },
    { path: '/regex', key: 'regex', icon: Hash },
    { path: '/editor', key: 'editor', icon: Edit, tools: editorTools, dropdownWidth: 'w-52' },
    { path: '/time', key: 'time', icon: Clock, tools: timeTools, dropdownWidth: 'w-64' },
    { path: '/encryption', key: 'encryption', icon: Key }
  ];

  return (
    <nav className="max-w-full px-2 sm:px-4 mb-4 bg-gradient-to-r from-background/90 to-background/70 backdrop-blur-md border border-border/60 rounded-2xl shadow-xl transition-all duration-300">
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
