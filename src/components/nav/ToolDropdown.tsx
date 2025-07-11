
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
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
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isActive = tools.some(tool => location.pathname === tool.path);

  const handleMouseEnter = () => {
    console.log('Mouse entered, opening dropdown');
    setIsOpen(true);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      console.log('Mouse left container');
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative p-1 nav-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      tabIndex={0}
    >
      <button
  ref={buttonRef}
  className={`nav-button px-4 py-2.5 rounded-xl text-sm font-medium flex items-center space-x-2.5 hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:shadow-md transition-colors duration-150 py-2 ${isActive ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
>
        <Icon size={16} />
        <span>{t(`nav.${navKey}`)}</span>
        <ChevronDown size={16} />
      </button>
      
      {isOpen && (
        <DropdownMenu
          open={isOpen}
          onOpenChange={setIsOpen}
          modal={false}
        >
          <DropdownMenuContent
  className="absolute top-full mt-1 z-50 border-border bg-background/95 backdrop-blur-md"
  style={{
    minWidth: buttonRef.current?.offsetWidth,
    left: containerRef.current 
      ? buttonRef.current?.offsetLeft
      : 0
  }}
>
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
      )}
    </div>
  );
};

export default ToolDropdown;
