import React, { useMemo, useState, useEffect } from 'react';
import { JsonViewer } from '@textea/json-viewer';
import { useTheme } from '@/contexts/ThemeContext';

interface JsonVisualViewProps {
  data: string;
  sortMode?: 'none' | 'asc' | 'desc';
  expandAll?: boolean;
  collapseAll?: boolean;
}

const JsonVisualView: React.FC<JsonVisualViewProps> = ({ 
  data, 
  sortMode = 'none', 
  expandAll = false, 
  collapseAll = false 
}) => {
  const { theme } = useTheme();
  const [expandKey, setExpandKey] = useState(0);
  const [collapseKey, setCollapseKey] = useState(0);

  // 处理展开/折叠状态变化
  useEffect(() => {
    if (expandAll) {
      setExpandKey(prev => prev + 1);
    }
  }, [expandAll]);

  useEffect(() => {
    if (collapseAll) {
      setCollapseKey(prev => prev + 1);
    }
  }, [collapseAll]);

  const parsedData = useMemo(() => {
    try {
      const parsed = JSON.parse(data);

      // 如果需要排序，深度排序对象的键
      if (sortMode !== 'none') {
        const sortObjectKeys = (obj: unknown): unknown => {
          if (obj === null || typeof obj !== 'object') {
            return obj;
          }

          if (Array.isArray(obj)) {
            return obj.map(sortObjectKeys);
          }

          const sortedObj: Record<string, unknown> = {};
          const keys = Object.keys(obj as Record<string, unknown>).sort((a, b) => {
            const compareResult = a.localeCompare(b);
            return sortMode === 'asc' ? compareResult : -compareResult;
          });

          for (const key of keys) {
            sortedObj[key] = sortObjectKeys((obj as Record<string, unknown>)[key]);
          }

          return sortedObj;
        };

        return sortObjectKeys(parsed);
      }

      return parsed;
    } catch {
      return null;
    }
  }, [data, sortMode]);

  const isDarkMode = theme === 'dark' || theme === 'matrix';

  if (!parsedData) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground">
        <p>Invalid JSON data</p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto p-4">
      <JsonViewer
        key={`${expandKey}-${collapseKey}`}
        value={parsedData}
        theme={isDarkMode ? 'dark' : 'light'}
        defaultInspectDepth={collapseKey > expandKey ? 0 : (expandKey > 0 ? 10 : 2)}
        defaultInspectControl={(path) => {
          // 根据展开/折叠状态控制默认展开深度
          if (collapseKey > expandKey) {
            return false; // 全部折叠
          }
          if (expandKey > 0) {
            return true; // 全部展开
          }
          // 默认展开前2层
          return path.length <= 2;
        }}
        displayDataTypes={true}
        enableClipboard={true}
        quotesOnKeys={false}
        rootName="root"
        indentWidth={4}
        collapseStringsAfterLength={100}
        style={{
          backgroundColor: 'transparent',
          fontSize: '14px',
          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        }}
      />
    </div>
  );
};

export default JsonVisualView;
