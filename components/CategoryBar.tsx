
import React, { useState, useEffect, useRef } from 'react';
import { Category } from '../types';
import { CATEGORIES } from '../constants';
import { ChevronDown, Filter, LayoutGrid } from 'lucide-react';

interface CategoryBarProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ activeCategory, onSelectCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Ativa a minimização após passar da área inicial do menu (aprox. 300px)
      setIsScrolled(window.scrollY > 300);
      if (window.scrollY > 300) setIsDropdownOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      ref={menuRef}
      className={`sticky top-20 z-30 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'py-2 flex justify-center' 
          : 'bg-[#FDFBF9]/95 backdrop-blur-md py-6 border-b border-orange-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        {!isScrolled ? (
          /* MENU COMPLETO (VISÍVEL NO TOPO) */
          <div className="flex flex-wrap justify-center gap-3 animate-in fade-in duration-500">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#2D2D2D] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-400 border border-orange-50 hover:border-[#C5A059] hover:text-[#C5A059] shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        ) : (
          /* BOTÃO ÚNICO MINIMIZADO (VISÍVEL AO ROLAR) */
          <div className="flex justify-center relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-[#2D2D2D] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 active:scale-95 transition-all border border-[#C5A059]/30 hover:bg-[#3D3D3D]"
            >
              <Filter size={14} className="text-[#C5A059]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                {activeCategory === 'Todos' ? 'Categorias' : activeCategory}
              </span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* DROPDOWN DO MENU MINIMIZADO */}
            {isDropdownOpen && (
              <div className="absolute top-full mt-3 w-72 bg-white/95 backdrop-blur-xl border border-orange-100 rounded-[32px] shadow-2xl p-4 grid grid-cols-1 gap-1 max-h-[60vh] overflow-y-auto no-scrollbar animate-in slide-in-from-top-2 duration-300">
                <div className="px-4 py-2 border-b border-orange-50 mb-2">
                   <p className="text-[8px] font-black text-[#C5A059] uppercase tracking-widest">Filtrar Portfólio</p>
                </div>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      onSelectCategory(cat);
                      setIsDropdownOpen(false);
                      window.scrollTo({ top: 350, behavior: 'smooth' });
                    }}
                    className={`text-left px-5 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                      activeCategory === cat
                        ? 'bg-orange-50 text-[#C5A059]'
                        : 'text-[#2D2D2D] hover:bg-gray-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryBar;
