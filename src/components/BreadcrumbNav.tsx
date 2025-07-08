import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ROUTES, buildPath } from '../config/routes';
import { Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const BreadcrumbNav: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { lang = 'en' } = useParams<{ lang: string }>();
const basePath = `/${lang}`;
  
  // Don't show breadcrumb on home page
  if (location.pathname === '/') {
    return null;
  }

  const pathSegments = location.pathname.split('/').filter(Boolean).slice(1);
  
  const getBreadcrumbName = (segment: string, index: number) => {
    const fullPath = '/' + pathSegments.slice(1, index + 1).join('/');
    
    // Define route mappings
    const routeNames: Record<string, string> = {
      '/json': t('tools.json.title'),
      '/json/formatter': 'JSON Formatter & Validator',
      '/json/schema-validator': 'JSON Schema Validator',
      '/json/codegen': 'Generate Code Types',
      '/json/diff': 'JSON Diff Tool',
      '/json/mock': 'Mock Data Generator',
      '/network': t('tools.network.title'),
      '/network/url-encoder': 'URL Encoder / Decoder',
      '/network/base64-encoder': 'Base64 Encoder / Decoder',
      '/network/ip-lookup': 'IP Lookup',
      '/network/jwt-decoder': 'JWT Decoder',
      '/text': t('tools.text.title'),
      '/text/case-converter': 'Case Converter',
      '/text/word-counter': 'Word & Character Counter',
      '/text/text-reverser': 'Text Reverser',
      '/text/whitespace-remover': 'Whitespace Remover',
      '/text/lorem-ipsum-generator': 'Lorem Ipsum Generator',
      '/text/text-diff': t('tools.text.textDiff'),
      '/time': t('tools.time.title'),
      '/time/timestamp-converter': 'Timestamp Converter',
      '/time/timezone-converter': 'Timezone Converter',
      '/time/date-calculator': 'Date Calculator',
      '/editor': t('tools.editor.title'),
      '/editor/markdown': 'Markdown Editor',
      '/editor/mermaid': 'Mermaid Editor',
      '/encryption': t('tools.crypto.title'),
      '/regex': t('tools.regex.title'),
      '/about': t('about.title'),
      '/privacy': t('privacy.title'),
      '/terms': t('terms.title'),
    };
    
    return routeNames[fullPath] || segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  return (
    <div className="px-4 py-2 border-b border-border/40">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={`/${lang}`} className="flex items-center gap-1" aria-label={t('navTitles.home')}>
                <Home className="h-4 w-4" />
                <span className="sr-only">{t('nav.home')}</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {pathSegments.map((segment, index) => {
            const isLast = index === pathSegments.length - 1;
            const path = `${basePath}/${pathSegments.slice(0, index + 1).join('/')}`;
            const name = getBreadcrumbName(segment, index);
            
            return (
              <React.Fragment key={path}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={path}>{name}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNav;
