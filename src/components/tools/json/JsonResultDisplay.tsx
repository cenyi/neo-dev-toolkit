import React, { useState } from 'react';
import JsonEditor from './JsonEditor';
import JsonFormView from './JsonFormView';
import JsonTextView from './JsonTextView';
import JsonTreeView from './JsonTreeView';
import JsonVisualView from './JsonVisualView';
import MermaidGraphInternational from '../editor/MermaidGraphInternational';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Code, FileText, List, Eye, TreePine, ExpandIcon, ShrinkIcon, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

interface JsonResultDisplayProps {
  outputContent: string | null;
  title: string | null;
  onCopyOutputCode?: () => void;
}

type ViewMode = 'code' | 'form' | 'text' | 'tree' | 'visual';

const JsonResultDisplay: React.FC<JsonResultDisplayProps> = ({ outputContent, title, onCopyOutputCode }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ViewMode>('code');
  const [expandAll, setExpandAll] = useState(false);
  const [collapseAll, setCollapseAll] = useState(false);
  const [sortMode, setSortMode] = useState<'none' | 'asc' | 'desc'>('none');
  
  const isGraphView = title === t('tools.json.graphTitle');
  const isDartView = title === t('tools.json.convertedToDartTitle');
  const isJsonContent = outputContent && !isGraphView && !isDartView;

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

  const renderContent = () => {
    if (isGraphView) {
      return (
        <MermaidGraphInternational 
          content={outputContent ?? ''} 
          orientation="vertical"
        />
      );
    }

    if (!isJsonContent) {
      return (
        <>
          <div className="mb-2" style={{ minHeight: '44px' }}></div>
          <JsonEditor 
            value={outputContent ?? ''} 
            readOnly={true} 
            placeholder={outputContent === null ? t('tools.json.outputPlaceholder') : ''} 
            language={isDartView ? 'dart' : 'json'}
          />
        </>
      );
    }

    // For JSON content, show tabbed views
    return (
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ViewMode)} className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-2" style={{ minHeight: '44px' }}>
          <TabsList className="grid w-auto grid-cols-5 bg-muted/50">
            <TabsTrigger value="code" className="flex items-center gap-1 text-xs">
              <Code className="h-3 w-3" />
              {t('tools.json.viewModes.code')}
            </TabsTrigger>
            <TabsTrigger value="form" className="flex items-center gap-1 text-xs">
              <FileText className="h-3 w-3" />
              {t('tools.json.viewModes.form')}
            </TabsTrigger>
            <TabsTrigger value="text" className="flex items-center gap-1 text-xs">
              <List className="h-3 w-3" />
              {t('tools.json.viewModes.text')}
            </TabsTrigger>
            <TabsTrigger value="tree" className="flex items-center gap-1 text-xs">
              <TreePine className="h-3 w-3" />
              {t('tools.json.viewModes.tree')}
            </TabsTrigger>
            <TabsTrigger value="visual" className="flex items-center gap-1 text-xs">
              <Eye className="h-3 w-3" />
              {t('tools.json.viewModes.visual')}
            </TabsTrigger>
          </TabsList>
          
          {/* 功能按钮区域 */}
          <div className="flex items-center gap-1">
            <Button 
              variant="outline"
              size="sm" 
              className="h-8 px-2 text-xs"
              onClick={() => {
                setExpandAll(true);
                setCollapseAll(false);
              }}
              title={t('tools.json.expandAllNodes')}
            >
              <ExpandIcon className="h-3 w-3" />
            </Button>
            <Button 
              variant="outline"
              size="sm" 
              className="h-8 px-2 text-xs"
              onClick={() => {
                setCollapseAll(true);
                setExpandAll(false);
              }}
              title={t('tools.json.collapseAllNodes')}
            >
              <ShrinkIcon className="h-3 w-3" />
            </Button>
            <Button 
              variant={sortMode !== 'none' ? "default" : "outline"}
              size="sm" 
              className="h-8 px-2 text-xs"
              onClick={() => {
                setSortMode(prev => {
                  if (prev === 'none') return 'asc';
                  if (prev === 'asc') return 'desc';
                  return 'none';
                });
              }}
              title={
                sortMode === 'none' ? t('tools.json.sortByKeys') :
                sortMode === 'asc' ? t('tools.json.sortAscending') :
                t('tools.json.sortDescending')
              }
            >
              {sortMode === 'none' && <ArrowUpDown className="h-3 w-3" />}
              {sortMode === 'asc' && <ArrowUp className="h-3 w-3" />}
              {sortMode === 'desc' && <ArrowDown className="h-3 w-3" />}
            </Button>
          </div>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <TabsContent value="code" className="h-full m-0">
            <JsonEditor 
              value={(() => {
                if (!outputContent || sortMode === 'none') return outputContent ?? '';
                try {
                  const parsed = JSON.parse(outputContent);
                  const sortObjectKeys = (obj: unknown): unknown => {
                    if (obj === null || typeof obj !== 'object') return obj;
                    if (Array.isArray(obj)) return obj.map(sortObjectKeys);
                    
                    const sortedObj: Record<string, unknown> = {};
                    const keys = Object.keys(obj as Record<string, unknown>).sort((a, b) => {
                      const compareResult = a.localeCompare(b);
                      return sortMode === 'asc' ? compareResult : -compareResult;
                    });
                    
                    for (const key of keys) {
                      sortedObj[key] = sortObjectKeys((obj as Record<string, unknown>)[key]);
                    }
                    return sortedObj;
                  };
                  
                  return JSON.stringify(sortObjectKeys(parsed), null, 2);
                } catch {
                  return outputContent;
                }
              })()} 
              readOnly={true} 
              placeholder={outputContent === null ? t('tools.json.outputPlaceholder') : ''} 
              language="json"
            />
          </TabsContent>
          
          <TabsContent value="form" className="h-full m-0">
            <div className="h-full border rounded-md bg-background">
              <JsonFormView 
                data={outputContent ?? ''} 
                sortMode={sortMode}
                expandAll={expandAll}
                collapseAll={collapseAll}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="text" className="h-full m-0">
            <div className="h-full border rounded-md bg-background">
              <JsonTextView data={outputContent ?? ''} sortMode={sortMode} />
            </div>
          </TabsContent>
          
          <TabsContent value="tree" className="h-full m-0">
            <div className="h-full border rounded-md bg-background">
              <JsonTreeView 
                data={outputContent ?? ''} 
                expandAll={expandAll}
                collapseAll={collapseAll}
                sortMode={sortMode}
                onExpandAllChange={setExpandAll}
                onCollapseAllChange={setCollapseAll}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="visual" className="h-full m-0">
            <div className="h-full border rounded-md bg-background">
              <JsonVisualView 
                data={outputContent ?? ''} 
                sortMode={sortMode}
                expandAll={expandAll}
                collapseAll={collapseAll}
              />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    );
  };

  return (
    <div className="h-full flex flex-col bg-background overflow-hidden">
      <div className="pt-3 mb-2 flex items-center justify-between" style={{ minHeight: '32px' }}>
        <h3 className="text-base font-semibold">{title || t('tools.json.output')}</h3>
        {isDartView && (
          <div className="flex gap-2">
            <Button size="sm" onClick={onCopyOutputCode}>{t('common.copyCode')}</Button>
            <Button size="sm" onClick={handleDownload}>{t('common.download') || 'Download'}</Button>
          </div>
        )}
      </div>
      <div className="flex-1 pb-3 overflow-hidden">
        {renderContent()}
      </div>
    </div>
  );
};

export default JsonResultDisplay;