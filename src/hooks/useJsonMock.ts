
import { useState } from 'react';
import { JSONSchemaFaker as jsf } from 'json-schema-faker';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { faker } from '@faker-js/faker';

jsf.extend('faker', () => faker);

export const useJsonMock = () => {
  const { t } = useTranslation();
  const [schema, setSchema] = useState('');
  const [mockData, setMockData] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!schema.trim()) {
      setError(t('tools.jsonMock.errors.emptySchema', 'Schema cannot be empty.'));
      setMockData('');
      return;
    }

    try {
      const schemaObject = JSON.parse(schema);
      setError(null);
      
      const generated = jsf.generate(schemaObject);
      
      setMockData(JSON.stringify(generated, null, 2));
      toast({
        title: t('common.success', 'Success'),
        description: t('tools.jsonMock.toasts.success', 'Mock data generated successfully.'),
      });
    } catch (e: any) {
      setError(`${t('tools.jsonMock.errors.invalidSchema', 'Invalid JSON Schema')}: ${e.message}`);
      setMockData('');
      toast({
        title: t('common.error', 'Error'),
        description: `${t('tools.jsonMock.errors.generationFailed', 'Failed to generate mock data')}: ${e.message}`,
        variant: 'destructive',
      });
    }
  };
  
  const clearAll = () => {
    setSchema('');
    setMockData('');
    setError(null);
  };

  return {
    schema,
    setSchema,
    mockData,
    error,
    handleGenerate,
    clearAll
  };
};
