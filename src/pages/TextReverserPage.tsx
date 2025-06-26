
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageWrapper from '@/components/PageWrapper';
import TextHistoryModal from '@/components/tools/TextHistoryModal';
import { useTextHistory } from '@/hooks/useTextHistory';
import { toast } from '@/hooks/use-toast';

const TextReverserPage: React.FC = () => {
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
    <PageWrapper
      title={t('tools.text.textReverser.title')}
      description="Free online text reverser tool. Reverse the order of characters in your text instantly. Perfect for creating mirror text, backwards text, or simply reversing strings."
      keywords="text reverser, reverse text, backwards text, mirror text, string reverser, text manipulation"
    >
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('tools.text.textReverser.title')}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('tools.text.textReverser.description')}
              </p>
            </header>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
                Reverse Your Text Online
              </h2>
              
              {/* 工具栏 */}
              <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-background border rounded-lg">
                <Button onClick={handleCopy} className="text-sm font-extrabold">
                  {t('common.copy')}
                </Button>
                <Button onClick={handleClear} variant="destructive" className="text-sm font-extrabold">
                  {t('common.clear')}
                </Button>
                <TextHistoryModal
                  history={history}
                  onSelectHistory={handleSelectFromHistory}
                  onRemoveItem={removeFromHistory}
                  onClearHistory={clearHistory}
                  title="文本历史"
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
    </PageWrapper>
  );
};

export default TextReverserPage;
