
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMarkdownEditor } from '@/hooks/useMarkdownEditor';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import CodeEditor from './CodeEditor';
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
              <CodeEditor
                value={input}
                onChange={setInput}
                language="markdown"
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
