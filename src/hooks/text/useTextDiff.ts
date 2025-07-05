
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

export const useTextDiff = () => {
  const { t, i18n } = useTranslation();
  
  // Create localized example text based on current language
  const getExampleText1 = () => {
    if (i18n.language === 'zh-CN') {
      return `这是原始文本。
第二行内容。
第三行内容保持不变。`;
    }
    return `This is the original text.
Second line content.
Third line content remains unchanged.`;
  };

  const getExampleText2 = () => {
    if (i18n.language === 'zh-CN') {
      return `这是修改后的文本。
第二行内容已经修改。
第三行内容保持不变。
新增的第四行内容。`;
    }
    return `This is the modified text.
Second line content has been changed.
Third line content remains unchanged.
New fourth line content added.`;
  };

  const [textLeft, setTextLeft] = useState(getExampleText1());
  const [textRight, setTextRight] = useState(getExampleText2());
  const [diffResult, setDiffResult] = useState<{ type: string; value: string; lineNumber?: number }[] | null>(null);

  const generateDiff = () => {
    if (!textLeft.trim() && !textRight.trim()) {
      toast({
        title: t('toasts.common.info'),
        description: t('tools.text.textDiff.enterTextToCompare'),
        variant: 'default',
      });
      return;
    }

    const leftLines = textLeft.split('\n');
    const rightLines = textRight.split('\n');
    const maxLines = Math.max(leftLines.length, rightLines.length);
    const result = [];

    for (let i = 0; i < maxLines; i++) {
      const leftLine = leftLines[i] || '';
      const rightLine = rightLines[i] || '';

      if (leftLine === rightLine) {
        if (leftLine) {
          result.push({
            type: 'equal',
            value: leftLine,
            lineNumber: i + 1
          });
        }
      } else {
        if (leftLine && !rightLine) {
          result.push({
            type: 'removed',
            value: leftLine,
            lineNumber: i + 1
          });
        } else if (!leftLine && rightLine) {
          result.push({
            type: 'added',
            value: rightLine,
            lineNumber: i + 1
          });
        } else {
          if (leftLine) {
            result.push({
              type: 'removed',
              value: leftLine,
              lineNumber: i + 1
            });
          }
          if (rightLine) {
            result.push({
              type: 'added',
              value: rightLine,
              lineNumber: i + 1
            });
          }
        }
      }
    }

    setDiffResult(result);
    toast({
      title: t('toasts.common.success'),
      description: t('tools.text.textDiff.compareComplete'),
    });
  };

  const clearAll = () => {
    setTextLeft('');
    setTextRight('');
    setDiffResult(null);
  };

  return {
    textLeft,
    setTextLeft,
    textRight,
    setTextRight,
    diffResult,
    generateDiff,
    clearAll,
  };
};
