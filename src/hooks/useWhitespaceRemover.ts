
import { useState } from 'react';

export const useWhitespaceRemover = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const removeAll = () => setOutput(input.replace(/\s/g, ''));
  const removeLeadingTrailing = () => setOutput(input.trim());
  const removeExtra = () => setOutput(input.replace(/\s+/g, ' ').trim());
  const removeLines = () => setOutput(input.replace(/(\r\n|\n|\r)/gm, ''));

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
