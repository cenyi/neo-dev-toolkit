import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, Braces, Brackets } from 'lucide-react';
import { cn } from '@/lib/utils';

interface JsonFormViewProps {
  data: string;
  sortMode?: 'none' | 'asc' | 'desc';
  expandAll?: boolean;
  collapseAll?: boolean;
}

const JsonFormView: React.FC<JsonFormViewProps> = ({ 
  data, 
  sortMode = 'none', 
  expandAll = false, 
  collapseAll = false 
}) => {
  const formData = useMemo(() => {
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }, [data]);

  // 使用useEffect来处理数据变化时的路径重新生成
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set());

  // 当数据变化时重新生成所有路径并全部展开
  React.useEffect(() => {
    if (!data) {
      setExpandedPaths(new Set());
      return;
    }
    
    try {
      const parsed = JSON.parse(data);
      const allPaths = new Set<string>();
      
      const addAllPaths = (obj: unknown, currentPath: string = '') => {
        // 对于对象类型
        if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
          // 总是添加当前路径（包括空路径）
          allPaths.add(currentPath);
          
          // 遍历对象的所有属性
          Object.entries(obj).forEach(([key, value]) => {
            const newPath = currentPath ? `${currentPath}.${key}` : key;
            
            // 如果值是对象或数组，继续递归
            if (value !== null && (typeof value === 'object' || Array.isArray(value))) {
              addAllPaths(value, newPath);
            }
          });
        } 
        // 对于数组类型
        else if (Array.isArray(obj)) {
          // 总是添加当前路径（包括空路径）
          allPaths.add(currentPath);
          
          // 遍历数组的所有元素
          obj.forEach((item, index) => {
            const newPath = currentPath ? `${currentPath}[${index}]` : `[${index}]`;
            
            // 如果元素是对象或数组，继续递归
            if (item !== null && (typeof item === 'object' || Array.isArray(item))) {
              addAllPaths(item, newPath);
            }
          });
        }
      };
      
      addAllPaths(parsed);
      
      setExpandedPaths(allPaths);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      setExpandedPaths(new Set());
    }
  }, [data]);

  // 处理全局展开/折叠
  React.useEffect(() => {
    if (expandAll) {
      // 获取所有可折叠的路径
      const getAllPaths = (obj: unknown, currentPath: string = ''): string[] => {
        const paths: string[] = [];
        
        // 对于对象类型
        if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
          paths.push(currentPath);
          Object.entries(obj).forEach(([key, value]) => {
            const newPath = currentPath ? `${currentPath}.${key}` : key;
            // 如果值是对象或数组，继续递归
            if (value !== null && (typeof value === 'object' || Array.isArray(value))) {
              paths.push(...getAllPaths(value, newPath));
            }
          });
        } 
        // 对于数组类型
        else if (Array.isArray(obj)) {
          paths.push(currentPath);
          obj.forEach((item, index) => {
            const newPath = currentPath ? `${currentPath}[${index}]` : `[${index}]`;
            // 如果元素是对象或数组，继续递归
            if (item !== null && (typeof item === 'object' || Array.isArray(item))) {
              paths.push(...getAllPaths(item, newPath));
            }
          });
        }
        
        return paths;
      };
      
      if (formData) {
        const allPaths = getAllPaths(formData);
        setExpandedPaths(new Set(allPaths));
      }
    }
  }, [expandAll, formData]);

  React.useEffect(() => {
    if (collapseAll) {
      setExpandedPaths(new Set());
    }
  }, [collapseAll]);

  const toggleExpanded = (path: string) => {
    setExpandedPaths(prev => {
      const newSet = new Set(prev);
      if (newSet.has(path)) {
        newSet.delete(path);
      } else {
        newSet.add(path);
      }
      return newSet;
    });
  };

  const renderFormField = (key: string, value: unknown, path: string = '') => {
    // 处理数组索引的路径格式，避免添加额外的点
    const fullPath = path ? 
      (key.startsWith('[') ? `${path}${key}` : `${path}.${key}`) 
      : key;
    
    if (value === null) {
      return (
        <div key={fullPath} className="space-y-2">
          <Label htmlFor={fullPath} className="text-sm font-medium">{key}</Label>
          <div className="flex items-center space-x-2">
            <Input id={fullPath} value="null" readOnly className="bg-muted" />
            <Badge variant="outline">null</Badge>
          </div>
        </div>
      );
    }
    
    if (typeof value === 'object' && !Array.isArray(value)) {
      let entries = Object.entries(value);
      if (sortMode !== 'none') {
        entries = entries.sort(([a], [b]) => {
          const compareResult = a.localeCompare(b);
          return sortMode === 'asc' ? compareResult : -compareResult;
        });
      }
      
      const isExpanded = expandedPaths.has(fullPath);
      
      return (
        <Card key={fullPath} className="mt-4">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => toggleExpanded(fullPath)}
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
                <Braces className="h-4 w-4 text-blue-500" />
                <Label className="text-sm font-semibold text-primary">{key}</Label>
              </div>
              <Badge variant="outline" className="text-xs">
                {entries.length} keys
              </Badge>
            </div>
          </CardHeader>
          {isExpanded && (
            <CardContent className="pt-0">
              <div className="space-y-4 ml-4 border-l-2 border-muted pl-4">
                {entries.map(([subKey, subValue]) => 
                  renderFormField(subKey, subValue, fullPath)
                )}
              </div>
            </CardContent>
          )}
        </Card>
      );
    }
    
    if (Array.isArray(value)) {
      const isExpanded = expandedPaths.has(fullPath);
      
      return (
        <Card key={fullPath} className="mt-4">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => toggleExpanded(fullPath)}
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
                <Brackets className="h-4 w-4 text-purple-500" />
                <Label className="text-sm font-semibold text-primary">{key}</Label>
              </div>
              <Badge variant="outline" className="text-xs">
                {value.length} items
              </Badge>
            </div>
          </CardHeader>
          {isExpanded && (
            <CardContent className="pt-0">
              <div className="space-y-4 ml-4 border-l-2 border-muted pl-4">
                {value.map((item, index) => 
                  renderFormField(`[${index}]`, item, fullPath)
                )}
              </div>
            </CardContent>
          )}
        </Card>
      );
    }
    
    const getValueType = (val: unknown) => {
      if (typeof val === 'boolean') return 'boolean';
      if (typeof val === 'number') return 'number';
      if (typeof val === 'string') return 'string';
      return 'unknown';
    };
    
    return (
      <div key={fullPath} className="space-y-2">
        <Label htmlFor={fullPath} className="text-sm font-medium">{key}</Label>
        <div className="flex items-center space-x-2">
          <Input 
            id={fullPath} 
            value={String(value)} 
            readOnly 
            className={typeof value === 'boolean' ? 'bg-blue-50 dark:bg-blue-950' : 
                     typeof value === 'number' ? 'bg-green-50 dark:bg-green-950' : 
                     'bg-muted'} 
          />
          <Badge variant="outline">{getValueType(value)}</Badge>
        </div>
      </div>
    );
  };

  if (!formData) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground">
        <p>Invalid JSON data</p>
      </div>
    );
  }

  if (typeof formData !== 'object') {
    return (
      <div className="p-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Value</Label>
          <div className="flex items-center space-x-2">
            <Input value={String(formData)} readOnly className="bg-muted" />
            <Badge variant="outline">{typeof formData}</Badge>
          </div>
        </div>
      </div>
    );
  }

  const topLevelEntries = Object.entries(formData);
  const sortedEntries = sortMode !== 'none'
    ? topLevelEntries.sort(([a], [b]) => {
        const compareResult = a.localeCompare(b);
        return sortMode === 'asc' ? compareResult : -compareResult;
      })
    : topLevelEntries;

  return (
    <div className="h-full overflow-auto p-4">
      <div className="space-y-4">
        {sortedEntries.map(([key, value]) => 
          renderFormField(key, value)
        )}
      </div>
    </div>
  );
};

export default JsonFormView;