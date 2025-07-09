import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { jsonToDart } from '@/hooks/utils/jsonToDartConverter';
import JsonEditor from './JsonEditor';

const JsonToDartConverter: React.FC = () => {
  const { t } = useTranslation();
  const [jsonInput, setJsonInput] = useState('');
  const [dartOutput, setDartOutput] = useState('');
  const [rootClassName, setRootClassName] = useState('GeneratedClass');
  const [usePrivateFields, setUsePrivateFields] = useState(false);
  const [useModernDartSyntax, setUseModernDartSyntax] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const [validationError, setValidationError] = useState<string | null>(null);

  const validateJson = (input: string) => {
    if (!input.trim()) {
      setIsValid(true);
      setValidationError(null);
      return true;
    }

    try {
      JSON.parse(input);
      setIsValid(true);
      setValidationError(null);
      return true;
    } catch (error: any) {
      setIsValid(false);
      setValidationError(error.message);
      return false;
    }
  };

  const handleJsonInputChange = (value: string) => {
    setJsonInput(value);
    validateJson(value);
  };

  const handleConvert = () => {
    if (!jsonInput.trim()) {
      toast({
        title: t('toasts.common.error'),
        description: t('tools.json.toDart.emptyInputError'),
        variant: 'destructive',
      });
      return;
    }

    if (!isValid) {
      toast({
        title: t('toasts.common.error'),
        description: t('toasts.error.invalidJson'),
        variant: 'destructive',
      });
      return;
    }

    try {
      const parsed = JSON.parse(jsonInput);
      const className = rootClassName.trim() || 'GeneratedClass';
      const dartCode = jsonToDart(parsed, className, usePrivateFields, useModernDartSyntax);
      setDartOutput(dartCode);
      toast({
        title: t('toasts.common.success'),
        description: t('tools.json.toDart.convertSuccess'),
      });
    } catch (error: any) {
      toast({
        title: t('toasts.common.error'),
        description: t('toasts.error.conversionFailed'),
        variant: 'destructive',
      });
    }
  };

  const handleCopy = () => {
    if (dartOutput) {
      navigator.clipboard.writeText(dartOutput);
      toast({
        title: t('toasts.common.success'),
        description: t('toasts.success.copied'),
      });
    }
  };

  const handleClear = () => {
    setJsonInput('');
    setDartOutput('');
    setIsValid(true);
    setValidationError(null);
  };

  const loadSampleJson = () => {
    const sampleJson = {
      "user": {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "isActive": true,
        "profile": {
          "age": 30,
          "address": {
            "street": "123 Main St",
            "city": "New York",
            "zipCode": "10001"
          },
          "hobbies": ["reading", "coding", "gaming"]
        }
      }
    };
    const jsonString = JSON.stringify(sampleJson, null, 2);
    setJsonInput(jsonString);
    validateJson(jsonString);
  };

  return (
    <div className="h-full flex flex-col p-4 gap-4">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">{t('tools.json.toDart.title')}</h1>
        <p className="text-muted-foreground">{t('tools.json.toDart.description')}</p>
      </div>

      {/* Configuration Panel */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t('tools.json.toDart.configuration')}</CardTitle>
          <CardDescription>{t('tools.json.toDart.configurationDescription')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Label htmlFor="root-class-name" className="font-medium">
                {t('tools.json.rootClassName')}:
              </Label>
              <Input
                id="root-class-name"
                type="text"
                value={rootClassName}
                onChange={(e) => setRootClassName(e.target.value)}
                placeholder="GeneratedClass"
                className="w-40"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Checkbox
                id="use-private-fields"
                checked={usePrivateFields}
                onCheckedChange={(checked) => setUsePrivateFields(checked as boolean)}
              />
              <Label htmlFor="use-private-fields" className="font-medium">
                {t('tools.json.toDart.usePrivateFields')}
              </Label>
            </div>
            
            <div className="flex items-center gap-2">
              <Checkbox
                id="use-modern-syntax"
                checked={useModernDartSyntax}
                onCheckedChange={(checked) => setUseModernDartSyntax(checked as boolean)}
              />
              <Label htmlFor="use-modern-syntax" className="font-medium">
                {t('tools.json.toDart.useModernSyntax')}
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button onClick={handleConvert} disabled={!isValid}>
          {t('common.convert')}
        </Button>
        <Button onClick={handleCopy} disabled={!dartOutput} variant="outline">
          {t('common.copy')}
        </Button>
        <Button onClick={handleClear} variant="outline">
          {t('common.clear')}
        </Button>
        <Button onClick={loadSampleJson} variant="outline">
          {t('common.loadSample')}
        </Button>
      </div>

      {/* Editors */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
        {/* JSON Input */}
        <div className="flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-2">
            <Label className="font-semibold">{t('tools.json.input')}</Label>
            <div className="flex items-center gap-2">
              {isValid ? (
                <span className="text-green-600 text-sm font-medium">
                  {t('tools.json.validJson')}
                </span>
              ) : (
                <span className="text-red-600 text-sm font-medium">
                  {t('tools.json.invalidJson')}
                </span>
              )}
            </div>
          </div>
          <div className="flex-1 min-h-0">
            <JsonEditor
              value={jsonInput}
              onChange={handleJsonInputChange}
              placeholder={t('tools.json.placeholder')}
              language="json"
            />
          </div>
          {validationError && (
            <div className="mt-2 p-2 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded text-red-700 dark:text-red-300 text-sm">
              {validationError}
            </div>
          )}
        </div>

        {/* Dart Output */}
        <div className="flex flex-col min-h-0">
          <Label className="font-semibold mb-2">{t('tools.json.toDart.dartOutput')}</Label>
          <div className="flex-1 min-h-0">
            <JsonEditor
              value={dartOutput}
              onChange={() => {}}
              readOnly
              placeholder={t('tools.json.toDart.dartOutputPlaceholder')}
              language="dart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonToDartConverter;