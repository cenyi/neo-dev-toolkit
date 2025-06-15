
import { useState, useMemo } from 'react';

export const useWordCounter = () => {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    if (!text.trim()) {
      return {
        words: 0,
        characters: 0,
        charactersNoSpaces: 0,
        sentences: 0,
        paragraphs: 0,
      };
    }

    const words = text.match(/\b\w+\b/g)?.length || 0;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const sentences = text.match(/[^.!?\n]+[.!?\n]+/g)?.length || (text.trim() ? 1 : 0);
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;

    return { words, characters, charactersNoSpaces, sentences, paragraphs };
  }, [text]);

  return { text, setText, stats };
};
