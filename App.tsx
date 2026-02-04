
import React, { useState, useEffect, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Language, CartItem, Product, SiteConfig, PageContent, TeaSubcategory, Brand, HouseholdSubcategory, TeaWeight, BakhoorSubcategory } from './types';
import { DEFAULT_PRODUCTS, DEFAULT_CONFIG, DEFAULT_PAGE_CONTENT, DEFAULT_TEA_SUBCATS, DEFAULT_BRANDS, DEFAULT_HOUSEHOLD_SUBCATS, DEFAULT_BAKHOOR_SUBCATS } from './constants';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CartModal from './components/CartModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Prices from './pages/Prices';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('lang');
    return (saved as Language) || 'ar';
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : DEFAULT_PRODUCTS;
  });

  const [teaSubcategories, setTeaSubcategories] = useState<TeaSubcategory[]>(() => {
    const saved = localStorage.getItem('teaSubcats');
    return saved ? JSON.parse(saved) : DEFAULT_TEA_SUBCATS;
  });

  const [brands, setBrands] = useState<Brand[]>(() => {
    const saved = localStorage.getItem('brands');
    return saved ? JSON.parse(saved) : DEFAULT_BRANDS;
  });

  const [householdSubcategories, setHouseholdSubcategories] = useState<HouseholdSubcategory[]>(() => {
    const saved = localStorage.getItem('householdSubcats');
    return saved ? JSON.parse(saved) : DEFAULT_HOUSEHOLD_SUBCATS;
  });

  const [bakhoorSubcategories, setBakhoorSubcategories] = useState<BakhoorSubcategory[]>(() => {
    const saved = localStorage.getItem('bakhoorSubcats');
    return saved ? JSON.parse(saved) : DEFAULT_BAKHOOR_SUBCATS;
  });

  const [config, setConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('config');
    return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
  });

  const [pageContent, setPageContent] = useState<PageContent>(() => {
    const saved = localStorage.getItem('pageContent');
    return saved ? JSON.parse(saved) : DEFAULT_PAGE_CONTENT;
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Persistence
  useEffect(() => {
    localStorage.setItem('lang', language);
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('teaSubcats', JSON.stringify(teaSubcategories));
    localStorage.setItem('brands', JSON.stringify(brands));
    localStorage.setItem('householdSubcats', JSON.stringify(householdSubcategories));
    localStorage.setItem('bakhoorSubcats', JSON.stringify(bakhoorSubcategories));
    localStorage.setItem('config', JSON.stringify(config));
    localStorage.setItem('pageContent', JSON.stringify(pageContent));
  }, [language, products, teaSubcategories, brands, householdSubcategories, bakhoorSubcategories, config, pageContent]);

  useEffect(() => {
     localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const toggleLanguage = () => setLanguage(prev => (prev === 'ar' ? 'fr' : 'ar'));

  const weightToKg = (w: TeaWeight): number => {
    if (w === '100g') return 0.1;
    if (w === '200g') return 0.2;
    if (w === '500g') return 0.5;
    if (w === '1kg') return 1;
    if (w === '2kg') return 2;
    if (w === '3kg') return 3;
    return 0;
  };

  const recalculateCart = (currentCart: CartItem[]) => {
    const totalTeaWeightKg = currentCart.reduce((acc, item) => {
      if (item.category === 'Tea' && item.selectedWeight) {
        return acc + (weightToKg(item.selectedWeight) * item.quantity);
      }
      return acc;
    }, 0);

    const isTeaWholesaleActive = totalTeaWeightKg >= 5;

    return currentCart.map(item => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return item;

      let unitPrice = item.unitPrice;
      let wholesalePriceApplied = false;

      if (product.category === 'Tea') {
        if (isTeaWholesaleActive && product.wholesalePricePerKg) {
          const weightKg = weightToKg(item.selectedWeight as TeaWeight);
          unitPrice = product.wholesalePricePerKg * weightKg;
          wholesalePriceApplied = true;
        } else {
          unitPrice = product.pricesByWeight?.[item.selectedWeight as TeaWeight] || 0;
        }
      } else {
        if (item.quantity >= 5 && product.wholesalePrice) {
          unitPrice = product.wholesalePrice;
          wholesalePriceApplied = true;
        } else {
          unitPrice = product.price || 0;
        }
      }

      return {
        ...item,
        unitPrice,
        wholesalePriceApplied,
        total: unitPrice * item.quantity
      };
    });
  };

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => 
        i.productId === item.productId && i.selectedWeight === item.selectedWeight
      );
      let updated;
      if (existing) {
        updated = prev.map(i => 
          (i.productId === item.productId && i.selectedWeight === item.selectedWeight)
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        updated = [...prev, item];
      }
      return recalculateCart(updated);
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId: string) => {
    setCart(prev => recalculateCart(prev.filter(i => i.cartId !== cartId)));
  };

  const updateCartQuantity = (cartId: string, delta: number) => {
    setCart(prev => {
      const updated = prev.map(item => {
        if (item.cartId === cartId) {
          return { ...item, quantity: Math.max(1, item.quantity + delta) };
        }
        return item;
      });
      return recalculateCart(updated);
    });
  };

  const isRTL = language === 'ar';

  return (
    <Router>
      <div className={`min-h-screen flex flex-col font-sans ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <Header 
          language={language} 
          toggleLanguage={toggleLanguage} 
          cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
          onCartClick={() => setIsCartOpen(true)}
          config={config}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home products={products} content={pageContent.home} language={language} />} />
            <Route path="/about" element={<About content={pageContent.about} language={language} />} />
            <Route path="/products" element={
              <Products 
                products={products} 
                addToCart={addToCart} 
                language={language} 
                teaSubcategories={teaSubcategories}
                brands={brands}
                householdSubcategories={householdSubcategories}
                bakhoorSubcategories={bakhoorSubcategories}
              />
            } />
            <Route path="/prices" element={<Prices products={products} language={language} />} />
            <Route path="/contact" element={<Contact config={config} language={language} />} />
            
            <Route path="/admin/login" element={
              isAdminAuthenticated ? <Navigate to="/admin" /> : <AdminLogin onLogin={() => setIsAdminAuthenticated(true)} language={language} />
            } />
            
            <Route path="/admin" element={
              isAdminAuthenticated ? (
                <AdminDashboard 
                  products={products} 
                  setProducts={setProducts} 
                  teaSubcategories={teaSubcategories}
                  setTeaSubcategories={setTeaSubcategories}
                  brands={brands}
                  setBrands={setBrands}
                  householdSubcategories={householdSubcategories}
                  setHouseholdSubcategories={setHouseholdSubcategories}
                  bakhoorSubcategories={bakhoorSubcategories}
                  setBakhoorSubcategories={setBakhoorSubcategories}
                  config={config} 
                  setConfig={setConfig} 
                  pageContent={pageContent}
                  setPageContent={setPageContent}
                  language={language}
                />
              ) : <Navigate to="/admin/login" />
            } />
          </Routes>
        </main>

        <Footer language={language} config={config} />

        <CartModal 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cart={cart} 
          removeFromCart={removeFromCart} 
          updateQuantity={updateCartQuantity}
          language={language}
          config={config}
          onClearCart={() => setCart([])}
        />
      </div>
    </Router>
  );
};

export default App;
