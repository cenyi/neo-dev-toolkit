import React, { useState } from 'react'; // 2023-10-27 添加useState导入
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
    handleConvertToDart,
    handleGenerateGraph,
    history,
    handleSelectFromHistory,
    removeFromHistory,
    clearHistory,
    rootClassName,
    setRootClassName,
    usePrivateFields,
    setUsePrivateFields,
    useModernDartSyntax,
    setUseModernDartSyntax,
    copyOutputCode,
    loadSampleJson
  } = useJsonTool();

  return (
    <div className="w-full h-screen flex flex-col">
      <JsonToolbar
        onFormat={() => {
          handleToggleMinifyFormat(true);
        }}
        onMinify={() => {
          handleToggleMinifyFormat(false);
        }}
        onCopy={copyToClipboard}
        onClear={() => {
          clearAll();
        }}
        isFormatMinifyDisabled={!isValid || !input.trim()}
        onExtract={()=>{
          handleExtractValue();
        }}
        extractPath={extractPath}
        onExtractPathChange={onExtractPathChange}
        onConvertToYaml={()=>{
          handleConvertToYaml();
        }}
        onConvertToXml={()=>{
          handleConvertToXml();
        }}
        onConvertToCsv={()=>{
          handleConvertToCsv();
        }}
        onConvertToDart={()=>{
          handleConvertToDart();
        }}
        onGenerateGraph={()=>{
          handleGenerateGraph();
        }}
        history={history}
        onSelectHistory={handleSelectFromHistory}
        onRemoveHistoryItem={removeFromHistory}
        onClearHistory={clearHistory}
        rootClassName={rootClassName}
        setRootClassName={setRootClassName}
        usePrivateFields={usePrivateFields}
        setUsePrivateFields={setUsePrivateFields}
        useModernDartSyntax={useModernDartSyntax}
        setUseModernDartSyntax={setUseModernDartSyntax}
        onCopyOutputCode={copyOutputCode}
        onLoadSampleJson={loadSampleJson}
        outputTitle={outputTitle}
      />
      
      <div className="w-full flex-1 flex flex-row min-h-0 gap-4">
        <div className="w-[40%] flex flex-col min-h-0 min-w-0">
          <JsonInputArea
            value={input}
            onChange={handleInputChange}
            placeholder={t('tools.json.placeholder')}
            isValid={isValid}
            validationError={validationError}
          />
        </div>
        <div className="w-[60%] flex flex-col min-h-0 min-w-0">
          <JsonResultDisplay outputContent={outputContent} title={outputTitle} onCopyOutputCode={copyOutputCode} />
        </div>
      </div>
      </div>
    );
};

export default JsonTool;