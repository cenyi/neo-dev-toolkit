
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { useTranslation } from 'react-i18next';
import { useMermaidEditor } from '@/hooks/useMermaidEditor';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import SimpleCodeEditor from './SimpleCodeEditor';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Download, Copy, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MermaidEditor: React.FC = () => {
  const { input, setInput, error, setError } = useMermaidEditor();
  const { theme } = useTheme();
  const { toast } = useToast();
  const { t } = useTranslation();
  const previewRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(input);
      toast({
        title: t('editor.copied'),
        description: t('editor.copySuccess'),
      });
    } catch (err) {
      toast({
        title: t('editor.copyError'),
        description: t('editor.copyErrorDesc'),
        variant: "destructive",
      });
    }
  };

  const handleClear = () => {
    setInput('');
    toast({
      title: t('editor.cleared'),
      description: t('editor.clearSuccess'),
    });
  };

  const handleDownloadSVG = () => {
    if (previewRef.current?.innerHTML && !error) {
      const svgContent = previewRef.current.innerHTML;
      const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const timestamp = new Date().toISOString().slice(0, 19).replace('T', '_').replace(/:/g, '-');
      link.download = `mermaid-diagram-${timestamp}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };
  
  const handleDownloadPNG = () => {
    if (previewRef.current?.querySelector('svg') && !error) {
      const svgElement = previewRef.current.querySelector('svg') as SVGSVGElement;
      
      const svgData = new XMLSerializer().serializeToString(svgElement);

      const canvas = document.createElement('canvas');
      const svgSize = svgElement.getBoundingClientRect();
      canvas.width = svgSize.width;
      canvas.height = svgSize.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = new Image();
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);

        const pngUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = pngUrl;
        const timestamp = new Date().toISOString().slice(0, 19).replace('T', '_').replace(/:/g, '-');
        link.download = `mermaid-diagram-${timestamp}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      
      img.src = url;
    }
  };

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
            setError(e.message?.replace(/mermaid.parseError: /s, '') || t('tools.mermaid.invalidSyntax'));
          }
        } else {
          previewRef.current.innerHTML = '';
          if (error) setError(null);
        }
      }
    };

    const timer = setTimeout(renderMermaid, 300);
    return () => clearTimeout(timer);
  }, [input, theme, error, setError, t]);

  return (
    <ToolPageLayout
      title={t('tools.mermaid.title')}
      description={t('tools.mermaid.description')}
    >
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <ResizablePanelGroup direction="horizontal" className="min-h-[60vh] rounded-lg border">
              <ResizablePanel defaultSize={50}>
                <div className="relative h-full">
                  <div className="absolute top-2 right-2 z-10 flex gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                      onClick={handleCopy}
                      title={t('editor.copy')}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                      onClick={handleClear}
                      title={t('editor.clear')}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <SimpleCodeEditor
                    value={input}
                    onChange={setInput}
                    placeholder={t('tools.mermaid.placeholder')}
                  />
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50}>
                <div className="relative h-full w-full">
                  {input && !error && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute top-4 right-4 z-10"
                          title={t('common.download')}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={handleDownloadSVG}>
                          {t('editor.downloadSvg')}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleDownloadPNG}>
                          {t('editor.downloadPng')}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                  <div className="h-full w-full overflow-auto p-4 flex items-center justify-center bg-muted/20">
                    <div ref={previewRef} className="w-full h-full" />
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
            {error && (
              <div className="absolute bottom-4 right-4 w-auto max-w-md z-10">
                <Alert variant="destructive">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>{t('tools.mermaid.syntaxError')}</AlertTitle>
                  <AlertDescription>
                    <pre className="text-xs whitespace-pre-wrap font-mono">{error}</pre>
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </ToolPageLayout>
  );
};

export default MermaidEditor;
