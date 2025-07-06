import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FileCode, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const EditorToolsPage: React.FC = () => {
  const { t } = useTranslation();

  const editorTools = [
    {
      path: '/editor/markdown',
      icon: FileCode,
      title: 'Markdown Editor',
      description: 'Write and preview Markdown with syntax highlighting and live preview.',
      color: 'text-yellow-500'
    },
    {
      path: '/editor/mermaid',
      icon: Code,
      title: 'Mermaid Diagram Editor',
      description: 'Create flowcharts, sequence diagrams, and other diagrams with Mermaid syntax.',
      color: 'text-indigo-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Code & Document Editors</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Professional online editors for Markdown documentation and Mermaid diagrams. Create, edit, and preview your content with real-time rendering, built with <Link to="https://lovable.dev" className="text-primary hover:underline">Lovable AI</Link> technology.
        </p>
      </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {editorTools.map(({ path, icon: Icon, title, description, color }) => (
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
          <h2 className="text-2xl font-semibold mb-4">Professional Editing Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Live Preview</h3>
              <p className="text-muted-foreground text-sm">
                See your Markdown and Mermaid diagrams rendered in real-time as you type.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Syntax Highlighting</h3>
              <p className="text-muted-foreground text-sm">
                Professional code editor with syntax highlighting and auto-completion.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Export Ready</h3>
              <p className="text-muted-foreground text-sm">
                Copy or download your rendered content for use in documentation and presentations.
              </p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default EditorToolsPage;