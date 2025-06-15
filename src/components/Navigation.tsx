
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileJson, Network, Text, Key, Code, LayoutGrid, Clock } from 'lucide-react';
import ThemeToggle from './nav/ThemeToggle';
import LanguageSwitcher from './nav/LanguageSwitcher';
import ToolDropdown from './nav/ToolDropdown';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const jsonTools = [
    { path: '/json', name: 'JSON Formatter & Validator' },
    { path: '/json-schema-validator', name: 'JSON Schema Validator' },
    { path: '/json-codegen', name: 'Generate Code Types' },
    { path: '/json-diff', name: 'Diff Tool' },
    { path: '/json-mock', name: 'Mock Data Generator' }
  ];

  const networkTools = [
    { path: '/network', name: 'URL Encoder / Decoder' },
    { path: '/base64-encoder', name: 'Base64 Encoder / Decoder' },
    { path: '/ip-lookup', name: 'IP Lookup' },
    { path: '/jwt-decoder', name: 'JWT Decoder' },
  ];

  const textTools = [
    { path: '/case-converter', name: 'Case Converter' },
    { path: '/word-counter', name: 'Word & Character Counter' },
    { path: '/text-reverser', name: 'Text Reverser' },
    { path: '/whitespace-remover', name: 'Whitespace Remover' },
    { path: '/lorem-ipsum-generator', name: 'Lorem Ipsum Generator' }
  ];

  const timeTools = [
    { path: '/timestamp-converter', name: 'Timestamp Converter' },
    { path: '/timezone-converter', name: 'Timezone Converter' },
    { path: '/date-calculator', name: 'Date Calculator' }
  ];

  const navItems = [
    { path: '/', key: 'home', icon: Home },
    { path: '/json', key: 'json', icon: FileJson, tools: jsonTools, dropdownWidth: 'w-56' },
    { path: '/network', key: 'network', icon: Network, tools: networkTools, dropdownWidth: 'w-64' },
    { path: '/text', key: 'text', icon: Text, tools: textTools, dropdownWidth: 'w-64' },
    { path: '/time', key: 'time', icon: Clock, tools: timeTools, dropdownWidth: 'w-64' },
    { path: '/encryption', key: 'encryption', icon: Key },
    { path: '/markdown', key: 'markdown', icon: Code },
    { path: '/mermaid', key: 'mermaid', icon: LayoutGrid }
  ];

  return (
    <nav className="mx-4 mb-2 bg-background/80 backdrop-blur-md border border-border rounded-2xl shadow-lg">
      <div className="flex items-center justify-between p-4 px-[4px] py-[4px]">
        <div className="flex items-center space-x-1">
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
              <Link key={path} to={path!}>
                <button
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground ${
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
        
        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
