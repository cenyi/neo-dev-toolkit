
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface JsonToolbarProps {
  onMinify: () => void;
  onCopy: () => void;
  onClear: () => void;
  isFormatMinifyDisabled: boolean;
  onExtract: () => void;
  extractPath: string;
  onExtractPathChange: (path: string) => void;
}

const JsonToolbar: React.FC<JsonToolbarProps> = ({
  onMinify,
  onCopy,
  onClear,
  isFormatMinifyDisabled,
  onExtract,
  extractPath,
  onExtractPathChange,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap items-center gap-4 mb-1 p-2 bg-background border py-2 rounded-sm">
      <div className="flex flex-wrap gap-2">
        <Button onClick={onMinify} disabled={isFormatMinifyDisabled} className="text-sm font-extrabold">
          {t('common.minify')}
        </Button>
        <Button onClick={onCopy} className="text-sm font-extrabold">
          {t('common.copy')}
        </Button>
        <Button onClick={onClear} variant="destructive" className="text-sm font-extrabold">
          {t('common.clear')}
        </Button>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Label htmlFor="extract-path" className="font-bold">{t('tools.json.fieldPath')}:</Label>
        <Input
          id="extract-path"
          type="text"
          value={extractPath}
          onChange={(e) => onExtractPathChange(e.target.value)}
          placeholder={t('tools.json.extractPlaceholder')}
          className="h-9 w-auto md:w-64 text-sm"
          disabled={isFormatMinifyDisabled}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onExtract();
            }
          }}
        />
        <Button onClick={onExtract} disabled={isFormatMinifyDisabled} className="text-sm font-extrabold">
          {t('tools.json.extractValue')}
        </Button>
      </div>
    </div>
  );
};

export default JsonToolbar;
