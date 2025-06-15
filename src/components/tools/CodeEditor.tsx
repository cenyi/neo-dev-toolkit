
import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from '@/contexts/ThemeContext';
import { toast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  placeholder?: string;
  readOnly?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  value,
  onChange,
  language = 'plaintext',
  placeholder = '',
  readOnly = false,
}) => {
  const { theme } = useTheme();
  const editorRef = useRef<any>(null);
  const [loadError, setLoadError] = useState<boolean>(false);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    try {
      editorRef.current = editor;
      editor.updateOptions({
        lineNumbers: 'on',
        wordWrap: 'on',
        automaticLayout: true,
        scrollBeyondLastLine: false,
        minimap: { enabled: false },
        fontSize: 14,
        tabSize: 2,
        insertSpaces: true,
        renderWhitespace: 'boundary',
        readOnly: readOnly,
      });
    } catch (error) {
      setLoadError(true);
      toast({
        title: 'Monaco 编辑器加载失败',
        description: '无法加载代码编辑器, 已切换为普通文本域。',
        variant: 'destructive',
      });
      console.error("Monaco Editor mount error:", error);
    }
  };

  const handleEditorChange = (val: string | undefined) => {
    if (onChange && val !== undefined) {
      onChange(val);
    }
  };

  if (loadError) {
    return (
      <div className="h-full w-full bg-muted relative">
        <Textarea
          className="h-full w-full resize-none border-0 rounded-none p-4 font-mono bg-muted outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          value={value}
          onChange={e => onChange?.(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          aria-label={`${language} textarea`}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-destructive text-destructive-foreground text-xs px-2 py-1 flex items-center justify-between">
          <span>Monaco 编辑器加载失败，已切换为普通文本域。</span>
          <button
            type="button"
            className="ml-2 text-xs underline underline-offset-2"
            onClick={() => window.location.reload()}
          >
            刷新重试
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-hidden">
      <Editor
        height="100%"
        language={language}
        value={value}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        theme={theme === 'dark' || theme === 'matrix' ? 'vs-dark' : 'vs'}
        options={{
          wordWrap: 'on',
          lineNumbers: 'on',
          folding: true,
          readOnly: readOnly,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          fontSize: 14,
          tabSize: 2,
          insertSpaces: true,
          renderWhitespace: 'boundary',
        }}
        loading={
          <div className="flex justify-center items-center h-full bg-muted">
            正在加载编辑器...
          </div>
        }
      />
    </div>
  );
};

export default CodeEditor;
