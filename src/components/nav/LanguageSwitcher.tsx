
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Русский' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'zh', name: '中文' },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  // 初始化时从本地存储恢复语言设置
  React.useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang && languages.some(lang => lang.code === savedLang)) {
      i18n.changeLanguage(savedLang);
      // 更新URL以匹配保存的语言
      if (!location.pathname.startsWith(`/${savedLang}`)) {
        const newPath = location.pathname.replace(/^\/[^\/]+/, `/${savedLang}`);
        navigate(newPath, { replace: true });
      }
    }
  }, [i18n, navigate, location.pathname]);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('i18nextLng', code); // 保存语言选择到本地存储
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
