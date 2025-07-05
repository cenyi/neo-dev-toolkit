
import React from 'react';
import TextDiff from '@/components/tools/text/TextDiff';
import PageWrapper from '@/components/PageWrapper';

const TextDiffPage = () => {
  return (
    <PageWrapper 
      title="Text Comparison Tool - Professional Document Compare with Lovable AI"
      description="Professional text comparison tool built with Lovable AI to compare and find differences between two text documents. Visual diff highlighting shows additions, deletions, and modifications line by line."
      keywords="lovable, text diff, text compare, text comparison, text difference, compare text, text merger, document comparison"
    >
      <TextDiff />
    </PageWrapper>
  );
};

export default TextDiffPage;
