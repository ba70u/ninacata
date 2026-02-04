
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language, SiteConfig } from '../types';

interface HeaderProps {
  language: Language;
  toggleLanguage: () => void;
  cartCount: number;
  onCartClick: () => void;
  config: SiteConfig;
}

const Header: React.FC<HeaderProps> = ({ language, toggleLanguage, cartCount, onCartClick, config }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: { ar: 'الرئيسية', fr: 'Accueil' }, path: '/' },
    { label: { ar: 'المنتجات', fr: 'Produits' }, path: '/products' },
    { label: { ar: 'الأسعار', fr: 'Prix' }, path: '/prices' },
    { label: { ar: 'من نحن', fr: 'À Propos' }, path: '/about' },
    { label: { ar: 'اتصل بنا', fr: 'Contact' }, path: '/contact' },
  ];

  const t = (ar: string, fr: string) => language === 'ar' ? ar : fr;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">local_cafe</span>
            <span className="text-xl font-bold tracking-tight text-secondary">
              {config.branding.logo}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {t(item.label.ar, item.label.fr)}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-full bg-sand text-secondary text-xs font-bold hover:bg-primary hover:text-white transition-colors uppercase"
            >
              {language === 'ar' ? 'Français' : 'العربية'}
            </button>
            
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-[10px] font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-terracotta rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-4 text-base font-medium rounded-md hover:bg-sand ${
                  location.pathname === item.path ? 'text-primary bg-sand' : 'text-gray-600'
                }`}
              >
                {t(item.label.ar, item.label.fr)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
