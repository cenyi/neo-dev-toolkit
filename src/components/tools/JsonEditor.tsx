
import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from '@/contexts/ThemeContext';
import { toast } from '@/hooks/use-toast';

interface JsonEditorProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
}

const JsonEditor: React.FC<JsonEditorProps> = ({
  value,
  onChange,
  readOnly = false,
  placeholder = ''
}) => {
  const { theme } = useTheme();
  const editorRef = useRef<any>(null);
  const [loadError, setLoadError] = useState<boolean>(false);
  const [forceTextArea, setForceTextArea] = useState<boolean>(false);

  // 强制切换为普通文本输入
  const handleFallbackClick = () => {
    setForceTextArea(true);
    setLoadError(true);
    toast({
      title: '切换为普通文本输入',
      description: '已切换为普通文本框，可以继续编辑 JSON。',
    });
  };

  const handleEditorDidMount = (editor: any, monaco: any) => {
    try {
      editorRef.current = editor;
      if (monaco?.languages?.json?.jsonDefaults?.setDiagnosticsOptions) {
        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
          validate: true,
          allowComments: false,
          schemas: [],
          enableSchemaRequest: false
        });
      }
      editor.updateOptions({
        lineNumbers: 'on',
        lineNumbersMinChars: 3,
        glyphMargin: true,
        folding: true,
        foldingStrategy: 'indentation',
        showFoldingControls: 'always',
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
      setLoadError(true);
      setForceTextArea(true);
      toast({
        title: 'Monaco 加载失败',
        description: '无法加载编辑器，已自动切换为普通文本框。',
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

  // Monaco 加载失败||自动降级 或 强制切换 textarea
  if (loadError || forceTextArea) {
    return (
      <div className="h-full min-h-[120px] w-full border rounded-md overflow-hidden flex flex-col bg-muted relative">
        <textarea
          className="w-full h-full resize-none p-3 text-sm font-mono bg-muted outline-none border-none"
          value={value}
          onChange={e => onChange?.(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          aria-label="JSON textarea"
        />
        <div className="bg-destructive text-destructive-foreground text-xs px-2 py-1">
          Monaco Editor 加载失败，已切换为普通文本框。
          <button
            type="button"
            className="ml-2 text-xs underline underline-offset-2 text-red-800"
            onClick={() => window.location.reload()}
          >
            刷新尝试重新加载编辑器
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[120px] w-full border rounded-md overflow-hidden flex flex-col relative">
      {/* fallback button */}
      <button
        type="button"
        onClick={handleFallbackClick}
        className="absolute top-2 right-2 z-10 px-2 py-0.5 text-xs text-muted-foreground border bg-background rounded hover:border-destructive"
        style={{background:'#fff9', border:'1px solid #eee'}}
      >
        切换为普通输入
      </button>
      <Editor
        height="100%"
        language="json"
        value={value}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        theme={theme === 'dark' ? 'vs-dark' : 'vs'}
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
          renderWhitespace: 'boundary'
        }}
      />
    </div>
  );
};

export default JsonEditor;
