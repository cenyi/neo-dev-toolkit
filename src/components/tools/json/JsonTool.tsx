import React from 'react';
import { useTranslation } from 'react-i18next';
import { useJsonTool } from '@/hooks/json/useJsonTool';
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
    handleGenerateGraph,
    history,
    handleSelectFromHistory,
    removeFromHistory,
    clearHistory,
  } = useJsonTool();

  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-2xl font-bold p-4 text-center text-foreground">{t('tools.json.title')}</h1>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2 text-foreground">{t('tools.json.actionsTitle')}</h3>
        <JsonToolbar
        onFormat={handleToggleMinifyFormat}
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
        onGenerateGraph={handleGenerateGraph}
        history={history}
        onSelectHistory={handleSelectFromHistory}
        onRemoveHistoryItem={removeFromHistory}
        onClearHistory={clearHistory}
      />
      </div>
      
      {history.length > 0 && (
          <div className="p-4 border-t">
            <h3 className="text-lg font-medium mb-2 text-foreground">{t('tools.json.historyTitle')}</h3>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {history.map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded">
                  <button onClick={() => handleSelectFromHistory(index)} className="text-sm truncate flex-1">{item}</button>
                  <button onClick={() => removeFromHistory(index)} className="text-muted-foreground hover:text-destructive">
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
     )}
      <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-0">
        <div className="flex-1 flex flex-col min-h-0 min-w-0 p-4">
          <h2 className="text-xl font-semibold mb-2 text-foreground">{t('tools.json.inputTitle')}</h2>
          <JsonInputArea
            value={input}
            onChange={handleInputChange}
            placeholder={t('tools.json.placeholder')}
            isValid={isValid}
            validationError={validationError}
          />
          </div>
        <div className="flex-1 flex flex-col min-h-0 min-w-0 p-4">
          <h2 className="text-xl font-semibold mb-2 text-foreground">{t('tools.json.outputTitle')}</h2>
          <JsonResultDisplay outputContent={outputContent} title={outputTitle} />
          </div>
      </div>
      </div>
    );
};

export default JsonTool;