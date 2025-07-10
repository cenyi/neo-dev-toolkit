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
      '/json/formatter': t('tools.json.formatter.title'),
      '/json/schema-validator': t('tools.json.schemaValidator.title'),
      '/json/codegen': t('tools.json.codegen.title'),
      '/json/diff': t('tools.json.diff.title'),
      '/json/mock': t('tools.json.mock.title'),
      '/network': t('tools.network.title'),
      '/network/url-encoder': t('tools.network.urlEncoder.title'),
      '/network/base64-encoder': t('tools.network.base64Encoder.title'),
      '/network/ip-lookup': t('tools.network.ipLookup.title'),
      '/network/jwt-decoder': t('tools.jwtDecoder.title'),
      '/text': t('tools.text.title'),
      '/text/case-converter': t('tools.text.caseConverter.title'),
      '/text/word-counter': t('tools.text.wordCounter.title'),
      '/text/text-reverser': t('tools.text.reverser.title'),
      '/text/whitespace-remover': t('tools.text.whitespaceRemover.title'),
      '/text/lorem-ipsum-generator': t('tools.text.loremIpsum.title'),
      '/text/text-diff': t('tools.text.textDiff.title'),
      '/time': t('tools.time.title'),
      '/time/timestamp-converter': t('tools.time.timestampConverter.title'),
      '/time/timezone-converter': t('tools.time.timezoneConverter.title'),
      '/time/date-calculator': t('tools.time.dateCalculator.title'),
      '/editor': t('tools.editor.title'),
      '/editor/markdown': t('tools.editor.markdown.title'),
      '/editor/mermaid': t('tools.editor.mermaid.title'),
      '/crypto/encryption': t('tools.crypto.title'),
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
