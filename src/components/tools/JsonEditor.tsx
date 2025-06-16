import React, { useRef, useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from '@/contexts/ThemeContext';
import { toast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';

interface JsonEditorProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
  language?: string;
}

const JsonEditor: React.FC<JsonEditorProps> = ({
  value,
  onChange,
  readOnly = false,
  placeholder = '',
  language = 'json',
}) => {
  const { theme } = useTheme();
  const editorRef = useRef<any>(null);
  const [loadError, setLoadError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 在Vercel等生产环境中，设置超时来检测Monaco是否加载失败
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.warn('Monaco Editor loading timeout, falling back to textarea');
        setLoadError(true);
        setIsLoading(false);
      }
    }, 3000); // 3秒超时

    return () => clearTimeout(timeout);
  }, [isLoading]);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    try {
      console.log('Monaco Editor mounted successfully');
      editorRef.current = editor;
      setIsLoading(false);
      setLoadError(false);
      
      if (monaco?.languages?.json?.jsonDefaults?.setDiagnosticsOptions) {
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
          validate: true,
          allowComments: false,
          schemas: [],
          enableSchemaRequest: false
        });
      }
      editor.updateOptions({
        lineNumbers: readOnly ? 'on' : 'off', // 只有在只读模式才显示行号
        lineNumbersMinChars: 3,
        glyphMargin: true,
        folding: readOnly ? true : false, // 只有在只读模式才启用折叠
        foldingStrategy: 'indentation',
        showFoldingControls: readOnly ? 'always' : 'never', // 只有在只读模式才显示折叠控件
        wordWrap: 'on',
        automaticLayout: true,
        scrollBeyondLastLine: false,
        minimap: { enabled: false },
        fontSize: 14,
        tabSize: 2,
        insertSpaces: true,
        renderWhitespace: 'boundary',
        readOnly: readOnly
      });
    } catch (error) {
      console.error("Monaco Editor mount error:", error);
      setLoadError(true);
      setIsLoading(false);
    }
  };

  const handleEditorChange = (val: string | undefined) => {
    if (onChange && val !== undefined) {
      onChange(val);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  // 如果加载失败或超时，使用textarea fallback
  if (loadError) {
    return (
      <div className="h-full min-h-[120px] w-full border rounded-md overflow-hidden flex flex-col bg-background relative">
        <Textarea
          className="w-full h-full resize-none p-3 text-sm font-mono bg-background text-foreground outline-none border-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
          value={value}
          onChange={handleTextareaChange}
          placeholder={placeholder}
          readOnly={readOnly}
          aria-label="JSON textarea"
        />
      </div>
    );
  }

  return (
    <div className="h-full min-h-[120px] w-full border rounded-md overflow-hidden flex flex-col relative">
      <Editor
        height="100%"
        language={language}
        value={value}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        theme={theme === 'dark' || theme === 'matrix' ? 'vs-dark' : 'vs'}
        beforeMount={(monaco) => {
          try {
            monaco.editor.setTheme(theme === 'dark' || theme === 'matrix' ? 'vs-dark' : 'vs');
          } catch (error) {
            console.warn('Monaco beforeMount error:', error);
            setLoadError(true);
            setIsLoading(false);
          }
        }}
        options={{
          wordWrap: 'on',
          lineNumbers: readOnly ? 'on' : 'off', // 只有在只读模式才显示行号
          folding: readOnly ? true : false, // 只有在只读模式才启用折叠
          readOnly: readOnly,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          fontSize: 14,
          tabSize: 2,
          insertSpaces: true,
          renderWhitespace: 'boundary'
        }}
        loading={
          <div className="flex flex-col justify-center items-center h-full bg-background text-muted-foreground p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-2"></div>
            <span className="text-sm">加载编辑器...</span>
          </div>
        }
        onValidate={(markers) => {
          if (markers.length > 0) {
            console.warn('Monaco validation markers:', markers);
          }
        }}
      />
    </div>
  );
};

export default JsonEditor;
