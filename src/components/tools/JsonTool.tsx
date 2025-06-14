
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useJsonTool } from '@/hooks/useJsonTool';
import JsonToolbar from './JsonToolbar';
import JsonInputArea from './JsonInputArea';
import JsonResultDisplay from './JsonResultDisplay';

const JsonTool: React.FC = () => {
  const { t } = useTranslation();
  const {
    input,
    handleInputChange,
    isValid,
    validationError,
    extractedValue,
    handleToggleMinifyFormat,
    copyToClipboard,
    clearAll,
    isFormatMinifyDisabled,
    handleExtractValue,
    extractPath,
    onExtractPathChange,
  } = useJsonTool();

  return (
    <div className="h-screen flex flex-col px-2">
      <JsonToolbar
        onMinify={handleToggleMinifyFormat}
        onCopy={copyToClipboard}
        onClear={clearAll}
        isFormatMinifyDisabled={isFormatMinifyDisabled}
        onExtract={handleExtractValue}
        extractPath={extractPath}
        onExtractPathChange={onExtractPathChange}
      />
      
      <div className="flex-1 flex flex-row gap-4 min-h-0 pt-2">
        <div className="flex-1 flex flex-col min-h-0">
          <JsonInputArea
            value={input}
            onChange={handleInputChange}
            placeholder={t('tools.json.placeholder')}
            isValid={isValid}
            validationError={validationError}
          />
        </div>
        <div className={`flex-1 flex-col min-h-0 ${extractedValue === null ? 'hidden' : 'flex'}`}>
          <JsonResultDisplay extractedValue={extractedValue} />
        </div>
      </div>
    </div>
  );
};

export default JsonTool;
