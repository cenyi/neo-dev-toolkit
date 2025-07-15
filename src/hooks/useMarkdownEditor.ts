
import { useState } from 'react';

const initialMarkdown = `# Markdown Editor

## Live Preview

Changes are reflected in real-time.

- Lists
- **Bold**
- *Italic*
- \`inline code\`

\`\`\`javascript
// code block
function greet(name) {
  return "Hello, " + name + "!";
}
\`\`\`

> Blockquote

[Link to Lovable](https://lovable.dev)
`;

export const useMarkdownEditor = () => {
  const [input, setInput] = useState(initialMarkdown);

  return {
    input,
    setInput,
  };
};
