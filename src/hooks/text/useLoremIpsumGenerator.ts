
import { useState } from 'react';
import { faker } from '@faker-js/faker';

export type GenerationType = 'paragraphs' | 'sentences' | 'words';

export const useLoremIpsumGenerator = () => {
  const [count, setCount] = useState<number>(5);
  const [type, setType] = useState<GenerationType>('paragraphs');
  const [generatedText, setGeneratedText] = useState('');

  const generate = () => {
    switch (type) {
      case 'paragraphs':
        setGeneratedText(faker.lorem.paragraphs(count, '\n\n'));
        break;
      case 'sentences':
        setGeneratedText(faker.lorem.sentences(count, ' '));
        break;
      case 'words':
        setGeneratedText(faker.lorem.words(count));
        break;
      default:
        setGeneratedText('');
    }
  };

  return {
    count,
    setCount,
    type,
    setType,
    generatedText,
    generate,
  };
};
