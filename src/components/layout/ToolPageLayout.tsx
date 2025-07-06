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
  showAdSpaces = false 
}) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Mobile-first responsive container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className={`${'max-w-7xl mx-auto'}`}>
          
          {/* Main Tool Content */}
          <div className={`${'w-full'}`}>
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border/40 shadow-lg overflow-hidden">
              {/* Tool Header */}
              <div className="p-4 sm:p-5 border-b border-border/40">
                <div className="max-w-3xl">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 leading-tight">
                    {title}
                  </h1>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
              
              {/* Tool Content */}
              <div className="p-4 sm:p-5">
                {children}
              </div>
            </div>
            
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ToolPageLayout;