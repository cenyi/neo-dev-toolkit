import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Clock, Globe, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PageWrapper from '@/components/PageWrapper';

const TimeToolsPage: React.FC = () => {
  const { t } = useTranslation();

  const timeTools = [
    {
      path: '/time/timestamp-converter',
      icon: Clock,
      title: 'Timestamp Converter',
      description: 'Convert between Unix timestamps and human-readable dates and times.',
      color: 'text-blue-500'
    },
    {
      path: '/time/timezone-converter',
      icon: Globe,
      title: 'Timezone Converter',
      description: 'Convert date and time between different timezones worldwide with DST support.',
      color: 'text-green-500'
    },
    {
      path: '/time/date-calculator',
      icon: Calendar,
      title: 'Date Calculator',
      description: 'Add or subtract days, months, and years from dates. Calculate date differences.',
      color: 'text-purple-500'
    }
  ];

  return (
    <PageWrapper
      title="Date & Time Tools - Professional Time Utilities for Developers"
      description="Essential date and time utilities for developers and professionals. Handle timestamp conversions, timezone calculations, and date arithmetic with precision and accuracy."
      keywords="time tools, timestamp converter, timezone converter, date calculator, Unix timestamp, time conversion, developer tools"
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Date & Time Tools</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential date and time utilities for developers and professionals. Handle timestamp conversions, timezone calculations, and date arithmetic with precision, built with <Link to="https://lovable.dev" className="text-primary hover:underline">Lovable AI</Link> technology.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {timeTools.map(({ path, icon: Icon, title, description, color }) => (
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
          <h2 className="text-2xl font-semibold mb-4">Accurate Time Calculations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Precise Calculations</h3>
              <p className="text-muted-foreground text-sm">
                Handle complex timezone conversions and date calculations with accuracy.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Global Support</h3>
              <p className="text-muted-foreground text-sm">
                Support for all world timezones with automatic daylight saving time adjustments.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Developer Friendly</h3>
              <p className="text-muted-foreground text-sm">
                Perfect for API development, log analysis, and timestamp debugging.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default TimeToolsPage;