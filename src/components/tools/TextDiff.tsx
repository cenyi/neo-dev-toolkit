
import React from 'react';
import { useTextDiff } from '@/hooks/useTextDiff';
import SimpleCodeEditor from './SimpleCodeEditor';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TextDiff: React.FC = () => {
  const { t } = useTranslation();
  const {
    textLeft,
    setTextLeft,
    textRight,
    setTextRight,
    diffResult,
    generateDiff,
    clearAll,
  } = useTextDiff();

  return (
    <div className="h-screen flex flex-col px-2">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-foreground mb-2">{t('tools.text.textDiff.title')}</h1>
        <p className="text-muted-foreground">{t('tools.text.textDiff.description')}</p>
      </header>
      <div className="flex flex-wrap items-center gap-4 mb-1 p-2 bg-background border py-2 rounded-sm">
        <Button onClick={generateDiff}>{t('tools.text.textDiff.compareText')}</Button>
        <Button onClick={clearAll} variant="destructive">{t('tools.text.textDiff.clearAll')}</Button>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-0 pt-2">
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          <Card className="flex-1 flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{t('tools.text.textDiff.originalText')}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-0">
              <div className="h-full min-h-[400px] border rounded-md">
                <SimpleCodeEditor
                  value={textLeft}
                  onChange={setTextLeft}
                  placeholder={t('tools.text.textDiff.originalPlaceholder')}
                  minHeight="400px"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          <Card className="flex-1 flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{t('tools.text.textDiff.newText')}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-0">
              <div className="h-full min-h-[400px] border rounded-md">
                <SimpleCodeEditor
                  value={textRight}
                  onChange={setTextRight}
                  placeholder={t('tools.text.textDiff.newPlaceholder')}
                  minHeight="400px"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {diffResult && (
        <div className="flex-1 flex flex-col min-h-0 mt-4 max-h-[calc(100vh-500px)]">
          <Card className="flex-1 flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{t('tools.text.textDiff.diffResult')}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-0">
              <ScrollArea className="h-full border rounded-md">
                <div className="p-4 font-mono text-sm">
                  {diffResult.map((item, index) => (
                    <div
                      key={index}
                      className={`py-1 px-2 rounded mb-1 ${
                        item.type === 'added'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                          : item.type === 'removed'
                          ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                          : 'bg-gray-50 dark:bg-gray-800/50'
                      }`}
                    >
                      <span className="text-xs text-gray-500 mr-2">
                        {item.lineNumber}:
                      </span>
                      <span className={`${
                        item.type === 'added' ? 'font-semibold' : 
                        item.type === 'removed' ? 'line-through' : ''
                      }`}>
                        {item.type === 'added' ? '+ ' : item.type === 'removed' ? '- ' : '  '}
                        {item.value || t('tools.text.textDiff.emptyLine')}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TextDiff;
