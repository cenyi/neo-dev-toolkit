
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import mermaid from 'mermaid';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, Download, RotateCcw } from 'lucide-react';

interface MermaidGraphInternationalProps {
  content: string;
  orientation?: 'horizontal' | 'vertical';
}

const MermaidGraphInternational: React.FC<MermaidGraphInternationalProps> = ({ 
  content, 
  orientation = 'horizontal' 
}) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(100);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeMermaid = async () => {
      try {
        mermaid.initialize({
          startOnLoad: true,
          theme: 'default',
          securityLevel: 'loose',
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
          }
        });

        if (containerRef.current && content.trim()) {
          setError(null);
          containerRef.current.innerHTML = '';
          
          const graphDiv = document.createElement('div');
          graphDiv.className = 'mermaid';
          graphDiv.textContent = content;
          containerRef.current.appendChild(graphDiv);
          
          await mermaid.run({
            nodes: [graphDiv]
          });
        }
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        setError(t('tools.mermaid.syntaxError'));
      }
    };

    initializeMermaid();
  }, [content, orientation, t]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 25));
  };

  const handleReset = () => {
    setZoom(100);
  };

  const handleDownloadSVG = () => {
    const svgElement = containerRef.current?.querySelector('svg');
    if (svgElement) {
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = 'diagram.svg';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-2 border-b bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleZoomOut}
            disabled={zoom <= 25}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium min-w-[4rem] text-center">
            {zoom}% | {t('common.zoomLevel')}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleZoomIn}
            disabled={zoom >= 200}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDownloadSVG}
        >
          <Download className="h-4 w-4 mr-1" />
          {t('editor.downloadSvg')}
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto p-4 bg-white dark:bg-gray-900">
        {error ? (
          <div className="flex items-center justify-center h-full text-red-500">
            {error}
          </div>
        ) : (
          <div 
            ref={containerRef}
            className="w-full h-full flex items-center justify-center"
            style={{ 
              transform: `scale(${zoom / 100})`,
              transformOrigin: 'center center'
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MermaidGraphInternational;
