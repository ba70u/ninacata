
import React from 'react';
import { Language, PageContent } from '../types';

interface AboutProps {
  content: PageContent['about'];
  language: Language;
}

const About: React.FC<AboutProps> = ({ content, language }) => {
  const t = (ar: string, fr: string) => language === 'ar' ? ar : fr;

  const stats = [
    { label: t('زبون راضٍ', 'Clients satisfaits'), value: '20000' },
    { label: t('سنة من الخبرة', 'Années d\'expérience'), value: '33' },
    { label: t('نسبة رضا العملاء', 'Taux de satisfaction'), value: '98%' },
  ];

  const features = [
    {
      title: t('الشاي الصحراوي الأصلي', 'Thé Saharien Authentique'),
      description: t(
        'أجود أنواع الشاي الصحراوي بنكهة تراثية أصيلة وجودة عالية.',
        'Les meilleurs types de thé saharien avec une saveur patrimoniale authentique et une qualité supérieure.'
      ),
    },
    {
      title: t('العطور الشرقية', 'Parfums Orientaux'),
      description: t(
        'عطور فاخرة بروائح مركّزة تجمع بين الأصالة والرقي، متاحة بالجملة والتقسيط.',
        'Parfums de luxe aux senteurs concentrées alliant authenticité et sophistication, disponibles en gros et au détail.'
      ),
    },
    {
      title: t('البخور ومشتقاته', 'Bakhoor et Dérivés'),
      description: t(
        'بخور عالي الجودة برائحة ثابتة، مناسب للبيوت والمتاجر والمجالس.',
        'Bakhoor de haute qualité avec un parfum durable, idéal pour les maisons, les magasins et les salons.'
      ),
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img 
            src={content.image} 
            className="w-full h-full object-cover"
            alt="About Background"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t(content.title.ar, content.title.fr)}
          </h1>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="max-w-4xl mx-auto text-xl text-sand/80 leading-relaxed font-medium">
            {t(content.body.ar, content.body.fr)}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-sand/30 border-y border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-6xl font-extrabold text-secondary mb-3 transition-transform group-hover:scale-110 duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-primary uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {features.map((feature, idx) => (
              <div key={idx} className="relative p-10 bg-[#fafaf9] rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-4xl text-primary font-bold">✓</span>
                  <span className="text-primary font-bold text-3xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-secondary mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Badge Section */}
      <section className="py-16 border-t border-gray-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
           <span className="material-symbols-outlined text-primary text-6xl mb-4">verified</span>
           <h2 className="text-2xl font-bold text-secondary mb-2 uppercase tracking-tighter">
             {t('أكثر من 33 عاماً من التميز', 'Plus de 33 ans d\'excellence')}
           </h2>
        </div>
      </section>
    </div>
  );
};

export default About;
