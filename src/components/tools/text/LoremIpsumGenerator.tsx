import React, { useEffect } from 'react';
import { useLoremIpsumGenerator, GenerationType } from '@/hooks/text/useLoremIpsumGenerator';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';
const LoremIpsumGenerator: React.FC = () => {
  const {
    count,
    setCount,
    type,
    setType,
    generatedText,
    generate
  } = useLoremIpsumGenerator();
  useEffect(() => {
    generate();
  }, []);
  const handleCopy = () => {
    if (!generatedText) return;
    navigator.clipboard.writeText(generatedText);
    toast.success('Copied to clipboard!');
  };
  return <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Lorem Ipsum Generator</CardTitle>
          <CardDescription>Generate placeholder text for your designs.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-end gap-4">
            <div className="space-y-2">
              <Label htmlFor="count">Count</Label>
              <Input id="count" type="number" value={count} onChange={e => setCount(Math.max(1, Number(e.target.value)))} min="1" className="w-24" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <Select value={type} onValueChange={value => setType(value as GenerationType)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="paragraphs">Paragraphs</SelectItem>
                  <SelectItem value="sentences">Sentences</SelectItem>
                  <SelectItem value="words">Words</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={generate}>Generate</Button>
          </div>
          {generatedText && <div className="relative">
              <Textarea value={generatedText} readOnly className="min-h-[300px] pr-20 bg-muted/50" />
              <Button onClick={handleCopy} variant="ghost" size="sm" className="absolute top-2 right-2">
                <Copy size={16} className="mr-2" />
                Copy
              </Button>
            </div>}
        </CardContent>
      </Card>
    </div>;
};
export default LoremIpsumGenerator;