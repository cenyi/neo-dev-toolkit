
import { toast } from '@/hooks/use-toast';
import i18n from '@/i18n';
import { JSONPath } from 'jsonpath-plus';

interface UseJsonExtractionProps {
  input: string;
  isValid: boolean;
  extractPath: string;
  setOutputContent: (content: string | null) => void;
  setOutputTitle: (title: string | null) => void;
}

export const useJsonExtraction = ({ input, isValid, extractPath, setOutputContent, setOutputTitle }: UseJsonExtractionProps) => {

  const handleExtractValue = () => {
    if (!isValid || !input.trim()) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.invalidJson'), variant: 'destructive' });
      return;
    }
    if (!extractPath.trim()) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.missingPath'), variant: 'destructive' });
      return;
    }

    try {
      const parsedJson = JSON.parse(input);
      const value = JSONPath({ path: extractPath, json: parsedJson });

      if (value === undefined || value.length === 0) {
        setOutputContent(null);
        setOutputTitle(null);
        toast({ title: i18n.t('toasts.common.notFound'), description: i18n.t('toasts.error.notFound'), variant: 'destructive' });
      } else {
        const resultString = JSON.stringify(value, null, 2);
        setOutputContent(resultString);
        setOutputTitle(i18n.t('tools.json.extractedValueTitle'));
        navigator.clipboard.writeText(resultString);
        toast({ title: i18n.t('toasts.common.success'), description: i18n.t('toasts.success.extractedAndCopied') });
      }
    } catch (error: any) {
      setOutputContent(null);
      setOutputTitle(null);
      const description = error.message ? `${i18n.t('toasts.error.extractError')}: ${error.message}` : i18n.t('toasts.error.extractError');
      toast({ title: i18n.t('toasts.common.error'), description, variant: 'destructive' });
    }
  };

  return { handleExtractValue };
};
