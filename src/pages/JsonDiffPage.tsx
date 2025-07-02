
import React from 'react';
import JsonDiff from '@/components/tools/JsonDiff';
import PageWrapper from '@/components/PageWrapper';

const JsonDiffPage = () => {
  return (
    <PageWrapper 
      title="Free JSON Diff Comparison Tool - Compare JSON Objects Online"
      description="Free JSON diff tool to compare and find differences between two JSON objects. Visual diff highlighting shows additions, deletions, and modifications."
      keywords="JSON diff, JSON compare, JSON comparison, JSON difference, compare JSON, JSON merger, JSON conflict resolution"
    >
      <JsonDiff />
    </PageWrapper>
  );
};

export default JsonDiffPage;
