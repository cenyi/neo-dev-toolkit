
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  FileJson, 
  Network, 
  FileText, 
  Lock, 
  FileCode,
  Code
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
      path: '/crypto',
      icon: Lock,
      titleKey: 'tools.crypto.title',
      descKey: 'tools.crypto.description',
      color: 'text-red-500'
    },
    {
      path: '/markdown',
      icon: FileCode,
      titleKey: 'tools.markdown.title',
      descKey: 'tools.markdown.description',
      color: 'text-yellow-500'
    },
    {
      path: '/mermaid',
      icon: Code,
      titleKey: 'tools.mermaid.title',
      descKey: 'tools.mermaid.description',
      color: 'text-indigo-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 floating-animation">
          {t('home.title')}
        </h1>
        <p className="text-xl mb-6 opacity-80">
          {t('home.subtitle')}
        </p>
        <p className="text-lg opacity-60 max-w-2xl mx-auto">
          {t('home.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(({ path, icon: Icon, titleKey, descKey, color }) => (
          <Link key={path} to={path} className="group">
            <div className="neu-card hover:scale-105 transition-all duration-300 h-full">
              <div className="flex flex-col items-center text-center p-4">
                <div className={`p-4 rounded-2xl mb-4 ${color} bg-opacity-10`}>
                  <Icon size={32} className={color} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(titleKey)}
                </h3>
                <p className="opacity-70">
                  {t(descKey)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
