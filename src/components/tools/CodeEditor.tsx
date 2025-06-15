
import React, { useRef, useState, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from '@/contexts/ThemeContext';
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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleEditorDidMount = useCallback((editor: any, monaco: any) => {
    try {
      editorRef.current = editor;
      setIsLoading(false);
      
      // 简化配置，减少初始化时间
      editor.updateOptions({
        lineNumbers: 'on',
        wordWrap: 'on',
        automaticLayout: true,
        scrollBeyondLastLine: false,
        minimap: { enabled: false },
        fontSize: 14,
        tabSize: 2,
        readOnly: readOnly,
        scrollbar: {
          verticalScrollbarSize: 8,
          horizontalScrollbarSize: 8,
        },
      });
    } catch (error) {
      console.error("Monaco Editor mount error:", error);
      setLoadError(true);
      setIsLoading(false);
    }
  }, [readOnly]);

  const handleEditorChange = useCallback((val: string | undefined) => {
    if (onChange && val !== undefined) {
      onChange(val);
    }
  }, [onChange]);

  const handleTextareaChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  }, [onChange]);

  // 检测到错误或加载失败时，直接使用 textarea
  if (loadError) {
    return (
      <div className="h-full w-full bg-muted relative">
        <Textarea
          className="h-full w-full resize-none border-0 rounded-none p-4 font-mono bg-background text-foreground outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          value={value}
          onChange={handleTextareaChange}
          placeholder={placeholder}
          readOnly={readOnly}
          aria-label={`${language} textarea`}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 flex items-center justify-between">
          <span>编辑器加载失败，使用文本框模式</span>
          <button
            type="button"
            className="ml-2 text-xs underline"
            onClick={() => window.location.reload()}
          >
            重试
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
        beforeMount={(monaco) => {
          // 预配置以加快加载速度
          monaco.editor.setTheme(theme === 'dark' || theme === 'matrix' ? 'vs-dark' : 'vs');
        }}
        options={{
          wordWrap: 'on',
          lineNumbers: 'on',
          readOnly: readOnly,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          fontSize: 14,
          tabSize: 2,
          insertSpaces: true,
          folding: false, // 禁用折叠以提高性能
          renderWhitespace: 'none', // 简化渲染
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
          },
          suggest: {
            showKeywords: false, // 禁用建议以提高性能
            showSnippets: false,
          },
        }}
        loading={
          <div className="flex justify-center items-center h-full bg-muted text-muted-foreground">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="ml-2">加载编辑器...</span>
          </div>
        }
      />
    </div>
  );
};

export default CodeEditor;
