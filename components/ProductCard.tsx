
import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag, BookOpen, Info, Star, ShieldCheck } from 'lucide-react';
import { FALLBACK_IMAGE } from '../constants';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  const [imgSrc, setImgSrc] = useState(product.imageUrl);

  const averageRating = product.reviews.length > 0 
    ? (product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length).toFixed(1)
    : null;

  return (
    <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-orange-50/50 group">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img 
          src={imgSrc} 
          alt={product.name} 
          onError={() => setImgSrc(FALLBACK_IMAGE)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-5 left-5 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[9px] font-black text-[#2D2D2D] uppercase tracking-widest shadow-sm">
          {product.brand}
        </div>
        {averageRating && (
          <div className="absolute top-5 right-5 bg-[#C5A059] px-2.5 py-1 rounded-full text-[10px] font-black text-white flex items-center gap-1 shadow-lg">
            <Star size={10} fill="currentColor" />
            {averageRating}
          </div>
        )}
        <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md py-2 px-3 rounded-xl flex items-center justify-center gap-2 border border-white/20">
          <ShieldCheck size={12} className="text-[#E2C285]" />
          <span className="text-[9px] font-bold text-white uppercase tracking-[0.1em]">VENDA EXCLUSIVA PARA PROFISSIONAIS</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[#2D2D2D] font-bold text-xl leading-tight mb-2 font-serif group-hover:text-[#C5A059] transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-400 text-xs mb-6 line-clamp-2 uppercase tracking-wide font-medium">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Valor Profissional</span>
              <span className="text-2xl font-black text-[#2D2D2D]">R$ {product.price.toFixed(2).replace('.', ',')}</span>
            </div>
            <button 
              onClick={() => onViewDetails(product)}
              className="p-3 text-[#D8B4A6] hover:text-[#C5A059] transition-colors"
              title="Mais informações"
            >
              <Info size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
             <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-gold-gradient text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-orange-100"
            >
              <ShoppingBag size={14} />
              Adicionar ao Pedido
            </button>
            <a 
              href={product.ebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 text-[9px] font-black text-[#D8B4A6] uppercase tracking-widest hover:text-[#C5A059] transition-colors"
            >
              <BookOpen size={12} />
              Protocolo de Aplicação
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
