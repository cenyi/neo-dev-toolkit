
import React from 'react';
import TimestampConverter from '@/components/tools/TimestampConverter';
import PageWrapper from '@/components/PageWrapper';

const TimestampConverterPage = () => {
  return (
    <PageWrapper 
      title="Unix Timestamp Converter - Professional Epoch Time Tool with Lovable AI"
      description="Professional Unix timestamp converter built with Lovable AI. Convert Unix timestamps to human-readable dates and vice versa. Get current timestamp instantly."
      keywords="lovable, timestamp converter, Unix timestamp, epoch converter, timestamp to date, date to timestamp, current timestamp"
    >
      <TimestampConverter />
    </PageWrapper>
  );
};

export default TimestampConverterPage;
