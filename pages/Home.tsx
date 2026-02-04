import React from 'react';
import { Link } from 'react-router-dom';
import { Product, Language, Category, PageContent } from '../types';

interface HomeProps {
  products: Product[];
  content: PageContent['home'];
  language: Language;
}

const Home: React.FC<HomeProps> = ({ products, content, language }) => {
  const t = (ar: string, fr: string) => language === 'ar' ? ar : fr;

  const categories: { label: { ar: string, fr: string }, type: Category, icon: string, imageId: string }[] = [
    { label: { ar: 'شاي صحراوي', fr: 'Thé Saharien' }, type: 'Tea', icon: 'local_cafe', imageId: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8-1OJVDvSLbOIFbCbUOS652ofi3OEwu49ayKI2vrLVeuiZ2zqUWnolHoO18mR1tBNlNJTwNCeiQeMBQsdscm4k9yplYGcfLvY7JZvCTHq52sIpbPLx6OGShzzIBKOvgclVtzn1-8BH6lT3NSeEgQ6pJc1ZUQyNUffWgKpfDyuMO3rqPBM95CAlGtL8cM/w400-h400/Whisk_e22ebd10c702be5b12b4e3593ef4822edr.jpeg' },
    { label: { ar: 'عطور فاخرة', fr: 'Parfums' }, type: 'Perfumes', icon: 'auto_awesome', imageId: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2hkkGqTG-BfiAOY_ZuI6SGR-u0yh5s5LTizDh63uuJisV-kWggrmTtsSlB8dU1FWl2uke13ZdOib9A7Dd3O0P4FKqsHkzmIslFo3mlHZJ2a_iaFs2i42QiGUP6pTbh9pom6JJnoaa8SRRSwJIKgWjBfYHB55DApPkEkBtLWux5F8vvJuDSCxe8pSciz4/w400-h400/Whisk_523eb97503d587c8d3a45a503f7abfdbeg.png' },
    { label: { ar: 'بخور', fr: 'Bakhoor' }, type: 'Bakhoor', icon: 'cloud', imageId: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcLMD_8RIi_XSsXm7m0n7DDuStZAoIxLYMzCV451XzOibkSHo-O5DI4wiu1o43xDHQC7C0axwgb-tZSGad6ueJjRzK-mnFTYUuiTxsiP7IbH1K6cFYP-sLq3Rsh7hdk31KGtFrEaIFEUcd456d9mfaLz5b8U7jT2IIkBKBY3tOYNB9NgcB88uUArUOc-A/w400-h400/Whisk_167291da511d49f9f634ea7d50864b39eg.png' },
    { label: { ar: 'أواني منزلية', fr: 'Vaisselle' }, type: 'Household', icon: 'home_mini', imageId: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiG77Sh41Geu3fem_Fgpg1EXG6yKSHp7-L7dFKAEt_-MlPBbkkSfYwcEqb7Edad5E819QNIzfE9dYMWYYc4BoYjFvbKFS2mDlblUNUSQg1EzLxmD-YuUVnJpqHL2F9J5IdjY6FeUgnyUxoEURYq-5EcDwRoinQjWY7wHYmp9qYJ0eEHphDWzxzQlv3Yp04/w400-h400/Whisk_46b26297a8d8679898941909001e6658eg.png' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={content.heroImage} 
            className="w-full h-full object-cover brightness-[0.55]"
            alt="Sahara Hero"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518114056416-298375936780?q=80&w=2000&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/40 to-secondary/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {t('الأصالة والجودة', 'Authenticité & Qualité')}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-black mb-4 sm:mb-8 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
              {t(content.heroTitle.ar, content.heroTitle.fr)}
            </h1>
            <p className="text-sm sm:text-xl md:text-2xl mb-8 sm:mb-12 text-sand/90 font-light max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              {t(content.heroSubtitle.ar, content.heroSubtitle.fr)}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-5 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
              <Link 
                to="/products" 
                className="px-6 py-3 sm:px-10 sm:py-5 bg-primary text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-2xl shadow-primary/20"
              >
                {t('تسوق الآن', 'Acheter')}
              </Link>
              <Link 
                to="/about" 
                className="px-6 py-3 sm:px-10 sm:py-5 backdrop-blur-md border border-white/30 text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg hover:bg-white hover:text-secondary transition-all transform hover:-translate-y-1"
              >
                {t('قصتنا', 'Notre histoire')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-black text-secondary mb-3">{t('اكتشف مجموعاتنا', 'Nos collections')}</h2>
            <div className="h-1 w-12 sm:w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {categories.map((cat) => (
              <Link 
                key={cat.type}
                to={`/products?category=${cat.type}`}
                className="group relative h-48 sm:h-80 rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/10 to-transparent z-10 transition-opacity group-hover:opacity-80"></div>
                <img 
                  src={cat.imageId.includes('://') ? cat.imageId : `https://images.unsplash.com/${cat.imageId}?q=80&w=800&auto=format&fit=crop`} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt={cat.type}
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544787210-2211d64b56ee?q=80&w=800&auto=format&fit=crop' }}
                />
                <div className="absolute bottom-4 sm:bottom-8 inset-x-4 sm:inset-x-8 z-20">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-white text-base sm:text-xl">
                      {cat.icon}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-xl font-black text-white uppercase tracking-wider">
                    {t(cat.label.ar, cat.label.fr)}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section - Tea */}
      <section className="py-12 sm:py-24 bg-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 sm:gap-20">
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-full h-full border-2 border-primary/30 rounded-2xl sm:rounded-[3rem]"></div>
                <img 
                  src={content.featuredTeaImage} 
                  className="relative rounded-2xl sm:rounded-[3rem] shadow-2xl w-full h-64 sm:h-[500px] object-cover"
                  alt="Traditional Sahara Tea"
                />
              </div>
            </div>
            <div className="flex-1">
              <span className="text-primary font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-4 sm:mb-6 block">
                {t('الأصالة الصحراوية', 'Héritage')}
              </span>
              <h2 className="text-2xl sm:text-5xl font-black text-secondary mb-4 sm:mb-8 leading-tight">
                {t(content.featuredTeaTitle.ar, content.featuredTeaTitle.fr)}
              </h2>
              <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-10 leading-relaxed font-medium">
                {t(content.featuredTeaDesc.ar, content.featuredTeaDesc.fr)}
              </p>
              <Link 
                to="/products?category=Tea"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-secondary text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-opacity-90 transition-all shadow-xl shadow-secondary/20"
              >
                <span>{t('استكشف المزيد', 'Découvrir')}</span>
                <span className="material-symbols-outlined text-sm sm:text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section - Household */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 sm:gap-20">
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-full h-full border-2 border-primary/30 rounded-2xl sm:rounded-[3rem]"></div>
                <img 
                  src={content.featuredHousImage} 
                  className="relative rounded-2xl sm:rounded-[3rem] shadow-2xl w-full h-64 sm:h-[500px] object-cover"
                  alt="Oriental Household Utensils"
                />
              </div>
            </div>
            <div className="flex-1">
              <span className="text-primary font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-4 sm:mb-6 block">
                {t('أواني منزلية فاخرة', 'Art de vivre')}
              </span>
              <h2 className="text-2xl sm:text-5xl font-black text-secondary mb-4 sm:mb-8 leading-tight">
                {t(content.featuredHousTitle.ar, content.featuredHousTitle.fr)}
              </h2>
              <p className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-10 leading-relaxed font-medium">
                {t(content.featuredHousDesc.ar, content.featuredHousDesc.fr)}
              </p>
              <Link 
                to="/products?category=Household"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-opacity-90 transition-all shadow-xl shadow-primary/20"
              >
                <span>{t('تصفح المجموعة', 'Voir plus')}</span>
                <span className="material-symbols-outlined text-sm sm:text-base">shopping_bag</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;