
import React from 'react';
import JsonEditor from './JsonEditor';

interface JsonOutputAreaProps {
  value: string;
}

const JsonOutputArea: React.FC<JsonOutputAreaProps> = ({ value }) => {
  return (
    <div className="flex-1 flex flex-col bg-background border rounded-lg min-w-0 min-h-0 overflow-hidden">
      <h3 className="text-lg font-semibold mb-3 px-4 pt-4">Output</h3>
      <div className="flex-1 min-h-[150px] px-4 pb-4 overflow-hidden">
        <JsonEditor value={value} readOnly />
      </div>
    </div>
  );
};

export default JsonOutputArea;
