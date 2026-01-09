import React, { useState } from 'react';
import { Instagram, Facebook } from 'lucide-react';
import Modal from './Modal';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-right rtl:text-right ltr:text-left">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 justify-end rtl:justify-end ltr:justify-start">
              <span className="font-['Outfit'] text-3xl font-black text-white tracking-tighter">
                Tabaqak
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-brand-500 transition-colors">{t('footer.about')}</a></li>
              <li><a href="#features" className="hover:text-brand-500 transition-colors">{t('footer.features_link')}</a></li>
              <li><a href="#partners" className="hover:text-brand-500 transition-colors">{t('footer.join_partner')}</a></li>
              <li><a href="#captain" onClick={(e) => {
                e.preventDefault();
                document.getElementById('captain')?.scrollIntoView({ behavior: 'smooth' });
              }} className="hover:text-brand-500 transition-colors">{t('footer.join_captain')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="hover:text-brand-500 transition-colors">{t('footer.help_center')}</a></li>
              <li>
                <button onClick={() => setIsTermsOpen(true)} className="hover:text-brand-500 transition-colors">
                  {t('footer.terms')}
                </button>
              </li>
              <li>
                <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-brand-500 transition-colors">
                  {t('footer.privacy')}
                </button>
              </li>
              <li><a href="https://t.me/tabaqakbot" target="_blank" rel="noreferrer" className="hover:text-brand-500 transition-colors">{t('footer.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">{t('footer.follow_us')}</h4>
            <div className="flex gap-4 justify-end rtl:justify-end ltr:justify-start">
              <a href="https://x.com/tabaqak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all">
                {/* X Logo */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/tabaqak?utm_source=qr&igsh=c25xbm1reXlyaXcy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/1Ba9nh1wcB/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://t.me/tabaqak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all">
                {/* Telegram Logo */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a href="https://tiktok.com/@tabaqak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all">
                {/* TikTok Logo */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@tabaqak" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all">
                {/* YouTube Logo */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>{t('footer.copyright')}</p>
          <p className="mt-2 md:mt-0">{t('footer.dev_love')}</p>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title="سياسة الخصوصية">
        <div className="space-y-4">
          <p><strong>آخر تحديث:</strong> 1 يناير 2025</p>
          <p>نحن في "طبقك" نولي اهتماماً كبيراً بخصوصية زوارنا ومستخدمينا. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية.</p>

          <h4 className="font-bold text-lg text-gray-800">1. المعلومات التي نجمعها</h4>
          <p>قد نجمع معلومات شخصية مثل الاسم، رقم الهاتف، والموقع الجغرافي عند استخدامك للتطبيق لغرض توصيل الطلبات.</p>

          <h4 className="font-bold text-lg text-gray-800">2. كيفية استخدام المعلومات</h4>
          <p>نستخدم المعلومات لتحسين خدماتنا، معالجة الطلبات، والتواصل معك بخصوص حالة طلبك أو العروض الجديدة.</p>

          <h4 className="font-bold text-lg text-gray-800">3. مشاركة البيانات</h4>
          <p>لا نقوم ببيع أو تأجير بياناتك الشخصية لأطراف ثالثة. قد نشارك بعض البيانات الضرورية مع المطاعم والسائقين لإمام عملية التوصيل.</p>

          <h4 className="font-bold text-lg text-gray-800">4. الأمان</h4>
          <p>نتبع معايير أمان عالية لحماية بياناتك من الوصول غير المصرح به.</p>
        </div>
      </Modal>

      {/* TermsModal */}
      <Modal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} title="الشروط والأحكام">
        <div className="space-y-4">
          <p>أهلاً بك في تطبيق "طبقك". باستخدامك لهذا التطبيق، فإنك توافق على الشروط والأحكام التالية:</p>

          <h4 className="font-bold text-lg text-gray-800">1. الاستخدام المقبول</h4>
          <p>يجب استخدام التطبيق لأغراض قانونية فقط. يمنع استخدامه لأي غرض غير مشروع أو ضار.</p>

          <h4 className="font-bold text-lg text-gray-800">2. حقوق الملكية الفكرية</h4>
          <p>جميع المحتويات والعلامات التجارية الموجودة في التطبيق هي ملك لـ "طبقك" ولا يجوز نسخها أو استخدامها دون إذن.</p>

          <h4 className="font-bold text-lg text-gray-800">3. الطلبات والتوصيل</h4>
          <p>نحن نعمل كوسيط بينك وبين المطاعم. جودة الطعام والتغليف هي مسؤولية المطعم، بينما نسعى لضمان توصيل سريع وآمن.</p>

          <h4 className="font-bold text-lg text-gray-800">4. تعديل الشروط</h4>
          <p>نحتفظ بالحق في تعديل هذه الشروط في أي وقت، وسيتم إشعار المستخدمين بأي تغييرات جوهرية.</p>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;