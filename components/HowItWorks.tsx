import React from 'react';
import { Search, Utensils, Bike } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      title: t('steps.step1_title'),
      description: t('steps.step1_desc'),
      icon: Search,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: 2,
      title: t('steps.step2_title'),
      description: t('steps.step2_desc'),
      icon: Utensils,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      id: 3,
      title: t('steps.step3_title'),
      description: t('steps.step3_desc'),
      icon: Bike,
      color: 'bg-green-100 text-green-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('steps.title')}
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-0 transform -translate-y-1/2 scale-x-75"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div className={`w-24 h-24 ${step.color} rounded-3xl flex items-center justify-center mb-6 shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300`}>
                <step.icon size={40} />
              </div>
              <div className="bg-white px-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 max-w-xs mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;