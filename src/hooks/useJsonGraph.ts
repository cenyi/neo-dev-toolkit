
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import i18n from '@/i18n';

export const useJsonGraph = () => {
  const [graphData, setGraphData] = useState<string | null>(null);

  const generateJsonGraph = (jsonString: string) => {
    if (!jsonString.trim()) {
      toast({
        title: i18n.t('toasts.common.error'),
        description: i18n.t('toasts.error.invalidJson'),
        variant: 'destructive',
      });
      return;
    }

    try {
      const parsed = JSON.parse(jsonString);
      const graph = generateMermaidGraph(parsed);
      setGraphData(graph);
      toast({
        title: i18n.t('toasts.common.success'),
        description: i18n.t('toasts.success.graphGenerated'),
      });
    } catch (error) {
      toast({
        title: i18n.t('toasts.common.error'),
        description: i18n.t('toasts.error.invalidJsonFormat'),
        variant: 'destructive',
      });
    }
  };

  const generateMermaidGraph = (obj: any, parentId = 'root'): string => {
    const lines: string[] = ['graph TD'];
    const nodeMap = new Map<string, string>();
    let nodeCounter = 0;

    const getNodeId = (): string => `node${++nodeCounter}`;
    
    const getNodeLabel = (value: any): string => {
      if (value === null) return 'null';
      if (value === undefined) return 'undefined';
      if (typeof value === 'string') return `"${value}"`;
      if (typeof value === 'boolean') return value.toString();
      if (typeof value === 'number') return value.toString();
      if (Array.isArray(value)) return `Array[${value.length}]`;
      if (typeof value === 'object') return `Object{${Object.keys(value).length}}`;
      return String(value);
    };

    const processNode = (data: any, nodeId: string, key?: string): void => {
      const label = key ? `${key}: ${getNodeLabel(data)}` : getNodeLabel(data);
      nodeMap.set(nodeId, label);

      if (Array.isArray(data)) {
        data.forEach((item, index) => {
          const childId = getNodeId();
          processNode(item, childId, `[${index}]`);
          lines.push(`    ${nodeId}[${label}] --> ${childId}`);
        });
      } else if (data && typeof data === 'object') {
        Object.entries(data).forEach(([key, value]) => {
          const childId = getNodeId();
          processNode(value, childId, key);
          lines.push(`    ${nodeId}[${label}] --> ${childId}`);
        });
      }
    };

    const rootId = getNodeId();
    processNode(obj, rootId);

    // 添加节点样式定义
    lines.push('');
    nodeMap.forEach((label, nodeId) => {
      const escapedLabel = label.replace(/"/g, '#quot;').replace(/\[/g, '#91;').replace(/\]/g, '#93;');
      lines.push(`    ${nodeId}[${escapedLabel}]`);
    });

    return lines.join('\n');
  };

  return {
    graphData,
    generateJsonGraph,
    clearGraph: () => setGraphData(null)
  };
};
