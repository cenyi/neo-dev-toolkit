
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useJsonSchemaValidator } from '@/hooks/json/useJsonSchemaValidator';
import JsonEditor from './json/JsonEditor';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertCircle } from 'lucide-react';

const JsonSchemaValidator: React.FC = () => {
  const { t } = useTranslation();
  const {
    jsonInput,
    setJsonInput,
    schemaInput,
    setSchemaInput,
    validationResult,
    handleValidate,
    clearAll,
  } = useJsonSchemaValidator();

  return (
    <div className="h-screen flex flex-col px-2">
      <div className="flex flex-wrap items-center gap-4 mb-1 p-2 bg-background border py-2 rounded-sm">
        <Button onClick={handleValidate}>{t('common.validate', 'Validate')}</Button>
        <Button onClick={clearAll} variant="destructive">{t('common.clear', 'Clear')}</Button>
      </div>

      {validationResult && (
         <div className="my-3">
          <Alert variant={validationResult.isValid ? 'default' : 'destructive'}>
            <div className="flex items-center gap-2">
              {validationResult.isValid ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
              <span className="font-semibold">{validationResult.isValid ? t('common.success', 'Success') : t('common.error', 'Error')}</span>
            </div>
            <AlertDescription className="text-sm whitespace-pre-wrap mt-2">
              {validationResult.message}
            </AlertDescription>
          </Alert>
        </div>
      )}

      <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-0 pt-2">
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          <div className="flex-1 flex flex-col bg-background border rounded-lg min-w-0 min-h-0 overflow-hidden">
            <div className="px-4 pt-4 mb-3">
              <h3 className="text-lg font-semibold">{t('tools.jsonSchema.jsonData', 'JSON Data')}</h3>
            </div>
            <div className="flex-1 min-h-[150px] px-4 pb-4 overflow-hidden">
              <JsonEditor
                value={jsonInput}
                onChange={setJsonInput}
                placeholder={t('tools.jsonSchema.jsonDataPlaceholder', 'Enter or paste your JSON data here')}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          <div className="flex-1 flex flex-col bg-background border rounded-lg min-w-0 min-h-0 overflow-hidden">
            <div className="px-4 pt-4 mb-3">
              <h3 className="text-lg font-semibold">{t('tools.jsonSchema.jsonSchema', 'JSON Schema')}</h3>
            </div>
            <div className="flex-1 min-h-[150px] px-4 pb-4 overflow-hidden">
              <JsonEditor
                value={schemaInput}
                onChange={setSchemaInput}
                placeholder={t('tools.jsonSchema.jsonSchemaPlaceholder', 'Enter or paste your JSON Schema here')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonSchemaValidator;

