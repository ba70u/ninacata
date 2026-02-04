
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Product, Language, CartItem, TeaWeight, Category, TeaSubcategory, Brand, Gender, HouseholdSubcategory, BakhoorSubcategory } from '../types';

interface ProductsProps {
  products: Product[];
  addToCart: (item: CartItem) => void;
  language: Language;
  teaSubcategories: TeaSubcategory[];
  brands: Brand[];
  householdSubcategories: HouseholdSubcategory[];
  bakhoorSubcategories: BakhoorSubcategory[];
}

const ProductCard: React.FC<{ 
  product: Product, 
  language: Language, 
  onAdd: (item: CartItem) => void 
}> = ({ product, language, onAdd }) => {
  const availableWeights = useMemo(() => {
    if (product.category !== 'Tea' || !product.pricesByWeight) return [];
    return (Object.keys(product.pricesByWeight) as TeaWeight[]).filter(
      w => product.pricesByWeight && product.pricesByWeight[w] && product.pricesByWeight[w]! > 0
    );
  }, [product.pricesByWeight, product.category]);

  const [selectedWeight, setSelectedWeight] = useState<TeaWeight | null>(availableWeights[0] || null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (availableWeights.length > 0 && (!selectedWeight || !availableWeights.includes(selectedWeight))) {
      setSelectedWeight(availableWeights[0]);
    }
  }, [availableWeights]);

  const t = (ar: string, fr: string) => language === 'ar' ? ar : fr;

  const currentUnitPrice = useMemo(() => {
    if (product.category === 'Tea') {
      return (selectedWeight && product.pricesByWeight) ? product.pricesByWeight[selectedWeight] || 0 : 0;
    }
    return product.price || 0;
  }, [product, selectedWeight]);

  const total = currentUnitPrice * quantity;

  const handleAdd = () => {
    if (product.category === 'Tea' && !selectedWeight) return;

    onAdd({
      cartId: `${product.id}-${selectedWeight || 'unit'}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      category: product.category,
      selectedWeight: product.category === 'Tea' ? selectedWeight! : undefined,
      unitPrice: currentUnitPrice,
      wholesalePriceApplied: false,
      quantity: quantity,
      total: total
    });
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all flex flex-col h-full group">
      <div className="aspect-square sm:aspect-[4/3] relative overflow-hidden">
        <img 
          src={product.image} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          alt={product.name.fr} 
          onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544787210-2211d64b56ee?q=80&w=800&auto=format&fit=crop' }}
        />
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 left-2 sm:left-4 flex justify-between items-start pointer-events-none">
          <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
            product.inStock ? 'bg-green-500/80 text-white' : 'bg-red-500/80 text-white'
          }`}>
            {product.inStock ? t('متوفر', 'Stock') : t('نفذ', 'Épuisé')}
          </span>
          {product.category === 'Tea' && product.wholesalePricePerKg && (
             <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-primary text-white shadow-lg">
                {t('جملة', 'GROS')}
             </span>
          )}
        </div>
      </div>
      
      <div className="p-3 sm:p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-1 sm:mb-2">
          <span className="text-primary font-bold text-[8px] sm:text-[10px] uppercase tracking-widest bg-primary/5 px-1.5 py-0.5 rounded">
            {t(
              product.category === 'Tea' ? 'شاي' : 
              product.category === 'Perfumes' ? 'عطر' : 
              product.category === 'Bakhoor' ? 'بخور' : 'أواني منزلية', 
              product.category === 'Household' ? 'Vaisselle' : product.category
            )}
          </span>
        </div>
        
        <h3 className="text-sm sm:text-lg font-bold text-secondary mb-1 line-clamp-1">{t(product.name.ar, product.name.fr)}</h3>
        <p className="text-gray-400 text-[10px] sm:text-xs mb-3 sm:mb-4 line-clamp-1 sm:line-clamp-2 leading-tight">{t(product.description.ar, product.description.fr)}</p>
        
        <div className="mt-auto space-y-3 sm:space-y-4">
          <div className="flex justify-between items-baseline">
             <span className="text-sm sm:text-xl font-black text-secondary">{currentUnitPrice} DH</span>
          </div>

          {product.category === 'Tea' && availableWeights.length > 0 && (
            <div className="space-y-1 sm:space-y-2">
              <div className="flex flex-wrap gap-1">
                {availableWeights.map(w => (
                  <button 
                    key={w}
                    onClick={() => setSelectedWeight(w)}
                    className={`flex-grow px-1 py-1 sm:px-3 sm:py-2 rounded-lg text-[9px] sm:text-[11px] font-bold border transition-all ${
                      selectedWeight === w 
                        ? 'bg-secondary text-white border-secondary' 
                        : 'bg-gray-50 text-gray-500 border-transparent hover:border-primary'
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2">
            <button 
              disabled={!product.inStock || (product.category === 'Tea' && availableWeights.length === 0)}
              onClick={handleAdd}
              className={`flex-grow py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2 transition-all shadow-lg ${
                product.inStock && !(product.category === 'Tea' && availableWeights.length === 0)
                  ? 'bg-primary text-white hover:bg-opacity-90 shadow-primary/20' 
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed shadow-none'
              }`}
            >
              <span className="material-symbols-outlined text-sm sm:text-base">add_shopping_cart</span>
              <span className="hidden sm:inline">{t('إضافة للسلة', 'Ajouter')}</span>
              <span className="sm:hidden">{t('إضافة', 'Ajouter')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products: React.FC<ProductsProps> = ({ products, addToCart, language, teaSubcategories, brands, householdSubcategories, bakhoorSubcategories }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const currentCategory = searchParams.get('category') as Category | null;
  const currentTeaSub = searchParams.get('teaType');
  const currentGender = searchParams.get('gender') as Gender | null;
  const currentBrandId = searchParams.get('brand');
  const currentHousSub = searchParams.get('housType');
  const currentBakSub = searchParams.get('bakType');

  const t = (ar: string, fr: string) => language === 'ar' ? ar : fr;

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      if (currentCategory && p.category !== currentCategory) return false;
      if (currentCategory === 'Tea' && currentTeaSub) {
        const isParent = teaSubcategories.some(s => s.id === currentTeaSub && !s.parentId);
        if (isParent) {
          const childrenIds = teaSubcategories.filter(s => s.parentId === currentTeaSub).map(s => s.id);
          return p.teaSubcategoryId === currentTeaSub || childrenIds.includes(p.teaSubcategoryId || '');
        }
        return p.teaSubcategoryId === currentTeaSub;
      }
      if (currentCategory === 'Household' && currentHousSub && p.householdSubcategoryId !== currentHousSub) return false;
      if (currentCategory === 'Bakhoor' && currentBakSub && p.bakhoorSubcategoryId !== currentBakSub) return false;
      if (currentCategory === 'Perfumes') {
        if (currentGender && p.gender !== currentGender) return false;
        if (currentBrandId && p.brandId !== currentBrandId) return false;
      }
      return true;
    });
  }, [products, currentCategory, currentTeaSub, currentGender, currentBrandId, currentHousSub, currentBakSub, teaSubcategories]);

  const clearFilters = () => setSearchParams({});

  const teaHierarchy = useMemo(() => {
    const parents = teaSubcategories.filter(s => !s.parentId);
    return parents.map(p => ({
      ...p,
      children: teaSubcategories.filter(s => s.parentId === p.id)
    }));
  }, [teaSubcategories]);

  return (
    <div className="py-6 sm:py-12 bg-[#fafaf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-12">
          
          <aside className="lg:w-72 flex-shrink-0">
            <div className="sticky top-28 space-y-6 sm:space-y-8 bg-white p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-sm border border-gray-100">
              <div>
                <h2 className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-6">{t('تصفية', 'Filtrer')}</h2>
                <div className="space-y-2 sm:space-y-3">
                  <button onClick={clearFilters} className={`w-full text-start px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-3 ${!currentCategory ? 'bg-secondary text-white shadow-xl shadow-secondary/20' : 'bg-gray-50 text-secondary hover:bg-sand'}`}>
                    <span className="material-symbols-outlined text-base">grid_view</span>
                    {t('الكل', 'Tous')}
                  </button>

                  <div className="space-y-1">
                    <button onClick={() => setSearchParams({ category: 'Tea' })} className={`w-full text-start px-4 py-3 rounded-xl text-xs font-bold flex justify-between items-center transition-all ${currentCategory === 'Tea' ? 'bg-secondary text-white shadow-xl shadow-secondary/20' : 'bg-gray-50 text-secondary hover:bg-sand'}`}>
                      <div className="flex items-center gap-3"><span className="material-symbols-outlined text-base">local_cafe</span><span>{t('شاي', 'Thé')}</span></div>
                      <span className="material-symbols-outlined text-sm">{currentCategory === 'Tea' ? 'expand_more' : 'chevron_right'}</span>
                    </button>
                    {currentCategory === 'Tea' && (
                      <div className="ps-4 space-y-4 py-2 mt-1 border-l-2 border-primary/20 ms-4">
                        {teaHierarchy.map(parent => (
                          <div key={parent.id} className="space-y-2">
                            <button onClick={() => setSearchParams({ category: 'Tea', teaType: parent.id })} className={`w-full text-start px-3 py-2 rounded-lg text-xs font-black ${currentTeaSub === parent.id ? 'text-primary bg-primary/5' : 'text-secondary'}`}>{t(parent.name.ar, parent.name.fr)}</button>
                            <div className="ps-3 flex flex-col gap-1">
                              {parent.children.map(child => (
                                <button key={child.id} onClick={() => setSearchParams({ category: 'Tea', teaType: child.id })} className={`w-full text-start px-3 py-1.5 rounded-lg text-[10px] font-bold border-l-2 border-transparent ${currentTeaSub === child.id ? 'text-primary border-primary bg-primary/5' : 'text-gray-400'}`}>* {t(child.name.ar, child.name.fr)}</button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <button onClick={() => setSearchParams({ category: 'Perfumes' })} className={`w-full text-start px-4 py-3 rounded-xl text-xs font-bold flex justify-between items-center transition-all ${currentCategory === 'Perfumes' ? 'bg-secondary text-white shadow-xl shadow-secondary/20' : 'bg-gray-50 text-secondary hover:bg-sand'}`}>
                      <div className="flex items-center gap-3"><span className="material-symbols-outlined text-base">auto_awesome</span><span>{t('عطور', 'Parfums')}</span></div>
                      <span className="material-symbols-outlined text-sm">{currentCategory === 'Perfumes' ? 'expand_more' : 'chevron_right'}</span>
                    </button>
                    {currentCategory === 'Perfumes' && (
                      <div className="ps-4 space-y-4 py-2 mt-1 border-l-2 border-primary/20 ms-4">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-gray-300 uppercase px-3">{t('الجنس', 'Genre')}</p>
                          <button onClick={() => setSearchParams({ category: 'Perfumes', gender: 'Men' })} className={`w-full text-start px-3 py-1.5 rounded-lg text-xs font-bold ${currentGender === 'Men' ? 'text-primary bg-primary/5' : 'text-gray-400'}`}>{t('رجالي', 'Homme')}</button>
                          <button onClick={() => setSearchParams({ category: 'Perfumes', gender: 'Women' })} className={`w-full text-start px-3 py-1.5 rounded-lg text-xs font-bold ${currentGender === 'Women' ? 'text-primary bg-primary/5' : 'text-gray-400'}`}>{t('نسائي', 'Femme')}</button>
                          <button onClick={() => setSearchParams({ category: 'Perfumes', gender: 'Unisex' })} className={`w-full text-start px-3 py-1.5 rounded-lg text-xs font-bold ${currentGender === 'Unisex' ? 'text-primary bg-primary/5' : 'text-gray-400'}`}>{t('للجنسين', 'Unisex')}</button>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-gray-300 uppercase px-3">{t('الماركة', 'Marque')}</p>
                          {brands.map(b => (
                            <button key={b.id} onClick={() => setSearchParams({ category: 'Perfumes', brand: b.id })} className={`w-full text-start px-3 py-1.5 rounded-lg text-xs font-bold ${currentBrandId === b.id ? 'text-primary bg-primary/5' : 'text-gray-400'}`}>{t(b.name.ar, b.name.fr)}</button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <button onClick={() => setSearchParams({ category: 'Bakhoor' })} className={`w-full text-start px-4 py-3 rounded-xl text-xs font-bold flex justify-between items-center transition-all ${currentCategory === 'Bakhoor' ? 'bg-secondary text-white shadow-xl shadow-secondary/20' : 'bg-gray-50 text-secondary hover:bg-sand'}`}>
                      <div className="flex items-center gap-3"><span className="material-symbols-outlined text-base">cloud</span><span>{t('بخور', 'Bakhoor')}</span></div>
                      <span className="material-symbols-outlined text-sm">{currentCategory === 'Bakhoor' ? 'expand_more' : 'chevron_right'}</span>
                    </button>
                    {currentCategory === 'Bakhoor' && (
                      <div className="ps-4 space-y-2 py-2 mt-1 border-l-2 border-primary/20 ms-4">
                        {bakhoorSubcategories.map(bk => (
                          <button key={bk.id} onClick={() => setSearchParams({ category: 'Bakhoor', bakType: bk.id })} className={`w-full text-start px-3 py-1.5 rounded-lg text-xs font-bold border-l-2 border-transparent ${currentBakSub === bk.id ? 'text-primary border-primary bg-primary/5' : 'text-gray-400'}`}>* {t(bk.name.ar, bk.name.fr)}</button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <button onClick={() => setSearchParams({ category: 'Household' })} className={`w-full text-start px-4 py-3 rounded-xl text-xs font-bold flex justify-between transition-all ${currentCategory === 'Household' ? 'bg-secondary text-white shadow-xl shadow-secondary/20' : 'bg-gray-50 text-secondary hover:bg-sand'}`}>
                      <div className="flex items-center gap-3"><span className="material-symbols-outlined text-base">home_mini</span><span>{t('أواني منزلية', 'Vaisselle')}</span></div>
                      <span className="material-symbols-outlined text-sm">{currentCategory === 'Household' ? 'expand_more' : 'chevron_right'}</span>
                    </button>
                    {currentCategory === 'Household' && (
                      <div className="ps-4 space-y-2 py-2 mt-1 border-l-2 border-primary/20 ms-4">
                        {householdSubcategories.map(h => (
                          <button key={h.id} onClick={() => setSearchParams({ category: 'Household', housType: h.id })} className={`w-full text-start px-3 py-2 rounded-lg text-xs font-bold border-l-2 border-transparent ${currentHousSub === h.id ? 'text-primary border-primary bg-primary/5' : 'text-gray-400'}`}>* {t(h.name.ar, h.name.fr)}</button>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </aside>

          <main className="flex-grow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-12 gap-3 px-1 sm:px-0">
              <div>
                <h1 className="text-xl sm:text-4xl font-black text-secondary tracking-tight">{t('كتالوج نينـا بزار', 'Catalogue NINA BAZAR')}</h1>
                <p className="text-primary font-bold text-[9px] sm:text-[11px] uppercase tracking-[0.2em] mt-1">{currentCategory || t('جميع المنتجات', 'Tous les produits')}</p>
              </div>
              <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{filteredProducts.length} {t('عنصر', 'éléments')}</div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {filteredProducts.length === 0 ? (
                <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-gray-100">
                  <span className="material-symbols-outlined text-4xl mb-3 opacity-20">search_off</span>
                  <p className="text-xs text-gray-400 font-bold">{t('لا توجد نتائج', 'Aucun résultat')}</p>
                </div>
              ) : (
                filteredProducts.map((p) => <ProductCard key={p.id} product={p} language={language} onAdd={addToCart} />)
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
