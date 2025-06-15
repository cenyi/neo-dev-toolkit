
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchIpInfo = async (ip: string) => {
  if (!ip) return null;
  // Using a free IP lookup API, no key required.
  const response = await fetch(`https://ipapi.co/${ip}/json/`);
  const data = await response.json();
  if (data.error) {
    throw new Error(data.reason);
  }
  return data;
};

export const useIpLookup = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [lookupAddress, setLookupAddress] = useState('');

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ['ipLookup', lookupAddress],
    queryFn: () => fetchIpInfo(lookupAddress),
    enabled: !!lookupAddress,
    retry: 1,
  });

  const handleLookup = () => {
    setLookupAddress(ipAddress);
  };
  
  const clear = () => {
    setIpAddress('');
    setLookupAddress('');
  };

  return {
    ipAddress,
    setIpAddress,
    handleLookup,
    data,
    error: error as Error | null,
    isLoading: isLoading || isFetching,
    clear,
  };
};
