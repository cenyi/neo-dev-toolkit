
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMarkdownEditor } from '@/hooks/useMarkdownEditor';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import '@/styles/markdown.css';

const MarkdownEditor: React.FC = () => {
  const { input, setInput } = useMarkdownEditor();

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
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="h-full w-full resize-none border-0 rounded-none p-4 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Type your Markdown here..."
              />
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
