import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  Braces, 
  Brackets, 
  Type, 
  Hash, 
  ToggleLeft, 
  Quote,
  Circle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface JsonTreeViewProps {
  data: string;
  expandAll?: boolean;
  collapseAll?: boolean;
  sortMode?: 'none' | 'asc' | 'desc';
  onExpandAllChange?: (expanded: boolean) => void;
  onCollapseAllChange?: (collapsed: boolean) => void;
}

interface TreeNodeProps {
  name: string;
  value: unknown;
  level: number;
  isLast?: boolean;
  path: string;
  expandAll?: boolean;
  collapseAll?: boolean;
  sortMode?: 'none' | 'asc' | 'desc';
}

const TreeNode: React.FC<TreeNodeProps> = ({ 
  name, 
  value, 
  level, 
  isLast = false, 
  path, 
  expandAll = false,
  collapseAll = false,
  sortMode = 'none'
}) => {
  const [isExpanded, setIsExpanded] = useState(level < 2); // Auto-expand first 2 levels
  
  // 处理全局展开/折叠控制
  useEffect(() => {
    if (expandAll) {
      setIsExpanded(true);
    }
  }, [expandAll]);
  
  useEffect(() => {
    if (collapseAll) {
      setIsExpanded(false);
    }
  }, [collapseAll]);
  
  const getValueType = (val: unknown): string => {
    if (val === null) return 'null';
    if (Array.isArray(val)) return 'array';
    if (typeof val === 'object') return 'object';
    return typeof val;
  };
  
  const getValuePreview = (val: unknown): string => {
    if (val === null) return 'null';
    if (Array.isArray(val)) return `[${val.length} items]`;
    if (typeof val === 'object') return `{${Object.keys(val as Record<string, unknown>).length} keys}`;
    if (typeof val === 'string') return `"${val.length > 50 ? val.substring(0, 50) + '...' : val}"`;
    return String(val);
  };
  
  const isExpandable = (val: unknown): boolean => {
    return (typeof val === 'object' && val !== null) || Array.isArray(val);
  };
  
  const hasChildren = isExpandable(value);
  const indent = level * 20;
  
  // 根据数据类型返回对应的图标
  const getValueIcon = (val: unknown) => {
    if (val === null) return <Circle className="h-4 w-4 text-gray-400" />;
    if (Array.isArray(val)) return <Brackets className="h-4 w-4 text-purple-500" />;
    if (typeof val === 'object') return <Braces className="h-4 w-4 text-blue-500" />;
    if (typeof val === 'string') return <Quote className="h-4 w-4 text-green-500" />;
    if (typeof val === 'number') return <Hash className="h-4 w-4 text-orange-500" />;
    if (typeof val === 'boolean') return <ToggleLeft className="h-4 w-4 text-indigo-500" />;
    return <Type className="h-4 w-4 text-gray-500" />;
  };
  
  const renderChildren = () => {
    if (!hasChildren || !isExpanded) return null;
    
    if (Array.isArray(value)) {
      return value.map((item, index) => (
        <TreeNode
          key={`${path}[${index}]`}
          name={`[${index}]`}
          value={item}
          level={level + 1}
          isLast={index === value.length - 1}
          path={`${path}[${index}]`}
          expandAll={expandAll}
          collapseAll={collapseAll}
          sortMode={sortMode}
        />
      ));
    }
    
    if (typeof value === 'object' && value !== null) {
      let entries = Object.entries(value as Record<string, unknown>);
      
      // 如果启用排序，则按键名排序
      if (sortMode !== 'none') {
        entries = entries.sort(([a], [b]) => {
          const compareResult = a.localeCompare(b);
          return sortMode === 'asc' ? compareResult : -compareResult;
        });
      }
      
      return entries.map(([key, val], index) => (
        <TreeNode
          key={`${path}.${key}`}
          name={key}
          value={val}
          level={level + 1}
          isLast={index === entries.length - 1}
          path={`${path}.${key}`}
          expandAll={expandAll}
          collapseAll={collapseAll}
          sortMode={sortMode}
        />
      ));
    }
    
    return null;
  };
  
  return (
    <div className="select-none">
      <div 
        className={cn(
          "flex items-center py-1 px-2 hover:bg-muted/50 rounded-sm cursor-pointer transition-colors",
          "text-sm"
        )}
        style={{ paddingLeft: `${8 + indent}px` }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center flex-1 min-w-0">
          <div className="flex items-center mr-1">
            {hasChildren && (
              isExpanded ? (
                <ChevronDown className="h-4 w-4 text-muted-foreground mr-1" />
              ) : (
                <ChevronRight className="h-4 w-4 text-muted-foreground mr-1" />
              )
            )}
            <div className="mr-2">
              {getValueIcon(value)}
            </div>
          </div>
          
          <span className="font-medium text-foreground mr-2 truncate">
            {name}
          </span>
          
          <Badge 
            variant="outline" 
            className={cn(
              "text-xs mr-2 px-1.5 py-0.5 font-mono",
              getValueType(value) === 'string' && "bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
              getValueType(value) === 'number' && "bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
              getValueType(value) === 'boolean' && "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
              getValueType(value) === 'null' && "bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700",
              getValueType(value) === 'array' && "bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
              getValueType(value) === 'object' && "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800"
            )}
          >
            {getValueType(value)}
          </Badge>
          
          {!hasChildren && (
            <span className={cn(
              "text-xs truncate flex-1 font-mono",
              typeof value === 'string' && "text-green-600 dark:text-green-400",
              typeof value === 'number' && "text-orange-600 dark:text-orange-400",
              typeof value === 'boolean' && "text-indigo-600 dark:text-indigo-400",
              value === null && "text-gray-500 dark:text-gray-400 italic"
            )}>
              {getValuePreview(value)}
            </span>
          )}
          
          {hasChildren && (
            <span className="text-muted-foreground text-xs font-mono">
              {getValuePreview(value)}
            </span>
          )}
        </div>
      </div>
      
      {renderChildren()}
    </div>
  );
};

const JsonTreeView: React.FC<JsonTreeViewProps> = ({ 
  data, 
  expandAll = false, 
  collapseAll = false, 
  sortMode = 'none',
  onExpandAllChange,
  onCollapseAllChange
}) => {
  const treeData = useMemo(() => {
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }, [data]);

  // 重置展开/折叠状态的回调
  useEffect(() => {
    if (expandAll && onExpandAllChange) {
      const timer = setTimeout(() => onExpandAllChange(false), 100);
      return () => clearTimeout(timer);
    }
  }, [expandAll, onExpandAllChange]);

  useEffect(() => {
    if (collapseAll && onCollapseAllChange) {
      const timer = setTimeout(() => onCollapseAllChange(false), 100);
      return () => clearTimeout(timer);
    }
  }, [collapseAll, onCollapseAllChange]);

  if (!treeData) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground">
        <p>Invalid JSON data</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <ScrollArea className="flex-1">
        <div className="p-2">
          <TreeNode 
            name="root" 
            value={treeData} 
            level={0} 
            path="root"
            expandAll={expandAll}
            collapseAll={collapseAll}
            sortMode={sortMode}
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default JsonTreeView;