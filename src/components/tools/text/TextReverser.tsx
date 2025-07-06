import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TextHistoryModal from './TextHistoryModal';
import { useTextHistory } from '@/hooks/text/useTextHistory';
import { toast } from '@/hooks/use-toast';

const TextReverser: React.FC = () => {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState('');
  const [reversedText, setReversedText] = useState('');
  
  // 使用历史记录功能
  const { history, addToHistory, removeFromHistory, clearHistory } = useTextHistory('text-reverser-history', 20);

  // 文本反转逻辑
  useEffect(() => {
    const reversed = inputText.split('').reverse().join('');
    setReversedText(reversed);
    
    // 如果有输入文本且不为空，添加到历史记录
    if (inputText.trim()) {
      addToHistory(inputText);
    }
  }, [inputText, addToHistory]);

  const handleCopy = () => {
    if (!reversedText) {
      toast({
        title: t('toasts.common.info'),
        description: t('toasts.info.emptyContent'),
      });
      return;
    }
    navigator.clipboard.writeText(reversedText);
    toast({
      title: t('toasts.common.success'),
      description: t('toasts.success.copied'),
    });
  };

  const handleClear = () => {
    setInputText('');
    setReversedText('');
  };

  const handleSelectFromHistory = (content: string) => {
    setInputText(content);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-2">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t('tools.text.textReverser.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('tools.text.textReverser.description')}
            </p>
          </header>
          
          <section>
            {/* 工具栏 */}
            <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-background border rounded-lg">
              <Button onClick={handleCopy} className="text-sm font-medium">
                {t('common.copy')}
              </Button>
              <Button onClick={handleClear} variant="destructive" className="text-sm font-medium">
                {t('common.clear')}
              </Button>
              <TextHistoryModal
                history={history}
                onSelectHistory={handleSelectFromHistory}
                onRemoveItem={removeFromHistory}
                onClearHistory={clearHistory}
                title="history"
              />
            </div>

            {/* 输入输出区域 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('common.input')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={t('tools.text.textReverser.placeholder')}
                    className="min-h-[400px] resize-none"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('tools.text.textReverser.reversedText')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={reversedText}
                    readOnly
                    className="min-h-[400px] resize-none bg-muted"
                  />
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TextReverser;