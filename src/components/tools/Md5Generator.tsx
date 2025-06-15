
import React from 'react';
import { useMd5Generator } from '@/hooks/useMd5Generator';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Md5Generator: React.FC = () => {
  const { input, setInput, output } = useMd5Generator();
  const { toast } = useToast();

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      toast({
        title: "已复制!",
        description: "MD5 哈希值已复制到剪贴板。",
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">MD5 哈希生成器</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="input-text" className="mb-2 block">输入</Label>
          <Textarea
            id="input-text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="在此输入或粘贴文本..."
            className="h-64 resize-none"
          />
        </div>
        <div>
          <Label htmlFor="output-hash" className="mb-2 block">MD5 哈希值</Label>
          <div className="relative">
            <Textarea
              id="output-hash"
              value={output}
              readOnly
              placeholder="MD5 哈希值将在此处显示"
              className="h-64 resize-none bg-muted"
            />
            {output && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={handleCopy}
                aria-label="复制哈希值"
              >
                <Copy className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Md5Generator;
