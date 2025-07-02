
import React from 'react';
import TextDiff from '@/components/tools/TextDiff';
import PageWrapper from '@/components/PageWrapper';

const TextDiffPage = () => {
  return (
    <PageWrapper 
      title="Free Text Comparison Tool - Compare Text Documents Online"
      description="Free text comparison tool to compare and find differences between two text documents. Visual diff highlighting shows additions, deletions, and modifications line by line."
      keywords="text diff, text compare, text comparison, text difference, compare text, text merger, document comparison"
    >
      <TextDiff />
    </PageWrapper>
  );
};

export default TextDiffPage;
