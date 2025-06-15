
import { useState } from 'react';

export const useTextReverser = () => {
  const [input, setInput] = useState('');
  
  const output = input.split('').reverse().join('');

  return { input, setInput, output };
};
