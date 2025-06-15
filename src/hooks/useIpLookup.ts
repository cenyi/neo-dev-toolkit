
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchIpInfo = async (ip: string) => {
  // If ip is empty, we fetch the user's own IP.
  // The API supports domain names directly.
  const url = ip ? `https://ipinfo.io/${ip}/json` : `https://ipinfo.io/json`;
  const response = await fetch(url);
  
  if (!response.ok) {
    try {
      const errorData = await response.json();
      // ipinfo.io uses `error.message` for some errors.
      throw new Error(errorData.error?.message || errorData.message || `An error occurred. Status: ${response.status}`);
    } catch (e) {
      // If parsing JSON fails, it's not a JSON error response.
      throw new Error(`Request failed with status: ${response.status} ${response.statusText}`);
    }
  }

  return response.json();
};

export const useIpLookup = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [lookupAddress, setLookupAddress] = useState<string | null>(null);

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['ipLookup', lookupAddress],
    queryFn: () => fetchIpInfo(lookupAddress!),
    enabled: lookupAddress !== null,
    retry: 1,
  });

  const handleLookup = () => {
    if (ipAddress) {
        setLookupAddress(ipAddress);
    }
  };

  const handleMyIpLookup = () => {
    setLookupAddress('');
  };
  
  const clear = () => {
    setIpAddress('');
    setLookupAddress(null);
  };

  return {
    ipAddress,
    setIpAddress,
    handleLookup,
    handleMyIpLookup,
    data,
    error: error as Error | null,
    isLoading: isLoading || isFetching,
    clear,
  };
};
