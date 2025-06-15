
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useWordCounter } from '@/hooks/useWordCounter';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SimpleCodeEditor from './SimpleCodeEditor';

const StatCard: React.FC<{
  title: string;
  value: number;
}> = ({
  title,
  value
}) => <div className="p-4 bg-muted rounded-lg text-center">
    <p className="text-sm text-muted-foreground">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>;

const WordCounter: React.FC = () => {
  const { t } = useTranslation();
  const {
    text,
    setText,
    stats
  } = useWordCounter();
  return <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>{t('tools.text.wordCounter.title')}</CardTitle>
          <CardDescription>{t('tools.text.wordCounter.description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="min-h-[300px] border rounded-md">
            <SimpleCodeEditor
              value={text}
              onChange={setText}
              placeholder={t('tools.text.wordCounter.placeholder')}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <StatCard title={t('tools.text.wordCounter.words')} value={stats.words} />
            <StatCard title={t('tools.text.wordCounter.characters')} value={stats.characters} />
            <StatCard title={t('tools.text.wordCounter.charactersNoSpaces')} value={stats.charactersNoSpaces} />
            <StatCard title={t('tools.text.wordCounter.sentences')} value={stats.sentences} />
            <StatCard title={t('tools.text.wordCounter.paragraphs')} value={stats.paragraphs} />
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default WordCounter;
