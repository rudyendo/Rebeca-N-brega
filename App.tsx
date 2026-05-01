
import React, { useState, useMemo, useEffect } from 'react';
import { ShoppingBag, Search, X, ShieldAlert, Award, Microscope, ChevronLeft, LayoutGrid, Settings, LogOut } from 'lucide-react';
import { Category, Product, CartItem, Review, ProductLine } from './types';
import { PRODUCTS_DATA, CATEGORIES, BRANDS, LINES, VENDOR_NAME, VENDOR_SUBTITLE } from './constants';
import ProductCard from './components/ProductCard';
import CategoryCard from './components/CategoryCard';
import Cart from './components/Cart';
import GeminiAssistant from './components/GeminiAssistant';
import ReviewSection from './components/ReviewSection';
import Auth from './components/Auth';
import AdminPanel from './components/AdminPanel';
import { 
  db, 
  auth, 
  onAuthStateChanged, 
  collection, 
  getDocs, 
  setDoc, 
  doc, 
  deleteDoc, 
  addDoc, 
  serverTimestamp,
  OperationType,
  handleFirestoreError,
  query,
  onSnapshot
} from './services/firebase';

type ViewMode = 'lines' | 'categories' | 'products';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('lines');
  const [activeLine, setActiveLine] = useState<ProductLine | 'Todas'>('Todas');
  const [activeCategory, setActiveCategory] = useState<Category | 'Todas'>('Todas');
  const [selectedBrand, setSelectedBrand] = useState<string>('Todas');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const [products, setProducts] = useState<Product[]>([]);
  const [lines, setLines] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isFirebaseSyncing, setIsFirebaseSyncing] = useState(true);
  const isInitialLoad = React.useRef(true);
  const isSeeding = React.useRef(false);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    const productsRef = collection(db, 'products');
    const unsubscribeProducts = onSnapshot(productsRef, (snapshot) => {
      const productsList: Product[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data() as Product;
        productsList.push({ id: doc.id, ...data } as Product);
      });
      
      if (productsList.length > 0) {
        setProducts(productsList);
        setIsFirebaseSyncing(false);
        isInitialLoad.current = false;
      } else if (isInitialLoad.current && !isSeeding.current) {
        // Se estiver vazio, usa os dados constantes como fallback visual
        setProducts(PRODUCTS_DATA);
        setIsFirebaseSyncing(false);
        // Tenta migrar se o usuário for admin
        if (currentUser?.email === 'rudyendo@gmail.com' || currentUser?.email === 'rebecalorena73@gmail.com') {
          seedInitialData();
        }
      } else {
        setProducts(PRODUCTS_DATA);
        setIsFirebaseSyncing(false);
      }
    });

    const linesRef = collection(db, 'lines');
    const unsubscribeLines = onSnapshot(linesRef, (snapshot) => {
      const linesList: any[] = [];
      snapshot.forEach((doc) => {
        linesList.push({ id: doc.id, ...doc.data() });
      });
      setLines(linesList);
      if (linesList.length === 0 && isInitialLoad.current && !isSeeding.current) {
        if (currentUser?.email === 'rudyendo@gmail.com' || currentUser?.email === 'rebecalorena73@gmail.com') {
          seedLinesAndCategories();
        }
      }
    });

    const categoriesRef = collection(db, 'categories');
    const unsubscribeCategories = onSnapshot(categoriesRef, (snapshot) => {
      const categoriesList: any[] = [];
      snapshot.forEach((doc) => {
        categoriesList.push({ id: doc.id, ...doc.data() });
      });
      setCategories(categoriesList);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeProducts();
      unsubscribeLines();
      unsubscribeCategories();
    };
  }, []);

  const seedLinesAndCategories = async () => {
    try {
      for (const line of LINES) {
        await setDoc(doc(db, 'lines', line.toLowerCase().replace(/\s+/g, '-')), { 
          name: line, 
          isVisible: true,
          imageUrl: line === 'PROFISSIONAL' 
            ? "https://mirracosmeticos.com/wp-content/uploads/2025/02/pro-1.webp" 
            : "https://mirracosmeticos.com/wp-content/uploads/2025/02/Elements-_ProteinaLeite-copy-Photoroom.webp"
        });
      }
      
      // Categorias solicitadas para a linha Profissional
      const profCategories = [
        'Acidificante', 'Biorestore', 'Colorações', 'Cronograma Capilar', 
        'Elements', 'Finalizadores', 'Finalizadores e Tratamentos', 
        'Hombre', 'Lavatório', 'Manutenção', 'Nutrição', 'Perfect Blond', 
        'RESTAURAÇÃO E NUTRIÇÃO', 'Transformação', 'Tratamentos'
      ];

      for (const catName of profCategories) {
        const id = catName.toLowerCase().replace(/\s+/g, '-');
        await setDoc(doc(db, 'categories', id), { 
          name: catName, 
          line: 'PROFISSIONAL',
          isVisible: true 
        });
      }
    } catch (e) {
      console.error('Error seeding lines/categories:', e);
    }
  };

  const seedInitialData = async () => {
    if (isSeeding.current) return;
    isSeeding.current = true;
    try {
      console.log('Migrando dados locais para o Firestore...');
      
      // Recupera produtos do LocalStorage para não perder dados anteriores
      const saved = localStorage.getItem('products_db');
      const localProducts: Product[] = saved ? JSON.parse(saved) : [];
      
      // Combina dados locais com os dados constantes, priorizando os locais por ID
      const productsToSeed = [...localProducts];
      PRODUCTS_DATA.forEach(p => {
        if (!productsToSeed.find(lp => lp.id === p.id)) {
          productsToSeed.push(p);
        }
      });

      for (const product of productsToSeed) {
        const { id, reviews, ...data } = product; 
        
        // Salva o produto
        await setDoc(doc(db, 'products', id), { 
          ...data, 
          isVisible: data.isVisible !== undefined ? data.isVisible : true 
        });

        // Migra avaliações legadas se existirem no objeto do produto
        if (reviews && Array.isArray(reviews) && reviews.length > 0) {
          console.log(`Migrando ${reviews.length} avaliações para o produto ${id}`);
          for (const review of reviews) {
            const reviewId = review.id || Math.random().toString(36).substr(2, 9);
            await setDoc(doc(db, `products/${id}/reviews`, reviewId), {
              user: review.user,
              rating: review.rating,
              comment: review.comment,
              date: review.date || new Date().toISOString()
            });
          }
        }
      }
      
      // Limpa o storage local após migração bem-sucedida
      localStorage.removeItem('products_db');
      console.log('Migração concluída com sucesso.');
      
    } catch (error) {
      console.error('Erro ao migrar dados:', error);
    } finally {
      setIsFirebaseSyncing(false);
      isSeeding.current = false;
      isInitialLoad.current = false;
    }
  };

  // Filtro de produtos para o catálogo público (Respeita isVisible e filtros de Admin)
  const availableLines = useMemo(() => {
    const activeLineNames = lines.filter(l => l.isVisible !== false).map(l => l.name);
    const sorted = activeLineNames.length > 0 ? activeLineNames : [...LINES];
    return sorted.sort((a, b) => a.localeCompare(b));
  }, [lines]);

  const availableCategories = useMemo(() => {
    // Se não houver nada no Firestore ainda, usa as constantes
    if (categories.length === 0) return [...CATEGORIES].sort((a, b) => a.localeCompare(b));

    return categories
      .filter(c => {
        const isVisible = c.isVisible !== false;
        const matchesLine = activeLine === 'Todas' || c.line === activeLine || !c.line;
        return isVisible && matchesLine;
      })
      .map(c => c.name)
      .sort((a, b) => a.localeCompare(b));
  }, [categories, activeLine]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const isPubliclyVisible = product.isVisible !== false; 
      const matchesLine = activeLine === 'Todas' || product.line === activeLine;
      const matchesCategory = activeCategory === 'Todas' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrand === 'Todas' || product.brand === selectedBrand;
      
      // Também verifica se a linha e categoria dele estão visíveis
      const lineVisible = lines.find(l => l.name === product.line)?.isVisible !== false;
      const catVisible = categories.find(c => c.name === product.category)?.isVisible !== false;

      return isPubliclyVisible && matchesLine && matchesCategory && matchesSearch && matchesBrand && lineVisible && catVisible;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [activeLine, activeCategory, searchQuery, selectedBrand, products, lines, categories]);

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

  const addReviewToProduct = async (productId: string, rating: number, comment: string) => {
    const path = `products/${productId}/reviews`;
    try {
      await addDoc(collection(db, path), {
        user: 'Profissional Certificado',
        rating,
        comment,
        date: new Date().toISOString()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  // Funções Administrativas
  const saveProduct = async (product: Product) => {
    const path = `products/${product.id}`;
    try {
      const { id, reviews, ...data } = product; // Removemos reviews daqui pois agora são subcoleção
      await setDoc(doc(db, 'products', id), data);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const deleteProduct = async (id: string) => {
    const path = `products/${id}`;
    try {
      await deleteDoc(doc(db, 'products', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  // Funções Administrativas de Linhas e Categorias
  const saveLine = async (line: any) => {
    const path = `lines/${line.id}`;
    try {
      await setDoc(doc(db, 'lines', line.id), { 
        name: line.name, 
        isVisible: line.isVisible,
        imageUrl: line.imageUrl || ''
      });
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, path);
    }
  };

  const deleteLine = async (id: string) => {
    const path = `lines/${id}`;
    try {
      await deleteDoc(doc(db, 'lines', id));
    } catch (e) {
      handleFirestoreError(e, OperationType.DELETE, path);
    }
  };

  const saveCategory = async (cat: any) => {
    const path = `categories/${cat.id}`;
    try {
      await setDoc(doc(db, 'categories', cat.id), { 
        name: cat.name, 
        isVisible: cat.isVisible,
        imageUrl: cat.imageUrl || '',
        line: cat.line || ''
      });
    } catch (e) {
      handleFirestoreError(e, OperationType.WRITE, path);
    }
  };

  const deleteCategory = async (id: string) => {
    const path = `categories/${id}`;
    try {
      await deleteDoc(doc(db, 'categories', id));
    } catch (e) {
      handleFirestoreError(e, OperationType.DELETE, path);
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
            onClick={() => { setViewMode('lines'); setActiveLine('Todas'); setActiveCategory('Todas'); }}
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



      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-6 py-10 min-h-[400px]">
        {isFirebaseSyncing && products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 animate-pulse">
            <div className="w-12 h-12 border-4 border-[#C5A059] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest">Sincronizando Portfólio Profissional...</p>
          </div>
        ) : viewMode === 'lines' ? (
          /* VISÃO DE LINHAS */
          <div className="space-y-12 animate-in fade-in duration-700">
            <div className="flex items-center gap-4">
              <div className="bg-[#2D2D2D] text-white p-2 rounded-xl">
                <LayoutGrid size={18} />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] font-serif uppercase tracking-widest">Escolha a Linha</h3>
              <div className="h-[1px] flex-grow bg-orange-100"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {availableLines.map(line => {
                const lineData = lines.find(l => l.name === line);
                const lineProducts = products.filter(p => p.line === line && p.isVisible !== false);
                const representativeProduct = lineProducts[0] || PRODUCTS_DATA.find(p => p.line === line) || PRODUCTS_DATA[0];
                
                const displayImage = lineData?.imageUrl || (line === 'PROFISSIONAL' 
                  ? "https://mirracosmeticos.com/wp-content/uploads/2025/02/pro-1.webp" 
                  : "https://mirracosmeticos.com/wp-content/uploads/2025/02/Elements-_ProteinaLeite-copy-Photoroom.webp");

                return (
                  <div 
                    key={line}
                    onClick={() => {
                      setActiveLine(line);
                      setViewMode('categories');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group relative h-80 rounded-[40px] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 active:scale-95"
                  >
                    <img 
                      src={displayImage} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={line}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
                      <h4 className="text-3xl font-black text-white font-serif uppercase tracking-widest mb-2">{line}</h4>
                      <p className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.2em]">Ver Categorias →</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : viewMode === 'categories' ? (
          /* VISÃO DE CATEGORIAS DA LINHA SELECIONADA */
          <div className="space-y-12 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setViewMode('lines')}
                  className="p-3 bg-white border border-orange-100 rounded-full hover:bg-orange-50 text-[#C5A059] transition-all shadow-sm"
                >
                  <ChevronLeft size={20} />
                </button>
                <div>
                  <h3 className="text-3xl font-bold text-[#2D2D2D] font-serif uppercase tracking-widest">{activeLine}</h3>
                  <p className="text-[10px] font-black text-[#D8B4A6] uppercase tracking-[0.2em] mt-1">
                    Selecione uma categoria técnica
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {availableCategories.map(cat => {
                const catData = categories.find(c => c.name === cat);
                const productsInCat = products.filter(p => p.line === activeLine && p.category === cat && p.isVisible !== false);
                const representativeProduct = productsInCat[0] || PRODUCTS_DATA.find(p => p.category === cat) || PRODUCTS_DATA[0];
                
                return (
                  <CategoryCard 
                    key={cat}
                    category={cat}
                    representativeProduct={representativeProduct}
                    productCount={productsInCat.length}
                    imageUrl={catData?.imageUrl}
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
                  onClick={() => { setViewMode('categories'); }}
                  className="p-3 bg-white border border-orange-100 rounded-full hover:bg-orange-50 text-[#C5A059] transition-all shadow-sm"
                >
                  <ChevronLeft size={20} />
                </button>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest">{activeLine}</span>
                    <span className="text-gray-300">/</span>
                    <h3 className="text-3xl font-bold text-[#2D2D2D] font-serif">{activeCategory}</h3>
                  </div>
                  <p className="text-[10px] font-black text-[#D8B4A6] uppercase tracking-[0.2em]">
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
          lines={lines.length > 0 ? lines : LINES.map(l => ({ id: l.toLowerCase(), name: l, isVisible: true }))}
          categories={categories.length > 0 ? categories : CATEGORIES.map(c => ({ id: c.toLowerCase(), name: c, isVisible: true }))}
          onSave={saveProduct} 
          onDelete={deleteProduct} 
          onSaveLine={saveLine}
          onDeleteLine={deleteLine}
          onSaveCategory={saveCategory}
          onDeleteCategory={deleteCategory}
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

              {/* Cartela de Cores (Se disponível) */}
              {selectedProduct.colorChartUrl && (
                <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <Award size={18} className="text-[#C5A059]" />
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#2D2D2D]">Cartela de Cores</span>
                  </div>
                  <div className="relative group rounded-[32px] overflow-hidden border border-orange-100 shadow-sm">
                    <img 
                      src={selectedProduct.colorChartUrl} 
                      alt="Cartela de Cores" 
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <a 
                      href={selectedProduct.colorChartUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest text-[#2D2D2D] border border-orange-50 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Ampliar Imagem
                    </a>
                  </div>
                </div>
              )}
              
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
                productId={selectedProduct.id} 
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
                  <span className="text-[9px] font-black text-[#C5A059] uppercase tracking-widest">
                    Olá, {currentUser.displayName || currentUser.email?.split('@')[0] || 'Admin'}
                  </span>
                  <button 
                    onClick={() => { auth.signOut(); setCurrentUser(null); setShowAdmin(false); }}
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
