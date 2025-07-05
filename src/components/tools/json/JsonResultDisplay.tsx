import React from 'react';
import JsonEditor from './JsonEditor';
import MermaidGraphInternational from '../editor/MermaidGraphInternational';
import { useTranslation } from 'react-i18next';

interface JsonResultDisplayProps {
  outputContent: string | null;
  title: string | null;
}

const JsonResultDisplay: React.FC<JsonResultDisplayProps> = ({ outputContent, title }) => {
  const { t } = useTranslation();
  const isGraphView = title === t('tools.json.graphTitle');

  return (
    <div className="h-[700px] flex flex-col bg-background border rounded-lg overflow-hidden">
      <div className="px-4 pt-4 mb-3">
        <h3 className="text-lg font-semibold">{title || t('tools.json.output')}</h3>
      </div>
      <div className="flex-1 px-4 pb-4 overflow-hidden">
        {isGraphView ? (
          <MermaidGraphInternational 
            content={outputContent ?? ''} 
            orientation="vertical"
          />
        ) : (
          <JsonEditor 
            value={outputContent ?? ''} 
            readOnly={true} 
            placeholder={outputContent === null ? t('tools.json.outputPlaceholder') : ''} 
          />
        )}
      </div>
    </div>
  );
};

export default JsonResultDisplay;