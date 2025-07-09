
import { toast } from '@/hooks/use-toast';
import i18n from '@/i18n';
import { dump as toYaml } from 'js-yaml';
import { parse as toXml } from 'js2xmlparser';
import { Parser as CsvParser } from '@json2csv/plainjs';
import { jsonToDart } from '../utils/jsonToDartConverter';

interface UseJsonConversionProps {
  input: string;
  isValid: boolean;
  setOutputContent: (content: string | null) => void;
  setOutputTitle: (title: string | null) => void;
  rootClassName?: string;
  usePrivateFields?: boolean;
  useModernDartSyntax?: boolean;
}

export const useJsonConversion = ({ input, isValid, setOutputContent, setOutputTitle, rootClassName = 'GeneratedClass', usePrivateFields = false, useModernDartSyntax = false }: UseJsonConversionProps) => {

  const handleConvertToYaml = () => {
    if (!isValid || !input.trim()) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.invalidJson'), variant: 'destructive' });
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const yamlString = toYaml(parsed);
      setOutputContent(yamlString);
      setOutputTitle(i18n.t('tools.json.convertedToYamlTitle'));
      navigator.clipboard.writeText(yamlString);
      toast({ title: i18n.t('toasts.common.success'), description: i18n.t('toasts.success.convertedToYamlAndCopied') });
    } catch (error) {
      setOutputContent(null);
      setOutputTitle(null);
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.conversionFailed'), variant: 'destructive' });
    }
  };

  const handleConvertToXml = () => {
    if (!isValid || !input.trim()) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.invalidJson'), variant: 'destructive' });
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const xmlString = toXml('root', parsed, {});
      setOutputContent(xmlString);
      setOutputTitle(i18n.t('tools.json.convertedToXmlTitle'));
      navigator.clipboard.writeText(xmlString);
      toast({ title: i18n.t('toasts.common.success'), description: i18n.t('toasts.success.convertedToXmlAndCopied') });
    } catch (error) {
      setOutputContent(null);
      setOutputTitle(null);
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.conversionFailed'), variant: 'destructive' });
    }
  };

  const handleConvertToCsv = () => {
    if (!isValid || !input.trim()) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.invalidJson'), variant: 'destructive' });
      return;
    }
    try {
      const parsed = JSON.parse(input);
      let dataToConvert = parsed;

      if (typeof dataToConvert === 'object' && dataToConvert !== null && !Array.isArray(dataToConvert)) {
        dataToConvert = [dataToConvert];
      }
      
      if (!Array.isArray(dataToConvert) || dataToConvert.some(item => typeof item !== 'object' || item === null)) {
        setOutputContent(null);
        setOutputTitle(null);
        toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.csvConversionRequiresArray'), variant: 'destructive' });
        return;
      }

      const csvParser = new CsvParser();
      const csvString = csvParser.parse(dataToConvert);
      setOutputContent(csvString);
      setOutputTitle(i18n.t('tools.json.convertedToCsvTitle'));
      navigator.clipboard.writeText(csvString);
      toast({ title: i18n.t('toasts.common.success'), description: i18n.t('toasts.success.convertedToCsvAndCopied') });
    } catch (error) {
      setOutputContent(null);
      setOutputTitle(null);
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.conversionFailed'), variant: 'destructive' });
    }
  };

  const handleConvertToDart = () => {
    if (!isValid || !input.trim()) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.invalidJson'), variant: 'destructive' });
      return;
    }
    try {
      const parsed = JSON.parse(input);
      // 修正：rootClassName 为空时使用默认值
      const className = rootClassName && rootClassName.trim() ? rootClassName : 'GeneratedClass';
      const dartCode = jsonToDart(parsed, className, usePrivateFields, useModernDartSyntax);
      setOutputContent(dartCode);
      setOutputTitle(i18n.t('tools.json.convertedToDartTitle'));
      navigator.clipboard.writeText(dartCode);
      toast({ title: i18n.t('toasts.common.success'), description: i18n.t('toasts.success.convertedToDartAndCopied') });
    } catch (error) {
      setOutputContent(null);
      setOutputTitle(null);
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.conversionFailed'), variant: 'destructive' });
    }
  };

  return {
    handleConvertToYaml,
    handleConvertToXml,
    handleConvertToCsv,
    handleConvertToDart,
  };
};
