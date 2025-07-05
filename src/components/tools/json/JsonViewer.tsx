import React, { useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronRight, Copy, Search, Eye, EyeOff, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface JsonViewerProps {
  jsonData: string;
  isValid: boolean;
}

interface NodeState {
  expanded: Set<string>;
  searchTerm: string;
  showOnlyMatches: boolean;
  viewMode: 'tree' | 'raw';
}

interface TreeNodeProps {
  data: any;
  path: string;
  level: number;
  nodeState: NodeState;
  onToggleExpand: (path: string) => void;
  onCopyValue: (value: any) => void;
  searchMatches: Set<string>;
}

const TreeNode: React.FC<TreeNodeProps> = ({ 
  data, 
  path, 
  level, 
  nodeState,
  onToggleExpand,
  onCopyValue,
  searchMatches
}) => {
  const { t } = useTranslation();
  const isExpanded = nodeState.expanded.has(path);
  const hasSearchMatch = searchMatches.has(path);
  const shouldHide = nodeState.showOnlyMatches && nodeState.searchTerm && !hasSearchMatch;
  
  if (shouldHide) return null;

  const getTypeInfo = (value: any) => {
    if (value === null) return { type: 'null', color: 'text-slate-500 dark:text-slate-400', bgColor: 'bg-slate-100 dark:bg-slate-800' };
    if (Array.isArray(value)) return { type: 'array', color: 'text-orange-600 dark:text-orange-400', bgColor: 'bg-orange-50 dark:bg-orange-900/20' };
    if (typeof value === 'object') return { type: 'object', color: 'text-red-600 dark:text-red-400', bgColor: 'bg-red-50 dark:bg-red-900/20' };
    if (typeof value === 'string') return { type: 'string', color: 'text-green-600 dark:text-green-400', bgColor: 'bg-green-50 dark:bg-green-900/20' };
    if (typeof value === 'number') return { type: 'number', color: 'text-blue-600 dark:text-blue-400', bgColor: 'bg-blue-50 dark:bg-blue-900/20' };
    if (typeof value === 'boolean') return { type: 'boolean', color: 'text-purple-600 dark:text-purple-400', bgColor: 'bg-purple-50 dark:bg-purple-900/20' };
    return { type: 'unknown', color: 'text-gray-600 dark:text-gray-400', bgColor: 'bg-gray-50 dark:bg-gray-800' };
  };

  const renderValue = (value: any, key?: string) => {
    const typeInfo = getTypeInfo(value);
    const displayKey = key !== undefined ? `"${key}"` : null;
    
    if (typeInfo.type === 'object' || typeInfo.type === 'array') {
      const isObj = typeInfo.type === 'object';
      const entries = isObj ? Object.entries(value) : value.map((item: any, index: number) => [index, item]);
      const count = entries.length;
      
      return (
        <div className="w-full">
          <div className={cn(
            "flex items-center gap-2 p-2 rounded-md hover:bg-accent/50 transition-colors group",
            hasSearchMatch && "bg-yellow-100 dark:bg-yellow-900/30"
          )}>
            <Button
              variant="ghost"
              size="sm"
              className="h-5 w-5 p-0 flex-shrink-0"
              onClick={() => onToggleExpand(path)}
            >
              {isExpanded ? (
                <ChevronDown className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
            </Button>
            
            <div className="flex items-center gap-2 flex-1 min-w-0">
              {displayKey && (
                <span className="font-medium text-foreground flex-shrink-0">{displayKey}:</span>
              )}
              <Badge variant="secondary" className={cn("text-xs", typeInfo.color, typeInfo.bgColor)}>
                {isObj ? '{' : '['} {count} {typeInfo.type === 'object' ? 'properties' : 'items'} {isObj ? '}' : ']'}
              </Badge>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
              onClick={() => onCopyValue(value)}
            >
              <Copy className="h-3 w-3" />
            </Button>
          </div>
          
          {isExpanded && (
            <div className="ml-4 border-l-2 border-border pl-2 mt-1">
              {entries.map(([entryKey, entryValue], index) => (
                <TreeNode
                  key={`${path}.${entryKey}`}
                  data={entryValue}
                  path={`${path}.${entryKey}`}
                  level={level + 1}
                  nodeState={nodeState}
                  onToggleExpand={onToggleExpand}
                  onCopyValue={onCopyValue}
                  searchMatches={searchMatches}
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    const displayValue = typeInfo.type === 'string' 
      ? `"${value}"` 
      : typeInfo.type === 'null' 
        ? 'null' 
        : String(value);

    return (
      <div className={cn(
        "flex items-center gap-2 p-2 rounded-md hover:bg-accent/50 transition-colors group",
        hasSearchMatch && "bg-yellow-100 dark:bg-yellow-900/30"
      )}>
        <div className="w-5 flex-shrink-0" />
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {displayKey && (
            <span className="font-medium text-foreground flex-shrink-0">{displayKey}:</span>
          )}
          <span className={cn("truncate", typeInfo.color)} title={displayValue}>
            {displayValue}
          </span>
          <Badge variant="outline" className="text-xs flex-shrink-0">
            {typeInfo.type}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-5 w-5 p-0 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
          onClick={() => onCopyValue(value)}
        >
          <Copy className="h-3 w-3" />
        </Button>
      </div>
    );
  };

  return renderValue(data, path.split('.').pop());
};

const JsonViewer: React.FC<JsonViewerProps> = ({ jsonData, isValid }) => {
  const { t } = useTranslation();
  const [nodeState, setNodeState] = useState<NodeState>({
    expanded: new Set(['root']),
    searchTerm: '',
    showOnlyMatches: false,
    viewMode: 'tree'
  });

  const parsedData = useMemo(() => {
    if (!isValid || !jsonData.trim()) return null;
    try {
      return JSON.parse(jsonData);
    } catch {
      return null;
    }
  }, [jsonData, isValid]);

  const searchMatches = useMemo(() => {
    const matches = new Set<string>();
    if (!nodeState.searchTerm || !parsedData) return matches;
    
    const searchInNode = (obj: any, currentPath: string) => {
      const searchLower = nodeState.searchTerm.toLowerCase();
      
      // 检查键名
      const key = currentPath.split('.').pop();
      if (key && key.toLowerCase().includes(searchLower)) {
        matches.add(currentPath);
      }
      
      // 检查值
      if (obj !== null && typeof obj !== 'object') {
        if (String(obj).toLowerCase().includes(searchLower)) {
          matches.add(currentPath);
        }
      } else if (obj && typeof obj === 'object') {
        Object.keys(obj).forEach(objKey => {
          const newPath = currentPath === 'root' ? objKey : `${currentPath}.${objKey}`;
          searchInNode(obj[objKey], newPath);
        });
      }
    };
    
    searchInNode(parsedData, 'root');
    return matches;
  }, [parsedData, nodeState.searchTerm]);

  const handleToggleExpand = useCallback((path: string) => {
    setNodeState(prev => {
      const newExpanded = new Set(prev.expanded);
      if (newExpanded.has(path)) {
        newExpanded.delete(path);
      } else {
        newExpanded.add(path);
      }
      return { ...prev, expanded: newExpanded };
    });
  }, []);

  const handleCopyValue = useCallback((value: any) => {
    const textValue = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
    navigator.clipboard.writeText(textValue);
    toast({
      title: t('toasts.common.success'),
      description: t('toasts.success.copied'),
    });
  }, [t]);

  const handleExpandAll = useCallback(() => {
    if (!parsedData) return;
    
    const getAllPaths = (obj: any, currentPath = 'root'): string[] => {
      const paths = [currentPath];
      if (obj && typeof obj === 'object') {
        Object.keys(obj).forEach(key => {
          const newPath = currentPath === 'root' ? key : `${currentPath}.${key}`;
          paths.push(...getAllPaths(obj[key], newPath));
        });
      }
      return paths;
    };
    
    setNodeState(prev => ({
      ...prev,
      expanded: new Set(getAllPaths(parsedData))
    }));
  }, [parsedData]);

  const handleCollapseAll = useCallback(() => {
    setNodeState(prev => ({
      ...prev,
      expanded: new Set(['root'])
    }));
  }, []);

  if (!isValid || !parsedData) {
    return (
      <div className="h-[700px] flex flex-col bg-background border rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">{t('tools.json.viewer.title')}</h3>
        </div>
        <div className="flex-1 flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <Eye className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p>{t('tools.json.viewer.invalidJson')}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[700px] flex flex-col bg-background border rounded-lg overflow-hidden">
      <div className="p-4 border-b space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{t('tools.json.viewer.title')}</h3>
          <div className="flex items-center gap-2">
            <Button 
              variant={nodeState.viewMode === 'tree' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setNodeState(prev => ({ ...prev, viewMode: 'tree' }))}
            >
              树状视图
            </Button>
            <Button 
              variant={nodeState.viewMode === 'raw' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setNodeState(prev => ({ ...prev, viewMode: 'raw' }))}
            >
              原始数据
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="搜索键或值..."
              value={nodeState.searchTerm}
              onChange={(e) => setNodeState(prev => ({ ...prev, searchTerm: e.target.value }))}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setNodeState(prev => ({ ...prev, showOnlyMatches: !prev.showOnlyMatches }))}
            className={nodeState.showOnlyMatches ? 'bg-primary text-primary-foreground' : ''}
          >
            <Filter className="h-4 w-4 mr-1" />
            仅显示匹配
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleExpandAll}>
            {t('tools.json.viewer.expandAll')}
          </Button>
          <Button variant="outline" size="sm" onClick={handleCollapseAll}>
            {t('tools.json.viewer.collapseAll')}
          </Button>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-sm text-muted-foreground">
            {searchMatches.size > 0 && `找到 ${searchMatches.size} 个匹配项`}
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto p-4">
        {nodeState.viewMode === 'tree' ? (
          <TreeNode
            data={parsedData}
            path="root"
            level={0}
            nodeState={nodeState}
            onToggleExpand={handleToggleExpand}
            onCopyValue={handleCopyValue}
            searchMatches={searchMatches}
          />
        ) : (
          <pre className="text-sm font-mono whitespace-pre-wrap break-words text-foreground">
            {JSON.stringify(parsedData, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default JsonViewer;