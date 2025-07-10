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
      { path: `/${lang}/json/schema-validator`, title: t('tools.json.schemaValidator.title'), description: t('tools.json.schemaValidator.description'), category: t('categories.json') },
      { path: `/${lang}/json/diff`, title: t('tools.json.diff.title'), description: t('tools.json.diff.description'), category: t('categories.json') },
      { path: `/${lang}/json/codegen`, title: t('tools.json.codegen.title'), description: t('tools.json.codegen.description'), category: t('categories.json') },
      { path: `/${lang}/text/text-diff`, title: t('tools.text.diff.title'), description: t('tools.text.diff.description'), category: t('categories.text') },
    ],
    '/json/schema-validator': [
      { path: `/${lang}/json/formatter`, title: t('tools.json.formatter.title'), description: t('tools.json.formatter.description'), category: t('categories.json') },
      { path: `/${lang}/json/codegen`, title: 'Code Generator', description: 'Generate types from JSON', category: 'JSON' },
      { path: `/${lang}/json/mock`, title: t('tools.json.mock.title'), description: t('tools.json.mock.description'), category: t('categories.json') },
    ],
    '/json/diff': [
      { path: `/${lang}/json/formatter`, title: 'JSON Formatter', description: 'Format JSON data', category: 'JSON' },
      { path: `/${lang}/text/text-diff`, title: t('tools.text.diff.title'), description: t('tools.text.diff.description'), category: t('categories.text') },
      { path: `/${lang}/json/schema-validator`, title: t('tools.json.schemaValidator.title'), description: t('tools.json.schemaValidator.description'), category: t('categories.json') },
    ],
    '/json/codegen': [
      { path: `/${lang}/json/formatter`, title: t('tools.json.formatter.title'), description: t('tools.json.formatter.description'), category: t('categories.json') },
      { path: `/${lang}/json/schema-validator`, title: t('tools.json.schemaValidator.title'), description: t('tools.json.schemaValidator.description'), category: t('categories.json') },
      { path: `/${lang}/json/mock`, title: t('tools.json.mock.title'), description: t('tools.json.mock.description'), category: t('categories.json') },
    ],
    '/json/mock': [
      { path: `/${lang}/json/formatter`, title: t('tools.json.formatter.title'), description: t('tools.json.formatter.description'), category: t('categories.json') },
      { path: `/${lang}/json/schema-validator`, title: t('tools.json.schemaValidator.title'), description: t('tools.json.schemaValidator.description'), category: t('categories.json') },
      { path: `/${lang}/json/codegen`, title: t('tools.json.codegen.title'), description: t('tools.json.codegen.description'), category: t('categories.json') },
    ],
    '/text/case-converter': [
      { path: `/${lang}/text/word-counter`, title: t('tools.text.wordCounter.title'), description: t('tools.text.wordCounter.description'), category: t('categories.text') },
      { path: `/${lang}/text/whitespace-remover`, title: t('tools.text.whitespaceRemover.title'), description: t('tools.text.whitespaceRemover.description'), category: t('categories.text') },
      { path: `/${lang}/text/text-reverser`, title: t('tools.text.reverser.title'), description: t('tools.text.reverser.description'), category: t('categories.text') },
      { path: `/${lang}/network/url-encoder`, title: t('tools.network.urlEncoder.title'), description: t('tools.network.urlEncoder.description'), category: t('categories.network') },
    ],
    '/text/word-counter': [
      { path: `/${lang}/text/case-converter`, title: t('tools.text.caseConverter.title'), description: t('tools.text.caseConverter.description'), category: t('categories.text') },
      { path: `/${lang}/text/text-reverser`, title: t('tools.text.reverser.title'), description: t('tools.text.reverser.description'), category: t('categories.text') },
      { path: `/${lang}/text/whitespace-remover`, title: t('tools.text.whitespaceRemover.title'), description: t('tools.text.whitespaceRemover.description'), category: t('categories.text') },
    ],
    '/text/text-reverser': [
      { path: `/${lang}/text/case-converter`, title: t('tools.text.caseConverter.title'), description: t('tools.text.caseConverter.description'), category: t('categories.text') },
      { path: `/${lang}/text/word-counter`, title: t('tools.text.wordCounter.title'), description: t('tools.text.wordCounter.description'), category: t('categories.text') },
      { path: `/${lang}/text/whitespace-remover`, title: t('tools.text.whitespaceRemover.title'), description: t('tools.text.whitespaceRemover.description'), category: t('categories.text') },
    ],
    '/text/whitespace-remover': [
      { path: `/${lang}/text/case-converter`, title: t('tools.text.caseConverter.title'), description: t('tools.text.caseConverter.description'), category: t('categories.text') },
      { path: `/${lang}/text/word-counter`, title: t('tools.text.wordCounter.title'), description: t('tools.text.wordCounter.description'), category: t('categories.text') },
      { path: `/${lang}/text/lorem-ipsum-generator`, title: t('tools.text.loremIpsum.title'), description: t('tools.text.loremIpsum.description'), category: t('categories.text') },
    ],
    '/text/lorem-ipsum-generator': [
      { path: `/${lang}/text/word-counter`, title: t('tools.text.wordCounter.title'), description: t('tools.text.wordCounter.description'), category: t('categories.text') },
      { path: `/${lang}/text/case-converter`, title: t('tools.text.caseConverter.title'), description: t('tools.text.caseConverter.description'), category: t('categories.text') },
      { path: `/${lang}/text/whitespace-remover`, title: t('tools.text.whitespaceRemover.title'), description: t('tools.text.whitespaceRemover.description'), category: t('categories.text') },
    ],
    '/text/text-diff': [
      { path: `/${lang}/json/diff`, title: t('tools.json.diff.title'), description: t('tools.json.diff.description'), category: t('categories.json') },
      { path: `/${lang}/text/word-counter`, title: t('tools.text.wordCounter.title'), description: t('tools.text.wordCounter.description'), category: t('categories.text') },
      { path: `/${lang}/text/case-converter`, title: t('tools.text.caseConverter.title'), description: t('tools.text.caseConverter.description'), category: t('categories.text') },
    ],
    '/network/url-encoder': [
      { path: `/${lang}/network/base64-encoder`, title: t('tools.network.base64Encoder.title'), description: t('tools.network.base64Encoder.description'), category: t('categories.network') },
      { path: `/${lang}/text/case-converter`, title: t('tools.text.caseConverter.title'), description: t('tools.text.caseConverter.description'), category: t('categories.text') },
      { path: `/${lang}/network/jwt-decoder`, title: t('tools.network.jwtDecoder.title'), description: t('tools.network.jwtDecoder.description'), category: t('categories.network') },
    ],
    '/network/base64-encoder': [
      { path: `/${lang}/network/url-encoder`, title: t('tools.network.urlEncoder.title'), description: t('tools.network.urlEncoder.description'), category: t('categories.network') },
      { path: `/${lang}/network/jwt-decoder`, title: t('tools.network.jwtDecoder.title'), description: t('tools.network.jwtDecoder.description'), category: t('categories.network') },
      { path: `/${lang}/crypto/encryption`, title: t('tools.crypto.encryption.title'), description: t('tools.crypto.encryption.description'), category: t('categories.security') },
    ],
    '/network/jwt-decoder': [
      { path: `/${lang}/network/base64-encoder`, title: t('tools.network.base64Encoder.title'), description: t('tools.network.base64Encoder.description'), category: t('categories.network') },
      { path: `/${lang}/json/formatter`, title: t('tools.json.formatter.title'), description: t('tools.json.formatter.description'), category: t('categories.json') },
      { path: `/${lang}/crypto/encryption`, title: t('tools.crypto.encryption.title'), description: t('tools.crypto.encryption.description'), category: t('categories.security') },
    ],
    '/network/ip-lookup': [
      { path: `/${lang}/network/url-encoder`, title: t('tools.network.urlEncoder.title'), description: t('tools.network.urlEncoder.description'), category: t('categories.network') },
      { path: `/${lang}/network/base64-encoder`, title: t('tools.network.base64Encoder.title'), description: t('tools.network.base64Encoder.description'), category: t('categories.network') },
      { path: `/${lang}/json/formatter`, title: t('tools.json.formatter.title'), description: t('tools.json.formatter.description'), category: t('categories.json') },
    ],
    '/time/timestamp-converter': [
      { path: `/${lang}/time/timezone-converter`, title: t('tools.time.timezoneConverter.title'), description: t('tools.time.timezoneConverter.description'), category: t('categories.time') },
      { path: `/${lang}/time/date-calculator`, title: t('tools.time.dateCalculator.title'), description: t('tools.time.dateCalculator.description'), category: t('categories.time') },
      { path: `/${lang}/json/formatter`, title: t('tools.json.formatter.title'), description: t('tools.json.formatter.description'), category: t('categories.json') },
    ],
    '/time/timezone-converter': [
      { path: `/${lang}/time/timestamp-converter`, title: t('tools.time.timestampConverter.title'), description: t('tools.time.timestampConverter.description'), category: t('categories.time') },
      { path: `/${lang}/time/date-calculator`, title: t('tools.time.dateCalculator.title'), description: t('tools.time.dateCalculator.description'), category: t('categories.time') },
    ],
    '/time/date-calculator': [
      { path: `/${lang}/time/timestamp-converter`, title: t('tools.time.timestampConverter.title'), description: t('tools.time.timestampConverter.description'), category: t('categories.time') },
      { path: `/${lang}/time/timezone-converter`, title: t('tools.time.timezoneConverter.title'), description: t('tools.time.timezoneConverter.description'), category: t('categories.time') },
    ],
    '/editor/markdown': [
      { path: `/${lang}/editor/mermaid`, title: t('tools.editor.mermaid.title'), description: t('tools.editor.mermaid.description'), category: t('categories.editor') },
      { path: `/${lang}/text/word-counter`, title: t('tools.text.wordCounter.title'), description: t('tools.text.wordCounter.description'), category: t('categories.text') },
      { path: `/${lang}/text/case-converter`, title: t('tools.text.caseConverter.title'), description: t('tools.text.caseConverter.description'), category: t('categories.text') },
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
        <CardTitle className="text-lg">{t('internalLinks.relatedTools.title')}</CardTitle>
        <CardDescription>
          {t('internalLinks.relatedTools.description')}
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
