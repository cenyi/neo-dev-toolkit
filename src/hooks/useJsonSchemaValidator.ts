
import { useState } from 'react';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { toast } from '@/hooks/use-toast';
import i18n from '@/i18n';

const exampleJson = JSON.stringify({
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com"
}, null, 2);

const exampleSchema = JSON.stringify({
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "age": { "type": "integer", "minimum": 0 },
    "email": { "type": "string", "format": "email" }
  },
  "required": ["name", "age", "email"]
}, null, 2);


export const useJsonSchemaValidator = () => {
  const [jsonInput, setJsonInput] = useState(exampleJson);
  const [schemaInput, setSchemaInput] = useState(exampleSchema);
  const [validationResult, setValidationResult] = useState<{ isValid: boolean; message: string; } | null>(null);

  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);

  const handleValidate = () => {
    let jsonData, schemaData;

    if (!jsonInput.trim()) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.jsonSchema.emptyJson', 'JSON data is empty.'), variant: 'destructive' });
      return;
    }
    if (!schemaInput.trim()) {
      toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.jsonSchema.emptySchema', 'JSON Schema is empty.'), variant: 'destructive' });
      return;
    }

    try {
      jsonData = JSON.parse(jsonInput);
    } catch (error) {
      const message = i18n.t('toasts.error.jsonSchema.invalidJson', { defaultValue: `Invalid JSON data: ${(error as Error).message}` });
      setValidationResult({ isValid: false, message });
      toast({ title: i18n.t('toasts.common.error'), description: message, variant: 'destructive' });
      return;
    }

    try {
      schemaData = JSON.parse(schemaInput);
    } catch (error) {
      const message = i18n.t('toasts.error.jsonSchema.invalidSchema', { defaultValue: `Invalid JSON Schema: ${(error as Error).message}` });
      setValidationResult({ isValid: false, message });
      toast({ title: i18n.t('toasts.common.error'), description: message, variant: 'destructive' });
      return;
    }

    try {
      const validate = ajv.compile(schemaData);
      const valid = validate(jsonData);
      if (valid) {
        const message = i18n.t('toasts.success.jsonSchema.valid', 'JSON is valid against the schema.');
        setValidationResult({ isValid: true, message });
        toast({ title: i18n.t('toasts.common.success'), description: message });
      } else {
        const errors = validate.errors?.map(err => `${err.instancePath || 'root'} ${err.message}`).join('\n');
        const message = i18n.t('toasts.error.jsonSchema.invalid', { defaultValue: `Validation failed:\n${errors}` });
        setValidationResult({ isValid: false, message });
        toast({ title: i18n.t('toasts.common.error'), description: i18n.t('toasts.error.jsonSchema.invalidShort', 'JSON is not valid against the schema.'), variant: 'destructive' });
      }
    } catch (error) {
       const message = i18n.t('toasts.error.jsonSchema.compilationError', { defaultValue: `Schema compilation error: ${(error as Error).message}` });
       setValidationResult({ isValid: false, message });
       toast({ title: i18n.t('toasts.common.error'), description: message, variant: 'destructive' });
    }
  };
  
  const clearAll = () => {
    setJsonInput('');
    setSchemaInput('');
    setValidationResult(null);
  };

  return {
    jsonInput,
    setJsonInput,
    schemaInput,
    setSchemaInput,
    validationResult,
    handleValidate,
    clearAll,
  };
};

