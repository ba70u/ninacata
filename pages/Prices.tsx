
import React from 'react';
import { Product, Language, TeaWeight } from '../types';

interface PricesProps {
  products: Product[];
  language: Language;
}

const Prices: React.FC<PricesProps> = ({ products, language }) => {
  const t = (ar: string, fr: string) => language === 'ar' ? ar : fr;

  const weights: TeaWeight[] = ['100g', '200g', '500g', '1kg', '2kg', '3kg'];

  const teaProducts = products.filter(p => p.category === 'Tea');
  const otherProducts = products.filter(p => p.category !== 'Tea');

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-secondary mb-4">{t('قائمة الأسعار', 'Liste des Prix')}</h1>
          <p className="text-gray-500">{t('شفافية تامة في الأسعار لكل منتجاتنا.', 'Transparence totale des prix pour tous nos produits.')}</p>
        </div>

        {/* Tea Prices Table */}
        <div className="mb-20 overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
          <div className="bg-sand p-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">local_cafe</span>
            <h2 className="text-xl font-bold text-secondary">{t('أسعار الشاي الصحراوي', 'Prix du Thé Saharien')}</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-400 font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 text-start">{t('المنتج', 'Produit')}</th>
                  {weights.map(w => (
                    <th key={w} className="px-6 py-4 text-center">{w}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {teaProducts.map(p => (
                  <tr key={p.id} className="hover:bg-sand/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-secondary">{t(p.name.ar, p.name.fr)}</td>
                    {weights.map(w => (
                      <td key={w} className="px-6 py-4 text-center font-medium text-primary">
                        {p.pricesByWeight?.[w] ? `${p.pricesByWeight[w]} DH` : '-'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Other Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {['Perfumes', 'Bakhoor'].map(category => {
            const catProducts = otherProducts.filter(p => p.category === category);
            if (catProducts.length === 0) return null;

            return (
              <div key={category} className="rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-sand p-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    {category === 'Perfumes' ? 'auto_awesome' : 'cloud'}
                  </span>
                  <h2 className="text-xl font-bold text-secondary">
                    {t(category === 'Perfumes' ? 'العطور' : 'البخور', category)}
                  </h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {catProducts.map(p => (
                    <div key={p.id} className="p-6 flex justify-between items-center hover:bg-sand/30 transition-colors">
                      <span className="font-bold text-secondary">{t(p.name.ar, p.name.fr)}</span>
                      <span className="font-bold text-primary">{p.price} DH</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Prices;
