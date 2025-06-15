
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { parse } from 'date-fns';
import { formatInTimeZone, fromZonedTime } from 'date-fns-tz';

const timezones = (Intl as any).supportedValuesOf('timeZone');

const TimezoneConverter: React.FC = () => {
  const { t } = useTranslation();
  const [sourceDateTime, setSourceDateTime] = useState('');
  const [sourceTimezone, setSourceTimezone] = useState<string>(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [targetTimezone, setTargetTimezone] = useState<string>('UTC');
  const [convertedDateTime, setConvertedDateTime] = useState('');

  const dateTimeFormat = "yyyy-MM-dd'T'HH:mm";

  useEffect(() => {
    document.title = "Timezone Converter - DevTools Hub";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Easily convert date and time between different timezones. Supports all IANA timezones.");
    }
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
    <div className="p-4 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>{t('tools.timezoneConverter.title')}</CardTitle>
          <p className="text-sm text-muted-foreground">{t('tools.timezoneConverter.description')}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="source-datetime" className="text-sm font-medium">{t('tools.timezoneConverter.sourceDateTime')}</label>
            <Input 
              id="source-datetime" 
              type="datetime-local" 
              value={sourceDateTime} 
              onChange={e => setSourceDateTime(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="source-timezone" className="text-sm font-medium">{t('tools.timezoneConverter.sourceTimezone')}</label>
              <Select value={sourceTimezone} onValueChange={setSourceTimezone}>
                <SelectTrigger id="source-timezone"><SelectValue /></SelectTrigger>
                <SelectContent className="max-h-60">
                  {timezones.map(tz => <SelectItem key={tz} value={tz}>{tz}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="target-timezone" className="text-sm font-medium">{t('tools.timezoneConverter.targetTimezone')}</label>
              <Select value={targetTimezone} onValueChange={setTargetTimezone}>
                <SelectTrigger id="target-timezone"><SelectValue /></SelectTrigger>
                <SelectContent className="max-h-60">
                  {timezones.map(tz => <SelectItem key={tz} value={tz}>{tz}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">{t('tools.timezoneConverter.convertedDateTime')}</label>
            <Input value={convertedDateTime} readOnly className="font-mono"/>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimezoneConverter;
