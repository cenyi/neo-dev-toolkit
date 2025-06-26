
import React, { useCallback, useMemo } from 'react';
import { Textarea } from '@/components/ui/textarea';

interface SimpleCodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  minHeight?: string;
}

const SimpleCodeEditor: React.FC<SimpleCodeEditorProps> = ({
  value,
  onChange,
  placeholder = '',
  readOnly = false,
  minHeight = '800px', // 增加默认最小高度从600px到800px
}) => {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }, [onChange]);

  const lineNumbers = useMemo(() => {
    const lines = value.split('\n');
    return lines.map((_, index) => index + 1);
  }, [value]);

  return (
    <div className="h-full w-full flex">
      {/* Line numbers */}
      <div className="bg-muted border-r border-border px-3 py-4 text-xs text-muted-foreground font-mono select-none min-w-[4rem] text-right">
        {lineNumbers.map((lineNum) => (
          <div key={lineNum} className="leading-5 h-5">
            {lineNum}
          </div>
        ))}
      </div>
      
      {/* Text area */}
      <Textarea
        className="flex-1 resize-none border-0 rounded-none rounded-r-md p-4 font-mono bg-background text-foreground outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 text-xs"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readOnly}
        style={{ minHeight: minHeight, lineHeight: '1.25rem' }}
      />
    </div>
  );
};

export default SimpleCodeEditor;
