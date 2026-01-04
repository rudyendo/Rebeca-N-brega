
import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, ShieldAlert } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleFinalizeOrder = () => {
    if (items.length === 0) return;
    const message = `*SOLICITAÇÃO PROFISSIONAL - Mirra & Maison*\n\nOlá! Sou profissional da beleza e gostaria de reservar estes itens:\n\n` +
      items.map(item => `• *${item.quantity}x ${item.name}* [${item.brand}]`).join('\n') +
      `\n\n*Total estimado: R$ ${total.toFixed(2)}*\n\nDeclaro estar ciente de que a VENDA É EXCLUSIVA PARA PROFISSIONAIS capacitados.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-[#2D2D2D]/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-[#FDFBF9] h-full shadow-2xl flex flex-col animate-[slideIn_0.4s_cubic-bezier(0.16,1,0.3,1)]">
        <div className="p-8 border-b border-orange-50 flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-[#2D2D2D] font-serif">Sua Reserva</h2>
            <span className="text-[9px] uppercase tracking-widest text-[#D8B4A6] font-black">Área Técnica</span>
          </div>
          <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform">
            <X size={20} className="text-[#2D2D2D]" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-8 no-scrollbar">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="text-[#D8B4A6]" size={32} />
              </div>
              <p className="text-[#2D2D2D] font-serif italic text-lg">Seu carrinho está vazio.</p>
              <button onClick={onClose} className="mt-4 text-[#C5A059] text-[10px] font-black uppercase tracking-widest">
                Explorar Coleção
              </button>
            </div>
          ) : (
            <>
              <div className="bg-amber-50 p-4 rounded-2xl flex gap-3 border border-amber-100">
                <ShieldAlert className="text-amber-500 shrink-0" size={18} />
                <p className="text-[10px] text-amber-800 leading-relaxed font-medium">
                  <strong>AVISO:</strong> VENDA EXCLUSIVA PARA PROFISSIONAIS. A vendedora poderá solicitar comprovação de atuação na área técnica.
                </p>
              </div>
              {items.map((item) => (
                <div key={item.id} className="flex gap-6 group">
                  <div className="relative shrink-0">
                    <img src={item.imageUrl} alt={item.name} className="w-20 h-24 object-cover rounded-2xl shadow-sm" />
                    <span className="absolute -top-2 -left-2 bg-[#2D2D2D] text-white text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">
                      {item.brand.split(' ')[0]}
                    </span>
                  </div>
                  <div className="flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-[#2D2D2D] leading-tight text-sm font-serif">{item.name}</h4>
                      <button onClick={() => onRemoveItem(item.id)} className="text-gray-200 hover:text-red-400 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-[10px] text-[#D8B4A6] font-black uppercase tracking-widest mb-4">R$ {item.price.toFixed(2)}</p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center bg-white border border-orange-50 rounded-full px-2 py-1">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1 text-[#D8B4A6]"><Minus size={12} /></button>
                        <span className="w-8 text-center font-black text-xs">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1 text-[#C5A059]"><Plus size={12} /></button>
                      </div>
                      <span className="font-black text-xs text-[#2D2D2D]">R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-orange-50 bg-white space-y-6">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-black text-[#D8B4A6] uppercase tracking-[0.2em]">Total Geral</span>
              <span className="font-black text-3xl text-[#2D2D2D] tracking-tighter">R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>
            <button 
              onClick={handleFinalizeOrder}
              className="w-full bg-gold-gradient text-white py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl shadow-orange-200 active:scale-[0.98] transition-all"
            >
              <Send size={16} />
              Finalizar Pedido Profissional
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Cart;
