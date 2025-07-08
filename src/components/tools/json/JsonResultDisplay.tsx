import React from 'react';
import JsonEditor from './JsonEditor';
import MermaidGraphInternational from '../editor/MermaidGraphInternational';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface JsonResultDisplayProps {
  outputContent: string | null;
  title: string | null;
}

const JsonResultDisplay: React.FC<JsonResultDisplayProps> = ({ outputContent, title }) => {
  const { t } = useTranslation();
  const isGraphView = title === t('tools.json.graphTitle');
  const isDartView = title === t('tools.json.convertedToDartTitle');

  const handleDownload = () => {
    if (!outputContent) return;
    const blob = new Blob([outputContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dart_classes.dart';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-[700px] flex flex-col bg-background border rounded-lg overflow-hidden">
      <div className="px-4 pt-4 mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title || t('tools.json.output')}</h3>
        {isDartView && (
          <div className="flex gap-2">
            <Button size="sm" onClick={handleDownload}>{t('common.download') || 'Download'}</Button>
          </div>
        )}
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
            language={isDartView ? 'dart' : 'json'}
          />
        )}
      </div>
    </div>
  );
};

export default JsonResultDisplay;