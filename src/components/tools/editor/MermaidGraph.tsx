
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, RotateCw, Move } from 'lucide-react';

interface MermaidGraphProps {
  content: string;
  orientation?: 'vertical' | 'horizontal';
}

const MermaidGraph: React.FC<MermaidGraphProps> = ({ content, orientation = 'vertical' }) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGElement | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [currentOrientation, setCurrentOrientation] = useState(orientation);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'Arial, sans-serif',
      fontSize: 12,
      flowchart: {
        useMaxWidth: false,
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
          
          // Modify content based on orientation
          const orientedContent = currentOrientation === 'horizontal' 
            ? content.replace('graph TD', 'graph LR')
            : content.replace('graph LR', 'graph TD');
          
          // Render graph
          const { svg } = await mermaid.render(id, orientedContent);
          element.innerHTML = svg;
          
          // Get SVG element reference
          const svgElement = element.querySelector('svg');
          if (svgElement) {
            svgRef.current = svgElement;
            // Reset transform
            setScale(1);
            setPosition({ x: 0, y: 0 });
            updateTransform(svgElement, 1, { x: 0, y: 0 });
          }
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
  }, [content, currentOrientation, t]);

  const updateTransform = (svg: SVGElement, newScale: number, newPosition: { x: number, y: number }) => {
    svg.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px) scale(${newScale})`;
    svg.style.transformOrigin = 'center';
  };

  const handleZoomIn = () => {
    const newScale = Math.min(scale * 1.2, 3);
    setScale(newScale);
    if (svgRef.current) {
      updateTransform(svgRef.current, newScale, position);
    }
  };

  const handleZoomOut = () => {
    const newScale = Math.max(scale * 0.8, 0.3);
    setScale(newScale);
    if (svgRef.current) {
      updateTransform(svgRef.current, newScale, position);
    }
  };

  const handleRotate = () => {
    setCurrentOrientation(prev => prev === 'vertical' ? 'horizontal' : 'vertical');
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newPosition = { x: e.clientX - dragStart.x, y: e.clientY - dragStart.y };
    setPosition(newPosition);
    if (svgRef.current) {
      updateTransform(svgRef.current, scale, newPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    if (svgRef.current) {
      updateTransform(svgRef.current, 1, { x: 0, y: 0 });
    }
  };

  if (!content) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>{t('toasts.info.emptyContent')}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-white rounded border">
      {/* Controls */}
      <div className="flex items-center gap-2 p-2 border-b bg-gray-50">
        <Button size="sm" variant="outline" onClick={handleZoomIn}>
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button size="sm" variant="outline" onClick={handleZoomOut}>
          <ZoomOut className="w-4 h-4" />
        </Button>
        <Button size="sm" variant="outline" onClick={handleRotate}>
          <RotateCw className="w-4 h-4" />
        </Button>
        <Button size="sm" variant="outline" onClick={resetView}>
          <Move className="w-4 h-4" />
        </Button>
        <span className="text-xs text-gray-500 ml-2">
          {Math.round(scale * 100)}% | {currentOrientation === 'vertical' ? '上下' : '左右'}
        </span>
      </div>
      
      {/* Graph Container */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-hidden relative cursor-move"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ 
          minHeight: '200px',
          userSelect: 'none'
        }}
      />
    </div>
  );
};

export default MermaidGraph;
