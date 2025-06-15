
```typescript
import { useState } from 'react';
import {
  quicktype,
  InputData,
  jsonInputForTargetLanguage,
} from 'quicktype-core';
import { toast } from '@/hooks/use-toast';

const exampleJson = JSON.stringify({
  "user": {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
}, null, 2);

export const useJsonCodeGen = () => {
  const [jsonInput, setJsonInput] = useState(exampleJson);
  const [generatedCode, setGeneratedCode] = useState('');
  const [targetLang, setTargetLang] = useState('typescript');
  const [typeName, setTypeName] = useState('Root');

  const handleGenerate = async () => {
    if (!jsonInput.trim()) {
      toast({
        title: 'Error',
        description: 'JSON data is empty.',
        variant: 'destructive',
      });
      return;
    }

    let parsedJson;
    try {
      parsedJson = JSON.parse(jsonInput);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Invalid JSON data.',
        variant: 'destructive',
      });
      return;
    }

    try {
      setGeneratedCode('// Generating code...');
      const jsonInputForTarget = jsonInputForTargetLanguage(targetLang);
      
      const source = {
        name: typeName || 'Root',
        samples: [JSON.stringify(parsedJson)],
      };

      await jsonInputForTarget.addSource(source);

      const inputData = new InputData();
      inputData.addInput(jsonInputForTarget);

      const rendererOptions: {[key: string]: string} = {};
      if (targetLang === 'typescript') {
        rendererOptions['just-types'] = 'true';
      }

      const result = await quicktype({
        inputData,
        lang: targetLang,
        rendererOptions,
      });

      setGeneratedCode(result.lines.join('\n'));
      toast({
        title: 'Success',
        description: 'Code generated successfully.',
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      setGeneratedCode(`// Error generating code:\n// ${errorMessage}`);
      toast({
        title: 'Error',
        description: `Failed to generate code: ${errorMessage}`,
        variant: 'destructive',
      });
    }
  };
  
  const clearAll = () => {
    setJsonInput('');
    setGeneratedCode('');
    setTypeName('Root');
    setTargetLang('typescript');
  };

  return {
    jsonInput,
    setJsonInput,
    generatedCode,
    targetLang,
    setTargetLang,
    typeName,
    setTypeName,
    handleGenerate,
    clearAll,
  };
};
```
