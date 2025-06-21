
import React from 'react';
import IpLookup from '@/components/tools/IpLookup';
import PageWrapper from '@/components/PageWrapper';

const IpLookupPage = () => {
  return (
    <PageWrapper 
      title="IP Address Lookup Tool"
      description="Free IP address lookup tool. Get detailed geolocation information, ISP details, and network data for any IP address. Find your own IP address instantly."
      keywords="IP lookup, IP address lookup, geolocation, IP geolocation, what is my IP, IP address tool, network information"
    >
      <IpLookup />
    </PageWrapper>
  );
};

export default IpLookupPage;
