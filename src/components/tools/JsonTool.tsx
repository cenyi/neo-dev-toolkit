
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
    <div className="h-screen flex flex-col">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
        <TabsList className="grid w-full grid-cols-2 mb-1">
          <TabsTrigger value="formatter" className="text-sm sm:text-base">
            {t('tools.json.formatter')}
          </TabsTrigger>
          <TabsTrigger value="viewer" className="text-sm sm:text-base">
            {t('tools.json.viewerTitle')}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="formatter" className="flex-1 flex flex-col min-h-0">
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
          
          <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-0">
            <div className="flex-1 flex flex-col min-h-0 min-w-0">
              <JsonInputArea
                value={input}
                onChange={handleInputChange}
                placeholder={t('tools.json.placeholder')}
                isValid={isValid}
                validationError={validationError}
              />
            </div>
            <div className={`flex-1 flex flex-col min-h-0 min-w-0 ${outputContent === null ? 'hidden md:block opacity-50' : 'block'}`}>
              <JsonResultDisplay outputContent={outputContent} title={outputTitle} />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="viewer" className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 flex flex-col md:flex-row gap-2 min-h-0">
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
  );
};

export default JsonTool;
