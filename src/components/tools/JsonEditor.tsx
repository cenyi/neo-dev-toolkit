
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
      console.error("Monaco Editor mount error:", error);
      setLoadError(true);
      toast({
        title: 'Monaco 加载失败',
        description: '无法加载编辑器，已自动切换为普通文本框。',
        variant: 'destructive',
      });
    }
  };

  const handleEditorChange = (val: string | undefined) => {
    if (onChange && val !== undefined) {
      onChange(val);
    }
  };

  // 如果 Monaco 加载失败，显示一个 textarea 兜底
  if (loadError) {
    return (
      <div className="h-full min-h-[120px] w-full border rounded-md overflow-hidden flex flex-col bg-muted">
        <textarea
          className="w-full h-full resize-none p-3 text-sm font-mono bg-muted outline-none border-none"
          value={value}
          onChange={e => onChange?.(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
        />
        <div className="bg-destructive text-destructive-foreground text-xs px-2 py-1">
          Monaco Editor 加载失败，已切换为普通文本框。
        </div>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[120px] w-full border rounded-md overflow-hidden flex flex-col">
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
