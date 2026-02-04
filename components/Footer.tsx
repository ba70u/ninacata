
import React from 'react';
import { Link } from 'react-router-dom';
import { Language, SiteConfig } from '../types';

interface FooterProps {
  language: Language;
  config: SiteConfig;
}

const Footer: React.FC<FooterProps> = ({ language, config }) => {
  const t = (ar: string, fr: string) => language === 'ar' ? ar : fr;

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">local_cafe</span>
              <span className="text-2xl font-bold tracking-tight">{config.branding.logo}</span>
            </div>
            <p className="text-sand/70 max-w-sm mb-8">
              {t(
                'نحن نقدم أجود أنواع الشاي والمنتجات الخليجية الأصلية بجودة لا تضاهى.',
                'Nous proposons les meilleurs types de thé et de produits authentiques du Golfe avec une qualité inégalée.'
              )}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">facebook</span>
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">{t('روابط سريعة', 'Liens Rapides')}</h4>
            <ul className="space-y-4 text-sand/80 text-sm">
              <li><Link to="/products" className="hover:text-primary transition-colors">{t('المنتجات', 'Produits')}</Link></li>
              <li><Link to="/prices" className="hover:text-primary transition-colors">{t('الأسعار', 'Prix')}</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">{t('من نحن', 'À Propos')}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">{t('اتصل بنا', 'Contact')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-primary">{t('تواصل معنا', 'Contact')}</h4>
            <ul className="space-y-4 text-sand/80 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>{t(config.contact.address.ar, config.contact.address.fr)}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">phone</span>
                <span className="dir-ltr">{config.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span>{config.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sand/50">
          <p>© {new Date().getFullYear()} {config.branding.logo}. {t('جميع الحقوق محفوظة.', 'Tous droits réservés.')}</p>
          <div className="flex gap-4">
            <Link to="/admin" className="hover:text-white transition-colors">{t('لوحة التحكم', 'Admin')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
