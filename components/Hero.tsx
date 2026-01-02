import React from 'react';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import { motion } from 'framer-motion';

const AppleLogo = () => (
  <svg viewBox="0 0 384 512" width="24" height="24" fill="currentColor" className="mb-1">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const GooglePlayLogo = () => (
  <svg viewBox="0 0 512 512" width="24" height="24" fill="currentColor" className="mb-1">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.3 18-28.5-1.2-40.8zM325.3 277.7l-60.1 60.1L104.6 499l220.7-221.3z" />
  </svg>
);

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-500">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      {/* Circle Decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-600/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-right rtl:lg:text-right ltr:lg:text-left text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              {t('hero.available_now')}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6">
              {t('hero.title_1')}<br />
              <span className="text-brand-900 opacity-90">{t('hero.title_2')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-50 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap"
            >
              <Button
                variant="store"
                size="lg"
                className="hover:shadow-brand-500/20 hover:border-brand-500/50"
                icon={<AppleLogo />}
              >
                <div className="flex flex-col items-start text-xs text-left">
                  <span className="font-light opacity-80 leading-none mb-1">{t('hero.coming_soon')}</span>
                  <span className="text-lg font-bold leading-none">App Store</span>
                </div>
              </Button>
              <Button
                variant="store"
                size="lg"
                className="hover:shadow-brand-500/20 hover:border-brand-500/50"
                icon={<GooglePlayLogo />}
              >
                <div className="flex flex-col items-start text-xs text-left">
                  <span className="font-light opacity-80 leading-none mb-1">{t('hero.coming_soon')}</span>
                  <span className="text-lg font-bold leading-none">Google Play</span>
                </div>
              </Button>
              <Button
                variant="store"
                size="lg"
                className="bg-brand-600 border-brand-500 hover:bg-brand-700 hover:border-brand-400 !shadow-brand-500/30"
                icon={<Download size={24} className="mb-1" />}
              >
                <div className="flex flex-col items-start text-xs text-left">
                  <span className="font-light opacity-80 leading-none mb-1">{t('hero.direct_download')}</span>
                  <span className="text-lg font-bold leading-none">APK Link</span>
                </div>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-brand-100"
            >
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1 rounded-full"><Download size={14} /></div>
                <span>{t('hero.downloads')}</span>
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1 rounded-full">★</div>
                <span>{t('hero.rating')}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Mockup Content */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -6 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative mx-auto w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden z-20">
              {/* Screen Content */}
              <div className="h-full w-full bg-white relative overflow-hidden" dir={useTranslation().i18n.language === 'ar' ? 'rtl' : 'ltr'}>
                {/* Header */}
                <div className="bg-brand-500 h-32 p-6 flex flex-col justify-end text-right rtl:text-right ltr:text-left">
                  <h3 className="text-white font-bold text-xl">{t('hero.mockup_welcome')}</h3>
                  <p className="text-brand-100 text-sm">{t('hero.mockup_question')}</p>
                </div>
                {/* Categories */}
                <div className="p-4 flex gap-3 overflow-x-hidden rtl:flex-row-reverse ltr:flex-row">
                  {[t('hero.cat_grill'), t('hero.cat_qeema'), t('hero.cat_fastfood'), t('hero.cat_sweets')].map((c, i) => (
                    <div key={i} className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap ${i === 0 ? 'bg-brand-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                      {c}
                    </div>
                  ))}
                </div>
                {/* Items */}
                <div className="p-4 space-y-4">
                  <div className="flex gap-4 p-3 rounded-2xl bg-white shadow-sm border border-gray-100 text-right rtl:text-right ltr:text-left">
                    <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Food" loading="lazy" className="w-20 h-20 rounded-xl object-cover" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-gray-800">{t('hero.item_kebab')}</h4>
                        <span className="text-brand-500 font-bold text-sm">18,000</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">20-30 min</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-3 rounded-2xl bg-white shadow-sm border border-gray-100 text-right rtl:text-right ltr:text-left">
                    <img src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Food" loading="lazy" className="w-20 h-20 rounded-xl object-cover" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-gray-800">{t('hero.item_daheen')}</h4>
                        <span className="text-brand-500 font-bold text-sm">12,000</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">40-50 min</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-3 rounded-2xl bg-white shadow-sm border border-gray-100 text-right rtl:text-right ltr:text-left">
                    <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Food" loading="lazy" className="w-20 h-20 rounded-xl object-cover" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-gray-800">{t('hero.item_pizza')}</h4>
                        <span className="text-brand-500 font-bold text-sm">10,000</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">15-25 min</p>
                    </div>
                  </div>
                </div>
                {/* Floating Nav */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur shadow-lg rounded-full p-4 flex justify-around text-gray-400">
                  <div className="text-brand-500">●</div>
                  <div>●</div>
                  <div>●</div>
                  <div>●</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute top-20 right-0 lg:-right-12 p-4 bg-white rounded-2xl shadow-xl z-30 animate-bounce max-w-[180px] lg:max-w-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <Download size={20} />
                </div>
                <div className="text-right rtl:text-right ltr:text-left">
                  <p className="text-xs text-gray-500">{t('hero.notif_order_arrived')}</p>
                  <p className="font-bold text-gray-800 text-sm">{t('hero.notif_enjoy')}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-32 left-0 lg:-left-8 p-4 bg-white rounded-2xl shadow-xl z-30 animate-pulse max-w-[180px] lg:max-w-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">
                  %
                </div>
                <div className="text-right rtl:text-right ltr:text-left">
                  <p className="text-xs text-gray-500">{t('hero.promo_discount')}</p>
                  <p className="font-bold text-gray-800">NAJAF50</p>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;