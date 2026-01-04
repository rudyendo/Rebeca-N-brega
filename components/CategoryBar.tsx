
import React from 'react';
import { Category } from '../types';
import { CATEGORIES } from '../constants';

interface CategoryBarProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="sticky top-20 z-30 bg-[#FDFBF9]/90 backdrop-blur-md py-6 border-b border-orange-50 overflow-x-auto no-scrollbar">
      <div className="flex gap-4 px-4 min-w-max max-w-7xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
              activeCategory === cat
                ? 'bg-[#2D2D2D] text-white shadow-xl scale-105'
                : 'bg-white text-gray-400 border border-orange-50 hover:border-[#C5A059] hover:text-[#C5A059]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
