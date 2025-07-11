import React, { useRef, useState, useEffect, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from '@/contexts/ThemeContext';
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

  // Reduce timeout for faster fallback
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.warn('Monaco Editor loading timeout, falling back to textarea');
        setLoadError(true);
        setIsLoading(false);
      }
    }, 2000); // Reduced from 3 seconds to 2 seconds

    return () => clearTimeout(timeout);
  }, [isLoading]);

  const handleEditorDidMount = useCallback((editor: any, monaco: any) => {
    try {
      console.log('Monaco Editor mounted successfully');
      editorRef.current = editor;
      setIsLoading(false);
      setLoadError(false);
      
      // Simplified configuration for faster loading
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
        glyphMargin: false, // Disable glyph margin for better performance
        folding: true,
        foldingStrategy: 'indentation',
        showFoldingControls: 'mouseover', // Show controls only on mouseover
        wordWrap: 'on',
        automaticLayout: true,
        scrollBeyondLastLine: false,
        minimap: { enabled: false },
        fontSize: 14,
        tabSize: 2,
        insertSpaces: true,
        renderWhitespace: 'none', // Simplified rendering
        readOnly: readOnly,
        suggest: { 
          showKeywords: false, // Disable suggestions for performance
          showSnippets: false 
        }
      });

      // Add wheel event handler to allow page scrolling when editor is at top/bottom
      const editorDomNode = editor.getDomNode();
      if (editorDomNode) {
        // Use capture phase to intercept before Monaco handles it
        editorDomNode.addEventListener('wheel', (e: WheelEvent) => {
          const scrollTop = editor.getScrollTop();
          const scrollHeight = editor.getScrollHeight();
          const clientHeight = editorDomNode.clientHeight;
          
          // Check if scrolling up and already at top
          if (e.deltaY < 0 && scrollTop <= 0) {
            // Prevent Monaco from handling this event and let page scroll
            e.stopImmediatePropagation();
            // Manually trigger page scroll
            window.scrollBy(0, e.deltaY);
            return;
          }
          
          // Check if scrolling down and already at bottom
          if (e.deltaY > 0 && scrollTop + clientHeight >= scrollHeight) {
            // Prevent Monaco from handling this event and let page scroll
            e.stopImmediatePropagation();
            // Manually trigger page scroll
            window.scrollBy(0, e.deltaY);
            return;
          }
        }, { capture: true });
      }
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

  // Fast fallback for production environments
  if (loadError) {
    return (
      <div className="h-full w-full border rounded-md overflow-hidden flex flex-col bg-background relative">
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
    <div className="h-full w-full overflow-hidden border rounded-md">
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
          lineNumbers: 'on',
          folding: true,
          readOnly: readOnly,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          fontSize: 14,
          tabSize: 2,
          insertSpaces: true,
          renderWhitespace: 'none', // Simplified for performance
          suggest: { 
            showKeywords: false,
            showSnippets: false 
          }
        }}
        loading={
          <div className="flex flex-col justify-center items-center h-full bg-background text-muted-foreground p-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mb-2"></div>
            <span className="text-xs">Loading...</span>
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
