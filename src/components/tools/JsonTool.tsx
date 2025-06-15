
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
    outputContent,
    outputTitle,
    handleToggleMinifyFormat,
    copyToClipboard,
    clearAll,
    isFormatMinifyDisabled,
    handleExtractValue,
    extractPath,
    onExtractPathChange,
    handleConvertToYaml,
    handleConvertToXml,
    handleConvertToCsv,
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
        onConvertToYaml={handleConvertToYaml}
        onConvertToXml={handleConvertToXml}
        onConvertToCsv={handleConvertToCsv}
      />
      
      <div className="flex-1 flex flex-row gap-4 min-h-0 pt-2">
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          <JsonInputArea
            value={input}
            onChange={handleInputChange}
            placeholder={t('tools.json.placeholder')}
            isValid={isValid}
            validationError={validationError}
          />
        </div>
        <div className={`flex-1 flex-col min-h-0 min-w-0 ${outputContent === null ? 'hidden' : 'flex'}`}>
          <JsonResultDisplay outputContent={outputContent} title={outputTitle} />
        </div>
      </div>
    </div>
  );
};

export default JsonTool;
