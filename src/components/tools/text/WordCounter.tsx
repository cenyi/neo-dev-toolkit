
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useWordCounter } from '@/hooks/text/useWordCounter';
import { Card, CardContent } from '@/components/ui/card';
import SimpleCodeEditor from '../editor/SimpleCodeEditor';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

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
  return (
    <ToolPageLayout
      title={t('tools.text.wordCounter.title')}
      description={t('tools.text.wordCounter.description')}
    >
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div className="min-h-[600px] border rounded-md">
            <SimpleCodeEditor
              value={text}
              onChange={setText}
              placeholder={t('tools.text.wordCounter.placeholder')}
              minHeight="600px"
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
    </ToolPageLayout>
  );
};
export default WordCounter;
