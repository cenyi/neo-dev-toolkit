
import React from 'react';
import { useJsonCodeGen } from '@/hooks/useJsonCodeGen';
import JsonEditor from './JsonEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const languageOptions = [
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
  { value: 'csharp', label: 'C#' },
];

const getEditorLanguage = (lang: string) => {
    const langMap: { [key: string]: string } = {
        typescript: 'typescript',
        python: 'python',
        java: 'java',
        go: 'go',
        rust: 'rust',
        csharp: 'csharp',
    };
    return langMap[lang] || 'plaintext';
};


const JsonCodeGen: React.FC = () => {
  const {
    jsonInput,
    setJsonInput,
    generatedCode,
    targetLang,
    setTargetLang,
    typeName,
    setTypeName,
    handleGenerate,
    clearAll,
  } = useJsonCodeGen();

  return (
    <div className="h-screen flex flex-col px-2">
      <div className="flex flex-wrap items-center gap-4 mb-1 p-2 bg-background border py-2 rounded-sm">
        <Button onClick={handleGenerate}>Generate</Button>
        <Button onClick={clearAll} variant="destructive">Clear</Button>
        <div className="flex items-center gap-2">
            <Label htmlFor="target-lang">Language:</Label>
            <Select value={targetLang} onValueChange={setTargetLang}>
                <SelectTrigger className="w-[180px]" id="target-lang">
                    <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                    {languageOptions.map(opt => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
        <div className="flex items-center gap-2">
            <Label htmlFor="type-name">Type Name:</Label>
            <Input id="type-name" value={typeName} onChange={e => setTypeName(e.target.value)} placeholder="e.g., Root, User, Product" className="w-[180px]" />
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-0 pt-2">
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          <div className="flex-1 flex flex-col bg-background border rounded-lg min-w-0 min-h-0 overflow-hidden">
            <div className="px-4 pt-4 mb-3">
              <h3 className="text-lg font-semibold">JSON Data</h3>
            </div>
            <div className="flex-1 min-h-[150px] px-4 pb-4 overflow-hidden">
              <JsonEditor
                value={jsonInput}
                onChange={setJsonInput}
                placeholder="Enter or paste your JSON data here"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col min-h-0 min-w-0">
          <div className="flex-1 flex flex-col bg-background border rounded-lg min-w-0 min-h-0 overflow-hidden">
            <div className="px-4 pt-4 mb-3">
              <h3 className="text-lg font-semibold">Generated Code</h3>
            </div>
            <div className="flex-1 min-h-[150px] px-4 pb-4 overflow-hidden">
              <JsonEditor
                value={generatedCode}
                onChange={() => {}} // read-only
                language={getEditorLanguage(targetLang)}
                options={{ readOnly: true }}
                placeholder="Generated code will appear here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonCodeGen;
