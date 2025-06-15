
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';

export type Algorithm = 'md5' | 'sha1' | 'sha256' | 'sha512' | 'uuid';

export const algorithms: { value: Algorithm, label: string; name: string }[] = [
    { value: 'md5', label: 'MD5', name: 'MD5 Hash Generator' },
    { value: 'sha1', label: 'SHA1', name: 'SHA1 Hash Generator' },
    { value: 'sha256', label: 'SHA256', name: 'SHA256 Hash Generator' },
    { value: 'sha512', label: 'SHA512', name: 'SHA512 Hash Generator' },
    { value: 'uuid', label: 'UUID', name: 'UUID Generator' },
];

export const useEncryptionTool = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState('');
  const [uuidTrigger, setUuidTrigger] = useState(0);

  const algorithm = useMemo<Algorithm>(() => {
    const algoFromUrl = searchParams.get('algorithm');
    return (algorithms.find(a => a.value === algoFromUrl)?.value) || 'md5';
  }, [searchParams]);

  const output = useMemo(() => {
    if (algorithm === 'uuid') {
      return uuidv4();
    }
    if (!input) {
      return '';
    }
    switch (algorithm) {
      case 'md5': return CryptoJS.MD5(input).toString();
      case 'sha1': return CryptoJS.SHA1(input).toString();
      case 'sha256': return CryptoJS.SHA256(input).toString();
      case 'sha512': return CryptoJS.SHA512(input).toString();
      default: return '';
    }
  }, [input, algorithm, uuidTrigger]);

  const setAlgorithm = (newAlgorithm: Algorithm) => {
    setSearchParams({ algorithm: newAlgorithm });
  };
  
  const regenerate = () => {
    if (algorithm === 'uuid') {
        setUuidTrigger(v => v + 1);
    }
  }

  useEffect(() => {
    if (algorithm === 'uuid') {
        setInput('');
    }
  }, [algorithm]);

  return { input, setInput, output, algorithm, setAlgorithm, regenerate, algorithms };
};
