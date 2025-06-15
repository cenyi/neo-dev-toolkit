
import React from 'react';
import { useJsonMock } from '@/hooks/useJsonMock';
import JsonEditor from './JsonEditor';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

const JsonMock: React.FC = () => {
  const { t } = useTranslation();
  const {
    schema,
    setSchema,
    mockData,
    error,
    handleGenerate,
    clearAll,
  } = useJsonMock();

  const schemaPlaceholder = `{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "minimum": 1
    },
    "name": {
      "type": "string",
      "faker": "person.fullName"
    },
    "email": {
      "type": "string",
      "format": "email",
      "faker": "internet.email"
    }
  },
  "required": ["id", "name", "email"]
}`;

  return (
    <div className="h-screen flex flex-col px-2">
      <div className="flex flex-wrap items-center gap-4 mb-1 p-2 bg-background border py-2 rounded-sm">
        <Button onClick={handleGenerate}>
          {t('tools.jsonMock.generate', 'Generate')}
        </Button>
        <Button onClick={clearAll} variant="destructive">{t('common.clear', 'Clear')}</Button>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-0 pt-2">
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          <div className="flex-1 flex flex-col bg-background border rounded-lg min-w-0 min-h-0 overflow-hidden">
            <div className="px-4 pt-4 mb-3">
              <h3 className="text-lg font-semibold">{t('tools.jsonMock.schemaTitle', 'JSON Schema')}</h3>
            </div>
            <div className="flex-1 min-h-[150px] px-4 pb-4 overflow-hidden">
              <JsonEditor
                value={schema}
                onChange={setSchema}
                placeholder={schemaPlaceholder}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          <div className="flex-1 flex flex-col bg-background border rounded-lg min-w-0 min-h-0 overflow-hidden">
            <div className="px-4 pt-4 mb-3">
              <h3 className="text-lg font-semibold">{t('tools.jsonMock.resultTitle', 'Generated Mock Data')}</h3>
            </div>
            <div className="flex-1 min-h-[150px] px-4 pb-4 overflow-hidden">
              <JsonEditor
                value={mockData}
                readOnly
                placeholder={t('tools.jsonMock.resultPlaceholder', 'Generated mock data will appear here')}
              />
            </div>
          </div>
        </div>
      </div>
      
      {error && (
        <div className="mt-4">
            <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>{t('common.error', 'Error')}</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
            </Alert>
        </div>
      )}
    </div>
  );
};

export default JsonMock;
