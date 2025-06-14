
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface JsonToolbarProps {
  onFormat: () => void;
  onMinify: () => void;
  onCopy: () => void;
  onClear: () => void;
  isFormatMinifyDisabled: boolean;
}

const JsonToolbar: React.FC<JsonToolbarProps> = ({
  onFormat,
  onMinify,
  onCopy,
  onClear,
  isFormatMinifyDisabled,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-2 mb-1 p-2 bg-background border py-px rounded-sm">
      <Button onClick={onFormat} disabled={isFormatMinifyDisabled} className="text-sm font-extrabold">
        {t('common.format')}
      </Button>
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
  );
};

export default JsonToolbar;
