
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronRight, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface JsonTreeViewProps {
  jsonData: string;
  isValid: boolean;
}

interface TreeNodeProps {
  data: any;
  path: string;
  level: number;
  isLast?: boolean;
  isExpanded?: boolean;
  onToggle?: (path: string) => void;
  expandedNodes?: Set<string>;
}

const TreeNode: React.FC<TreeNodeProps> = ({ 
  data, 
  path, 
  level, 
  isLast = false, 
  expandedNodes = new Set(),
  onToggle 
}) => {
  const { t } = useTranslation();
  const isExpanded = expandedNodes.has(path);
  
  const copyValue = (value: any) => {
    const textValue = typeof value === 'string' ? value : JSON.stringify(value);
    navigator.clipboard.writeText(textValue);
    toast({
      title: t('toasts.common.success'),
      description: t('toasts.success.copied'),
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'string': return 'text-green-600 dark:text-green-400';
      case 'number': return 'text-blue-600 dark:text-blue-400';
      case 'boolean': return 'text-purple-600 dark:text-purple-400';
      case 'null': return 'text-gray-600 dark:text-gray-400';
      case 'array': return 'text-orange-600 dark:text-orange-400';
      case 'object': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const renderValue = (value: any, key?: string) => {
    const type = value === null ? 'null' : Array.isArray(value) ? 'array' : typeof value;
    const typeClass = getTypeColor(type);
    
    if (type === 'object' || type === 'array') {
      const isObj = type === 'object';
      const entries = isObj ? Object.entries(value) : value.map((item: any, index: number) => [index, item]);
      const count = entries.length;
      
      return (
        <div className="flex flex-col">
          <div className="flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 p-1 rounded">
            <Button
              variant="ghost"
              size="sm"
              className="h-4 w-4 p-0"
              onClick={() => onToggle?.(path)}
            >
              {isExpanded ? (
                <ChevronDown className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
            </Button>
            {key && <span className="font-medium text-gray-700 dark:text-gray-300">"{key}":</span>}
            <span className={typeClass}>
              {isObj ? '{' : '['} {count} {isObj ? t('tools.json.viewer.items') : t('tools.json.viewer.elements')} {isObj ? '}' : ']'}
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="h-4 w-4 p-0 opacity-50 hover:opacity-100"
              onClick={() => copyValue(value)}
            >
              <Copy className="h-3 w-3" />
            </Button>
          </div>
          
          {isExpanded && (
            <div className="ml-4 border-l border-gray-300 dark:border-gray-600 pl-2">
              {entries.map(([entryKey, entryValue], index) => (
                <TreeNode
                  key={entryKey}
                  data={entryValue}
                  path={`${path}.${entryKey}`}
                  level={level + 1}
                  isLast={index === entries.length - 1}
                  expandedNodes={expandedNodes}
                  onToggle={onToggle}
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 p-1 rounded">
        <div className="w-4" />
        {key && <span className="font-medium text-gray-700 dark:text-gray-300">"{key}":</span>}
        <span className={typeClass}>
          {type === 'string' ? `"${value}"` : String(value)}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">({type})</span>
        <Button
          variant="ghost"
          size="sm"
          className="h-4 w-4 p-0 opacity-50 hover:opacity-100"
          onClick={() => copyValue(value)}
        >
          <Copy className="h-3 w-3" />
        </Button>
      </div>
    );
  };

  return renderValue(data, path.split('.').pop());
};

const JsonTreeView: React.FC<JsonTreeViewProps> = ({ jsonData, isValid }) => {
  const { t } = useTranslation();
  const [expandedNodes, setExpandedNodes] = React.useState<Set<string>>(new Set(['root']));

  const parsedData = useMemo(() => {
    if (!isValid || !jsonData.trim()) return null;
    try {
      return JSON.parse(jsonData);
    } catch {
      return null;
    }
  }, [jsonData, isValid]);

  const toggleNode = (path: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedNodes(newExpanded);
  };

  const expandAll = () => {
    const getAllPaths = (obj: any, currentPath = 'root'): string[] => {
      const paths = [currentPath];
      if (obj && typeof obj === 'object') {
        Object.keys(obj).forEach(key => {
          const newPath = `${currentPath}.${key}`;
          paths.push(...getAllPaths(obj[key], newPath));
        });
      }
      return paths;
    };
    
    if (parsedData) {
      setExpandedNodes(new Set(getAllPaths(parsedData)));
    }
  };

  const collapseAll = () => {
    setExpandedNodes(new Set(['root']));
  };

  if (!isValid || !parsedData) {
    return (
      <div className="flex-1 flex flex-col bg-background border rounded-lg min-h-[400px] max-h-[600px] overflow-hidden">
        <div className="px-4 pt-4 mb-3">
          <h3 className="text-lg font-semibold">{t('tools.json.viewer.title')}</h3>
        </div>
        <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
          {t('tools.json.viewer.invalidJson')}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-background border rounded-lg min-h-[400px] max-h-[600px] overflow-hidden">
      <div className="px-4 pt-4 mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{t('tools.json.viewer.title')}</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={expandAll}>
            {t('tools.json.viewer.expandAll')}
          </Button>
          <Button variant="outline" size="sm" onClick={collapseAll}>
            {t('tools.json.viewer.collapseAll')}
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto px-4 pb-4">
        <TreeNode
          data={parsedData}
          path="root"
          level={0}
          expandedNodes={expandedNodes}
          onToggle={toggleNode}
        />
      </div>
    </div>
  );
};

export default JsonTreeView;
