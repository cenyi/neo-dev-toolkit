
import { useState } from 'react';

export const useUrlEncoderDecoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleEncode = () => {
    try {
      setError('');
      setOutput(encodeURIComponent(input));
    } catch (e: any) {
      setError(e.message);
      setOutput('');
    }
  };

  const handleDecode = () => {
    try {
      setError('');
      setOutput(decodeURIComponent(input));
    } catch (e: any) {
      setError('Invalid input for decoding.');
      setOutput('');
    }
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  return { input, setInput, output, error, handleEncode, handleDecode, clearAll };
};
