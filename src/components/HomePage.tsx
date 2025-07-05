
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  FileJson, 
  Network, 
  FileText, 
  Key,
  FileCode,
  Code,
  Clock,
  Hash
} from 'lucide-react';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const tools = [
    {
      path: '/json',
      icon: FileJson,
      titleKey: 'tools.json.title',
      descKey: 'tools.json.description',
      color: 'text-blue-500'
    },
    {
      path: '/network',
      icon: Network,
      titleKey: 'tools.network.title',
      descKey: 'tools.network.description',
      color: 'text-green-500'
    },
    {
      path: '/text',
      icon: FileText,
      titleKey: 'tools.text.title',
      descKey: 'tools.text.description',
      color: 'text-purple-500'
    },
    {
      path: '/time',
      icon: Clock,
      titleKey: 'tools.time.title',
      descKey: 'tools.time.description',
      color: 'text-cyan-500'
    },
    {
      path: '/regex',
      icon: Hash,
      titleKey: 'tools.regex.title',
      descKey: 'tools.regex.description',
      color: 'text-orange-500'
    },
    {
      path: '/editor',
      icon: FileCode,
      titleKey: 'tools.editor.title',
      descKey: 'tools.editor.description',
      color: 'text-yellow-500'
    },
    {
      path: '/encryption',
      icon: Key,
      titleKey: 'tools.crypto.title',
      descKey: 'tools.crypto.description',
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map(({ path, icon: Icon, titleKey, descKey, color }) => (
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
                    {t(titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(descKey)}
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
    </div>
  );
};

export default HomePage;
