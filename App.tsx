
import React, { useState, useMemo } from 'react';
import { ShoppingBag, Search, Star, X, Filter, SlidersHorizontal, Sparkles, ShieldAlert, Award, Microscope } from 'lucide-react';
import { Category, Product, CartItem, Review } from './types';
import { PRODUCTS_DATA, CATEGORIES, BRANDS, VENDOR_NAME, VENDOR_SUBTITLE } from './constants';
import ProductCard from './components/ProductCard';
import CategoryBar from './components/CategoryBar';
import Cart from './components/Cart';
import GeminiAssistant from './components/GeminiAssistant';
import ReviewSection from './components/ReviewSection';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');
  const [selectedBrand, setSelectedBrand] = useState<string>('Todas');
  const [priceRange, setPriceRange] = useState<string>('Todos');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>(PRODUCTS_DATA);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrand === 'Todas' || product.brand === selectedBrand;
      
      let matchesPrice = true;
      if (priceRange === 'Até R$ 100') matchesPrice = product.price <= 100;
      else if (priceRange === 'R$ 100 - R$ 200') matchesPrice = product.price > 100 && product.price <= 200;
      else if (priceRange === 'Acima de R$ 200') matchesPrice = product.price > 200;

      return matchesCategory && matchesSearch && matchesBrand && matchesPrice;
    });
  }, [activeCategory, searchQuery, selectedBrand, priceRange, products]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const addReviewToProduct = (productId: string, rating: number, comment: string) => {
    const newReview: Review = {
      id: Math.random().toString(36).substr(2, 9),
      user: 'Profissional Certificado',
      rating,
      comment,
      date: new Date().toISOString().split('T')[0]
    };
    setProducts(prev => prev.map(p => 
      p.id === productId ? { ...p, reviews: [newReview, ...p.reviews] } : p
    ));
    if (selectedProduct?.id === productId) {
      setSelectedProduct(prev => prev ? { ...prev, reviews: [newReview, ...prev.reviews] } : null);
    }
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen pb-24">
      {/* Professional Alert Top Bar */}
      <div className="bg-[#2D2D2D] py-2 px-4 flex items-center justify-center gap-2 sticky top-0 z-50">
        <ShieldAlert size={12} className="text-[#C5A059]" />
        <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em] text-center">
          VENDA EXCLUSIVA PARA PROFISSIONAIS DA BELEZA E SALÕES
        </p>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-black text-[#2D2D2D] tracking-tighter uppercase font-serif">
              Rebeca<span className="text-[#C5A059]">Nóbrega</span>
            </h1>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.1em] text-[#C5A059] font-black">
              {VENDOR_SUBTITLE}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Pesquisar portfólio..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border border-orange-50 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#C5A059] w-48 text-xs"
              />
            </div>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#2D2D2D] hover:text-[#C5A059] transition-colors"
            >
              <ShoppingBag size={24} />
              {totalItemsCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#C5A059] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Professional */}
      <section className="px-4 py-6 max-w-7xl mx-auto">
        <div className="relative h-64 md:h-[450px] rounded-[40px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Beauty Salon Professional"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center px-10 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Award className="text-[#C5A059]" size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Selo de Qualidade Profissional</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 font-serif leading-tight max-w-lg">Ciência e Estética em Alta Performance.</h2>
            <p className="text-sm md:text-base opacity-90 mb-8 max-w-md">Para profissionais que não aceitam menos que a excelência mundial em seus salões.</p>
            <div className="flex gap-4">
                <button className="bg-gold-gradient text-white px-10 py-4 rounded-full text-[10px] font-black w-max shadow-lg active:scale-95 transition-transform uppercase tracking-[0.2em]">
                Linha Técnica Completa
                </button>
                <button className="bg-white/10 backdrop-blur text-white px-10 py-4 rounded-full text-[10px] font-black w-max shadow-lg active:scale-95 transition-transform uppercase tracking-[0.2em] border border-white/20">
                Ver Protocolos
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex gap-3 overflow-x-auto no-scrollbar w-full">
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-orange-50 shadow-sm shrink-0">
              <Microscope size={14} className="text-[#C5A059]" />
              <select 
                value={selectedBrand} 
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="bg-transparent text-[10px] font-black focus:outline-none text-[#2D2D2D] uppercase tracking-widest"
              >
                <option value="Todas">Laboratórios</option>
                {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-orange-50 shadow-sm shrink-0">
              <Filter size={14} className="text-[#C5A059]" />
              <select 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="bg-transparent text-[10px] font-black focus:outline-none text-[#2D2D2D] uppercase tracking-widest"
              >
                <option value="Todos">Faixa de Custo</option>
                <option value="Até R$ 100">Até R$ 100</option>
                <option value="R$ 100 - R$ 200">R$ 100 - 200</option>
                <option value="Acima de R$ 200">Acima de 200</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <CategoryBar activeCategory={activeCategory} onSelectCategory={setActiveCategory} />

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[1px] flex-grow bg-orange-100"></div>
          <h3 className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.4em]">
            Curadoria Especial {VENDOR_NAME}
          </h3>
          <div className="h-[1px] flex-grow bg-orange-100"></div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-orange-200">
            <Search className="mx-auto text-orange-100 mb-4" size={40} />
            <p className="text-[#2D2D2D] font-medium font-serif italic text-lg">Insumo não localizado no inventário técnico.</p>
            <p className="text-[10px] text-[#D8B4A6] mt-2 font-black uppercase tracking-widest">Contate a Consultora via WhatsApp para encomendas</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
                onViewDetails={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2D2D]/90 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-white w-full max-w-4xl max-h-[95vh] rounded-[48px] overflow-hidden shadow-2xl animate-[pop_0.4s_cubic-bezier(0.16,1,0.3,1)] flex flex-col">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-8 right-8 bg-white p-3 rounded-full shadow-lg z-10 hover:rotate-90 transition-transform"
            >
              <X size={20} className="text-[#2D2D2D]" />
            </button>
            
            <div className="overflow-y-auto flex-grow no-scrollbar">
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative h-[400px] md:h-full">
                    <img src={selectedProduct.imageUrl} className="w-full h-full object-cover" />
                    <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur text-white px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest border border-white/20">
                        Protocolo de Aplicação Restrito
                    </div>
                </div>
                <div className="p-12 overflow-y-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em] bg-orange-50 px-4 py-1.5 rounded-full">
                      {selectedProduct.brand}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-[#2D2D2D] font-serif leading-tight">{selectedProduct.name}</h2>
                  
                  <div className="bg-amber-50 border border-amber-100 p-6 rounded-3xl mb-8">
                    <div className="flex items-center gap-2 mb-2 text-amber-700">
                      <ShieldAlert size={16} />
                      <span className="text-[11px] font-black uppercase tracking-[0.2em]">AVISO DE SEGURANÇA TÉCNICA</span>
                    </div>
                    <p className="text-[12px] text-amber-900 leading-relaxed font-medium italic">
                      Este insumo apresenta formulação de alta performance e complexidade. A VENDA É EXCLUSIVA PARA PROFISSIONAIS capacitados que garantam a correta manipulação técnica.
                    </p>
                  </div>

                  <p className="text-gray-500 mb-10 text-base leading-relaxed font-medium">
                    {selectedProduct.details}
                  </p>
                  
                  <div className="flex flex-col gap-8 mb-10">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#D8B4A6] mb-2">Cotação Exclusiva para Salão</span>
                      <span className="text-5xl font-black text-[#2D2D2D] tracking-tighter">R$ {selectedProduct.price.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <button 
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="bg-gold-gradient text-white w-full py-5 rounded-3xl font-black text-xs uppercase tracking-[0.4em] shadow-2xl active:scale-95 transition-transform"
                    >
                      Reservar Unidades para Salão
                    </button>
                  </div>

                  <ReviewSection 
                    reviews={selectedProduct.reviews} 
                    onAddReview={(rating, comment) => addReviewToProduct(selectedProduct.id, rating, comment)} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Mobile */}
      {totalItemsCount > 0 && (
        <button 
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[50] bg-[#2D2D2D] text-white px-12 py-6 rounded-full shadow-2xl flex items-center gap-6 active:scale-95 transition-all md:hidden animate-bounce-short border border-[#C5A059]/30"
        >
          <ShoppingBag size={22} className="text-[#C5A059]" />
          <span className="font-black text-[11px] uppercase tracking-[0.3em]">Cotação Profissional</span>
          <span className="bg-[#C5A059] px-3 py-1 rounded-lg text-[10px] font-black">
            {totalItemsCount}
          </span>
        </button>
      )}

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      <GeminiAssistant />

      <footer className="mt-24 py-20 border-t border-orange-50 text-center bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8 flex justify-center gap-1">
                <Star size={18} className="text-[#C5A059]" fill="currentColor" />
                <Star size={18} className="text-[#D8B4A6]" fill="currentColor" />
                <Star size={18} className="text-[#C5A059]" fill="currentColor" />
            </div>
            <p className="text-[#2D2D2D] text-2xl font-serif italic mb-4">"Ser membro da Mirra é muito mais que uma parceria; é sobre fazer parte da família."</p>
            <p className="text-gray-400 text-sm max-w-lg mx-auto mb-12">Excelência em cosméticos para profissionais desde 1999.</p>
            <div className="text-[#D8B4A6] text-[10px] font-black uppercase tracking-[0.5em] border-t border-orange-50 pt-10">
               Catálogo Técnico Autorizado • {VENDOR_NAME} • {VENDOR_SUBTITLE}
            </div>
        </div>
      </footer>

      <style>{`
        @keyframes pop {
          from { transform: scale(0.9) translateY(40px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes bounce-short {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }
        .animate-bounce-short {
          animation: bounce-short 4s infinite cubic-bezier(0.45, 0, 0.55, 1);
        }
      `}</style>
    </div>
  );
};

export default App;
