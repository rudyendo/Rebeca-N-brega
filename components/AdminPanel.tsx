
import React, { useState } from 'react';
import { Product, Category, ProductLine } from '../types';
import { CATEGORIES, BRANDS, LINES } from '../constants';
import { Plus, Edit2, Trash2, X, Save, Image, Tag, DollarSign, FileText, Eye, EyeOff, LayoutGrid, ChevronLeft, Search } from 'lucide-react';

interface AdminPanelProps {
  products: Product[];
  lines: { id: string; name: string; isVisible: boolean }[];
  categories: { id: string; name: string; isVisible: boolean; line?: string }[];
  onSave: (product: Product) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onSaveLine: (line: any) => Promise<void>;
  onDeleteLine: (id: string) => Promise<void>;
  onSaveCategory: (cat: any) => Promise<void>;
  onDeleteCategory: (id: string) => Promise<void>;
  onClose: () => void;
}

type AdminView = 'menu' | 'products' | 'hierarchy';

const AdminPanel: React.FC<AdminPanelProps> = ({ 
  products, lines, categories, onSave, onDelete, 
  onSaveLine, onDeleteLine, onSaveCategory, onDeleteCategory, onClose 
}) => {
  const [adminView, setAdminView] = useState<AdminView>('menu');
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
  const [editingItem, setEditingItem] = useState<{ type: 'line' | 'category', data: any } | null>(null);
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);

  // Handlers para Produtos
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
  };

  const handleCreateProduct = () => {
    const defaultLine = lines[0]?.name || 'PROFISSIONAL';
    const defaultCategory = categories.find(c => c.line === defaultLine)?.name || '';

    setEditingProduct({
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      brand: BRANDS[0],
      description: '',
      price: 0,
      line: defaultLine as any,
      category: defaultCategory as any,
      imageUrl: '',
      ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
      details: '',
      isVisible: true 
    });
  };

  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      setSaving(true);
      try {
        await onSave(editingProduct as Product);
        setEditingProduct(null);
      } catch (err) {
        console.error(err);
        alert('Erro ao salvar produto.');
      } finally {
        setSaving(false);
      }
    }
  };

  // Handlers para Linhas e Categorias
  const handleEditItem = (type: 'line' | 'category', item: any) => {
    setEditingItem({ type, data: { ...item } });
  };

  const handleCreateItem = (type: 'line' | 'category') => {
    setEditingItem({ 
      type, 
      data: { 
        id: Math.random().toString(36).substr(2, 9), 
        name: '', 
        isVisible: true,
        line: type === 'category' ? (lines[0]?.name || 'PROFISSIONAL') : undefined
      } 
    });
  };

  const handleSubmitItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    setSaving(true);
    try {
      if (editingItem.type === 'line') {
        await onSaveLine(editingItem.data);
      } else {
        await onSaveCategory(editingItem.data);
      }
      setEditingItem(null);
    } catch (err) {
      console.error(err);
      alert('Erro ao salvar item.');
    } finally {
      setSaving(false);
    }
  };

  const sortedLines = [...lines].sort((a, b) => a.name.localeCompare(b.name));
  const sortedCategories = [...categories].sort((a, b) => a.name.localeCompare(b.name));
  const filteredProducts = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="fixed inset-0 z-[110] flex flex-col bg-[#FDFBF9] animate-in fade-in duration-300">
      <header className="bg-white border-b border-orange-50 px-8 h-24 flex items-center justify-between sticky top-0 z-10 shrink-0">
        <div className="flex items-center gap-4">
          {adminView !== 'menu' && (
            <button 
              onClick={() => setAdminView('menu')}
              className="p-3 bg-orange-50 rounded-2xl text-[#C5A059] hover:bg-orange-100 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          <div>
            <h2 className="text-2xl font-bold font-serif text-[#2D2D2D]">Painel Administrativo</h2>
            <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest">
              {adminView === 'menu' ? 'Gestão de Sistema' : 
               adminView === 'products' ? 'Monitoramento de Produtos' : 'Estrutura de Catálogo'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="p-3 bg-red-50 rounded-2xl text-red-400 hover:bg-red-100 transition-all">
            <X size={20} />
          </button>
        </div>
      </header>

      <div className="flex-grow overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto pb-20">
          
          {adminView === 'menu' && (
            /* MENU PRINCIPAL */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 max-w-4xl mx-auto">
              <div 
                onClick={() => setAdminView('hierarchy')}
                className="group bg-white p-12 rounded-[48px] shadow-sm border border-orange-50 hover:shadow-2xl hover:border-[#C5A059]/30 transition-all cursor-pointer text-center space-y-6"
              >
                <div className="w-24 h-24 bg-orange-50 rounded-[32px] flex items-center justify-center mx-auto text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                  <LayoutGrid size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2D2D2D] font-serif uppercase tracking-widest">Linhas e Categorias</h3>
                  <p className="text-sm text-gray-500 font-medium mt-2">Gerenciar a estrutura de navegação do catálogo técnico.</p>
                </div>
                <div className="pt-4">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em]">Acessar Gestão →</span>
                </div>
              </div>

              <div 
                onClick={() => setAdminView('products')}
                className="group bg-white p-12 rounded-[48px] shadow-sm border border-orange-50 hover:shadow-2xl hover:border-[#C5A059]/30 transition-all cursor-pointer text-center space-y-6"
              >
                <div className="w-24 h-24 bg-orange-50 rounded-[32px] flex items-center justify-center mx-auto text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                  <Tag size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2D2D2D] font-serif uppercase tracking-widest">Produtos</h3>
                  <p className="text-sm text-gray-500 font-medium mt-2">Adicionar, editar e controlar visibilidade dos produtos.</p>
                </div>
                <div className="pt-4">
                  <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em]">Acessar Gestão →</span>
                </div>
              </div>
            </div>
          )}

          {adminView === 'products' && (
            /* GESTÃO DE PRODUTOS */
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-orange-50">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Pesquisar produto pelo nome..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs font-medium"
                  />
                </div>
                <button 
                  onClick={handleCreateProduct}
                  className="w-full md:w-auto bg-[#2D2D2D] text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black transition-all shadow-xl"
                >
                  <Plus size={16} /> Novo Produto
                </button>
              </div>

              <div className="bg-white rounded-[40px] shadow-sm border border-orange-50 overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 border-b border-orange-50">
                      <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Produto</th>
                      <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Linha / Categoria</th>
                      <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                      <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Preço</th>
                      <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-50">
                    {filteredProducts.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-8 py-20 text-center text-gray-400 italic text-sm">
                          Nenhum produto localizado.
                        </td>
                      </tr>
                    ) : (
                      filteredProducts.map(p => (
                        <tr key={p.id} className="hover:bg-orange-50/30 transition-colors">
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                              <img src={p.imageUrl} className="w-12 h-14 object-cover rounded-xl bg-gray-50" />
                              <div>
                                <p className="font-bold text-[#2D2D2D] text-sm">{p.name}</p>
                                <p className="text-[10px] text-gray-400 font-bold uppercase">{p.brand}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex flex-col gap-1">
                              <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest">{p.line}</span>
                              <span className="bg-white border border-orange-100 px-3 py-1 rounded-full text-[9px] font-black text-[#D8B4A6] uppercase w-fit">{p.category}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            {p.isVisible !== false ? (
                              <div className="flex items-center gap-2 text-green-500">
                                 <Eye size={12} />
                                 <span className="text-[9px] font-black uppercase tracking-widest">Publicado</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2 text-gray-300">
                                 <EyeOff size={12} />
                                 <span className="text-[9px] font-black uppercase tracking-widest">Oculto</span>
                              </div>
                            )}
                          </td>
                          <td className="px-8 py-6">
                            <p className="font-black text-[#2D2D2D] text-sm">R$ {p.price.toFixed(2)}</p>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex gap-2">
                              <button onClick={() => handleEditProduct(p)} className="p-2.5 bg-gray-100 text-gray-600 rounded-xl hover:bg-[#C5A059] hover:text-white transition-all">
                                <Edit2 size={14} />
                              </button>
                              <button onClick={() => onDelete(p.id)} className="p-2.5 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all">
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {adminView === 'hierarchy' && (
            /* GESTÃO DE ESTRUTURA */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Seção de Linhas */}
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#2D2D2D] font-serif uppercase tracking-widest flex items-center gap-3">
                    <LayoutGrid size={20} className="text-[#C5A059]" /> Linhas
                  </h3>
                  <button 
                    onClick={() => handleCreateItem('line')}
                    className="p-3 bg-[#2D2D2D] text-white rounded-full hover:bg-black transition-all shadow-lg"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="bg-white rounded-[32px] border border-orange-50 overflow-hidden shadow-sm">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-orange-50">
                      {sortedLines.map(line => (
                        <tr key={line.id} className="hover:bg-orange-50/20 transition-all">
                          <td className="px-8 py-5">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-bold text-[#2D2D2D] text-sm">{line.name}</p>
                                {line.isVisible === false && <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Oculta no App</span>}
                              </div>
                              <div className="flex gap-2">
                                <button onClick={() => handleEditItem('line', line)} className="p-2 text-gray-400 hover:text-[#C5A059] transition-all">
                                  <Edit2 size={14} />
                                </button>
                                <button onClick={() => onDeleteLine(line.id)} className="p-2 text-gray-400 hover:text-red-500 transition-all">
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Seção de Categorias */}
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#2D2D2D] font-serif uppercase tracking-widest flex items-center gap-3">
                    <Tag size={20} className="text-[#C5A059]" /> Categorias
                  </h3>
                  <button 
                    onClick={() => handleCreateItem('category')}
                    className="p-3 bg-[#2D2D2D] text-white rounded-full hover:bg-black transition-all shadow-lg"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="bg-white rounded-[32px] border border-orange-50 overflow-hidden shadow-sm">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-orange-50">
                      {sortedCategories.map(cat => (
                        <tr key={cat.id} className="hover:bg-orange-50/20 transition-all">
                          <td className="px-8 py-5">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-bold text-[#2D2D2D] text-sm">{cat.name}</p>
                                <div className="flex gap-2 items-center">
                                  {cat.line && <span className="text-[9px] font-black text-[#C5A059] uppercase tracking-widest">{cat.line}</span>}
                                  {cat.isVisible === false && <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Oculta</span>}
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <button onClick={() => handleEditItem('category', cat)} className="p-2 text-gray-400 hover:text-[#C5A059] transition-all">
                                  <Edit2 size={14} />
                                </button>
                                <button onClick={() => onDeleteCategory(cat.id)} className="p-2 text-gray-400 hover:text-red-500 transition-all">
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Editor de Produtos */}
      {editingProduct && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2D2D]/90 backdrop-blur-md" onClick={() => setEditingProduct(null)} />
          <form 
            onSubmit={handleSubmitProduct}
            className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-[48px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col"
          >
            <div className="p-10 border-b border-orange-50 flex items-center justify-between shrink-0">
              <h3 className="text-2xl font-bold font-serif text-[#2D2D2D]">Configurar Produto</h3>
              <button type="button" onClick={() => setEditingProduct(null)} className="text-gray-400 hover:text-black">
                <X size={20} />
              </button>
            </div>

            <div className="p-10 overflow-y-auto space-y-6">
              <div className="bg-orange-50/50 p-6 rounded-3xl flex items-center justify-between border border-orange-100">
                 <div>
                    <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest mb-1">Visibilidade Pública</p>
                    <p className="text-[11px] text-gray-500 font-medium">Se o produto aparecerá ou não no app.</p>
                 </div>
                 <button 
                  type="button"
                  onClick={() => setEditingProduct({...editingProduct, isVisible: !editingProduct.isVisible})}
                  className={`w-14 h-8 rounded-full relative transition-colors ${editingProduct.isVisible ? 'bg-green-500' : 'bg-gray-200'}`}
                  disabled={saving}
                 >
                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all ${editingProduct.isVisible ? 'left-7' : 'left-1'}`} />
                 </button>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Nome Comercial</label>
                <input 
                  required
                  disabled={saving}
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]" 
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Preço Profissional</label>
                  <input 
                    required
                    disabled={saving}
                    type="text"
                    inputMode="numeric"
                    value={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(editingProduct.price || 0)}
                    onChange={(e) => {
                      // Remove tudo que não for dígito
                      const rawValue = e.target.value.replace(/\D/g, '');
                      // Converte para centavos e depois para reais (float)
                      const centsValue = parseInt(rawValue || '0', 10);
                      setEditingProduct({...editingProduct, price: centsValue / 100});
                    }}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Marca</label>
                  <select 
                    disabled={saving}
                    value={editingProduct.brand}
                    onChange={(e) => setEditingProduct({...editingProduct, brand: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]"
                  >
                    {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Linha</label>
                  <select 
                    disabled={saving}
                    value={editingProduct.line}
                    onChange={(e) => {
                      const newLine = e.target.value;
                      const firstCat = sortedCategories.find(c => c.line === newLine)?.name || '';
                      setEditingProduct({...editingProduct, line: newLine as any, category: firstCat as any});
                    }}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]"
                  >
                    {sortedLines.map(l => <option key={l.id} value={l.name}>{l.name}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Categoria</label>
                  <select 
                    disabled={saving}
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value as any})}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]"
                  >
                    {sortedCategories.filter(c => c.line === editingProduct.line).map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">URL Imagem</label>
                <input 
                  required
                  disabled={saving}
                  value={editingProduct.imageUrl}
                  onChange={(e) => setEditingProduct({...editingProduct, imageUrl: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Detalhes Técnicos</label>
                <textarea 
                  disabled={saving}
                  value={editingProduct.details}
                  onChange={(e) => setEditingProduct({...editingProduct, details: e.target.value})}
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]" 
                />
              </div>
            </div>

            <div className="p-10 border-t border-orange-50 flex gap-4 shrink-0">
               <button 
                type="submit"
                disabled={saving}
                className="flex-grow bg-[#2D2D2D] text-white py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-xl hover:bg-black transition-all disabled:opacity-50"
              >
                <Save size={16} /> {saving ? 'Salvando...' : 'Salvar Alterações'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Editor de Linha/Categoria */}
      {editingItem && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2D2D]/90 backdrop-blur-md" onClick={() => setEditingItem(null)} />
          <form 
            onSubmit={handleSubmitItem}
            className="relative bg-white w-full max-w-md rounded-[48px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col"
          >
            <div className="p-10 border-b border-orange-50 flex items-center justify-between shrink-0">
              <h3 className="text-xl font-bold font-serif text-[#2D2D2D]">
                {editingItem.type === 'line' ? 'Configurar Linha' : 'Configurar Categoria'}
              </h3>
              <button type="button" onClick={() => setEditingItem(null)} className="text-gray-400 hover:text-black">
                <X size={20} />
              </button>
            </div>

            <div className="p-10 space-y-6">
              <div className="bg-orange-50/50 p-6 rounded-3xl flex items-center justify-between border border-orange-100">
                 <div>
                    <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest mb-1">Visibilidade</p>
                    <p className="text-[11px] text-gray-500 font-medium">Exibir card no catálogo principal.</p>
                 </div>
                 <button 
                  type="button"
                  onClick={() => setEditingItem({ ...editingItem, data: { ...editingItem.data, isVisible: !editingItem.data.isVisible } })}
                  className={`w-14 h-8 rounded-full relative transition-colors ${editingItem.data.isVisible ? 'bg-green-500' : 'bg-gray-200'}`}
                  disabled={saving}
                 >
                    <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all ${editingItem.data.isVisible ? 'left-7' : 'left-1'}`} />
                 </button>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Nome de Exibição</label>
                <input 
                  required
                  disabled={saving}
                  value={editingItem.data.name}
                  onChange={(e) => setEditingItem({ ...editingItem, data: { ...editingItem.data, name: e.target.value } })}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]" 
                />
              </div>

              {editingItem.type === 'category' && (
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Vincular à Linha</label>
                  <select 
                    disabled={saving}
                    value={editingItem.data.line || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, data: { ...editingItem.data, line: e.target.value } })}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]"
                  >
                    <option value="">Selecione uma linha</option>
                    {sortedLines.map(l => <option key={l.id} value={l.name}>{l.name}</option>)}
                  </select>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">URL da Imagem</label>
                <input 
                  disabled={saving}
                  value={editingItem.data.imageUrl || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, data: { ...editingItem.data, imageUrl: e.target.value } })}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]" 
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="p-10 border-t border-orange-50 shrink-0">
               <button 
                type="submit"
                disabled={saving}
                className="w-full bg-[#2D2D2D] text-white py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-xl hover:bg-black transition-all disabled:opacity-50"
              >
                {saving ? 'Processando...' : 'Confirmar Alteração'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
