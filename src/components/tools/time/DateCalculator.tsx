
import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { add, sub, format } from 'date-fns';

const DateCalculator: React.FC = () => {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState<string>(format(new Date(), "yyyy-MM-dd'T'HH:mm"));
  const [years, setYears] = useState<string>('0');
  const [months, setMonths] = useState<string>('0');
  const [days, setDays] = useState<string>('0');
  const [resultDate, setResultDate] = useState<string>('');

  const calculate = useCallback((operation: 'add' | 'sub') => {
    try {
      const date = new Date(startDate);
      const duration = { 
        years: parseInt(years) || 0, 
        months: parseInt(months) || 0, 
        days: parseInt(days) || 0 
      };
      const newDate = operation === 'add' ? add(date, duration) : sub(date, duration);
      setResultDate(format(newDate, "yyyy-MM-dd HH:mm:ss"));
    } catch (e) {
      setResultDate('Invalid Date');
    }
  }, [startDate, years, months, days]);
  
  useEffect(() => {
    document.title = "Date Calculator - DevTools Hub";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Add or subtract years, months, and days from a given date. Calculate future or past dates effortlessly.");
    }
    calculate('add');
  }, [calculate]);


  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>{t('tools.text.dateCalculator.title')}</CardTitle>
          <CardDescription>{t('tools.text.dateCalculator.description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="start-date" className="text-sm font-medium">{t('tools.text.dateCalculator.startDate')}</label>
            <Input
              id="start-date"
              type="datetime-local"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="text-sm font-medium">{t('tools.text.dateCalculator.add')}</label>
                 <div className="grid grid-cols-3 gap-2 mt-1">
                    <div>
                      <label htmlFor="years" className="text-xs text-muted-foreground">{t('tools.text.dateCalculator.years')}</label>
                      <Input id="years" type="number" value={years} onChange={e => setYears(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="months" className="text-xs text-muted-foreground">{t('tools.text.dateCalculator.months')}</label>
                      <Input id="months" type="number" value={months} onChange={e => setMonths(e.target.value)} />
                    </div>
                    <div>
                      <label htmlFor="days" className="text-xs text-muted-foreground">{t('tools.text.dateCalculator.days')}</label>
                      <Input id="days" type="number" value={days} onChange={e => setDays(e.target.value)} />
                    </div>
                 </div>
            </div>
            <div>
                 <label htmlFor="result-date" className="text-sm font-medium">{t('tools.text.dateCalculator.resultDate')}</label>
                <Input id="result-date" value={resultDate} readOnly className="font-mono mt-1"/>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button onClick={() => calculate('add')} className="flex-1">{t('tools.text.dateCalculator.add')}</Button>
            <Button onClick={() => calculate('sub')} variant="outline" className="flex-1">{t('tools.text.dateCalculator.subtract')}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DateCalculator;
