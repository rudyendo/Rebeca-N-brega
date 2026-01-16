
import React from 'react';
import { Category, Product } from '../types';
import { LayoutGrid, ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  representativeProduct: Product;
  productCount: number;
  onSelect: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, representativeProduct, productCount, onSelect }) => {
  return (
    <button 
      onClick={() => onSelect(category)}
      className="group relative h-80 w-full rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-white border border-orange-50/50"
    >
      {/* Imagem de Fundo */}
      <img 
        src={representativeProduct.imageUrl} 
        alt={category} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
      />
      
      {/* Overlay Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/10 transition-colors duration-500" />

      {/* Conteúdo */}
      <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start text-white">
        <div className="flex items-center gap-2 mb-2">
            <div className="bg-[#C5A059] p-1.5 rounded-lg">
                <LayoutGrid size={12} className="text-white" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
                {productCount} {productCount === 1 ? 'Produto' : 'Produtos'}
            </span>
        </div>
        
        <h3 className="text-2xl font-bold font-serif mb-4 text-left group-hover:text-[#E2C285] transition-colors">
          {category}
        </h3>

        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <span>Ver Coleção</span>
          <ArrowRight size={14} className="text-[#C5A059]" />
        </div>
      </div>
    </button>
  );
};

export default CategoryCard;
