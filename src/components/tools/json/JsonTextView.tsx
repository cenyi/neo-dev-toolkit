import React, { useMemo } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface JsonTextViewProps {
  data: string;
  sortMode?: 'none' | 'asc' | 'desc';
}

const JsonTextView: React.FC<JsonTextViewProps> = ({ data, sortMode = 'none' }) => {
  const textContent = useMemo(() => {
    try {
      const parsed = JSON.parse(data);
      
      const convertToText = (obj: unknown, indent: number = 0): string => {
        const spaces = '  '.repeat(indent);
        
        if (obj === null) return 'null';
        if (typeof obj === 'boolean') return obj ? 'true' : 'false';
        if (typeof obj === 'number') return obj.toString();
        if (typeof obj === 'string') return obj;
        
        if (Array.isArray(obj)) {
          if (obj.length === 0) return '[]';
          let result = '[\n';
          obj.forEach((item, index) => {
            result += `${spaces}  ${index}: ${convertToText(item, indent + 1)}`;
            if (index < obj.length - 1) result += ',';
            result += '\n';
          });
          result += `${spaces}]`;
          return result;
        }
        
        if (typeof obj === 'object') {
          let keys = Object.keys(obj as Record<string, unknown>);
          if (keys.length === 0) return '{}';
          
          // Apply sorting if enabled
          if (sortMode !== 'none') {
            keys = keys.sort((a, b) => {
              const compareResult = a.localeCompare(b);
              return sortMode === 'asc' ? compareResult : -compareResult;
            });
          }
          
          let result = '{\n';
          keys.forEach((key, index) => {
            const value = convertToText((obj as Record<string, unknown>)[key], indent + 1);
            result += `${spaces}  ${key}: ${value}`;
            if (index < keys.length - 1) result += ',';
            result += '\n';
          });
          result += `${spaces}}`;
          return result;
        }
        
        return String(obj);
      };
      
      return convertToText(parsed);
    } catch {
      return 'Invalid JSON data';
    }
  }, [data, sortMode]);

  return (
    <div className="h-full flex flex-col">
      <ScrollArea className="flex-1">
        <div className="p-4">
          <pre className="text-sm font-mono leading-relaxed whitespace-pre-wrap break-words text-foreground">
            {textContent}
          </pre>
        </div>
      </ScrollArea>
    </div>
  );
};

export default JsonTextView;