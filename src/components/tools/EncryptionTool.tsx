
import React from 'react';
import { useEncryptionTool, Algorithm } from '@/hooks/useEncryptionTool';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Copy, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

const EncryptionTool: React.FC = () => {
  const { input, setInput, output, algorithm, setAlgorithm, regenerate, algorithms } = useEncryptionTool();

  const currentAlgorithm = algorithms.find(a => a.value === algorithm);

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      toast.success("Copied to clipboard!");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{currentAlgorithm?.name || 'Encryption Tool'}</CardTitle>
          <CardDescription>An all-in-one tool for hashing and generating UUIDs.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="algorithm">Algorithm</Label>
            <Select value={algorithm} onValueChange={(value) => setAlgorithm(value as Algorithm)}>
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select an algorithm" />
              </SelectTrigger>
              <SelectContent>
                {algorithms.map(algo => (
                  <SelectItem key={algo.value} value={algo.value}>{algo.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="input-text" className="mb-2 block">Input</Label>
              <Textarea
                id="input-text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={algorithm === 'uuid' ? 'Not applicable for UUID generation' : 'Enter or paste text here...'}
                className="h-64 resize-none"
                disabled={algorithm === 'uuid'}
              />
            </div>
            <div>
              <Label htmlFor="output-hash" className="mb-2 block">Output</Label>
              <div className="relative">
                <Textarea
                  id="output-hash"
                  value={output}
                  readOnly
                  placeholder="Output will be displayed here"
                  className="h-64 resize-none bg-muted"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  {algorithm === 'uuid' && (
                     <Button
                        variant="ghost"
                        size="icon"
                        onClick={regenerate}
                        aria-label="Regenerate UUID"
                      >
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                  )}
                  {output && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCopy}
                      aria-label="Copy output"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EncryptionTool;
