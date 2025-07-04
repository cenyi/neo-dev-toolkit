import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Type, Hash, RotateCcw, Eraser, FileText, GitCompare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TextToolsPage: React.FC = () => {
  const { t } = useTranslation();

  const textTools = [
    {
      path: '/case-converter',
      icon: Type,
      title: 'Case Converter',
      description: 'Convert text between uppercase, lowercase, title case, and sentence case.',
      color: 'text-purple-500'
    },
    {
      path: '/word-counter',
      icon: Hash,
      title: 'Word & Character Counter',
      description: 'Count words, characters, sentences, and paragraphs in your text.',
      color: 'text-blue-500'
    },
    {
      path: '/text-reverser',
      icon: RotateCcw,
      title: 'Text Reverser',
      description: 'Reverse the order of characters in your text instantly.',
      color: 'text-green-500'
    },
    {
      path: '/whitespace-remover',
      icon: Eraser,
      title: 'Whitespace Remover',
      description: 'Remove extra spaces, trim whitespace, and clean up text formatting.',
      color: 'text-orange-500'
    },
    {
      path: '/lorem-ipsum-generator',
      icon: FileText,
      title: 'Lorem Ipsum Generator',
      description: 'Generate placeholder text for design and development projects.',
      color: 'text-indigo-500'
    },
    {
      path: '/text-diff',
      icon: GitCompare,
      title: 'Text Comparison Tool',
      description: 'Compare two texts and highlight differences with visual diff display.',
      color: 'text-red-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Text Processing Tools</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Powerful text manipulation and analysis tools for writers, developers, and content creators. Transform, analyze, and compare text with our comprehensive suite built with <Link to="https://lovable.dev" className="text-primary hover:underline">Lovable AI</Link>.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {textTools.map(({ path, icon: Icon, title, description, color }) => (
          <Link key={path} to={path} className="group">
            <Card className="h-full hover:shadow-lg transition-shadow duration-200 border-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent">
                    <Icon size={24} className={color} />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Why Use Our Text Tools?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Real-Time Processing</h3>
            <p className="text-muted-foreground text-sm">
              See results instantly as you type with real-time text processing.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Privacy Protected</h3>
            <p className="text-muted-foreground text-sm">
              All text processing happens locally - your content never leaves your browser.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Multi-Purpose</h3>
            <p className="text-muted-foreground text-sm">
              From simple case conversion to complex text analysis and comparison.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextToolsPage;