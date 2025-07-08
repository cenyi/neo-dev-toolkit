import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const InternalLinks: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();

  // Define related tools for each route - 扩展内部链接推荐
  const relatedTools: Record<string, Array<{ path: string; title: string; description: string; category?: string }>> = {
    '/json/formatter': [
      { path: `/${lang}/json/schema-validator`, title: 'JSON Schema Validator', description: 'Validate JSON against schemas', category: 'JSON' },
      { path: `/${lang}/json/diff`, title: 'JSON Diff Tool', description: 'Compare JSON objects', category: 'JSON' },
      { path: `/${lang}/json/codegen`, title: 'Code Generator', description: 'Generate types from JSON', category: 'JSON' },
      { path: `/${lang}/text/text-diff`, title: 'Text Comparison', description: 'Compare text documents', category: 'Text' },
    ],
    '/json/schema-validator': [
      { path: `/${lang}/json/formatter`, title: 'JSON Formatter', description: 'Format and validate JSON', category: 'JSON' },
      { path: `/${lang}/json/codegen`, title: 'Code Generator', description: 'Generate types from JSON', category: 'JSON' },
      { path: `/${lang}/json/mock`, title: 'Mock Data Generator', description: 'Generate test JSON data', category: 'JSON' },
    ],
    '/json/diff': [
      { path: `/${lang}/json/formatter`, title: 'JSON Formatter', description: 'Format JSON data', category: 'JSON' },
      { path: `/${lang}/text/text-diff`, title: 'Text Diff', description: 'Compare text files', category: 'Text' },
      { path: `/${lang}/json/schema-validator`, title: 'Schema Validator', description: 'Validate JSON schemas', category: 'JSON' },
    ],
    '/json/codegen': [
      { path: `/${lang}/json/formatter`, title: 'JSON Formatter', description: 'Format JSON first', category: 'JSON' },
      { path: `/${lang}/json/schema-validator`, title: 'Schema Validator', description: 'Validate before generating', category: 'JSON' },
      { path: `/${lang}/json/mock`, title: 'Mock Generator', description: 'Generate test data', category: 'JSON' },
    ],
    '/json/mock': [
      { path: `/${lang}/json/formatter`, title: 'JSON Formatter', description: 'Format generated data', category: 'JSON' },
      { path: `/${lang}/json/schema-validator`, title: 'Schema Validator', description: 'Validate mock data', category: 'JSON' },
      { path: `/${lang}/json/codegen`, title: 'Code Generator', description: 'Generate types from mock', category: 'JSON' },
    ],
    '/text/case-converter': [
      { path: `/${lang}/text/word-counter`, title: 'Word & Character Counter', description: 'Count words and characters', category: 'Text' },
      { path: `/${lang}/text/whitespace-remover`, title: 'Whitespace Remover', description: 'Clean up text spacing', category: 'Text' },
      { path: `/${lang}/text/text-reverser`, title: 'Text Reverser', description: 'Reverse text order', category: 'Text' },
      { path: `/${lang}/network/url-encoder`, title: 'URL Encoder', description: 'Encode/decode URLs', category: 'Network' },
    ],
    '/text/word-counter': [
      { path: `/${lang}/text/case-converter`, title: 'Case Converter', description: 'Convert text case', category: 'Text' },
      { path: `/${lang}/text/text-reverser`, title: 'Text Reverser', description: 'Reverse text characters', category: 'Text' },
      { path: `/${lang}/text/whitespace-remover`, title: 'Whitespace Remover', description: 'Clean text formatting', category: 'Text' },
    ],
    '/text/text-reverser': [
      { path: `/${lang}/text/case-converter`, title: 'Case Converter', description: 'Change text case', category: 'Text' },
      { path: `/${lang}/text/word-counter`, title: 'Word Counter', description: 'Count reversed text', category: 'Text' },
      { path: `/${lang}/text/whitespace-remover`, title: 'Whitespace Remover', description: 'Clean reversed text', category: 'Text' },
    ],
    '/text/whitespace-remover': [
      { path: `/${lang}/text/case-converter`, title: 'Case Converter', description: 'Convert cleaned text', category: 'Text' },
      { path: `/${lang}/text/word-counter`, title: 'Word Counter', description: 'Count cleaned text', category: 'Text' },
      { path: `/${lang}/text/lorem-ipsum-generator`, title: 'Lorem Ipsum', description: 'Generate placeholder text', category: 'Text' },
    ],
    '/text/lorem-ipsum-generator': [
      { path: `/${lang}/text/word-counter`, title: 'Word Counter', description: 'Count generated text', category: 'Text' },
      { path: `/${lang}/text/case-converter`, title: 'Case Converter', description: 'Convert Lorem Ipsum case', category: 'Text' },
      { path: `/${lang}/text/whitespace-remover`, title: 'Whitespace Remover', description: 'Clean generated text', category: 'Text' },
    ],
    '/text/text-diff': [
      { path: `/${lang}/json/diff`, title: 'JSON Diff', description: 'Compare JSON objects', category: 'JSON' },
      { path: `/${lang}/text/word-counter`, title: 'Word Counter', description: 'Count text differences', category: 'Text' },
      { path: `/${lang}/text/case-converter`, title: 'Case Converter', description: 'Normalize text case', category: 'Text' },
    ],
    '/network/url-encoder': [
      { path: `/${lang}/network/base64-encoder`, title: 'Base64 Encoder', description: 'Encode/decode Base64', category: 'Network' },
      { path: `/${lang}/text/case-converter`, title: 'Case Converter', description: 'Convert text case', category: 'Text' },
      { path: `/${lang}/network/jwt-decoder`, title: 'JWT Decoder', description: 'Decode JWT tokens', category: 'Network' },
    ],
    '/network/base64-encoder': [
      { path: `/${lang}/network/url-encoder`, title: 'URL Encoder', description: 'Encode/decode URLs', category: 'Network' },
      { path: `/${lang}/network/jwt-decoder`, title: 'JWT Decoder', description: 'Decode JWT tokens', category: 'Network' },
      { path: `/${lang}/crypto/encryption`, title: 'Encryption Tool', description: 'Encrypt/decrypt data', category: 'Security' },
    ],
    '/network/jwt-decoder': [
      { path: `/${lang}/network/base64-encoder`, title: 'Base64 Encoder', description: 'Decode JWT payload', category: 'Network' },
      { path: `/${lang}/json/formatter`, title: 'JSON Formatter', description: 'Format JWT payload', category: 'JSON' },
      { path: `/${lang}/crypto/encryption`, title: 'Encryption Tool', description: 'Security utilities', category: 'Security' },
    ],
    '/network/ip-lookup': [
      { path: `/${lang}/network/url-encoder`, title: 'URL Encoder', description: 'Encode URLs with IPs', category: 'Network' },
      { path: `/${lang}/network/base64-encoder`, title: 'Base64 Encoder', description: 'Encode network data', category: 'Network' },
      { path: `/${lang}/json/formatter`, title: 'JSON Formatter', description: 'Format IP lookup results', category: 'JSON' },
    ],
    '/time/timestamp-converter': [
      { path: `/${lang}/time/timezone-converter`, title: 'Timezone Converter', description: 'Convert between timezones', category: 'Time' },
      { path: `/${lang}/time/date-calculator`, title: 'Date Calculator', description: 'Calculate date differences', category: 'Time' },
      { path: `/${lang}/json/formatter`, title: 'JSON Formatter', description: 'Format timestamp data', category: 'JSON' },
    ],
    '/time/timezone-converter': [
      { path: `/${lang}/time/timestamp-converter`, title: 'Timestamp Converter', description: 'Convert Unix timestamps', category: 'Time' },
      { path: `/${lang}/time/date-calculator`, title: 'Date Calculator', description: 'Add/subtract dates', category: 'Time' },
    ],
    '/time/date-calculator': [
      { path: `/${lang}/time/timestamp-converter`, title: 'Timestamp Converter', description: 'Convert calculated dates', category: 'Time' },
      { path: `/${lang}/time/timezone-converter`, title: 'Timezone Converter', description: 'Convert timezones', category: 'Time' },
    ],
    '/editor/markdown': [
      { path: `/${lang}/editor/mermaid`, title: 'Mermaid Editor', description: 'Create diagrams and flowcharts', category: 'Editor' },
      { path: `/${lang}/text/word-counter`, title: 'Word Counter', description: 'Count markdown content', category: 'Text' },
      { path: `/${lang}/text/case-converter`, title: 'Case Converter', description: 'Convert markdown text', category: 'Text' },
    ],
    '/editor/mermaid': [
      { path: `/${lang}/editor/markdown`, title: 'Markdown Editor', description: 'Edit markdown with preview', category: 'Editor' },
      { path: `/${lang}/text/word-counter`, title: 'Word Counter', description: 'Count diagram text', category: 'Text' },
    ],
    '/regex': [
      { path: `/${lang}/text/case-converter`, title: 'Case Converter', description: 'Test regex with different cases', category: 'Text' },
      { path: `/${lang}/text/text-diff`, title: 'Text Diff', description: 'Compare regex results', category: 'Text' },
      { path: `/${lang}/network/url-encoder`, title: 'URL Encoder', description: 'Test URL patterns', category: 'Network' },
    ],
    '/crypto/encryption': [
      { path: `/${lang}/network/base64-encoder`, title: 'Base64 Encoder', description: 'Encode encrypted data', category: 'Network' },
      { path: `/${lang}/network/jwt-decoder`, title: 'JWT Decoder', description: 'Decode secure tokens', category: 'Network' },
      { path: `/${lang}/json/formatter`, title: 'JSON Formatter', description: 'Format encrypted JSON', category: 'JSON' },
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
