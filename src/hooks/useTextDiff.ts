
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import i18n from '@/i18n';

const exampleText1 = `这是原始文本。
第二行内容。
第三行内容保持不变。`;

const exampleText2 = `这是修改后的文本。
第二行内容已经修改。
第三行内容保持不变。
新增的第四行内容。`;

export const useTextDiff = () => {
  const [textLeft, setTextLeft] = useState(exampleText1);
  const [textRight, setTextRight] = useState(exampleText2);
  const [diffResult, setDiffResult] = useState<{ type: string; value: string; lineNumber?: number }[] | null>(null);

  const generateDiff = () => {
    if (!textLeft.trim() && !textRight.trim()) {
      toast({
        title: i18n.t('toasts.common.info'),
        description: '请输入需要比较的文本',
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
      title: i18n.t('toasts.common.success'),
      description: '文本比较完成',
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
