
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCaseConverter } from '@/hooks/useCaseConverter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Copy, ArrowRight } from 'lucide-react';
import { toast } from "sonner";
import SimpleCodeEditor from './SimpleCodeEditor';

const CaseConverter: React.FC = () => {
  const { t } = useTranslation();
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
    toast.success(t('editor.copySuccess'));
  };
  
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{t('tools.text.caseConverter.title')}</CardTitle>
          <CardDescription>{t('tools.text.caseConverter.description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="min-h-[200px] border rounded-md">
              <SimpleCodeEditor
                value={input}
                onChange={setInput}
                placeholder={t('tools.text.caseConverter.placeholder')}
              />
            </div>
            <ArrowRight className="hidden md:block" />
            <div className="relative">
              <div className="min-h-[200px] border rounded-md">
                <SimpleCodeEditor
                  value={output}
                  onChange={() => {}}
                  readOnly
                  placeholder={t('tools.text.caseConverter.result')}
                />
              </div>
              {output && (
                <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7" onClick={handleCopy}>
                  <Copy size={16} />
                </Button>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={toUpperCase}>{t('tools.text.caseConverter.upperCase')}</Button>
            <Button onClick={toLowerCase}>{t('tools.text.caseConverter.lowerCase')}</Button>
            <Button onClick={toTitleCase}>{t('tools.text.caseConverter.titleCase')}</Button>
            <Button onClick={toSentenceCase}>{t('tools.text.caseConverter.sentenceCase')}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseConverter;
