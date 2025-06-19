
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidGraphProps {
  content: string;
}

const MermaidGraph: React.FC<MermaidGraphProps> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'Arial, sans-serif',
      fontSize: 12,
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      }
    });
  }, []);

  useEffect(() => {
    if (content && containerRef.current) {
      const renderGraph = async () => {
        try {
          const element = containerRef.current;
          if (!element) return;
          
          // 清空之前的内容
          element.innerHTML = '';
          
          // 创建唯一ID
          const id = `mermaid-${Date.now()}`;
          
          // 渲染图表
          const { svg } = await mermaid.render(id, content);
          element.innerHTML = svg;
        } catch (error) {
          console.error('Mermaid rendering error:', error);
          if (containerRef.current) {
            containerRef.current.innerHTML = `
              <div class="flex items-center justify-center h-full text-muted-foreground">
                <div class="text-center">
                  <p class="text-lg mb-2">图表渲染失败</p>
                  <p class="text-sm">请检查JSON数据格式</p>
                </div>
              </div>
            `;
          }
        }
      };

      renderGraph();
    }
  }, [content]);

  if (!content) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>暂无图表数据</p>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="w-full h-full overflow-auto bg-white rounded border p-4"
      style={{ minHeight: '200px' }}
    />
  );
};

export default MermaidGraph;
