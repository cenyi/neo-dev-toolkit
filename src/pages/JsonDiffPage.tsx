
import React from 'react';
import JsonDiff from '@/components/tools/JsonDiff';
import PageWrapper from '@/components/PageWrapper';

const JsonDiffPage = () => {
  return (
    <PageWrapper 
      title="JSON Diff Comparison Tool - Professional JSON Compare with Lovable AI"
      description="Professional JSON diff tool built with Lovable AI to compare and find differences between two JSON objects. Visual diff highlighting shows additions, deletions, and modifications."
      keywords="lovable, JSON diff, JSON compare, JSON comparison, JSON difference, compare JSON, JSON merger, JSON conflict resolution"
    >
      <JsonDiff />
    </PageWrapper>
  );
};

export default JsonDiffPage;
