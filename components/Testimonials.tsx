import React from 'react';
import { Quote, Heart, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.05] pointer-events-none">
        <Quote size={200} className="transform -scale-x-100" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-500 font-bold tracking-widest uppercase text-xs px-4 py-1.5 bg-brand-50 rounded-full inline-block mb-3">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-3xl font-black text-gray-900 sm:text-5xl">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Developer image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-brand-500/20 rounded-[2.5rem] transform rotate-3"></div>
              <img
                src="https://h.top4top.io/p_3648u9py01.jpg"
                alt={t('testimonials.dev_name')}
                loading="lazy"
                className="relative w-56 h-72 md:w-72 md:h-96 rounded-[2.2rem] object-cover border-4 border-white shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-gray-900 text-white p-4 rounded-2xl shadow-xl">
                <Code size={24} className="text-brand-500" />
              </div>
            </div>
          </div>

          {/* Message text */}
          <div className="flex-1 text-right ltr:text-left">
            <div className="mb-6">
              <Quote size={48} className="text-brand-500/20 mb-4 transform -scale-x-100" />
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                "{t('testimonials.message_p1')} <span className="text-brand-500 font-bold">{t('testimonials.brand')}</span> {t('testimonials.message_p2')}
                <br /><br />
                {t('testimonials.message_p3')} <span className="text-brand-500 font-bold">{t('testimonials.brand')}</span> {t('testimonials.message_p4')}
                <br /><br />
                {t('testimonials.message_p5')}"
              </p>
            </div>

            <div className="mt-8 border-r-4 ltr:border-r-0 ltr:border-l-4 border-brand-500 pr-6 ltr:pr-0 ltr:pl-6">
              <h4 className="text-2xl font-black text-gray-900">{t('testimonials.dev_name')}</h4>
              <p className="text-gray-500 font-bold">{t('testimonials.dev_title')}</p>
            </div>

            <div className="mt-10 flex items-center gap-3 text-gray-400 justify-end ltr:justify-start">
              <Heart size={20} className="text-brand-500 fill-current animate-pulse" />
              <span className="text-sm font-bold">{t('testimonials.made_with_pride')}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;