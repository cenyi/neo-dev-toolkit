
import { useState } from 'react';

const initialMermaid = `graph TD
    A[Start] --> B{Is it?};
    B -- Yes --> C[OK];
    C --> D[End];
    B -- No --> E[Find out];
    E --> B;
`;

export const useMermaidEditor = () => {
  const [input, setInput] = useState(initialMermaid);
  const [error, setError] = useState<string | null>(null);

  return {
    input,
    setInput,
    error,
    setError,
  };
};
