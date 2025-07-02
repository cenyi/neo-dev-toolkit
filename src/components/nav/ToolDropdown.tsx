
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface Tool {
  path: string;
  name: string;
}

interface ToolDropdownProps {
  navKey: string;
  tools: Tool[];
  Icon: React.ElementType;
  contentWidth?: string;
}

const ToolDropdown: React.FC<ToolDropdownProps> = ({ navKey, tools, Icon, contentWidth = 'w-64' }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = tools.some(tool => location.pathname === tool.path);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground ${isActive ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}>
          <Icon size={16} />
          <span>{t(`nav.${navKey}`)}</span>
          <ChevronDown size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`border-border bg-background/95 backdrop-blur-md ${contentWidth}`}>
        {tools.map((tool) => (
          <DropdownMenuItem
            key={tool.path}
            onClick={() => navigate(tool.path)}
            className="cursor-pointer hover:bg-accent hover:text-accent-foreground"
          >
            {tool.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToolDropdown;
