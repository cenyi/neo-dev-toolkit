
import React from 'react';
import DateCalculator from '@/components/tools/DateCalculator';
import PageWrapper from '@/components/PageWrapper';

const DateCalculatorPage = () => {
  return (
    <PageWrapper 
      title="Date Calculator Tool"
      description="Free date calculator tool. Add or subtract years, months, and days from any date. Calculate future or past dates effortlessly with our date arithmetic tool."
      keywords="date calculator, date arithmetic, add days to date, subtract days from date, date math, future date calculator"
    >
      <DateCalculator />
    </PageWrapper>
  );
};

export default DateCalculatorPage;
