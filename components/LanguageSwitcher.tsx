import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
    isScrolled: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled }) => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
        document.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    };

    return (
        <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 font-medium transition-colors hover:scale-105 active:scale-95 px-3 py-1 rounded-full ${isScrolled
                    ? 'text-gray-600 hover:text-brand-500 hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
            aria-label="Toggle Language"
        >
            <Globe size={18} />
            <span className="text-sm pt-0.5">{i18n.language === 'ar' ? 'English' : 'عربي'}</span>
        </button>
    );
};

export default LanguageSwitcher;
