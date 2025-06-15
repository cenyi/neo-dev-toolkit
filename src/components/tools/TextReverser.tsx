
import React from 'react';
import { useTextReverser } from '@/hooks/useTextReverser';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeftRight, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import SimpleCodeEditor from './SimpleCodeEditor';

const TextReverser: React.FC = () => {
  const {
    input,
    setInput,
    output
  } = useTextReverser();
  
  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };
  
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Text Reverser</CardTitle>
          <CardDescription>Reverse the characters of your text.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="min-h-[200px] border rounded-md">
              <SimpleCodeEditor
                value={input}
                onChange={setInput}
                placeholder="Enter text to reverse"
              />
            </div>
            <ArrowLeftRight className="mx-4 hidden md:block" />
            <div className="relative">
              <div className="min-h-[200px] border rounded-md">
                <SimpleCodeEditor
                  value={output}
                  onChange={() => {}}
                  readOnly
                  placeholder="Reversed text"
                />
              </div>
              {output && (
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={handleCopy}>
                  <Copy size={16} />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TextReverser;
