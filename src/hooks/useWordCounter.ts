
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

    // 改进的单词计数逻辑，支持中文
    const countWords = (str: string): number => {
      // 去除首尾空白
      const trimmed = str.trim();
      if (!trimmed) return 0;
      
      // 分别统计中文字符和英文单词
      const chineseChars = (trimmed.match(/[\u4e00-\u9fff]/g) || []).length;
      
      // 移除中文字符后统计英文单词
      const withoutChinese = trimmed.replace(/[\u4e00-\u9fff]/g, ' ');
      const englishWords = (withoutChinese.match(/\b\w+\b/g) || []).length;
      
      return chineseChars + englishWords;
    };

    const words = countWords(text);
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const sentences = text.match(/[^.!?\n]+[.!?\n]+/g)?.length || (text.trim() ? 1 : 0);
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;

    return { words, characters, charactersNoSpaces, sentences, paragraphs };
  }, [text]);

  return { text, setText, stats };
};
