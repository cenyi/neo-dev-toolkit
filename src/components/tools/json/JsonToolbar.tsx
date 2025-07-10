import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import JsonHistoryModal from './JsonHistoryModal';
import { JsonHistoryItem } from '@/hooks/json/useJsonHistory';

interface JsonToolbarProps {
  onFormat: () => void;
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
  onConvertToDart: () => void;
  onGenerateGraph: () => void;
  history: JsonHistoryItem[];
  onSelectHistory: (content: string) => void;
  onRemoveHistoryItem: (id: string) => void;
  onClearHistory: () => void;
  rootClassName: string;
  setRootClassName: (name: string) => void;
  usePrivateFields: boolean;
  setUsePrivateFields: (value: boolean) => void;
  useModernDartSyntax: boolean;
  setUseModernDartSyntax: (value: boolean) => void;
  onCopyOutputCode: () => void;
  onLoadSampleJson: () => void;
  outputTitle: string | null;
}

const JsonToolbar: React.FC<JsonToolbarProps> = ({
  onFormat,
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
  onConvertToDart,
  onGenerateGraph,
  history,
  onSelectHistory,
  onRemoveHistoryItem,
  onClearHistory,
  rootClassName,
  setRootClassName,
  usePrivateFields,
  setUsePrivateFields,
  useModernDartSyntax,
  setUseModernDartSyntax,
  onCopyOutputCode,
  onLoadSampleJson,
  outputTitle,
}) => {
  const { t } = useTranslation();
  const isDartMode = outputTitle === t('tools.json.convertedToDartTitle');

  return (
    <div className="flex flex-wrap items-center gap-4 mb-1 p-2 bg-background border py-2 rounded-sm">
      <div className="flex flex-wrap gap-2">
        <Button onClick={onFormat} disabled={isFormatMinifyDisabled} className="text-sm font-extrabold">
          {t('common.format')}
        </Button>
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
        <Button onClick={onConvertToDart} disabled={isFormatMinifyDisabled} className="text-sm font-extrabold">
          {t('common.toDart')}
        </Button>
        <Button onClick={onGenerateGraph} disabled={isFormatMinifyDisabled} className="text-sm font-extrabold">
          {t('tools.json.generateGraph')}
        </Button>
        <Button onClick={onClear} variant="destructive" className="text-sm font-extrabold">
          {t('common.clear')}
        </Button>
        <Button onClick={onLoadSampleJson} variant="outline" className="text-sm font-extrabold">
          {t('common.loadSample')}
        </Button>
        <JsonHistoryModal
          history={history}
          onSelectHistory={onSelectHistory}
          onRemoveItem={onRemoveHistoryItem}
          onClearHistory={onClearHistory}
        />
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {/* 动态配置区域 - 根据当前输出类型显示 */}
        {isDartMode && (
          <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950 rounded border border-blue-200 dark:border-blue-800">
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">{t('tools.json.dartConfig')}</span>
            <div className="flex items-center gap-2">
              <Checkbox
                id="use-private-fields"
                checked={usePrivateFields}
                onCheckedChange={(checked) => setUsePrivateFields(checked as boolean)}
                disabled={isFormatMinifyDisabled}
              />
              <Label htmlFor="use-private-fields" className="font-bold text-xs text-blue-700 dark:text-blue-300">
                {t('tools.json.privateFields')}
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="use-modern-dart-syntax"
                checked={useModernDartSyntax}
                onCheckedChange={(checked) => setUseModernDartSyntax(checked as boolean)}
                disabled={isFormatMinifyDisabled}
              />
              <Label htmlFor="use-modern-dart-syntax" className="font-bold text-xs text-blue-700 dark:text-blue-300">
                {t('tools.json.modernSyntax')}
              </Label>
            </div>
            <Label htmlFor="root-class-name" className="font-bold text-xs text-blue-700 dark:text-blue-300">{t('tools.json.rootClassName') || '类名'}:</Label>
            <Input
              id="root-class-name"
              type="text"
              value={rootClassName}
              onChange={e => setRootClassName(e.target.value)}
              placeholder={t('tools.json.rootClassNamePlaceholder') || 'e.g. MyRootClass'}
              className="h-8 w-auto md:w-40 text-xs"
              disabled={isFormatMinifyDisabled}
            />
          </div>
        )}
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