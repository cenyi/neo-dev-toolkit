
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchIpInfo = async (ip: string) => {
  // If ip is empty, we fetch the user's own IP.
  // The API supports domain names directly.
  const url = ip ? `https://api.freeipapi.com/v1/json/${ip}` : `https://api.freeipapi.com/v1/json/`;
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'An error occurred while fetching IP information.');
  }
  return data;
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
