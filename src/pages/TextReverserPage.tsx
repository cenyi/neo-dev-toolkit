
import React from 'react';
import { useTranslation } from 'react-i18next';
import TextReverser from '@/components/tools/TextReverser';
import PageWrapper from '@/components/PageWrapper';

const TextReverserPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper
      title={t('tools.text.textReverser.title')}
      description="Free online text reverser tool. Reverse the order of characters in your text instantly. Perfect for creating mirror text, backwards text, or simply reversing strings."
      keywords="text reverser, reverse text, backwards text, mirror text, string reverser, text manipulation"
    >
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('tools.text.textReverser.title')}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('tools.text.textReverser.description')}
              </p>
            </header>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
                Reverse Your Text Online
              </h2>
              <TextReverser />
            </section>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
};

export default TextReverserPage;
