
import { useState, useMemo } from 'react';
import CryptoJS from 'crypto-js';

export const useMd5Generator = () => {
  const [input, setInput] = useState('');

  const output = useMemo(() => {
    if (!input) {
      return '';
    }
    return CryptoJS.MD5(input).toString();
  }, [input]);

  return { input, setInput, output };
};
