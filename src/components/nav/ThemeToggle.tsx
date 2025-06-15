
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Monitor, Palette, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const themeConfigs = [
    { value: 'light', label: t('common.light'), icon: <Sun className="h-4 w-4" /> },
    { value: 'dark', label: t('common.dark'), icon: <Moon className="h-4 w-4" /> },
    { value: 'blue', label: t('common.blue'), icon: <Palette className="h-4 w-4" /> },
    { value: 'matrix', label: "Matrix", icon: <Terminal className="h-4 w-4" /> },
    { value: 'system', label: t('common.system'), icon: <Monitor className="h-4 w-4" /> },
  ];

  const TriggerIcon = () => {
    if (theme === 'light') return <Sun className="h-5 w-5" />;
    if (theme === 'dark') return <Moon className="h-5 w-5" />;
    if (theme === 'blue') return <Palette className="h-5 w-5" />;
    if (theme === 'matrix') return <Terminal className="h-5 w-5" />;
    return <Monitor className="h-5 w-5" />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl">
          <TriggerIcon />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup 
          value={theme} 
          onValueChange={(value) => {
            if (value) setTheme(value as any);
          }}
        >
          {themeConfigs.map(({ value, label, icon }) => (
            <DropdownMenuRadioItem key={value} value={value} className="cursor-pointer">
              <div className="flex items-center gap-2">
                {icon}
                <span>{label}</span>
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
