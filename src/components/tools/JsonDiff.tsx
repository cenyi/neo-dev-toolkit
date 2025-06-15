
import React from 'react';
import { useJsonDiff } from '@/hooks/useJsonDiff';
import JsonEditor from './JsonEditor';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import '@/styles/jsondiffpatch.css';
import { ScrollArea } from '@/components/ui/scroll-area';

const JsonDiff: React.FC = () => {
  const { t } = useTranslation();
  const {
    jsonLeft,
    setJsonLeft,
    jsonRight,
    setJsonRight,
    diffHtml,
    handleCompare,
    clearAll,
  } = useJsonDiff();

  return (
    <div className="h-screen flex flex-col px-2">
      <div className="flex flex-wrap items-center gap-4 mb-1 p-2 bg-background border py-2 rounded-sm">
        <Button onClick={handleCompare}>{t('common.compare', 'Compare')}</Button>
        <Button onClick={clearAll} variant="destructive">{t('common.clear', 'Clear')}</Button>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-0 pt-2">
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          <div className="flex-1 flex flex-col bg-background border rounded-lg min-w-0 min-h-0 overflow-hidden">
            <div className="px-4 pt-4 mb-3">
              <h3 className="text-lg font-semibold">{t('tools.jsonDiff.originalJson', 'Original JSON')}</h3>
            </div>
            <div className="flex-1 min-h-[150px] px-4 pb-4 overflow-hidden">
              <JsonEditor
                value={jsonLeft}
                onChange={setJsonLeft}
                placeholder={t('tools.jsonDiff.originalPlaceholder', 'Paste original JSON here')}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          <div className="flex-1 flex flex-col bg-background border rounded-lg min-w-0 min-h-0 overflow-hidden">
            <div className="px-4 pt-4 mb-3">
              <h3 className="text-lg font-semibold">{t('tools.jsonDiff.newJson', 'New JSON')}</h3>
            </div>
            <div className="flex-1 min-h-[150px] px-4 pb-4 overflow-hidden">
              <JsonEditor
                value={jsonRight}
                onChange={setJsonRight}
                placeholder={t('tools.jsonDiff.newPlaceholder', 'Paste new JSON here')}
              />
            </div>
          </div>
        </div>
      </div>
      
      {diffHtml && (
        <div className="flex-1 flex flex-col min-h-0 mt-4 max-h-[calc(100vh-500px)]">
            <div className="bg-background border rounded-lg flex-1 flex flex-col overflow-hidden">
                <div className="px-4 pt-4 mb-3">
                    <h3 className="text-lg font-semibold">{t('tools.jsonDiff.diffResult', 'Diff Result')}</h3>
                </div>
                <ScrollArea className="flex-1">
                    <div className="p-4 jsondiffpatch-html" dangerouslySetInnerHTML={{ __html: diffHtml }} />
                </ScrollArea>
            </div>
        </div>
      )}
    </div>
  );
};

export default JsonDiff;
