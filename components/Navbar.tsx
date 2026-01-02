import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';
import { NavItem } from '../types';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const navItems: NavItem[] = [
  { label: 'nav.home', href: '#hero' },
  { label: 'nav.features', href: '#features' },
  { label: 'nav.app', href: '#screens' },
  { label: 'nav.partners', href: '#partners' },
  { label: 'nav.captain', href: '#captain' },
];

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100; // Height of fixed header + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-1 group">
              <span className={`font-['Outfit'] text-4xl font-black tracking-tighter transition-all duration-300 ${isScrolled
                ? 'text-brand-500 shadow-brand-500/20 drop-shadow-sm group-hover:drop-shadow-md'
                : 'text-white drop-shadow-md'
                }`}>
                Tabaqak
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`font-medium transition-colors hover:text-brand-500 ${isScrolled ? 'text-gray-600' : 'text-white/90 hover:text-white'
                  }`}
              >
                {t(item.label)}
              </a>
            ))}

            <LanguageSwitcher isScrolled={isScrolled} />

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                variant={isScrolled ? 'primary' : 'secondary'}
                className={!isScrolled ? 'border-2 border-white/10' : ''}
                onClick={(e) => scrollToSection(e, '#download')}
              >
                {t('nav.download')}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher isScrolled={isScrolled} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-gray-900 lg:text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-lg font-medium text-gray-700 py-2 px-4 hover:bg-gray-50 rounded-lg"
            >
              {t(item.label)}
            </a>
          ))}
          <Button
            className="w-full mt-2"
            onClick={(e) => scrollToSection(e, '#download')}
          >
            {t('nav.download_now')}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;