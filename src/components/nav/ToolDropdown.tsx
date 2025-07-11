// 导入必要的React钩子
import { useState, useRef } from 'react';
// 导入国际化钩子
import { useTranslation } from 'react-i18next';
// 导入路由相关钩子
import { useLocation, useNavigate } from 'react-router-dom';
// 导入下拉菜单组件
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
// 导入下拉箭头图标
import { ChevronDown } from 'lucide-react';

// 工具接口定义
interface Tool {
  path: string;  // 工具的路由路径
  name: string;  // 工具的显示名称
}

// 下拉菜单组件属性接口
interface ToolDropdownProps {
  navKey: string;  // 导航键，用于国际化翻译
  tools: Tool[];  // 工具列表
  Icon: React.ElementType;  // 图标组件
  contentWidth?: string;  // 内容宽度（可选）
}

// 工具下拉菜单组件
const ToolDropdown: React.FC<ToolDropdownProps> = ({ navKey, tools, Icon, contentWidth = 'w-64' }) => {
  // 国际化翻译函数
  const { t } = useTranslation();

  // 当前位置信息
  const location = useLocation();
  // 导航函数
  const navigate = useNavigate();
  // 下拉菜单是否打开的状态
  const [isOpen, setIsOpen] = useState(false);
  // 按钮引用
  const buttonRef = useRef<HTMLButtonElement>(null);
  // 容器引用
  const containerRef = useRef<HTMLDivElement>(null);

  // 2025-07-11修正：用于存储菜单定位
  const [dropdownPosition, setDropdownPosition] = useState<{left: number; top: number; width: number}>({left: 0, top: 0, width: 160});

  // 检查当前是否有激活的工具
  const isActive = tools.some(tool => location.pathname === tool.path);

  // 鼠标进入处理函数
  const handleMouseEnter = () => {
    // 2025-07-11修正：菜单打开时获取按钮位置并设置菜单定位
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        left: rect.left,
        top: rect.bottom + 4, // 下移4px间距
        width: rect.width
      });
    }
    setIsOpen(true);
  };

  // 鼠标离开处理函数
  const handleMouseLeave = (e: React.MouseEvent) => {
    if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget as Node)) {
      return;
    }
    setIsOpen(false);
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
      {/* 导航按钮 */}
      <button
        ref={buttonRef}
        className={`nav-button px-4 py-2.5 rounded-xl text-sm font-medium flex items-center space-x-2.5 hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:shadow-md transition-colors duration-150 py-2 ${isActive ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'}`}
      >
        <Icon size={16} />
        <span>{t(`nav.${navKey}`)}</span>
        <ChevronDown size={16} />
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <DropdownMenu
          open={isOpen}
          onOpenChange={setIsOpen}
          modal={false}
        >
          <DropdownMenuContent
            // className="absolute top-full mt-1 z-50 border-border bg-background/95 backdrop-blur-md"
            // style={{
            //   minWidth: buttonRef.current?.offsetWidth,  // 最小宽度与按钮相同
            //   left: containerRef.current 
            //     ? buttonRef.current?.offsetLeft
            //     : 0  // 左对齐按钮
            // }}
            // ---------------------------2025-07-11修正：采用fixed定位与getBoundingClientRect---------------------------
            className="z-50 border-border bg-background/95 backdrop-blur-md shadow-xl rounded-md"
            style={{
              position: "fixed",
              left: dropdownPosition.left,
              top: dropdownPosition.top,
              minWidth: dropdownPosition.width,
              marginTop: 0,
            }}
            // --------------------------------------------------------------------------------------------------------
          >
            {/* 渲染工具列表 */}
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