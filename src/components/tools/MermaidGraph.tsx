
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { useTranslation } from 'react-i18next';

interface MermaidGraphProps {
  content: string;
}

const MermaidGraph: React.FC<MermaidGraphProps> = ({ content }) => {
  const { t } = useTranslation();
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
          
          // Clear previous content
          element.innerHTML = '';
          
          // Create unique ID
          const id = `mermaid-${Date.now()}`;
          
          // Render graph
          const { svg } = await mermaid.render(id, content);
          element.innerHTML = svg;
        } catch (error) {
          console.error('Mermaid rendering error:', error);
          if (containerRef.current) {
            containerRef.current.innerHTML = `
              <div class="flex items-center justify-center h-full text-muted-foreground">
                <div class="text-center">
                  <p class="text-lg mb-2">${t('toasts.common.error')}</p>
                  <p class="text-sm">${t('toasts.error.invalidJsonFormat')}</p>
                </div>
              </div>
            `;
          }
        }
      };

      renderGraph();
    }
  }, [content, t]);

  if (!content) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>{t('toasts.info.emptyContent')}</p>
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
