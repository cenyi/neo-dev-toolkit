
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRegexTool, RegexMatch } from '@/hooks/useRegexTool';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Copy } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from '@/hooks/use-toast';

const RegexTool: React.FC = () => {
  const { t } = useTranslation();
  const {
    pattern,
    setPattern,
    testString,
    setTestString,
    replacement,
    setReplacement,
    flags,
    updateFlag,
    matches,
    replacedText,
    isValidRegex,
    error,
    clearAll,
  } = useRegexTool();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: t('toasts.common.success'),
      description: t('toasts.success.copied'),
    });
  };

  const renderMatch = (match: RegexMatch, index: number) => (
    <div key={index} className="p-3 bg-muted/30 rounded border">
      <div className="flex items-center justify-between mb-2">
        <Badge variant="outline">
          {t('common.match')} {index + 1}
        </Badge>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(match.match)}
        >
          <Copy className="w-4 h-4" />
        </Button>
      </div>
      <div className="space-y-1">
        <div className="text-sm">
          <span className="font-medium">Text:</span> "{match.match}"
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">Position:</span> {match.index}
        </div>
        {match.groups && match.groups.length > 0 && (
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Groups:</span> {match.groups.join(', ')}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('tools.regex.title')}</CardTitle>
          <CardDescription>{t('tools.regex.description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Pattern Input */}
          <div className="space-y-2">
            <Label htmlFor="pattern">{t('tools.regex.pattern')}</Label>
            <Input
              id="pattern"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder={t('tools.regex.patternPlaceholder')}
              className={!isValidRegex ? 'border-destructive' : ''}
            />
            {!isValidRegex && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {t('tools.regex.invalidRegex')}: {error}
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Flags */}
          <div className="space-y-3">
            <Label>{t('tools.regex.flags')}</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="global"
                  checked={flags.global}
                  onCheckedChange={(checked) => updateFlag('global', checked as boolean)}
                />
                <Label htmlFor="global" className="text-sm">
                  {t('tools.regex.global')}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="ignoreCase"
                  checked={flags.ignoreCase}
                  onCheckedChange={(checked) => updateFlag('ignoreCase', checked as boolean)}
                />
                <Label htmlFor="ignoreCase" className="text-sm">
                  {t('tools.regex.ignoreCase')}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="multiline"
                  checked={flags.multiline}
                  onCheckedChange={(checked) => updateFlag('multiline', checked as boolean)}
                />
                <Label htmlFor="multiline" className="text-sm">
                  {t('tools.regex.multiline')}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="dotAll"
                  checked={flags.dotAll}
                  onCheckedChange={(checked) => updateFlag('dotAll', checked as boolean)}
                />
                <Label htmlFor="dotAll" className="text-sm">
                  {t('tools.regex.dotAll')}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="unicode"
                  checked={flags.unicode}
                  onCheckedChange={(checked) => updateFlag('unicode', checked as boolean)}
                />
                <Label htmlFor="unicode" className="text-sm">
                  {t('tools.regex.unicode')}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sticky"
                  checked={flags.sticky}
                  onCheckedChange={(checked) => updateFlag('sticky', checked as boolean)}
                />
                <Label htmlFor="sticky" className="text-sm">
                  {t('tools.regex.sticky')}
                </Label>
              </div>
            </div>
          </div>

          {/* Test String */}
          <div className="space-y-2">
            <Label htmlFor="testString">{t('tools.regex.testString')}</Label>
            <Textarea
              id="testString"
              value={testString}
              onChange={(e) => setTestString(e.target.value)}
              placeholder={t('tools.regex.testStringPlaceholder')}
              rows={4}
            />
          </div>

          {/* Replacement */}
          <div className="space-y-2">
            <Label htmlFor="replacement">{t('tools.regex.replacement')}</Label>
            <Input
              id="replacement"
              value={replacement}
              onChange={(e) => setReplacement(e.target.value)}
              placeholder={t('tools.regex.replacementPlaceholder')}
            />
          </div>

          {/* Clear Button */}
          <Button onClick={clearAll} variant="destructive">
            {t('common.clear')}
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Matches */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {t('tools.regex.matches')}
              <Badge variant="secondary">{matches.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {matches.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                <p>{t('tools.regex.noMatches')}</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {matches.map((match, index) => renderMatch(match, index))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Replaced Text */}
        {replacement && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {t('tools.regex.replacedText')}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(replacedText)}
                  disabled={!replacedText}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 p-4 rounded border min-h-[200px] max-h-96 overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm">
                  {replacedText || t('tools.regex.noMatches')}
                </pre>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default RegexTool;
