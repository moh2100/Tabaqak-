import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FloatingContact: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end ltr:left-6 ltr:right-auto ltr:items-start" dir={useTranslation().i18n.language === 'en' ? 'ltr' : 'rtl'}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="mb-4 bg-white rounded-2xl shadow-2xl p-4 w-72 border border-gray-100 text-right ltr:text-left"
                    >
                        <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-100">
                            <div>
                                <h4 className="font-bold text-gray-900">{t('contact.welcome')}</h4>
                                <p className="text-xs text-gray-500">{t('contact.help_msg')}</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <a
                            href="https://wa.me/YOUR_NUMBER"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-green-50 transition-colors group mb-2"
                        >
                            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                                <MessageCircle size={20} />
                            </div>
                            <div className="text-right ltr:text-left">
                                <p className="text-sm font-bold text-gray-800">{t('contact.whatsapp')}</p>
                                <p className="text-xs text-gray-500">{t('contact.instant_reply')}</p>
                            </div>
                        </a>

                        <a
                            href="https://t.me/tabaqak"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                        >
                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <Send size={18} />
                            </div>
                            <div className="text-right ltr:text-left">
                                <p className="text-sm font-bold text-gray-800">{t('contact.telegram')}</p>
                                <p className="text-xs text-gray-500">{t('contact.follow_offers')}</p>
                            </div>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-brand-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-600 transition-colors relative"
            >
                <AnimatePresence mode='wait'>
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageCircle size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification Dot */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
                )}
            </motion.button>
        </div>
    );
};

export default FloatingContact;
