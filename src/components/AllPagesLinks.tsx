import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { SEO_PAGES, getPagesByCategory, getHighPriorityPages, getTDKForLanguage, type SEOPageConfig, type SupportedLanguage, getMultiLanguageHighPriorityPages, getMultiLanguagePagesByCategory } from '@/config/seo-pages';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileJson, FileText, Network, Edit, Clock, Shield, Regex, Home, Info, FileCheck, Scale } from 'lucide-react';

// 分类图标映射
const categoryIcons = {
  'Home': Home,
  'JSON Tools': FileJson,
  'Text Tools': FileText,
  'Network Tools': Network,
  'Editor Tools': Edit,
  'Time Tools': Clock,
  'Regex Tools': Regex,
  'Security Tools': Shield,
  'Navigation': Info,
  'Company': Info,
  'Legal': Scale,
  'Error': FileCheck
};

interface AllPagesLinksProps {
  showAllPages?: boolean; // 是否显示所有页面，默认只显示高优先级页面
  compact?: boolean; // 紧凑模式
}

const AllPagesLinks: React.FC<AllPagesLinksProps> = ({ 
  showAllPages = false, 
  compact = false 
}) => {
  const { lang = 'en' } = useParams<{ lang: string }>();
  const currentLang = (lang as SupportedLanguage) || 'en';
  
  // 获取要显示的页面
  const pagesToShow = showAllPages 
    ? SEO_PAGES.filter(page => !['Error', 'Legal'].includes(page.category))
    : getMultiLanguageHighPriorityPages();
  
  // 按分类分组
  const pagesByCategory = pagesToShow.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, SEOPageConfig[]>);
  
  // 构建实际路径
  const buildActualPath = (templatePath: string) => {
    return templatePath.replace('/:lang', `/${lang}`);
  };
  
  if (compact) {
    // 紧凑模式：只显示高优先级页面的简单链接列表
    const highPriorityPages = getMultiLanguageHighPriorityPages();
    
    return (
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-semibold mb-4 text-center">Popular Developer Tools</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {highPriorityPages.map((page) => {
              const actualPath = buildActualPath(page.path);
              const tdk = getTDKForLanguage(page, currentLang);
              return (
                <Link
                  key={page.path}
                  to={actualPath}
                  className="px-3 py-1 text-sm bg-background hover:bg-accent rounded-md transition-colors border"
                  title={tdk.description}
                >
                  {tdk.title.replace(' - ', ' | ').split(' | ')[0]}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-muted/20 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            {showAllPages ? 'All Developer Tools' : 'Popular Developer Tools'}
          </h2>
          <p className="text-muted-foreground">
            {showAllPages 
              ? 'Complete collection of free online developer tools organized by category'
              : 'Most popular and frequently used developer tools'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(pagesByCategory).map(([category, pages]) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Info;
            
            return (
              <Card key={category} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <IconComponent className="h-5 w-5 text-primary" />
                    {category}
                  </CardTitle>
                  <CardDescription>
                    {pages.length} tool{pages.length > 1 ? 's' : ''} available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {pages.map((page) => {
                      const actualPath = buildActualPath(page.path);
                      const tdk = getTDKForLanguage(page, currentLang);
                      const displayTitle = tdk.title.includes(' - ') 
                        ? tdk.title.split(' - ')[0] 
                        : tdk.title;
                      
                      return (
                        <Link
                          key={page.path}
                          to={actualPath}
                          className="block p-2 rounded-md hover:bg-accent transition-colors group"
                          title={tdk.description}
                        >
                          <div className="font-medium text-sm group-hover:text-primary transition-colors">
                            {displayTitle}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                            {tdk.description}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {!showAllPages && (
          <div className="text-center mt-8">
            <Link
              to={`/${currentLang}/sitemap`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Info className="h-4 w-4" />
              View All Tools & Site Map
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPagesLinks;

// 导出一个专门用于首页的版本
export const HomePageToolsShowcase: React.FC = () => {
  return <AllPagesLinks showAllPages={false} compact={false} />;
};

// 导出一个紧凑版本，用于页面底部
export const CompactToolsLinks: React.FC = () => {
  return <AllPagesLinks showAllPages={false} compact={true} />;
};

// 导出完整版本，用于站点地图页面
export const FullToolsDirectory: React.FC = () => {
  return <AllPagesLinks showAllPages={true} compact={false} />;
};