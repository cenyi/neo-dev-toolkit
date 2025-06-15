import React from 'react';
import { useWordCounter } from '@/hooks/useWordCounter';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
  const {
    text,
    setText,
    stats
  } = useWordCounter();
  return <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Word &amp; Character Counter</CardTitle>
          <CardDescription>Count words, characters, sentences, and paragraphs in your text.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea placeholder="Type or paste your text here..." value={text} onChange={e => setText(e.target.value)} className="min-h-[300px]" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <StatCard title="Words" value={stats.words} />
            <StatCard title="Characters" value={stats.characters} />
            <StatCard title="Characters (no spaces)" value={stats.charactersNoSpaces} />
            <StatCard title="Sentences" value={stats.sentences} />
            <StatCard title="Paragraphs" value={stats.paragraphs} />
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default WordCounter;