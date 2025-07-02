
import React from 'react';
import TimestampConverter from '@/components/tools/TimestampConverter';
import PageWrapper from '@/components/PageWrapper';

const TimestampConverterPage = () => {
  return (
    <PageWrapper 
      title="Free Unix Timestamp Converter - Epoch Time Converter Tool"
      description="Free Unix timestamp converter. Convert Unix timestamps to human-readable dates and vice versa. Get current timestamp instantly."
      keywords="timestamp converter, Unix timestamp, epoch converter, timestamp to date, date to timestamp, current timestamp"
    >
      <TimestampConverter />
    </PageWrapper>
  );
};

export default TimestampConverterPage;
