
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Monitor, Palette, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const themeConfigs = [
    { value: 'light', label: t('common.light'), icon: <Sun className="h-5 w-5" /> },
    { value: 'dark', label: t('common.dark'), icon: <Moon className="h-5 w-5" /> },
    { value: 'blue', label: t('common.blue'), icon: <Palette className="h-5 w-5" /> },
    { value: 'matrix', label: "Matrix", icon: <Terminal className="h-5 w-5" /> },
    { value: 'system', label: t('common.system'), icon: <Monitor className="h-5 w-5" /> },
  ];

  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={(value) => {
        if (value) setTheme(value as any);
      }}
      className="border border-border rounded-xl p-0.5 bg-background/80"
    >
      {themeConfigs.map(({ value, label, icon }) => (
        <Tooltip key={value} delayDuration={0}>
          <TooltipTrigger asChild>
            <ToggleGroupItem value={value} aria-label={label} className="rounded-[9px] data-[state=on]:bg-accent data-[state=on]:text-accent-foreground border-0 h-8 w-8">
              {icon}
            </ToggleGroupItem>
          </TooltipTrigger>
          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </ToggleGroup>
  );
};

export default ThemeToggle;
