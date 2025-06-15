
import React from 'react';
import JsonEditor from './JsonEditor';

interface JsonResultDisplayProps {
  outputContent: string | null;
  title: string | null;
}

const JsonResultDisplay: React.FC<JsonResultDisplayProps> = ({ outputContent, title }) => {
  return (
    <div className="flex-1 flex flex-col bg-background border rounded-lg min-h-0 overflow-hidden">
      <div className="px-4 pt-4 mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex-1 min-h-0 px-4 pb-4 overflow-hidden">
        <JsonEditor value={outputContent ?? ''} readOnly={true} />
      </div>
    </div>
  );
};

export default JsonResultDisplay;
