
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useWhitespaceRemover } from '@/hooks/text/useWhitespaceRemover';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Copy, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import SimpleCodeEditor from '../editor/SimpleCodeEditor';

const WhitespaceRemover: React.FC = () => {
  const { t } = useTranslation();
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
    toast.success(t('tools.editor.copySuccess'));
  };
  return <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{t('tools.text.whitespaceRemover.title')}</CardTitle>
          <CardDescription>{t('tools.text.whitespaceRemover.description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="min-h-[450px] border rounded-md">
              <SimpleCodeEditor
                value={input}
                onChange={setInput}
                placeholder={t('tools.text.whitespaceRemover.placeholder')}
                minHeight="450px"
              />
            </div>
            <ArrowRight className="hidden md:block" />
            <div className="relative">
              <div className="min-h-[450px] border rounded-md">
                <SimpleCodeEditor
                  placeholder={t('tools.text.whitespaceRemover.result')}
                  value={output}
                  readOnly
                  onChange={()=>{}}
                  minHeight="450px"
                />
              </div>
              {output && <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={handleCopy}>
                    <Copy size={16} />
                  </Button>}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={removeAll}>{t('tools.text.whitespaceRemover.removeAll')}</Button>
            <Button onClick={removeLeadingTrailing}>{t('tools.text.whitespaceRemover.removeTrim')}</Button>
            <Button onClick={removeExtra}>{t('tools.text.whitespaceRemover.removeExtra')}</Button>
            <Button onClick={removeLines}>{t('tools.text.whitespaceRemover.removeLines')}</Button>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default WhitespaceRemover;
