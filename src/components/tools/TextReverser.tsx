
import React from 'react';
import { useTextReverser } from '@/hooks/useTextReverser';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeftRight, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const TextReverser: React.FC = () => {
  const { input, setInput, output } = useTextReverser();

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>文本反转 (Text Reverser)</CardTitle>
          <CardDescription>Reverse the characters of your text.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
            <Textarea
              placeholder="Enter text to reverse"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[200px]"
            />
            <ArrowLeftRight className="mx-4 hidden md:block" />
            <div className="relative">
              <Textarea
                placeholder="Reversed text"
                value={output}
                readOnly
                className="min-h-[200px] bg-muted/50"
              />
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
