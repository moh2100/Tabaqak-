import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';
import { useTranslation, Trans } from 'react-i18next';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-full text-brand-600 mb-4">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            {t('faq.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-right focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-600' : 'text-gray-900'}`}>
                  {t(`faq.q${index}`)}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-500" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>

              <div
                className={`px-6 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
              >
                <Trans
                  i18nKey={`faq.a${index}`}
                  components={{
                    1: <a href="https://t.me/tabaqakbot" target="_blank" rel="noopener noreferrer" className="text-brand-500 font-bold hover:underline" />
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;