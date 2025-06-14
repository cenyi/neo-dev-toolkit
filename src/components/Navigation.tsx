
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Moon, Sun, Languages, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh-CN', name: '简体中文' },
    { code: 'zh-TW', name: '繁體中文' },
    { code: 'ja', name: '日本語' }
  ];

  const navItems = [
    { path: '/', key: 'home', icon: Home },
    { path: '/json', key: 'json' },
    { path: '/network', key: 'network' },
    { path: '/text', key: 'text' },
    { path: '/crypto', key: 'crypto' },
    { path: '/markdown', key: 'markdown' },
    { path: '/mermaid', key: 'mermaid' }
  ];

  return (
    <nav className="neu-card sticky top-4 z-50 mx-4 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          {navItems.map(({ path, key, icon: Icon }) => (
            <Link key={path} to={path}>
              <button 
                className={`neu-button text-sm flex items-center space-x-2 ${
                  location.pathname === path ? 'pulse-glow' : ''
                }`}
              >
                {Icon && <Icon size={16} />}
                <span>{t(`nav.${key}`)}</span>
              </button>
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="neu-button p-3">
                <Languages size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="neu-card border-0">
              {languages.map(({ code, name }) => (
                <DropdownMenuItem 
                  key={code}
                  onClick={() => i18n.changeLanguage(code)}
                  className="cursor-pointer hover:bg-transparent"
                >
                  {name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button 
            onClick={toggleTheme}
            className="neu-button p-3"
            aria-label={t('common.theme')}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
