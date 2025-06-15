
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

function urlBase64Decode(str: string) {
  let output = str.replace(/-/g, '+').replace(/_/g, '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
    default:
      throw new Error('Illegal base64url string!');
  }
  try {
    // handle unicode characters
    return decodeURIComponent(escape(atob(output)));
  } catch (err) {
    return atob(output);
  }
}

export const useJwtDecoder = () => {
  const { t } = useTranslation();
  const [token, setToken] = useState('');

  const decoded = useMemo(() => {
    if (!token) {
      return { header: null, payload: null, error: null };
    }
    const parts = token.split('.');
    if (parts.length !== 3) {
      return { header: null, payload: null, error: t('tools.jwtDecoder.invalidToken', 'Invalid JWT: must have 3 parts') };
    }
    try {
      const header = JSON.parse(urlBase64Decode(parts[0]));
      const payload = JSON.parse(urlBase64Decode(parts[1]));
      return { header, payload, error: null };
    } catch (e: any) {
      return { header: null, payload: null, error: t('tools.jwtDecoder.decodingError', 'Error decoding JWT: ') + e.message };
    }
  }, [token, t]);
  
  const clearAll = () => {
    setToken('');
  };

  return { token, setToken, decoded, clearAll };
};
