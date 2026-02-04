
import React from 'react';
import { CartItem, Language, SiteConfig } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  language: Language;
  config: SiteConfig;
  onClearCart: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cart, removeFromCart, updateQuantity, language, config, onClearCart }) => {
  const total = cart.reduce((acc, item) => acc + item.total, 0);
  const wholesaleItems = cart.filter(i => i.wholesalePriceApplied);

  const handleCheckout = () => {
    const itemsText = cart.map(item => {
      const variantText = item.selectedWeight ? ` (${item.selectedWeight})` : '';
      const name = language === 'ar' ? item.name.ar : item.name.fr;
      const wholesaleTag = item.wholesalePriceApplied ? ` [${language === 'ar' ? 'سعر الجملة' : 'PRIX GROS'}]` : '';
      return `- ${name}${variantText}${wholesaleTag}: ${item.unitPrice} x ${item.quantity} = ${item.total} DH`;
    }).join('\n');

    let message = language === 'ar' ? config.templates.ar : config.templates.fr;
    message = message
      .replace('[ITEMS]', itemsText)
      .replace('[TOTAL]', `${total} DH`);

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClearCart();
    onClose();
  };

  const t = (ar: string, fr: string) => language === 'ar' ? ar : fr;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className={`absolute inset-y-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 animate-in slide-in-from-${language === 'ar' ? 'left' : 'right'}`}>
        <div className="p-6 border-b flex justify-between items-center bg-[#fafaf9]">
          <h2 className="text-lg font-bold text-secondary">
            {t('سلة تسوق نينـا بزار', 'Panier NINA BAZAR')}
          </h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4 sm:p-6 bg-white">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
              <span className="material-symbols-outlined text-6xl mb-4 opacity-20">shopping_cart_off</span>
              <p className="font-medium">{t('السلة فارغة حالياً', 'Votre panier est vide')}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {wholesaleItems.length > 0 && (
                 <div className="p-4 bg-green-50 text-green-700 rounded-2xl border border-green-100 flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm">loyalty</span>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">{t('تم تطبيق أسعار الجملة تلقائياً!', 'Remises de gros appliquées !')}</p>
                 </div>
              )}
              {cart.map((item) => (
                <div key={item.cartId} className={`flex gap-3 sm:gap-4 p-4 rounded-2xl border transition-all ${item.wholesalePriceApplied ? 'border-primary/30 bg-primary/5' : 'border-gray-100'}`}>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold text-secondary text-sm sm:text-base truncate">{t(item.name.ar, item.name.fr)}</h4>
                      {item.wholesalePriceApplied && (
                        <span className="flex-shrink-0 text-[8px] sm:text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded-full uppercase tracking-widest">{t('جملة', 'GROS')}</span>
                      )}
                    </div>
                    {item.selectedWeight && (
                      <p className="text-xs text-gray-400 mt-1">{t('الوزن', 'Poids')}: {item.selectedWeight}</p>
                    )}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl p-1">
                        <button onClick={() => updateQuantity(item.cartId, -1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary">-</button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.cartId, 1)} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary">+</button>
                      </div>
                      <div className="text-end">
                         <span className="font-bold text-secondary text-sm sm:text-base block">{item.total} DH</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.cartId)} className="text-gray-200 hover:text-red-400 transition-colors self-start">
                    <span className="material-symbols-outlined text-xl">delete</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t bg-[#fafaf9] space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('الإجمالي النهائي', 'Total à payer')}</span>
              <span className="text-2xl font-black text-secondary">{total} DH</span>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full py-5 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-green-500/20"
            >
              <span className="material-symbols-outlined">send</span>
              <span>{t('إرسال الطلب عبر واتساب', 'Commander via WhatsApp')}</span>
            </button>
            <p className="text-[10px] text-center text-gray-400 px-4">
              {t('سيتم توجيهك مباشرة إلى واتساب لإتمام الطلب مع فريق نينـا بزار.', 'Vous serez redirigé vers WhatsApp pour finaliser avec NINA BAZAR.')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
