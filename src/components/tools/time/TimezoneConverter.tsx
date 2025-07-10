
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { parse } from 'date-fns';
import { formatInTimeZone, fromZonedTime } from 'date-fns-tz';
import ToolPageLayout from '@/components/layout/ToolPageLayout';

const timezones = (Intl as any).supportedValuesOf('timeZone');

const TimezoneConverter: React.FC = () => {
  const { t } = useTranslation();
  const [sourceDateTime, setSourceDateTime] = useState('');
  const [sourceTimezone, setSourceTimezone] = useState<string>(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [targetTimezone, setTargetTimezone] = useState<string>('UTC');
  const [convertedDateTime, setConvertedDateTime] = useState('');

  const dateTimeFormat = "yyyy-MM-dd'T'HH:mm";

  useEffect(() => {
    // Enhanced SEO for this specific tool
    document.title = "Timezone Converter - Convert Time Between Timezones | DevTools Hub";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Free online timezone converter tool. Easily convert date and time between different timezones worldwide. Supports all IANA timezones with accurate DST handling.");
    }

    // Add structured data for this tool
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Timezone Converter",
      "description": "Convert date and time between different timezones",
      "url": "https://devtools-hub.lovable.app/timezone-converter",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web Browser",
      "isAccessibleForFree": true,
      "featureList": [
        "Convert between any IANA timezones",
        "Real-time conversion",
        "Daylight Saving Time support",
        "Current time display"
      ]
    };

    let script = document.getElementById('timezone-converter-schema') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script') as HTMLScriptElement;
      script.id = 'timezone-converter-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      const existingScript = document.getElementById('timezone-converter-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    const now = new Date();
    setSourceDateTime(formatInTimeZone(now, sourceTimezone, dateTimeFormat));
  }, []);

  useEffect(() => {
    if (sourceDateTime && sourceTimezone && targetTimezone) {
      try {
        const localDate = parse(sourceDateTime, dateTimeFormat, new Date());
        if (isNaN(localDate.getTime())) {
            setConvertedDateTime('Invalid Date');
            return;
        }
        const utcDate = fromZonedTime(localDate, sourceTimezone);
        const formatted = formatInTimeZone(utcDate, targetTimezone, "yyyy-MM-dd'T'HH:mm:ssXXX");

        setConvertedDateTime(formatted);
      } catch (e) {
        setConvertedDateTime('Invalid Date');
      }
    }
  }, [sourceDateTime, sourceTimezone, targetTimezone]);

  return (
    <ToolPageLayout
      title={t('tools.time.timezoneConverter.title')}
      description={t('tools.time.timezoneConverter.description')}
    >
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div>
            <label htmlFor="source-datetime" className="text-sm font-medium">{t('tools.time.timezoneConverter.sourceDateTime')}</label>
            <Input
              id="source-datetime"
              type="datetime-local"
              value={sourceDateTime}
              onChange={e => setSourceDateTime(e.target.value)}
              aria-label="Source date and time input"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="source-timezone" className="text-sm font-medium">{t('tools.time.timezoneConverter.sourceTimezone')}</label>
              <Select value={sourceTimezone} onValueChange={setSourceTimezone}>
                <SelectTrigger id="source-timezone" aria-label="Select source timezone">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {timezones.map(tz => <SelectItem key={tz} value={tz}>{tz}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="target-timezone" className="text-sm font-medium">{t('tools.time.timezoneConverter.targetTimezone')}</label>
              <Select value={targetTimezone} onValueChange={setTargetTimezone}>
                <SelectTrigger id="target-timezone" aria-label="Select target timezone">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {timezones.map(tz => <SelectItem key={tz} value={tz}>{tz}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">{t('tools.time.timezoneConverter.convertedDateTime')}</label>
            <Input
              value={convertedDateTime}
              readOnly
              className="font-mono"
              aria-label="Converted date and time result"
            />
          </div>
        </CardContent>
      </Card>
    </ToolPageLayout>
  );
};

export default TimezoneConverter;
