import React from 'react';
import { TrendingUp, Users, Store, ArrowRight, Star, Clock } from 'lucide-react';
import Button from './Button';
import { useTranslation } from 'react-i18next';

const PartnerStats: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="partners" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Column: Benefits */}
          <div className="lg:w-1/2">
            <span className="text-brand-500 font-bold tracking-wider uppercase text-sm">{t('partners.badge')}</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight">
              {t('partners.title_1')}<br />{t('partners.title_2')}
            </h2>
            <p className="mt-4 text-lg text-gray-500 mb-8">
              {t('partners.desc')}
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mt-1">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{t('partners.growth_title')}</h4>
                  <p className="text-gray-600">{t('partners.growth_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl mt-1">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{t('partners.reach_title')}</h4>
                  <p className="text-gray-600">{t('partners.reach_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl mt-1">
                  <Store size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{t('partners.easy_title')}</h4>
                  <p className="text-gray-600">{t('partners.easy_desc')}</p>
                </div>
              </div>
            </div>

            <Button variant="outline" size="lg" className="w-full sm:w-auto" icon={<ArrowRight size={20} className="rotate-180" />}>
              {t('partners.discover_btn')}
            </Button>
          </div>

          {/* Right Column: Stats Dashboard (Replacing the Chart) */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-gray-800">
              {/* Decorative Background Elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px]"></div>

              <div className="relative z-10">
                <div className="mb-8 text-center lg:text-right">
                  <h3 className="text-2xl font-bold mb-2">{t('partners.stats_title')}</h3>
                  <p className="text-gray-400">{t('partners.stats_subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                    <div className="w-10 h-10 bg-brand-500/20 text-brand-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <TrendingUp size={20} />
                    </div>
                    <p className="text-brand-300 text-xs mb-1">{t('partners.total_orders')}</p>
                    <p className="text-3xl font-black">+19,800</p>
                    <p className="text-[10px] text-gray-500 mt-2">2024</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                    <div className="w-10 h-10 bg-yellow-500/20 text-yellow-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Star size={20} />
                    </div>
                    <p className="text-brand-300 text-xs mb-1">{t('partners.avg_rating')}</p>
                    <p className="text-3xl font-black">4.9 / 5</p>
                    <div className="flex gap-0.5 mt-2">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} fill="currentColor" className="text-yellow-500" />)}
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                    <div className="w-10 h-10 bg-blue-500/20 text-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Clock size={20} />
                    </div>
                    <p className="text-brand-300 text-xs mb-1">{t('partners.delivery_speed')}</p>
                    <p className="text-3xl font-black">24 <span className="text-sm font-normal">{t('partners.minute')}</span></p>
                    <p className="text-[10px] text-gray-500 mt-2">Najaf</p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                    <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Store size={20} />
                    </div>
                    <p className="text-brand-300 text-xs mb-1">{t('partners.partner_restaurants')}</p>
                    <p className="text-3xl font-black">+500</p>
                    <p className="text-[10px] text-gray-500 mt-2">Najaf & Kufa</p>
                  </div>
                </div>

                <a href="https://t.me/tabaqakbot" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="primary" size="lg" className="w-full py-5 text-xl shadow-brand-500/20">
                    {t('partners.register_btn')}
                  </Button>
                </a>
                <p className="text-center text-gray-500 text-xs mt-4">
                  {t('partners.register_note')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerStats;