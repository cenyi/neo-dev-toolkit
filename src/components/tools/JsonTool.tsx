
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useJsonTool } from '@/hooks/useJsonTool';
import JsonToolbar from './JsonToolbar';
import JsonInputArea from './JsonInputArea';
import JsonResultDisplay from './JsonResultDisplay';
import JsonTreeView from './JsonTreeView';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const JsonTool: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('formatter');
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
    <div className="h-screen flex flex-col px-2">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-foreground mb-2">{t('tools.json.title')}</h1>
        <p className="text-muted-foreground">{t('tools.json.description')}</p>
      </header>
      <div className="mb-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="formatter">{t('tools.json.formatter')}</TabsTrigger>
            <TabsTrigger value="viewer">{t('tools.json.viewer')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="formatter" className="flex flex-col h-full">
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
              onGenerateGraph={handleGenerateGraph}
              history={history}
              onSelectHistory={handleSelectFromHistory}
              onRemoveHistoryItem={removeFromHistory}
              onClearHistory={clearHistory}
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
          </TabsContent>
          
          <TabsContent value="viewer" className="flex flex-col h-full">
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
              <div className="flex-1 flex flex-col min-h-0 min-w-0">
                <JsonTreeView 
                  jsonData={input}
                  isValid={isValid}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default JsonTool;
