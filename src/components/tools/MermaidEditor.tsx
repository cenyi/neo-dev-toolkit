
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { useMermaidEditor } from '@/hooks/useMermaidEditor';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const MermaidEditor: React.FC = () => {
  const { input, setInput, error, setError } = useMermaidEditor();
  const { theme } = useTheme();
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderMermaid = async () => {
      mermaid.initialize({
        startOnLoad: false,
        theme: theme === 'dark' ? 'dark' : 'default',
        securityLevel: 'loose',
        fontFamily: 'inherit',
      });
      
      if (previewRef.current) {
        if (input) {
          try {
            await mermaid.parse(input);
            const { svg } = await mermaid.render('mermaid-preview', input);
            previewRef.current.innerHTML = svg;
            if (error) setError(null);
          } catch (e: any) {
            setError(e.message?.replace(/mermaid.parseError: /s, '') || 'Invalid Mermaid syntax');
          }
        } else {
          previewRef.current.innerHTML = '';
          if (error) setError(null);
        }
      }
    };

    const timer = setTimeout(renderMermaid, 300);
    return () => clearTimeout(timer);
  }, [input, theme, error, setError]);

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Mermaid Editor</CardTitle>
          <CardDescription>Create diagrams with Mermaid syntax. Live preview on the right.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <ResizablePanelGroup direction="horizontal" className="min-h-[60vh] rounded-lg border">
              <ResizablePanel defaultSize={50}>
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="h-full w-full resize-none border-0 rounded-none p-4 font-mono focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Type your Mermaid syntax here..."
                />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <div className="h-full w-full overflow-auto p-4 flex items-center justify-center bg-muted/20">
                  <div ref={previewRef} className="w-full h-full" />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
            {error && (
              <div className="absolute bottom-4 right-4 w-auto max-w-md z-10">
                <Alert variant="destructive">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Syntax Error</AlertTitle>
                  <AlertDescription>
                    <pre className="text-xs whitespace-pre-wrap font-mono">{error}</pre>
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MermaidEditor;
