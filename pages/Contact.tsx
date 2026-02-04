
import React from 'react';
import { SiteConfig, Language } from '../types';

interface ContactProps {
  config: SiteConfig;
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ config, language }) => {
  const t = (ar: string, fr: string) => language === 'ar' ? ar : fr;

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary mb-4">{t('اتصل بنا', 'Contactez-nous')}</h1>
          <p className="text-gray-500">{t('نحن هنا للإجابة على جميع استفساراتكم.', 'Nous sommes là pour répondre à toutes vos questions.')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">phone_iphone</span>
            <h3 className="font-bold text-secondary mb-2">{t('الهاتف / واتساب', 'Téléphone / WhatsApp')}</h3>
            <p className="text-gray-500 dir-ltr">{config.contact.phone}</p>
          </div>
          
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">mail</span>
            <h3 className="font-bold text-secondary mb-2">{t('البريد الإلكتروني', 'E-mail')}</h3>
            <p className="text-gray-500">{config.contact.email}</p>
          </div>

          <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">location_on</span>
            <h3 className="font-bold text-secondary mb-2">{t('العنوان', 'Adresse')}</h3>
            <p className="text-gray-500">{t(config.contact.address.ar, config.contact.address.fr)}</p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 h-96 rounded-3xl overflow-hidden bg-sand relative shadow-inner">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <span className="material-symbols-outlined text-6xl mb-4">map</span>
              <p className="font-medium">{t('خريطة موقعنا', 'Emplacement sur la carte')}</p>
            </div>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113941.05055627685!2d-13.265438837340331!3d27.151756598375635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc172e257f8846c7%3A0x86134b2f15f7a070!2z2KfZhNmB2YrZiNmG!5e0!3m2!1sar!2sma!4v1700000000000!5m2!1sar!2sma" 
            width="100%" 
            height="100%" 
            style={{ border: 0, opacity: 0.6 }} 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
