import React from 'react';
import { MapPin, Star, User, Settings, Heart, Wallet, Clock, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AppScreens: React.FC = () => {
    const screenshots = [1, 2, 3, 4, 5];
    const { t } = useTranslation();

    return (
        <section id="screens" className="py-20 bg-brand-50 relative overflow-hidden">
            {/* Decorative Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-72 h-72 bg-brand-200/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute bottom-10 left-20 w-72 h-72 bg-orange-200/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-600 font-bold bg-brand-100 px-3 py-1 rounded-full text-sm">{t('nav.app')}</span>
                    <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        {t('features.subtitle')}
                    </h2>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        {t('hero.subtitle')}
                    </p>
                </div>

                {/* Scrolling wrapper / Carousel */}
                <div className="flex overflow-x-auto gap-8 pb-10 px-4 no-scrollbar snap-x snap-mandatory justify-start lg:justify-center">
                    {screenshots.map((i) => (
                        <div key={i} className="flex-shrink-0 snap-center">
                            <div className="w-[260px] h-[520px] bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-900 shadow-xl overflow-hidden relative transform hover:-translate-y-2 transition-transform duration-300">
                                {/* Dynamic content placeholder to look like app screens */}
                                <div className="w-full h-full bg-white relative">
                                    {/* Fake Status Bar */}
                                    <div className="h-6 bg-white w-full flex justify-between px-4 items-center text-[10px] font-bold text-gray-800 absolute top-0 z-10">
                                        <span>9:41</span>
                                        <div className="flex gap-1">
                                            <div className="w-3 h-3 bg-black rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* App Content based on index */}
                                    <div className="pt-8 h-full overflow-hidden flex flex-col">
                                        {i === 1 && (
                                            <>
                                                <div className="px-4 mb-4">
                                                    <div className="flex justify-between items-center mb-4">
                                                        <div className="h-4 w-1/3 bg-gray-800 rounded"></div>
                                                        <div className="h-8 w-8 bg-brand-100 rounded-full"></div>
                                                    </div>
                                                    <div className="h-32 bg-brand-500 rounded-2xl mb-4 relative overflow-hidden p-4">
                                                        <div className="text-white font-bold text-xl relative z-10">خصم 50%</div>
                                                        <div className="text-white/80 text-sm relative z-10">على التوصيل</div>
                                                        <div className="absolute right-0 bottom-0 w-20 h-20 bg-white/20 rounded-tl-full"></div>
                                                    </div>
                                                    <div className="flex gap-2 overflow-hidden mb-4">
                                                        {['برجر', 'بيتزا', 'مشويات'].map((t, idx) => (
                                                            <div key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-600 whitespace-nowrap">{t}</div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex-1 bg-gray-50 rounded-t-3xl p-4 space-y-3">
                                                    {[1, 2].map(k => (
                                                        <div key={k} className="bg-white p-2 rounded-xl flex gap-2 shadow-sm">
                                                            <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                                            <div className="flex-1">
                                                                <div className="h-3 bg-gray-800 rounded w-2/3 mb-2"></div>
                                                                <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                        {i === 2 && (
                                            <>
                                                <div className="h-full bg-gray-50 p-4">
                                                    <div className="text-center font-bold text-lg mb-4">قائمة الطلبات</div>
                                                    <div className="bg-white p-3 rounded-xl shadow-sm mb-3 flex gap-3">
                                                        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                                        <div className="flex-1 flex flex-col justify-center">
                                                            <div className="font-bold text-gray-800 text-sm">برجر لحم عراقي</div>
                                                            <div className="text-brand-500 font-bold text-xs">8,500 د.ع</div>
                                                        </div>
                                                        <div className="flex flex-col justify-center items-end">
                                                            <div className="bg-brand-50 text-brand-600 text-[10px] px-2 py-1 rounded">جاري التوصيل</div>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white p-3 rounded-xl shadow-sm mb-3 flex gap-3">
                                                        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                                        <div className="flex-1 flex flex-col justify-center">
                                                            <div className="font-bold text-gray-800 text-sm">دولمة وسط</div>
                                                            <div className="text-brand-500 font-bold text-xs">15,000 د.ع</div>
                                                        </div>
                                                        <div className="flex flex-col justify-center items-end">
                                                            <div className="bg-gray-100 text-gray-500 text-[10px] px-2 py-1 rounded">مكتمل</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        {/* Screen 3: Restaurant Page */}
                                        {i === 3 && (
                                            <div className="h-full bg-white flex flex-col">
                                                <div className="h-32 bg-gray-200 relative">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                                    <div className="absolute bottom-3 right-3 text-white font-bold">مطعم السفير</div>
                                                </div>
                                                <div className="p-4 flex-1">
                                                    <div className="flex justify-between items-center mb-4">
                                                        <div className="flex items-center gap-1">
                                                            <Star size={14} className="text-yellow-500" fill="currentColor" />
                                                            <span className="text-sm font-bold">4.8</span>
                                                        </div>
                                                        <div className="text-xs text-gray-500">مشويات • عراقي</div>
                                                    </div>
                                                    <div className="space-y-3">
                                                        {[1, 2, 3].map(item => (
                                                            <div key={item} className="flex gap-3 border-b border-gray-50 pb-3 last:border-0">
                                                                <div className="flex-1">
                                                                    <div className="font-bold text-sm text-gray-800">نفر كباب</div>
                                                                    <div className="text-xs text-gray-500 mb-1">مع مقبلات وخبز حار</div>
                                                                    <div className="text-brand-600 font-bold text-xs">12,000 د.ع</div>
                                                                </div>
                                                                <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="p-4 border-t border-gray-100">
                                                    <div className="bg-brand-500 text-white text-center py-2 rounded-xl text-sm font-bold">
                                                        عرض السلة (2)
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {/* Screen 4: Order Tracking */}
                                        {i === 4 && (
                                            <div className="h-full bg-gray-50 flex flex-col relative">
                                                <div className="flex-1 bg-gray-200 relative overflow-hidden">
                                                    {/* Fake Map */}
                                                    <div className="absolute top-10 left-10 w-20 h-2 bg-gray-300 rounded rotate-45"></div>
                                                    <div className="absolute top-20 right-20 w-32 h-2 bg-gray-300 rounded -rotate-12"></div>
                                                    <div className="absolute bottom-32 left-10 w-40 h-2 bg-gray-300 rounded rotate-90"></div>

                                                    {/* Driver Marker */}
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                        <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                                                            <MapPin size={16} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white rounded-t-3xl p-5 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div>
                                                            <div className="text-xs text-gray-500">وقت الوصول المتوقع</div>
                                                            <div className="font-bold text-lg">15-20 دقيقة</div>
                                                        </div>
                                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                                            <Clock size={20} className="text-gray-600" />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                                                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                                        <div className="flex-1">
                                                            <div className="font-bold text-sm">محمد الكابتن</div>
                                                            <div className="text-xs text-gray-500">جاري التوصيل...</div>
                                                        </div>
                                                        <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                                            <Phone size={14} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {/* Screen 5: Profile */}
                                        {i === 5 && (
                                            <div className="h-full bg-gray-50 flex flex-col p-4">
                                                <div className="text-center mb-6 mt-4">
                                                    <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3 border-4 border-white shadow-sm"></div>
                                                    <div className="font-bold text-lg text-gray-900">علي محمد</div>
                                                    <div className="text-sm text-gray-500">+964 780 123 4567</div>
                                                </div>

                                                <div className="bg-white rounded-2xl p-4 shadow-sm mb-4 flex justify-between items-center">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center">
                                                            <Wallet size={16} />
                                                        </div>
                                                        <div className="font-bold text-sm">الرصيد</div>
                                                    </div>
                                                    <div className="font-bold text-brand-600">25,000 د.ع</div>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm">
                                                        <Heart size={18} className="text-gray-400" />
                                                        <span className="text-sm font-medium">المفضلة</span>
                                                    </div>
                                                    <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm">
                                                        <MapPin size={18} className="text-gray-400" />
                                                        <span className="text-sm font-medium">العناوين المحفوظة</span>
                                                    </div>
                                                    <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm">
                                                        <Settings size={18} className="text-gray-400" />
                                                        <span className="text-sm font-medium">الاعدادات</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Bottom Tab Bar */}
                                    <div className="absolute bottom-0 w-full h-14 bg-white border-t border-gray-100 flex justify-around items-center text-gray-400 z-10">
                                        <div className={`${i === 1 ? 'text-brand-500' : ''}`}><div className={`w-6 h-6 ${i === 1 ? 'bg-current' : 'bg-gray-300'} rounded-full opacity-20`}></div></div>
                                        <div className={`${i === 2 || i === 3 ? 'text-brand-500' : ''}`}><div className={`w-6 h-6 ${i === 2 || i === 3 ? 'bg-current' : 'bg-gray-300'} rounded-full opacity-20`}></div></div>
                                        <div className={`${i === 5 ? 'text-brand-500' : ''}`}><div className={`w-6 h-6 ${i === 5 ? 'bg-current' : 'bg-gray-300'} rounded-full opacity-20`}></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppScreens;