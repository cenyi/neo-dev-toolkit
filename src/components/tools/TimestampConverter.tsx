
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const TimestampConverter: React.FC = () => {
  const { t } = useTranslation();
  const [timestamp, setTimestamp] = useState<string>('');
  const [dateTime, setDateTime] = useState<string>('');

  const toUTCString = (date: Date) => {
    const YYYY = date.getUTCFullYear();
    const MM = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const DD = date.getUTCDate().toString().padStart(2, '0');
    const hh = date.getUTCHours().toString().padStart(2, '0');
    const mm = date.getUTCMinutes().toString().padStart(2, '0');
    const ss = date.getUTCSeconds().toString().padStart(2, '0');
    return `${YYYY}-${MM}-${DD}T${hh}:${mm}:${ss}`;
  };
  
  const handleSetCurrentTime = () => {
    const now = new Date();
    setTimestamp(Math.floor(now.getTime() / 1000).toString());
    setDateTime(toUTCString(now));
  };
  
  useEffect(() => {
    handleSetCurrentTime();
  }, []);

  const handleTimestampChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTimestamp = e.target.value;
    setTimestamp(newTimestamp);
    if (/^\d+$/.test(newTimestamp)) {
      const tsNumber = parseInt(newTimestamp, 10);
      const date = new Date(tsNumber * 1000);
      setDateTime(toUTCString(date));
    } else if (newTimestamp === '') {
      setDateTime('');
    }
  };

  const handleDateTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDateTime = e.target.value;
    setDateTime(newDateTime);
    if (newDateTime === '') {
      setTimestamp('');
      return;
    }
    const date = new Date(newDateTime + 'Z'); // Append Z to denote UTC
    if (!isNaN(date.getTime())) {
        const ts = Math.floor(date.getTime() / 1000);
        setTimestamp(ts.toString());
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>{t('tools.timestampConverter.title')}</CardTitle>
          <p className="text-sm text-muted-foreground">{t('tools.timestampConverter.description')}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-end space-x-2">
            <div className="flex-grow">
              <label htmlFor="timestamp" className="text-sm font-medium">{t('tools.timestampConverter.timestamp')}</label>
              <Input
                id="timestamp"
                value={timestamp}
                onChange={handleTimestampChange}
                placeholder={t('tools.timestampConverter.timestampPlaceholder')}
              />
            </div>
            <Button onClick={handleSetCurrentTime}>{t('tools.timestampConverter.current')}</Button>
          </div>

          <div className="flex-grow">
            <label htmlFor="datetime" className="text-sm font-medium">{t('tools.timestampConverter.dateTime')}</label>
            <Input
              id="datetime"
              type="datetime-local"
              step="1"
              value={dateTime}
              onChange={handleDateTimeChange}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimestampConverter;
