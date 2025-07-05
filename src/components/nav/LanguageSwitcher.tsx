
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

const languageNames: { [key: string]: string } = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ru: 'Русский',
  ja: '日本語',
  ko: '한국어',
  zh: '简体中文',
};

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const availableLanguages = Object.keys(i18n.options.resources || {});

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-3 rounded-xl hover:bg-accent hover:text-accent-foreground">
          <Languages size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-border bg-background/95 backdrop-blur-md">
        {availableLanguages.map((code) => (
          <DropdownMenuItem key={code} onClick={() => i18n.changeLanguage(code)} className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
            {languageNames[code] || code}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
