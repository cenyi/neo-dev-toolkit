
import { useState, useCallback } from 'react';

export const useWhitespaceRemover = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const removeAll = useCallback(() => setOutput(input.replace(/\s/g, '')), [input]);
  const removeLeadingTrailing = useCallback(() => setOutput(input.trim()), [input]);
  const removeExtra = useCallback(() => setOutput(input.replace(/\s+/g, ' ').trim()), [input]);
  const removeLines = useCallback(() => setOutput(input.replace(/(\r\n|\n|\r)/gm, '')), [input]);

  return {
    input,
    setInput,
    output,
    removeAll,
    removeLeadingTrailing,
    removeExtra,
    removeLines,
  };
};
