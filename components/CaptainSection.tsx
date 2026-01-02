import React from 'react';
import { Bike, Clock, Wallet, Headphones, ArrowRight, Download } from 'lucide-react';
import Button from './Button';
import { useTranslation } from 'react-i18next';

const CaptainSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="captain" className="py-24 bg-gray-900 overflow-hidden relative">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Column: Content */}
                    <div className="lg:w-1/2 text-center lg:text-right rtl:lg:text-right ltr:lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 rounded-full text-brand-500 font-bold text-sm mb-6 border border-brand-500/20">
                            <Bike size={18} />
                            <span>{t('footer.join_captain')}</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            {t('captain.title')}
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            {t('captain.subtitle')}
                        </p>

                        <div className="grid gap-8 mb-10">
                            <div className="flex items-start gap-4 text-right rtl:text-right ltr:text-left">
                                <div className="p-3 bg-green-500/10 text-green-500 rounded-xl mt-1 shrink-0">
                                    <Wallet size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">{t('captain.benefit_1_title')}</h4>
                                    <p className="text-gray-400">{t('captain.benefit_1_desc')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 text-right rtl:text-right ltr:text-left">
                                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl mt-1 shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">{t('captain.benefit_2_title')}</h4>
                                    <p className="text-gray-400">{t('captain.benefit_2_desc')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 text-right rtl:text-right ltr:text-left">
                                <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl mt-1 shrink-0">
                                    <Headphones size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg mb-1">{t('captain.benefit_3_title')}</h4>
                                    <p className="text-gray-400">{t('captain.benefit_3_desc')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="https://t.me/tabaqakbot" target="_blank" rel="noopener noreferrer">
                                <Button variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px]" icon={<ArrowRight className="rtl:rotate-180" />}>
                                    {t('captain.register_btn')}
                                </Button>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px] border-white/20 text-white hover:bg-white/10" icon={<Download />}>
                                    {t('captain.download_btn')}
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="lg:w-1/2 w-full relative">
                        {/* Circle Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-brand-400 rounded-full opacity-20 blur-3xl transform scale-90 animate-pulse"></div>

                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2615&auto=format&fit=crop"
                                alt="Delivery Captain"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white">
                                        <Bike size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">كابتن طبقك</p>
                                        <p className="text-brand-300 text-xs">أسرع توصيل في النجف</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CaptainSection;
