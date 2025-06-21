
import React from 'react';
import JsonTool from '@/components/tools/JsonTool';
import PageWrapper from '@/components/PageWrapper';

const JsonPage = () => {
  return (
    <PageWrapper 
      title="JSON Formatter & Validator"
      description="Free online JSON formatter, validator, and beautifier. Format, validate, minify JSON data instantly. Convert JSON to YAML, XML, CSV with our professional JSON tools."
      keywords="JSON formatter, JSON validator, JSON beautifier, JSON minifier, JSON to YAML, JSON to XML, JSON to CSV, JSON parser, JSON converter"
    >
      <JsonTool />
    </PageWrapper>
  );
};

export default JsonPage;
