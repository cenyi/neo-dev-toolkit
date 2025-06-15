
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Moon, Sun, Languages, Home, ChevronDown, FileJson, Network } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const {
    theme,
    toggleTheme
  } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const languages = [{
    code: 'en',
    name: 'English'
  }, {
    code: 'zh-CN',
    name: '简体中文'
  }, {
    code: 'zh-TW',
    name: '繁體中文'
  }, {
    code: 'ja',
    name: '日本語'
  }];

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

  const navItems = [{
    path: '/',
    key: 'home',
    icon: Home
  }, {
    path: '/json',
    key: 'json',
    icon: FileJson
  }, {
    path: '/network',
    key: 'network',
    icon: Network
  }, {
    path: '/text',
    key: 'text'
  }, {
    path: '/crypto',
    key: 'crypto'
  }, {
    path: '/markdown',
    key: 'markdown'
  }, {
    path: '/mermaid',
    key: 'mermaid'
  }];
  return <nav className="mx-4 mb-2 bg-background/80 backdrop-blur-md border border-border rounded-2xl shadow-lg">
      <div className="flex items-center justify-between p-4 px-[4px] py-[4px]">
        <div className="flex items-center space-x-1">
          {navItems.map(({
          path,
          key,
          icon: Icon
        }) => {
            if (key === 'json') {
              const isJsonPageActive = jsonTools.some(tool => location.pathname === tool.path);
              return (
                <DropdownMenu key={key}>
                  <DropdownMenuTrigger asChild>
                    <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground ${isJsonPageActive ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}>
                      {Icon && <Icon size={16} />}
                      <span>{t(`nav.${key}`)}</span>
                      <ChevronDown size={16} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="border-border bg-background/95 backdrop-blur-md w-56">
                    {jsonTools.map((tool) => (
                        <DropdownMenuItem key={tool.path} onClick={() => navigate(tool.path)} className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                          {tool.name}
                        </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            if (key === 'network') {
              const isNetworkPageActive = networkTools.some(tool => location.pathname === tool.path);
              return (
                <DropdownMenu key={key}>
                  <DropdownMenuTrigger asChild>
                    <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground ${isNetworkPageActive ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}>
                      {Icon && <Icon size={16} />}
                      <span>{t(`nav.${key}`)}</span>
                      <ChevronDown size={16} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="border-border bg-background/95 backdrop-blur-md w-64">
                    {networkTools.map((tool) => (
                        <DropdownMenuItem key={tool.path} onClick={() => navigate(tool.path)} className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                          {tool.name}
                        </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <Link key={path} to={path!}>
                <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground ${location.pathname === path ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}>
                  {Icon && <Icon size={16} />}
                  <span>{t(`nav.${key}`)}</span>
                </button>
              </Link>
            )
        })}
        </div>
        
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-3 rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                <Languages size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-border bg-background/95 backdrop-blur-md">
              {languages.map(({
              code,
              name
            }) => <DropdownMenuItem key={code} onClick={() => i18n.changeLanguage(code)} className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                  {name}
                </DropdownMenuItem>)}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button onClick={toggleTheme} className="p-3 rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors duration-200" aria-label={t('common.theme')}>
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>
    </nav>;
};
export default Navigation;
