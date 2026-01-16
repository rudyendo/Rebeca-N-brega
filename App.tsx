
import React, { useState, useMemo, useEffect } from 'react';
import { ShoppingBag, Search, X, ShieldAlert, Award, Microscope, ChevronLeft, LayoutGrid, Settings, LogOut } from 'lucide-react';
import { Category, Product, CartItem, Review } from './types';
import { PRODUCTS_DATA, CATEGORIES, BRANDS, VENDOR_NAME, VENDOR_SUBTITLE } from './constants';
import ProductCard from './components/ProductCard';
import CategoryCard from './components/CategoryCard';
import Cart from './components/Cart';
import GeminiAssistant from './components/GeminiAssistant';
import ReviewSection from './components/ReviewSection';
import Auth from './components/Auth';
import AdminPanel from './components/AdminPanel';

type ViewMode = 'categories' | 'products';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('categories');
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');
  const [selectedBrand, setSelectedBrand] = useState<string>('Todas');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Persistência de Dados via LocalStorage
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('products_db');
    return saved ? JSON.parse(saved) : PRODUCTS_DATA;
  });

  const [currentUser, setCurrentUser] = useState<any>(() => {
    const saved = localStorage.getItem('current_session');
    return saved ? JSON.parse(saved) : null;
  });

  const [showAuth, setShowAuth] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    localStorage.setItem('products_db', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('current_session', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('current_session');
    }
  }, [currentUser]);

  // Filtro de produtos para o catálogo público
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrand === 'Todas' || product.brand === selectedBrand;
      return matchesCategory && matchesSearch && matchesBrand;
    });
  }, [activeCategory, searchQuery, selectedBrand, products]);

  const handleSelectCategory = (category: Category) => {
    setActiveCategory(category);
    setViewMode('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  // Funções Administrativas
  const saveProduct = (product: Product) => {
    setProducts(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) return prev.map(p => p.id === product.id ? product : p);
      return [product, ...prev];
    });
  };

  const deleteProduct = (id: string) => {
    if (confirm('Deseja realmente remover este produto do catálogo?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen pb-24 bg-[#FDFBF9]">
      {/* Top Bar Profissional */}
      <div className="bg-[#2D2D2D] py-2 px-4 flex items-center justify-between gap-2 sticky top-0 z-50">
        <div className="flex-1"></div>
        <div className="flex items-center gap-2">
          <ShieldAlert size={12} className="text-[#C5A059]" />
          <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em] text-center">
            VENDA EXCLUSIVA PARA PROFISSIONAIS DA BELEZA E SALÕES
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          {currentUser && (
            <button 
              onClick={() => setShowAdmin(true)}
              className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest hover:text-[#C5A059] transition-colors"
            >
              <Settings size={12} /> Painel Admin
            </button>
          )}
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-orange-50 sticky top-10 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex flex-col cursor-pointer" 
            onClick={() => { setViewMode('categories'); setActiveCategory('Todos'); }}
          >
            <h1 className="text-xl font-black text-[#2D2D2D] tracking-tighter uppercase font-serif">
              Rebeca<span className="text-[#C5A059]">Nóbrega</span>
            </h1>
            <span className="text-[9px] uppercase tracking-[0.1em] text-[#C5A059] font-black">
              {VENDOR_SUBTITLE}
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
              <input 
                type="text" 
                placeholder="Buscar no portfólio..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2.5 rounded-2xl border border-orange-50 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#C5A059] w-56 text-xs font-medium"
              />
            </div>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-gray-50 rounded-2xl text-[#2D2D2D] hover:text-[#C5A059] transition-all"
            >
              <ShoppingBag size={22} />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#2D2D2D] text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {totalItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Dinâmico */}
      {viewMode === 'categories' && (
        <section className="px-6 py-8 max-w-7xl mx-auto">
          <div className="relative h-72 md:h-[500px] rounded-[48px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover"
              alt="Professional Salon"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center px-10 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Award className="text-[#C5A059]" size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Curadoria Premium Mirra</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-bold mb-6 font-serif leading-[1.1] max-w-2xl">Onde a Ciência encontra o Estilo.</h2>
              <p className="text-sm md:text-lg opacity-80 mb-10 max-w-lg font-medium">Explore nosso catálogo técnico segmentado para facilitar sua gestão de pedidos.</p>
              <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                    className="bg-gold-gradient text-white px-10 py-4.5 rounded-full text-[10px] font-black shadow-xl hover:opacity-90 active:scale-95 transition-all uppercase tracking-[0.2em]"
                  >
                    Explorar Categorias
                  </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        
        {viewMode === 'categories' ? (
          /* VISÃO DE CATEGORIAS */
          <div className="space-y-12 animate-in fade-in duration-700">
            <div className="flex items-center gap-4">
              <div className="bg-[#2D2D2D] text-white p-2 rounded-xl">
                <LayoutGrid size={18} />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] font-serif uppercase tracking-widest">Portfólio por Linhas</h3>
              <div className="h-[1px] flex-grow bg-orange-100"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {CATEGORIES.map(cat => {
                const productsInCat = products.filter(p => p.category === cat);
                if (productsInCat.length === 0) return null;
                return (
                  <CategoryCard 
                    key={cat}
                    category={cat}
                    representativeProduct={productsInCat[0]}
                    productCount={productsInCat.length}
                    onSelect={handleSelectCategory}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          /* VISÃO DE PRODUTOS DA CATEGORIA */
          <div className="space-y-10 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setViewMode('categories')}
                  className="p-3 bg-white border border-orange-100 rounded-full hover:bg-orange-50 text-[#C5A059] transition-all shadow-sm"
                >
                  <ChevronLeft size={20} />
                </button>
                <div>
                  <h3 className="text-3xl font-bold text-[#2D2D2D] font-serif">{activeCategory}</h3>
                  <p className="text-[10px] font-black text-[#D8B4A6] uppercase tracking-[0.2em] mt-1">
                    Exibindo {filteredProducts.length} itens localizados
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-orange-50 shadow-sm">
                  <Microscope size={14} className="text-[#C5A059]" />
                  <select 
                    value={selectedBrand} 
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="bg-transparent text-[10px] font-black focus:outline-none text-[#2D2D2D] uppercase tracking-widest outline-none"
                  >
                    <option value="Todas">Todas as Marcas</option>
                    {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart}
                  onViewDetails={(p) => setSelectedProduct(p)}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Modais de Gerenciamento e Auth */}
      {showAuth && (
        <Auth 
          onLogin={(user) => { setCurrentUser(user); setShowAuth(false); setShowAdmin(true); }} 
          onClose={() => setShowAuth(false)} 
        />
      )}

      {showAdmin && currentUser && (
        <AdminPanel 
          products={products} 
          onSave={saveProduct} 
          onDelete={deleteProduct} 
          onClose={() => setShowAdmin(false)} 
        />
      )}

      {/* Modal de Detalhes do Produto */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2D2D]/95 backdrop-blur-xl" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[56px] overflow-hidden shadow-2xl animate-[pop_0.5s_cubic-bezier(0.16,1,0.3,1)] flex flex-col md:flex-row">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-8 right-8 bg-white/20 backdrop-blur p-3 rounded-full shadow-lg z-20 hover:bg-white hover:text-black transition-all"
            >
              <X size={20} />
            </button>
            
            <div className="md:w-1/2 h-80 md:h-auto relative">
                <img src={selectedProduct.imageUrl} className="w-full h-full object-cover" alt={selectedProduct.name} />
                <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/20">
                    <p className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Protocolo Profissional Exclusivo</p>
                </div>
            </div>

            <div className="md:w-1/2 p-12 overflow-y-auto no-scrollbar">
              <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em] bg-orange-50 px-4 py-2 rounded-full mb-6 inline-block">
                {selectedProduct.brand}
              </span>
              <h2 className="text-4xl font-bold mb-8 text-[#2D2D2D] font-serif leading-tight">{selectedProduct.name}</h2>
              
              <div className="bg-amber-50 border border-amber-100 p-8 rounded-[32px] mb-10">
                <div className="flex items-center gap-3 mb-3 text-amber-700">
                  <ShieldAlert size={18} />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">REQUISITO TÉCNICO</span>
                </div>
                <p className="text-[13px] text-amber-900 leading-relaxed font-medium italic opacity-80">
                  Este produto exige aplicação por profissional habilitado. A consultora poderá solicitar o registro profissional para liberação do pedido.
                </p>
              </div>

              <div className="space-y-6 mb-12">
                  <p className="text-gray-500 text-base leading-relaxed font-medium">
                    {selectedProduct.details || selectedProduct.description}
                  </p>
              </div>
              
              <div className="flex flex-col gap-8 mb-12">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-[#D8B4A6] mb-2">Cotação p/ Salão</span>
                  <span className="text-5xl font-black text-[#2D2D2D] tracking-tighter">R$ {selectedProduct.price.toFixed(2).replace('.', ',')}</span>
                </div>
                <button 
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="bg-gold-gradient text-white w-full py-5 rounded-[28px] font-black text-xs uppercase tracking-[0.4em] shadow-2xl active:scale-95 transition-all"
                >
                  Adicionar ao Pedido Profissional
                </button>
              </div>

              <ReviewSection 
                reviews={selectedProduct.reviews} 
                onAddReview={(rating, comment) => addReviewToProduct(selectedProduct.id, rating, comment)} 
              />
            </div>
          </div>
        </div>
      )}

      {/* Carrinho Mobile Flutuante */}
      {totalItemsCount > 0 && !isCartOpen && (
        <button 
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[50] bg-[#2D2D2D] text-white px-10 py-5.5 rounded-full shadow-2xl flex items-center gap-5 active:scale-95 transition-all border border-[#C5A059]/30"
        >
          <ShoppingBag size={20} className="text-[#C5A059]" />
          <span className="font-black text-[10px] uppercase tracking-[0.3em]">Minha Reserva</span>
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

      <footer className="mt-24 py-24 border-t border-orange-50 text-center bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-2xl font-black text-[#2D2D2D] tracking-tighter uppercase font-serif mb-6">
              Rebeca<span className="text-[#C5A059]">Nóbrega</span>
            </h1>
            <p className="text-[#2D2D2D] text-3xl font-serif italic mb-6">"Beleza que transforma, ciência que cura."</p>
            
            <div className="flex flex-col items-center gap-4 mb-16">
              <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">Referência em cosméticos de alta performance para cabeleireiros e salões desde 1999.</p>
              
              {!currentUser ? (
                <button 
                  onClick={() => setShowAuth(true)}
                  className="text-[9px] font-black text-[#D8B4A6] uppercase tracking-[0.4em] hover:text-[#C5A059] transition-colors mt-4"
                >
                  Acesso Restrito Consultoria
                </button>
              ) : (
                <div className="flex items-center gap-6 mt-4">
                  <span className="text-[9px] font-black text-[#C5A059] uppercase tracking-widest">Olá, {currentUser.name}</span>
                  <button 
                    onClick={() => { setCurrentUser(null); setShowAdmin(false); }}
                    className="flex items-center gap-1 text-[9px] font-black text-red-400 uppercase tracking-widest hover:text-red-600 transition-colors"
                  >
                    <LogOut size={10} /> Sair
                  </button>
                </div>
              )}
            </div>

            <div className="text-[#D8B4A6] text-[9px] font-black uppercase tracking-[0.4em] border-t border-orange-50 pt-12 opacity-60">
               Catálogo Técnico Autorizado • {VENDOR_NAME} • {VENDOR_SUBTITLE}
            </div>
        </div>
      </footer>

      <style>{`
        @keyframes pop {
          from { transform: scale(0.9) translateY(60px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;
