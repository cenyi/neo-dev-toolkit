
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'zh', name: '简体中文' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    const newPath = location.pathname.replace(/^\/[^\/]+/, `/${code}`);
    navigate(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-3 rounded-xl hover:bg-accent hover:text-accent-foreground">
          <Languages size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-border bg-background/95 backdrop-blur-md">
        {languages.map(({ code, name }) => (
          <DropdownMenuItem key={code} onClick={() => changeLanguage(code)} className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
