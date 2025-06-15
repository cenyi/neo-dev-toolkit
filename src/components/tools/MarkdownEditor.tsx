
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(input);
      toast({
        title: "已复制",
        description: "Markdown内容已复制到剪贴板",
      });
    } catch (err) {
      toast({
        title: "复制失败",
        description: "无法复制到剪贴板",
        variant: "destructive",
      });
    }
  };

  const handleClear = () => {
    setInput('');
    toast({
      title: "已清空",
      description: "Markdown内容已清空",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Markdown Editor</CardTitle>
          <CardDescription>Edit Markdown on the left and see the result on the right.</CardDescription>
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
                    title="复制内容"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                    onClick={handleClear}
                    title="清空内容"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <SimpleCodeEditor
                  value={input}
                  onChange={setInput}
                  placeholder="Type your Markdown here..."
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
