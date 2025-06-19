
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import JsonHistoryModal from './JsonHistoryModal';
import { JsonHistoryItem } from '@/hooks/useJsonHistory';

interface JsonToolbarProps {
  onMinify: () => void;
  onCopy: () => void;
  onClear: () => void;
  isFormatMinifyDisabled: boolean;
  onExtract: () => void;
  extractPath: string;
  onExtractPathChange: (path: string) => void;
  onConvertToYaml: () => void;
  onConvertToXml: () => void;
  onConvertToCsv: () => void;
  onGenerateGraph: () => void;
  // 历史记录相关props
  history: JsonHistoryItem[];
  onSelectHistory: (content: string) => void;
  onRemoveHistoryItem: (id: string) => void;
  onClearHistory: () => void;
}

const JsonToolbar: React.FC<JsonToolbarProps> = ({
  onMinify,
  onCopy,
  onClear,
  isFormatMinifyDisabled,
  onExtract,
  extractPath,
  onExtractPathChange,
  onConvertToYaml,
  onConvertToXml,
  onConvertToCsv,
  onGenerateGraph,
  history,
  onSelectHistory,
  onRemoveHistoryItem,
  onClearHistory,
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
        <Button onClick={onConvertToYaml} disabled={isFormatMinifyDisabled} className="text-sm font-extrabold">
          {t('common.toYaml')}
        </Button>
        <Button onClick={onConvertToXml} disabled={isFormatMinifyDisabled} className="text-sm font-extrabold">
          {t('common.toXml')}
        </Button>
        <Button onClick={onConvertToCsv} disabled={isFormatMinifyDisabled} className="text-sm font-extrabold">
          {t('common.toCsv')}
        </Button>
        <Button onClick={onGenerateGraph} disabled={isFormatMinifyDisabled} className="text-sm font-extrabold">
          {t('tools.json.generateGraph')}
        </Button>
        <Button onClick={onClear} variant="destructive" className="text-sm font-extrabold">
          {t('common.clear')}
        </Button>
        <JsonHistoryModal
          history={history}
          onSelectHistory={onSelectHistory}
          onRemoveItem={onRemoveHistoryItem}
          onClearHistory={onClearHistory}
        />
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
