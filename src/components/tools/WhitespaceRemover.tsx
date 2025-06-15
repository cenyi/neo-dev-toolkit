import React from 'react';
import { useWhitespaceRemover } from '@/hooks/useWhitespaceRemover';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Copy, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
const WhitespaceRemover: React.FC = () => {
  const {
    input,
    setInput,
    output,
    removeAll,
    removeLeadingTrailing,
    removeExtra,
    removeLines
  } = useWhitespaceRemover();
  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };
  return <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Whitespace Remover</CardTitle>
          <CardDescription>Remove unnecessary spaces and line breaks from your text.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
            <Textarea placeholder="Enter text here..." value={input} onChange={e => setInput(e.target.value)} className="min-h-[200px]" />
            <ArrowRight className="hidden md:block" />
            <div className="relative">
                <Textarea placeholder="Result" value={output} readOnly className="min-h-[200px] bg-muted/50" />
                {output && <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={handleCopy}>
                      <Copy size={16} />
                    </Button>}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={removeAll}>Remove All Spaces</Button>
            <Button onClick={removeLeadingTrailing}>Trim Leading/Trailing</Button>
            <Button onClick={removeExtra}>Remove Extra Spaces</Button>
            <Button onClick={removeLines}>Remove Line Breaks</Button>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default WhitespaceRemover;