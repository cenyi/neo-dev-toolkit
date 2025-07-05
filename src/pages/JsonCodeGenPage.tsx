
import React from 'react';
import JsonCodeGen from '@/components/tools/json/JsonCodeGen';
import PageWrapper from '@/components/PageWrapper';

const JsonCodeGenPage = () => {
  return (
    <PageWrapper 
      title="JSON to Code Generator"
      description="Free JSON to code generator. Convert JSON data to TypeScript, Python, Java, Go, Rust, or C# code structures instantly. Generate type definitions from JSON."
      keywords="JSON to code, JSON to TypeScript, JSON to Python, JSON to Java, code generator, type generator, JSON converter"
    >
      <JsonCodeGen />
    </PageWrapper>
  );
};

export default JsonCodeGenPage;
