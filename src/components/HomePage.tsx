
import React, { useEffect } from 'react';
import { buildPath } from '../config/routes';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  FileJson,
  Network,
  FileText,
  Key,
  FileCode,
  Clock,
  Hash
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { HomePageToolsShowcase } from './AllPagesLinks';

const HomePage: React.FC = () => {
  const { lang = 'en' } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // 初始化时从本地存储恢复语言设置
  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng');
    if (savedLang) {
      // 更新i18n语言
      if (i18n.language !== savedLang) {
        i18n.changeLanguage(savedLang);
      }
      // 更新URL以匹配保存的语言
      if (!location.pathname.startsWith(`/${savedLang}`)) {
        const newPath = location.pathname.replace(/^\/[^\/]+/, `/${savedLang}`);
        navigate(newPath, { replace: true });
      }
    }
  }, [navigate, location.pathname, i18n]);

  // 确保使用有效的语言
  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const tools = [
    {
      path: buildPath('JSON_TOOLS', { lang }),
      icon: FileJson,
      title: t('tools.json.title'),
      description: t('tools.json.description'),
      color: 'text-blue-500'
    },
    {
      path: buildPath('NETWORK_TOOLS', { lang }),
      icon: Network,
      title: t('tools.network.title'),
      description: t('tools.network.description'),
      color: 'text-green-500'
    },
    {
      path: buildPath('TEXT_TOOLS', { lang }),
      icon: FileText,
      title: t('tools.text.title'),
      description: t('tools.text.description'),
      color: 'text-purple-500'
    },
    {
      path: `/${lang}/time`,
      icon: Clock,
      title: t('tools.time.title'),
      description: t('tools.time.description'),
      color: 'text-cyan-500'
    },
    {
      path: `/${lang}/regex`,
      icon: Hash,
      title: t('tools.regex.title'),
      description: t('tools.regex.description'),
      color: 'text-orange-500'
    },
    {
      path: buildPath('EDITOR', { lang }),
      icon: FileCode,
      title: t('tools.editor.title'),
      description: t('tools.editor.description'),
      color: 'text-yellow-500'
    },
    {
      path: `/${lang}/crypto/encryption`,
      icon: Key,
      title: t('tools.crypto.title'),
      description: t('tools.crypto.description'),
      color: 'text-red-500'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-4">
          {t('home.headerTitle')}
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
          {t('home.subtitle')}
        </p>
      </header>

      <main>
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            {t('home.toolsCollectionTitle')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map(({ path, icon: Icon, title, description, color }) => (
              <Link 
                key={path} 
                to={path} 
                className="group block h-full rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md"
              >
                <div className="p-6 h-full flex flex-col items-center text-center">
                  <div className="mb-4 rounded-lg p-3 inline-block bg-accent">
                    <Icon size={32} className={color} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            {t('home.whyChooseTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{t('home.feature1Title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('home.feature1Description')}
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{t('home.feature2Title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('home.feature2Description')}
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{t('home.feature3Title')}</h3>
              <p className="text-muted-foreground text-sm">
                {t('home.feature3Description')}
              </p>
            </div>
          </div>
        </section>
      </main>
      
      {/* SEO优化：全站工具链接汇总 */}
      <HomePageToolsShowcase />
    </div>
  );
};

export default HomePage;
