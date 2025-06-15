
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh-CN', name: '简体中文' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'ja', name: '日本語' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-3 rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
          <Languages size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-border bg-background/95 backdrop-blur-md">
        {languages.map(({ code, name }) => (
          <DropdownMenuItem key={code} onClick={() => i18n.changeLanguage(code)} className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
