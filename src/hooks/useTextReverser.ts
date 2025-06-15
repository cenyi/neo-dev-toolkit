
import { useState, useMemo } from 'react';

export const useTextReverser = () => {
  const [input, setInput] = useState('');
  
  const output = useMemo(() => input.split('').reverse().join(''), [input]);

  return { input, setInput, output };
};
