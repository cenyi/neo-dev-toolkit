
import { toast } from '@/hooks/use-toast';
import i18n from '@/i18n';

interface UseJsonExtractionProps {
  input: string;
  isValid: boolean;
  extractPath: string;
  setOutputContent: (content: string | null) => void;
  setOutputTitle: (title: string | null) => void;
}

const getValueByPath = (obj: any, path: string): any => {
  try {
    const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.').filter(p => p);
    let current = obj;
    for (const key of keys) {
      if (current === null || typeof current !== 'object' || !(key in current)) {
        return undefined;
      }
      current = current[key];
    }
    return current;
  } catch (error) {
    return undefined;
  }
};

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
      const value = getValueByPath(parsedJson, extractPath);

      if (value === undefined) {
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
    } catch (error) {
      setOutputContent(null);
      setOutputTitle(null);
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.extractError'), variant: 'destructive' });
    }
  };

  return { handleExtractValue };
};
