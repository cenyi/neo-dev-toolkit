
import React from 'react';
import CaseConverter from '@/components/tools/text/CaseConverter';
import PageWrapper from '@/components/PageWrapper';

const CaseConverterPage = () => {
  return (
    <PageWrapper 
      title="Text Case Converter"
      description="Free text case converter tool. Convert text to uppercase, lowercase, title case, or sentence case instantly. Professional text formatting made easy."
      keywords="case converter, text case converter, uppercase, lowercase, title case, sentence case, text formatter"
    >
      <CaseConverter />
    </PageWrapper>
  );
};

export default CaseConverterPage;
