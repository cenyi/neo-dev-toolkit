
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTranslation } from 'react-i18next';
import { useMarkdownEditor } from '@/hooks/useMarkdownEditor';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SimpleCodeEditor from './SimpleCodeEditor';
import '@/styles/markdown.css';

const MarkdownEditor: React.FC = () => {
  const { input, setInput } = useMarkdownEditor();
  const { toast } = useToast();
  const { t } = useTranslation();

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

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{t('tools.markdown.title')}</CardTitle>
          <CardDescription>{t('tools.markdown.description')}</CardDescription>
        </CardHeader>
        <CardContent>
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
                  placeholder={t('tools.markdown.placeholder')}
                />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="markdown-preview h-full w-full overflow-auto p-4">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {input}
                </ReactMarkdown>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarkdownEditor;
