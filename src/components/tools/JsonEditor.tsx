
import React, { useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from '@/contexts/ThemeContext';

interface JsonEditorProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
  editorKey?: string | number; // 用于强制 remount
}

const JsonEditor: React.FC<JsonEditorProps> = ({
  value,
  onChange,
  readOnly = false,
  placeholder = '',
  editorKey
}) => {
  const { theme } = useTheme();
  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;

    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      allowComments: false,
      schemas: [],
      enableSchemaRequest: false
    });

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
  };

  const handleEditorChange = (value: string | undefined) => {
    if (onChange && value !== undefined) {
      onChange(value);
    }
  };

  return (
    <div className="h-full min-h-[120px] w-full border rounded-md overflow-hidden flex flex-col">
      <Editor
        key={editorKey}
        height="100%"
        defaultLanguage="json"
        defaultValue={value}
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
          insertSpaces: true
        }}
      />
    </div>
  );
};

export default JsonEditor;
