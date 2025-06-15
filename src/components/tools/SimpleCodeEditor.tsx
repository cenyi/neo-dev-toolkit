
import React, { useCallback } from 'react';
import { Textarea } from '@/components/ui/textarea';

interface SimpleCodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
}

const SimpleCodeEditor: React.FC<SimpleCodeEditorProps> = ({
  value,
  onChange,
  placeholder = '',
  readOnly = false,
}) => {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }, [onChange]);

  return (
    <div className="h-full w-full">
      <Textarea
        className="h-full w-full resize-none border-0 rounded-none p-4 font-mono bg-background text-foreground outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readOnly}
        style={{ minHeight: '200px' }}
      />
    </div>
  );
};

export default SimpleCodeEditor;
