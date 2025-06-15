
import { useState } from 'react';

export const useCaseConverter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const toUpperCase = () => setOutput(input.toUpperCase());
  const toLowerCase = () => setOutput(input.toLowerCase());
  const toTitleCase = () => setOutput(input.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
  const toSentenceCase = () => {
    if (!input) {
      setOutput('');
      return;
    }
    const result = input.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setOutput(result);
  }

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
