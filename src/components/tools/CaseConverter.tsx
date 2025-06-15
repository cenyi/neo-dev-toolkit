
import React from 'react';
import { useCaseConverter } from '@/hooks/useCaseConverter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Copy, ArrowRight } from 'lucide-react';
import { toast } from "sonner";
import CodeEditor from './CodeEditor';

const CaseConverter: React.FC = () => {
  const {
    input,
    setInput,
    output,
    toUpperCase,
    toLowerCase,
    toTitleCase,
    toSentenceCase
  } = useCaseConverter();
  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    toast.success("Copied to clipboard!");
  };
  return <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Case Converter</CardTitle>
          <CardDescription>Convert text between different letter cases.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="min-h-[200px] border rounded-md">
              <CodeEditor
                value={input}
                onChange={setInput}
                placeholder="Enter text here..."
              />
            </div>
            <ArrowRight className="hidden md:block" />
            <div className="relative">
              <div className="min-h-[200px] border rounded-md">
                <CodeEditor
                  value={output}
                  onChange={() => {}}
                  readOnly
                  placeholder="Result"
                />
              </div>
              {output && <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={handleCopy}>
                  <Copy size={16} />
                </Button>}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={toUpperCase}>UPPER CASE</Button>
            <Button onClick={toLowerCase}>lower case</Button>
            <Button onClick={toTitleCase}>Title Case</Button>
            <Button onClick={toSentenceCase}>Sentence case</Button>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default CaseConverter;
