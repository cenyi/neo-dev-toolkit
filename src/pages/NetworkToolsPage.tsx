import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Network, Link as LinkIcon, Eye, Key } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const NetworkToolsPage: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const networkTools = [
    {
      path: `/${lang}/network/url-encoder`,
      icon: LinkIcon,
      title: 'URL Encoder / Decoder',
      description: 'Encode URLs for safe transmission or decode percent-encoded URLs.',
      color: 'text-green-500'
    },
    {
      path: `/${lang}/network/base64-encoder`,
      icon: Network,
      title: 'Base64 Encoder / Decoder',
      description: 'Encode text to Base64 or decode Base64 strings back to text.',
      color: 'text-blue-500'
    },
    {
      path: '/network/ip-lookup',
      icon: Eye,
      title: 'IP Address Lookup',
      description: 'Get geolocation, ISP information, and network details for any IP address.',
      color: 'text-purple-500'
    },
    {
      path: '/network/jwt-decoder',
      icon: Key,
      title: 'JWT Token Decoder',
      description: 'Decode JSON Web Tokens and view header, payload, and signature information.',
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Network & Encoding Tools</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Essential network and encoding utilities for web developers. Handle URL encoding, Base64 conversion, IP lookups, and JWT decoding with our secure, privacy-focused tools built with <Link to="https://lovable.dev" className="text-primary hover:underline">Lovable AI</Link>.
        </p>
      </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {networkTools.map(({ path, icon: Icon, title, description, color }) => (
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
          <h2 className="text-2xl font-semibold mb-4">Secure Network Utilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Client-Side Processing</h3>
              <p className="text-muted-foreground text-sm">
                All encoding and decoding happens in your browser for maximum security.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">No Data Storage</h3>
              <p className="text-muted-foreground text-sm">
                We don't store or log any of your input data or results.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Instant Results</h3>
              <p className="text-muted-foreground text-sm">
                Fast processing with real-time results as you type.
              </p>
            </div>
          </div>
        </section>
    </div>
  );
};

export default NetworkToolsPage;