
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useJsonTool } from '@/hooks/useJsonTool';
import JsonToolbar from './JsonToolbar';
import JsonInputArea from './JsonInputArea';
import JsonResultDisplay from './JsonResultDisplay';
import JsonTreeView from './JsonTreeView';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
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
    <ToolPageLayout 
      title={t('tools.json.title')} 
      description={t('tools.json.description')}
      showAdSpaces={false}
    >
      <div className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="formatter" className="text-sm sm:text-base">
              {t('tools.json.formatter')}
            </TabsTrigger>
            <TabsTrigger value="viewer" className="text-sm sm:text-base">
              {t('tools.json.viewerTitle')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="formatter" className="space-y-6">
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
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="space-y-2">
                <JsonInputArea
                  value={input}
                  onChange={handleInputChange}
                  placeholder={t('tools.json.placeholder')}
                  isValid={isValid}
                  validationError={validationError}
                />
              </div>
              <div className={`space-y-2 ${outputContent === null ? 'hidden xl:block opacity-50' : 'block'}`}>
                <JsonResultDisplay outputContent={outputContent} title={outputTitle} />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="viewer" className="space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="space-y-2">
                <JsonInputArea
                  value={input}
                  onChange={handleInputChange}
                  placeholder={t('tools.json.placeholder')}
                  isValid={isValid}
                  validationError={validationError}
                />
              </div>
              <div className="space-y-2">
                <JsonTreeView 
                  jsonData={input}
                  isValid={isValid}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ToolPageLayout>
  );
};

export default JsonTool;
