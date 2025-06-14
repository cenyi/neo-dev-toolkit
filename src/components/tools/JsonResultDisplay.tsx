
import React from 'react';
import JsonEditor from './JsonEditor';

interface JsonResultDisplayProps {
  extractedValue: string | null;
}

const JsonResultDisplay: React.FC<JsonResultDisplayProps> = ({ extractedValue }) => {
  if (extractedValue === null) {
    return null;
  }

  return (
    <div className="flex-1 flex flex-col bg-background border rounded-lg min-h-0 overflow-hidden">
      <div className="px-4 pt-4 mb-3">
        <h3 className="text-lg font-semibold">提取的值</h3>
      </div>
      <div className="flex-1 min-h-0 px-4 pb-4 overflow-hidden">
        <JsonEditor value={extractedValue} readOnly={true} />
      </div>
    </div>
  );
};

export default JsonResultDisplay;
