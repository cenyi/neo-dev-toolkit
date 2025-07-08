import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, CheckCircle } from 'lucide-react';
import JsonEditor from './JsonEditor';

interface JsonInputAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  isValid: boolean;
  validationError: string | null;
}

const JsonInputArea: React.FC<JsonInputAreaProps> = ({
  value,
  onChange,
  placeholder,
  isValid,
  validationError,
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="h-[700px] flex flex-col bg-background border rounded-lg min-w-0 overflow-hidden">
      <div className="flex items-center justify-between px-4 pt-4 mb-3">
        <h3 className="text-lg font-semibold">{t('tools.json.input')}</h3>
        {value.trim() && (
          <div className="flex items-center gap-2">
            {isValid ? (
              <div className="flex items-center gap-1 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">{t('tools.json.validJson')}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-red-600">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">{t('tools.json.invalidJson')}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {validationError && (
        <div className="mx-4 mb-3">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-sm">
              {validationError}
            </AlertDescription>
          </Alert>
        </div>
      )}

      <div className="flex-1 px-4 pb-4 overflow-hidden">
        <JsonEditor
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default JsonInputArea;