import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileJson, FileText, Network, Edit, Clock, Shield, Regex, Home, Info, FileCheck, Scale } from 'lucide-react';
import { FullToolsDirectory } from './AllPagesLinks';

interface ToolLink {
  path: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

interface ToolCategory {
  title: string;
  description: string;
  tools: ToolLink[];
}

const SiteMap: React.FC = () => {
  const { lang = 'en' } = useParams<{ lang: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Site Map</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Complete directory of all developer tools and pages available on our platform. 
          Find the perfect tool for your development needs.
        </p>
      </div>

      {/* 使用统一的全站工具目录组件 */}
      <FullToolsDirectory />

      {/* SEO 信息 */}
      <div className="mt-16 text-center">
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">About This Site Map</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This comprehensive site map helps both users and search engines discover all available tools and pages. 
            All tools are free to use, require no registration, and are designed with privacy in mind. 
            Our platform is built to provide professional-grade developer utilities accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;