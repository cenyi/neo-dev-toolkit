import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const InternalLinks: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();

  // Define related tools for each route
  const relatedTools: Record<string, Array<{ path: string; title: string; description: string; category?: string }>> = {
    '/json/formatter': [
      { path: `/${lang}/json/schema-validator`, title: 'JSON Schema Validator', description: 'Validate JSON against schemas', category: 'JSON' },
      { path: `/${lang}/json/diff`, title: 'JSON Diff Tool', description: 'Compare JSON objects', category: 'JSON' },
      { path: `/${lang}/text/text-diff`, title: 'Text Comparison', description: 'Compare text documents', category: 'Text' },
    ],
    '/json/schema-validator': [
      { path: `/${lang}/json/formatter`, title: 'JSON Formatter', description: 'Format and validate JSON', category: 'JSON' },
      { path: `/${lang}/json/codegen`, title: 'Code Generator', description: 'Generate types from JSON', category: 'JSON' },
    ],
    '/json/diff': [
      { path: `/${lang}/json/formatter`, title: 'JSON Formatter', description: 'Format JSON data', category: 'JSON' },
      { path: `/${lang}/text/text-diff`, title: 'Text Diff', description: 'Compare text files', category: 'Text' },
    ],
    '/text/case-converter': [
      { path: `/${lang}/text/word-counter`, title: 'Word & Character Counter', description: 'Count words and characters', category: 'Text' },
      { path: `/${lang}/text/whitespace-remover`, title: 'Whitespace Remover', description: 'Clean up text spacing', category: 'Text' },
      { path: `/${lang}/network/url-encoder`, title: 'URL Encoder', description: 'Encode/decode URLs', category: 'Network' },,,,
    ],
    '/text/word-counter': [
      { path: `/${lang}/text/case-converter`, title: 'Case Converter', description: 'Convert text case', category: 'Text' },
      { path: `/${lang}/text/text-reverser`, title: 'Text Reverser', description: 'Reverse text characters', category: 'Text' },
    ],
    '/network/url-encoder': [
      { path: `/${lang}/network/base64-encoder`, title: 'Base64 Encoder', description: 'Encode/decode Base64', category: 'Network' },
      { path: `/${lang}/text/case-converter`, title: 'Case Converter', description: 'Convert text case', category: 'Text' },
      { path: `/${lang}/network/jwt-decoder`, title: 'JWT Decoder', description: 'Decode JWT tokens', category: 'Network' },
    ],
    '/network/base64-encoder': [
      { path: `/${lang}/network/url-encoder`, title: 'URL Encoder', description: 'Encode/decode URLs', category: 'Network' },
      { path: `/${lang}/network/jwt-decoder`, title: 'JWT Decoder', description: 'Decode JWT tokens', category: 'Network' },
    ],
    '/time/timestamp-converter': [
      { path: `/${lang}/time/timezone-converter`, title: 'Timezone Converter', description: 'Convert between timezones', category: 'Time' },
      { path: `/${lang}/time/date-calculator`, title: 'Date Calculator', description: 'Calculate date differences', category: 'Time' },
    ],
    '/time/timezone-converter': [
      { path: `/${lang}/time/timestamp-converter`, title: 'Timestamp Converter', description: 'Convert Unix timestamps', category: 'Time' },
      { path: `/${lang}/time/date-calculator`, title: 'Date Calculator', description: 'Add/subtract dates', category: 'Time' },
    ],
    '/editor/markdown': [
      { path: `/${lang}/editor/mermaid`, title: 'Mermaid Editor', description: 'Create diagrams and flowcharts', category: 'Editor' },
      { path: `/${lang}/text/word-counter`, title: 'Word Counter', description: 'Count markdown content', category: 'Text' },
    ],
    '/editor/mermaid': [
      { path: `/${lang}/editor/markdown`, title: 'Markdown Editor', description: 'Edit markdown with preview', category: 'Editor' },
    ]
  };

  const currentPath = location.pathname;
  const related = relatedTools[currentPath];

  if (!related || related.length === 0) {
    return null;
  }

  return (
    <Card className="mt-8 border-border/40">
      <CardHeader>
        <CardTitle className="text-lg">Related Tools</CardTitle>
        <CardDescription>
          Discover other tools that might be useful for your workflow
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {related.map((tool) => (
            <Link
              key={tool.path}
              to={tool.path}
              className="group block p-4 rounded-lg border border-border/40 hover:border-border transition-colors hover:bg-accent/50"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                  {tool.title}
                </h4>
                {tool.category && (
                  <Badge variant="secondary" className="text-xs">
                    {tool.category}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InternalLinks;