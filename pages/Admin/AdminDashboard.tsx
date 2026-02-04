
import React, { useState, useMemo } from 'react';
import { Product, SiteConfig, PageContent, Language, Category, TeaWeight, TeaSubcategory, Brand, Gender, HouseholdSubcategory, BakhoorSubcategory } from '../../types';

interface AdminDashboardProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  teaSubcategories: TeaSubcategory[];
  setTeaSubcategories: React.Dispatch<React.SetStateAction<TeaSubcategory[]>>;
  brands: Brand[];
  setBrands: React.Dispatch<React.SetStateAction<Brand[]>>;
  householdSubcategories: HouseholdSubcategory[];
  setHouseholdSubcategories: React.Dispatch<React.SetStateAction<HouseholdSubcategory[]>>;
  bakhoorSubcategories: BakhoorSubcategory[];
  setBakhoorSubcategories: React.Dispatch<React.SetStateAction<BakhoorSubcategory[]>>;
  config: SiteConfig;
  setConfig: React.Dispatch<React.SetStateAction<SiteConfig>>;
  pageContent: PageContent;
  setPageContent: React.Dispatch<React.SetStateAction<PageContent>>;
  language: Language;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  products, setProducts, teaSubcategories, setTeaSubcategories, brands, setBrands, householdSubcategories, setHouseholdSubcategories, bakhoorSubcategories, setBakhoorSubcategories, config, setConfig, pageContent, setPageContent, language 
}) => {
  const [activeTab, setActiveTab] = useState<'products' | 'categories' | 'content' | 'settings' | 'backup'>('products');
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
  const [productFilter, setProductFilter] = useState<{category: string, sub: string}>({category: 'all', sub: 'all'});
  const [showSaveToast, setShowSaveToast] = useState(false);

  const t = (ar: string, fr: string) => language === 'ar' ? ar : fr;

  const handleGlobalSave = () => {
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 3000);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    if (editingProduct.id) {
      setProducts(prev => prev.map(p => p.id === editingProduct.id ? { ...p, ...editingProduct } as Product : p));
    } else {
      const newProduct = { 
        ...editingProduct, 
        id: `p-${Date.now()}`, 
        inStock: editingProduct.inStock ?? true 
      } as Product;
      setProducts(prev => [...prev, newProduct]);
    }
    setEditingProduct(null);
    handleGlobalSave();
  };

  const weights: TeaWeight[] = ['100g', '200g', '500g', '1kg', '2kg', '3kg'];

  const teaDropdownOptions = useMemo(() => {
    const parents = teaSubcategories.filter(s => !s.parentId);
    const options: {id: string, label: string}[] = [];
    parents.forEach(p => {
      options.push({ id: p.id, label: t(p.name.ar, p.name.fr) });
      teaSubcategories.filter(s => s.parentId === p.id).forEach(c => {
        options.push({ id: c.id, label: `↳ ${t(c.name.ar, c.name.fr)}` });
      });
    });
    return options;
  }, [teaSubcategories, language]);

  const filteredProducts = products.filter(p => {
    if (productFilter.category !== 'all' && p.category !== productFilter.category) return false;
    if (productFilter.sub !== 'all') {
      if (p.category === 'Tea' && p.teaSubcategoryId !== productFilter.sub) return false;
      if (p.category === 'Household' && p.householdSubcategoryId !== productFilter.sub) return false;
      if (p.category === 'Bakhoor' && p.bakhoorSubcategoryId !== productFilter.sub) return false;
      if (p.category === 'Perfumes' && p.brandId !== productFilter.sub) return false;
    }
    return true;
  });

  const exportData = useMemo(() => {
    return JSON.stringify({
      products,
      teaSubcategories,
      brands,
      householdSubcategories,
      bakhoorSubcategories,
      config,
      pageContent
    }, null, 2);
  }, [products, teaSubcategories, brands, householdSubcategories, bakhoorSubcategories, config, pageContent]);

  return (
    <div className="py-12 bg-gray-50 min-h-screen relative">
      {showSaveToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-green-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="material-symbols-outlined">check_circle</span>
          <span className="font-bold">{t('تم حفظ جميع التغييرات بنجاح!', 'Toutes les modifications ont été enregistrées !')}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex items-center gap-4">
             <div className="size-14 bg-secondary text-white rounded-2xl flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
             </div>
             <div>
                <h1 className="text-2xl font-bold text-secondary uppercase tracking-tight">{t('لوحة تحكم نينـا بزار', 'ADMIN NINA BAZAR')}</h1>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t('إدارة المتجر بالكامل', 'Gestion Intégrale du Store')}</p>
             </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100 overflow-x-auto">
              {(['products', 'categories', 'content', 'settings', 'backup'] as const).map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap uppercase tracking-widest ${
                    activeTab === tab ? 'bg-secondary text-white shadow-lg shadow-secondary/20' : 'text-gray-400 hover:text-secondary'
                  }`}
                >
                  {t(
                    tab === 'products' ? 'المنتجات' : 
                    tab === 'categories' ? 'الأقسام' : 
                    tab === 'content' ? 'المحتوى' : 
                    tab === 'settings' ? 'الإعدادات' : 'نسخة احتياطية', 
                    tab === 'backup' ? 'Backup' : tab
                  )}
                </button>
              ))}
            </div>
            
            <button 
              onClick={handleGlobalSave}
              className="bg-green-600 text-white px-6 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-green-700 shadow-xl shadow-green-600/20 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined">save</span>
              <span>{t('حفظ الكل', 'SAVE ALL')}</span>
            </button>
          </div>
        </div>

        {activeTab === 'products' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-secondary flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">inventory_2</span>
                  {t('إدارة المنتجات', 'Gestion des Produits')}
                </h2>
                <div className="flex gap-2">
                  <select 
                    value={productFilter.category} 
                    onChange={e => setProductFilter({...productFilter, category: e.target.value, sub: 'all'})}
                    className="text-[10px] font-bold uppercase bg-white border-gray-200 rounded-lg px-2 py-1 focus:ring-primary"
                  >
                    <option value="all">{t('كل الأقسام', 'Toutes catégories')}</option>
                    <option value="Tea">{t('شاي', 'Thé')}</option>
                    <option value="Perfumes">{t('عطور', 'Parfums')}</option>
                    <option value="Bakhoor">{t('بخور', 'Bakhoor')}</option>
                    <option value="Household">{t('أواني منزلية', 'Vaisselle')}</option>
                  </select>
                </div>
              </div>
              <button 
                onClick={() => setEditingProduct({ 
                  category: 'Tea', 
                  inStock: true, 
                  name: { ar: '', fr: '' }, 
                  description: { ar: '', fr: '' }, 
                  image: 'https://images.unsplash.com/photo-1544787210-2211d64b56ee?q=80&w=800&auto=format&fit=crop',
                  pricesByWeight: { '100g': 0, '200g': 0, '500g': 0, '1kg': 0, '2kg': 0, '3kg': 0 }
                })}
                className="bg-primary text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-opacity-90 shadow-lg shadow-primary/20 transition-all"
              >
                <span className="material-symbols-outlined">add</span>
                <span>{t('منتج جديد', 'Nouveau Produit')}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(p => (
                <div key={p.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow group">
                  <div className="size-20 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0">
                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt={p.name.fr} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-bold text-secondary truncate mb-1">{t(p.name.ar, p.name.fr)}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-tighter bg-primary/5 px-2 py-0.5 rounded">
                        {p.category === 'Household' ? t('أواني منزلية', 'Vaisselle') : t(p.category, p.category)}
                      </span>
                      {!p.inStock && (
                        <span className="text-[10px] font-bold text-red-400 uppercase tracking-tighter">{t('نفذ', 'OUT')}</span>
                      )}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button onClick={() => setEditingProduct(p)} className="flex-grow py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                      <button onClick={() => {
                        if(confirm(t('هل أنت متأكد من الحذف؟', 'Supprimer ce produit ?'))) {
                          setProducts(prev => prev.filter(pr => pr.id !== p.id));
                          handleGlobalSave();
                        }
                      }} className="flex-grow py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {editingProduct && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm overflow-y-auto">
                <div className="bg-white rounded-[2.5rem] max-w-2xl w-full my-8 p-10 shadow-2xl animate-in zoom-in-95 duration-300">
                  <div className="flex justify-between items-center mb-8">
                     <h3 className="text-2xl font-bold text-secondary">{t('تعديل المنتج', 'Modifier le Produit')}</h3>
                     <button onClick={() => setEditingProduct(null)} className="p-2 text-gray-300 hover:text-gray-500">
                        <span className="material-symbols-outlined">close</span>
                     </button>
                  </div>
                  
                  <form onSubmit={handleSaveProduct} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('الاسم بالعربية', 'Nom Arabe')}</label>
                        <input value={editingProduct.name?.ar ?? ''} onChange={e => setEditingProduct(prev => prev ? {...prev, name: {...(prev.name ?? {ar: '', fr: ''}), ar: e.target.value}} : null)} className="w-full rounded-2xl border-gray-100 bg-gray-50 px-4 py-3 focus:ring-primary focus:bg-white transition-all" required />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('الاسم بالفرنسية', 'Nom Français')}</label>
                        <input value={editingProduct.name?.fr ?? ''} onChange={e => setEditingProduct(prev => prev ? {...prev, name: {...(prev.name ?? {ar: '', fr: ''}), fr: e.target.value}} : null)} className="w-full rounded-2xl border-gray-100 bg-gray-50 px-4 py-3 focus:ring-primary focus:bg-white transition-all" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('القسم', 'Catégorie')}</label>
                        <select value={editingProduct.category ?? 'Tea'} onChange={e => setEditingProduct(prev => prev ? {...prev, category: e.target.value as Category} : null)} className="w-full rounded-2xl border-gray-100 bg-gray-50 px-4 py-3 focus:ring-primary">
                          <option value="Tea">Tea (Thé)</option>
                          <option value="Perfumes">Perfumes (Parfums)</option>
                          <option value="Bakhoor">Bakhoor</option>
                          <option value="Household">أواني منزلية (Vaisselle)</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('رابط الصورة', 'Lien Image')}</label>
                        <input value={editingProduct.image ?? ''} onChange={e => setEditingProduct(prev => prev ? {...prev, image: e.target.value} : null)} className="w-full rounded-2xl border-gray-100 bg-gray-50 px-4 py-3 focus:ring-primary" required />
                      </div>
                    </div>

                    <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-6">
                      <h4 className="text-sm font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">sell</span>
                        {t('تفاصيل التصنيف', 'Détails du classement')}
                      </h4>
                      
                      {editingProduct.category === 'Tea' && (
                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('نوع الشاي', 'Type de Thé')}</label>
                          <select value={editingProduct.teaSubcategoryId || ''} onChange={e => setEditingProduct(prev => prev ? {...prev, teaSubcategoryId: e.target.value} : null)} className="w-full rounded-2xl border-white bg-white px-4 py-3 focus:ring-primary shadow-sm">
                            <option value="">---</option>
                            {teaDropdownOptions.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
                          </select>
                        </div>
                      )}

                      {editingProduct.category === 'Perfumes' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('الجنس', 'Genre')}</label>
                            <select value={editingProduct.gender || ''} onChange={e => setEditingProduct(prev => prev ? {...prev, gender: e.target.value as Gender} : null)} className="w-full rounded-2xl border-white bg-white px-4 py-3 focus:ring-primary shadow-sm">
                              <option value="">---</option>
                              <option value="Men">{t('رجالي', 'Homme')}</option>
                              <option value="Women">{t('نسائي', 'Femme')}</option>
                              <option value="Unisex">{t('للجنسين', 'Unisex')}</option>
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('الماركة', 'Marque')}</label>
                            <select value={editingProduct.brandId || ''} onChange={e => setEditingProduct(prev => prev ? {...prev, brandId: e.target.value} : null)} className="w-full rounded-2xl border-white bg-white px-4 py-3 focus:ring-primary shadow-sm">
                              <option value="">---</option>
                              {brands.map(b => <option key={b.id} value={b.id}>{t(b.name.ar, b.name.fr)}</option>)}
                            </select>
                          </div>
                        </div>
                      )}

                      {editingProduct.category === 'Bakhoor' && (
                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('نوع البخور', 'Type de Bakhoor')}</label>
                          <select value={editingProduct.bakhoorSubcategoryId || ''} onChange={e => setEditingProduct(prev => prev ? {...prev, bakhoorSubcategoryId: e.target.value} : null)} className="w-full rounded-2xl border-white bg-white px-4 py-3 focus:ring-primary shadow-sm">
                            <option value="">---</option>
                            {bakhoorSubcategories.map(bk => <option key={bk.id} value={bk.id}>{t(bk.name.ar, bk.name.fr)}</option>)}
                          </select>
                        </div>
                      )}

                      {editingProduct.category === 'Household' && (
                        <div className="space-y-1">
                          <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('نوع الأواني', 'Type de Vaisselle')}</label>
                          <select value={editingProduct.householdSubcategoryId || ''} onChange={e => setEditingProduct(prev => prev ? {...prev, householdSubcategoryId: e.target.value} : null)} className="w-full rounded-2xl border-white bg-white px-4 py-3 focus:ring-primary shadow-sm">
                            <option value="">---</option>
                            {householdSubcategories.map(h => <option key={h.id} value={h.id}>{t(h.name.ar, h.name.fr)}</option>)}
                          </select>
                        </div>
                      )}
                    </div>

                    <div className="p-8 bg-sand/20 rounded-3xl border border-sand/30 space-y-6">
                      <h4 className="text-sm font-bold text-secondary uppercase tracking-widest flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">payments</span>
                        {t('التسعير', 'Tarification')}
                      </h4>
                      {editingProduct.category === 'Tea' ? (
                        <div className="space-y-6">
                          <div className="space-y-1">
                             <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('سعر الجملة للكيلو', 'Prix Gros / KG')}</label>
                             <input type="number" value={editingProduct.wholesalePricePerKg ?? ''} onChange={e => setEditingProduct(prev => prev ? {...prev, wholesalePricePerKg: Number(e.target.value)} : null)} className="w-full rounded-2xl border-white bg-white px-4 py-3 focus:ring-primary shadow-sm" />
                          </div>
                          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                            {weights.map(w => (
                              <div key={w}>
                                <label className="text-[10px] text-gray-400 font-bold block mb-1 text-center">{w}</label>
                                <input type="number" value={editingProduct.pricesByWeight?.[w] ?? ''} onChange={e => setEditingProduct(prev => prev ? {...prev, pricesByWeight: { ...(prev.pricesByWeight ?? {}), [w]: Number(e.target.value) } } : null)} className="w-full rounded-xl border-white bg-white text-center font-bold text-sm p-3 focus:ring-primary shadow-sm" />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1">
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('سعر التقسيط (DH)', 'Prix Détail')}</label>
                            <input type="number" value={editingProduct.price ?? ''} onChange={e => setEditingProduct(prev => prev ? {...prev, price: Number(e.target.value)} : null)} className="w-full rounded-2xl border-white bg-white px-4 py-3 focus:ring-primary shadow-sm" />
                          </div>
                          <div className="space-y-1">
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t('سعر الجملة (DH)', 'Prix Gros')}</label>
                            <input type="number" value={editingProduct.wholesalePrice ?? ''} onChange={e => setEditingProduct(prev => prev ? {...prev, wholesalePrice: Number(e.target.value)} : null)} className="w-full rounded-2xl border-white bg-white px-4 py-3 focus:ring-primary shadow-sm" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-gray-100">
                      <button type="submit" className="flex-grow py-5 bg-secondary text-white rounded-2xl font-extrabold shadow-xl shadow-secondary/20 transition-all hover:bg-opacity-95">{t('حفظ التغييرات', 'Enregistrer')}</button>
                      <button type="button" onClick={() => setEditingProduct(null)} className="px-8 py-5 border-2 border-gray-100 text-gray-400 rounded-2xl font-bold transition-all hover:bg-gray-50">{t('إلغاء', 'Annuler')}</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'categories' && (
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 animate-in fade-in duration-500">
            <h2 className="text-xl font-bold text-secondary mb-8">{t('إدارة التصنيفات والماركات', 'Gestion des Catégories & Marques')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="font-bold text-primary text-xs uppercase tracking-widest">{t('ماركات العطور', 'Marques de Parfums')}</h3>
                <div className="space-y-2">
                  {brands.map(b => (
                    <div key={b.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                      <span className="text-sm font-bold text-secondary">{t(b.name.ar, b.name.fr)}</span>
                      <button onClick={() => setBrands(prev => prev.filter(x => x.id !== b.id))} className="text-red-400 hover:text-red-600">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  ))}
                  <button onClick={() => {
                    const nameAr = prompt('Nom Arabe / الاسم بالعربية');
                    const nameFr = prompt('Nom Français / الاسم بالفرنسية');
                    if(nameAr && nameFr) setBrands(prev => [...prev, {id: `b-${Date.now()}`, name: {ar: nameAr, fr: nameFr}}]);
                  }} className="w-full py-3 border-2 border-dashed border-gray-200 text-gray-400 rounded-xl text-xs font-bold hover:border-primary hover:text-primary transition-all">
                    + {t('إضافة ماركة', 'Ajouter une Marque')}
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-primary text-xs uppercase tracking-widest">{t('تصنيفات الأواني', 'Catégories de Vaisselle')}</h3>
                <div className="space-y-2">
                  {householdSubcategories.map(h => (
                    <div key={h.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                      <span className="text-sm font-bold text-secondary">{t(h.name.ar, h.name.fr)}</span>
                      <button onClick={() => setHouseholdSubcategories(prev => prev.filter(x => x.id !== h.id))} className="text-red-400 hover:text-red-600">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  ))}
                  <button onClick={() => {
                    const nameAr = prompt('Nom Arabe / الاسم بالعربية');
                    const nameFr = prompt('Nom Français / الاسم بالفرنسية');
                    if(nameAr && nameFr) setHouseholdSubcategories(prev => [...prev, {id: `h-${Date.now()}`, name: {ar: nameAr, fr: nameFr}}]);
                  }} className="w-full py-3 border-2 border-dashed border-gray-200 text-gray-400 rounded-xl text-xs font-bold hover:border-primary hover:text-primary transition-all">
                    + {t('إضافة تصنيف', 'Ajouter une Catégorie')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'backup' && (
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 animate-in fade-in duration-500">
            <h2 className="text-xl font-bold text-secondary mb-4">{t('النسخ الاحتياطي واستعادة البيانات', 'Backup & Restore')}</h2>
            <p className="text-sm text-gray-400 mb-8">{t('قم بنسخ هذا الكود وحفظه في ملف نصي لتتمكن من استعادة متجرك بالكامل لاحقاً.', 'Copiez ce code pour sauvegarder l\'intégralité de votre boutique.')}</p>
            <textarea readOnly value={exportData} rows={10} className="w-full p-6 bg-secondary text-sand font-mono text-xs rounded-3xl border-none mb-6" />
            <button onClick={() => {
              navigator.clipboard.writeText(exportData);
              alert(t('تم نسخ البيانات!', 'Données copiées !'));
            }} className="w-full py-5 bg-primary text-white rounded-2xl font-black shadow-lg shadow-primary/20">{t('نسخ كود البيانات', 'COPIER LE CODE JSON')}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
