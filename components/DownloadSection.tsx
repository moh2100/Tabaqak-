import React from 'react';
import { Download } from 'lucide-react';
import Button from './Button';
import { useTranslation } from 'react-i18next';

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

const DownloadSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="download" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">

          {/* Abstract circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-700 rounded-full blur-3xl opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black mb-6">
              {t('download.title')}
            </h2>
            <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
              {t('download.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Button
                variant="secondary"
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 border border-gray-800"
                icon={<AppleLogo />}
              >
                <div className="flex flex-col items-start text-xs text-right ltr:text-left">
                  <span className="font-light opacity-80 leading-none mb-1 text-right ltr:text-left w-full">{t('hero.coming_soon')}</span>
                  <span className="text-lg font-bold leading-none">App Store</span>
                </div>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 border border-gray-800"
                icon={<GooglePlayLogo />}
              >
                <div className="flex flex-col items-start text-xs text-right ltr:text-left">
                  <span className="font-light opacity-80 leading-none mb-1 text-right ltr:text-left w-full">{t('hero.coming_soon')}</span>
                  <span className="text-lg font-bold leading-none">Google Play</span>
                </div>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-brand-800/50 text-white hover:bg-brand-800 border border-brand-700"
                icon={<Download size={24} className="mb-1" />}
              >
                <div className="flex flex-col items-start text-xs text-left">
                  <span className="font-light opacity-80 leading-none mb-1">{t('hero.direct_download')}</span>
                  <span className="text-lg font-bold leading-none">APK Link</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;