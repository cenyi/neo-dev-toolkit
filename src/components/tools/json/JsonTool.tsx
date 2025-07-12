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

  // 2023-10-27 添加结果区域显示控制状态
  const [isResultVisible, setIsResultVisible] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <div className="p-4">
        <JsonToolbar
          onFormat={() => {
            handleToggleMinifyFormat(true);
            // 点击Format按钮时隐藏结果区域
            setIsResultVisible(false);
          }}
          onMinify={() => {
            handleToggleMinifyFormat(false);
            // 点击Minify按钮时隐藏结果区域
            setIsResultVisible(false);
          }}
          onCopy={copyToClipboard}
          onClear={() => {
            clearAll();
            // 点击Clear按钮时显示结果区域
            setIsResultVisible(false);
          }}
          isFormatMinifyDisabled={!isValid || !input.trim()}
          onExtract={()=>{
            handleExtractValue();
            // 点击Extract按钮时显示结果区域
            setIsResultVisible(true);
          }}
          extractPath={extractPath}
          onExtractPathChange={onExtractPathChange}
          onConvertToYaml={()=>{
            handleConvertToYaml();
            // 点击Convert to YAML按钮时显示结果区域
            setIsResultVisible(true);
          }}
          onConvertToXml={()=>{
            handleConvertToXml();
            // 点击Convert to XML按钮时显示结果区域
            setIsResultVisible(true);
          }}
          onConvertToCsv={()=>{
            handleConvertToCsv();
            // 点击Convert to CSV按钮时显示结果区域
            setIsResultVisible(true);
          }}
          onConvertToDart={()=>{
            handleConvertToDart();
            // 点击Convert to Dart按钮时显示结果区域
            setIsResultVisible(true);
          }}
          onGenerateGraph={()=>{
            handleGenerateGraph();
            // 点击Generate Graph按钮时显示结果区域
            setIsResultVisible(true);
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
      </div>
      
      <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-0">
        <div className="flex-1 flex flex-col min-h-0 min-w-0 p-4">
          <JsonInputArea
            value={input}
            onChange={handleInputChange}
            placeholder={t('tools.json.placeholder')}
            isValid={isValid}
            validationError={validationError}
          />
          </div>
        <div className={`flex-1 flex flex-col min-h-0 min-w-0 p-4 ${!isResultVisible ? 'hidden' : ''}`}>
          <JsonResultDisplay outputContent={outputContent} title={outputTitle} onCopyOutputCode={copyOutputCode} />
          </div>
      </div>
      </div>
    );
};

export default JsonTool;