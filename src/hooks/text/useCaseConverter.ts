
import { useState, useCallback } from 'react';

export const useCaseConverter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const toUpperCase = useCallback(() => setOutput(input.toUpperCase()), [input]);
  const toLowerCase = useCallback(() => setOutput(input.toLowerCase()), [input]);
  const toTitleCase = useCallback(() => setOutput(input.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())), [input]);
  const toSentenceCase = useCallback(() => {
    if (!input) {
      setOutput('');
      return;
    }
    const result = input.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setOutput(result);
  }, [input]);

  return {
    input,
    setInput,
    output,
    toUpperCase,
    toLowerCase,
    toTitleCase,
    toSentenceCase,
  };
};
