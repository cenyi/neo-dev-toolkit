import React from 'react';
import { useTranslation } from 'react-i18next';

interface ToolPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  showAdSpaces?: boolean;
}

const ToolPageLayout: React.FC<ToolPageLayoutProps> = ({ 
  title, 
  description, 
  children, 
  showAdSpaces = true 
}) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Mobile-first responsive container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className={`${showAdSpaces ? 'lg:grid lg:grid-cols-12 lg:gap-6' : 'max-w-4xl mx-auto'}`}>
          
          {/* Left Ad Space - Hidden on mobile/tablet */}
          {showAdSpaces && (
            <div className="hidden lg:block lg:col-span-2 xl:col-span-2">
              <div className="sticky top-6">
                <div className="bg-muted/20 rounded-xl p-4 text-center text-muted-foreground text-xs border border-dashed border-muted-foreground/30">
                  <div className="h-[600px] flex items-center justify-center">
                    <div>
                      <div className="text-xs font-medium mb-1">Ad Space</div>
                      <div className="text-xs opacity-60">160×600</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Main Tool Content */}
          <div className={`${showAdSpaces ? 'lg:col-span-8 xl:col-span-8' : 'w-full'}`}>
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border/40 shadow-lg overflow-hidden">
              {/* Tool Header */}
              <div className="p-6 sm:p-8 border-b border-border/40">
                <div className="max-w-3xl">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 leading-tight">
                    {title}
                  </h1>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
              
              {/* Tool Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                {children}
              </div>
            </div>
            
            {/* Mobile Ad Space - Only visible on mobile/tablet */}
            {showAdSpaces && (
              <div className="lg:hidden mt-6">
                <div className="bg-muted/20 rounded-xl p-4 text-center text-muted-foreground text-xs border border-dashed border-muted-foreground/30">
                  <div className="h-[250px] flex items-center justify-center">
                    <div>
                      <div className="text-xs font-medium mb-1">Ad Space</div>
                      <div className="text-xs opacity-60">Mobile Banner</div>
                      <div className="text-xs opacity-60">320×250</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Right Ad Space - Hidden on mobile/tablet */}
          {showAdSpaces && (
            <div className="hidden lg:block lg:col-span-2 xl:col-span-2">
              <div className="sticky top-6">
                <div className="bg-muted/20 rounded-xl p-4 text-center text-muted-foreground text-xs border border-dashed border-muted-foreground/30">
                  <div className="h-[600px] flex items-center justify-center">
                    <div>
                      <div className="text-xs font-medium mb-1">Ad Space</div>
                      <div className="text-xs opacity-60">160×600</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ToolPageLayout;