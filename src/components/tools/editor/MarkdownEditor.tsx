
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTranslation } from 'react-i18next';
import { useMarkdownEditor } from '@/hooks/useMarkdownEditor';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SimpleCodeEditor from './SimpleCodeEditor';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import '@/styles/markdown.css';

const MarkdownEditor: React.FC = () => {
  const { input, setInput } = useMarkdownEditor();
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(input);
      toast({
        title: t('tools.editor.copied'),
        description: t('tools.editor.copySuccess'),
      });
    } catch (err) {
      toast({
        title: t('tools.editor.copyError'),
        description: t('tools.editor.copyErrorDesc'),
        variant: "destructive",
      });
    }
  };

  const handleClear = () => {
    setInput('');
    toast({
      title: t('tools.editor.cleared'),
      description: t('tools.editor.clearSuccess'),
    });
  };

  return (
    <ToolPageLayout
      title={t('tools.editor.markdown.title')}
      description={t('tools.editor.markdown.description')}
    >
      <Card>
        <CardContent className="pt-6">
          <ResizablePanelGroup direction="horizontal" className="min-h-[60vh] rounded-lg border">
            <ResizablePanel defaultSize={50}>
              <div className="relative h-full">
                <div className="absolute top-2 right-2 z-10 flex gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                    onClick={handleCopy}
                    title={t('tools.editor.copy')}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                    onClick={handleClear}
                    title={t('tools.editor.clear')}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <SimpleCodeEditor
                  value={input}
                  onChange={setInput}
                  placeholder={t('tools.editor.markdown.placeholder')}
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
    </ToolPageLayout>
  );
};

export default MarkdownEditor;
