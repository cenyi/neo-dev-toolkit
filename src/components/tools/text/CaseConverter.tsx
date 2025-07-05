
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCaseConverter } from '@/hooks/text/useCaseConverter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, ArrowRight } from 'lucide-react';
import { toast } from "sonner";
import SimpleCodeEditor from '../editor/SimpleCodeEditor';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

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
    <ToolPageLayout
      title={t('tools.text.caseConverter.title')}
      description={t('tools.text.caseConverter.description')}
    >
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="min-h-[500px] border rounded-md">
              <SimpleCodeEditor
                value={input}
                onChange={setInput}
                placeholder={t('tools.text.caseConverter.placeholder')}
                minHeight="500px"
              />
            </div>
            <ArrowRight className="hidden md:block" />
            <div className="relative">
              <div className="min-h-[500px] border rounded-md">
                <SimpleCodeEditor
                  value={output}
                  onChange={() => {}}
                  readOnly
                  placeholder={t('tools.text.caseConverter.result')}
                  minHeight="500px"
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
    </ToolPageLayout>
  );
};

export default CaseConverter;
