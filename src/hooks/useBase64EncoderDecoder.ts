
import { useState } from 'react';

export const useBase64EncoderDecoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleEncode = () => {
    try {
      setError('');
      // Handle unicode characters
      setOutput(btoa(unescape(encodeURIComponent(input))));
    } catch (e: any) {
      setError(e.message);
      setOutput('');
    }
  };

  const handleDecode = () => {
    try {
      setError('');
      // Handle unicode characters
      setOutput(decodeURIComponent(escape(atob(input))));
    } catch (e: any) {
      setError('Invalid Base64 string for decoding.');
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
