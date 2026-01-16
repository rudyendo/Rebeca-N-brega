
import React, { useState } from 'react';
import { Product, Category } from '../types';
import { CATEGORIES, BRANDS } from '../constants';
import { Plus, Edit2, Trash2, X, Save, Image, Tag, DollarSign, FileText } from 'lucide-react';

interface AdminPanelProps {
  products: Product[];
  onSave: (product: Product) => void;
  onDelete: (id: string) => void;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ products, onSave, onDelete, onClose }) => {
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);
  const [search, setSearch] = useState('');

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleCreate = () => {
    setEditingProduct({
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      brand: BRANDS[0],
      description: '',
      price: 0,
      category: 'HOME CARE',
      imageUrl: '',
      ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
      details: '',
      reviews: []
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      onSave(editingProduct as Product);
      setEditingProduct(null);
    }
  };

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="fixed inset-0 z-[110] flex flex-col bg-[#FDFBF9] animate-in fade-in duration-300">
      <header className="bg-white border-b border-orange-50 px-8 h-24 flex items-center justify-between sticky top-0 z-10 shrink-0">
        <div>
          <h2 className="text-2xl font-bold font-serif text-[#2D2D2D]">Painel de Controle</h2>
          <p className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest">Gestão de Portfólio Técnico</p>
        </div>
        <div className="flex items-center gap-4">
          <input 
            type="text" 
            placeholder="Pesquisar produto no admin..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="hidden md:block px-6 py-3 rounded-2xl bg-gray-50 border-none outline-none text-xs w-64"
          />
          <button 
            onClick={handleCreate}
            className="bg-[#2D2D2D] text-white px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-black transition-all"
          >
            <Plus size={14} /> Novo Produto
          </button>
          <button onClick={onClose} className="p-3 bg-orange-50 rounded-2xl text-[#C5A059] hover:bg-orange-100 transition-all">
            <X size={20} />
          </button>
        </div>
      </header>

      {/* Removido no-scrollbar para permitir visualização da barra de rolagem */}
      <div className="flex-grow overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto pb-20">
          <div className="bg-white rounded-[40px] shadow-sm border border-orange-50 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-orange-50">
                  <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Produto</th>
                  <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Categoria</th>
                  <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Preço</th>
                  <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-50">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-8 py-20 text-center text-gray-400 italic text-sm">
                      Nenhum produto encontrado.
                    </td>
                  </tr>
                ) : (
                  filtered.map(p => (
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
                        <span className="bg-white border border-orange-100 px-3 py-1 rounded-full text-[9px] font-black text-[#D8B4A6] uppercase">
                          {p.category}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <p className="font-black text-[#2D2D2D] text-sm">R$ {p.price.toFixed(2)}</p>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(p)} className="p-2.5 bg-gray-100 text-gray-600 rounded-xl hover:bg-[#C5A059] hover:text-white transition-all">
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
      </div>

      {editingProduct && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2D2D2D]/90 backdrop-blur-md" onClick={() => setEditingProduct(null)} />
          <form 
            onSubmit={handleSubmit}
            className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-[48px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col"
          >
            <div className="p-10 border-b border-orange-50 flex items-center justify-between shrink-0">
              <h3 className="text-2xl font-bold font-serif text-[#2D2D2D]">Configurar Produto</h3>
              <button type="button" onClick={() => setEditingProduct(null)} className="text-gray-400 hover:text-black">
                <X size={20} />
              </button>
            </div>

            {/* Removido no-scrollbar para o modal também */}
            <div className="p-10 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Nome Comercial</label>
                  <div className="relative">
                    <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                    <input 
                      required
                      value={editingProduct.name}
                      onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]" 
                      placeholder="Ex: Kit Elements Leite"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Preço Profissional</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                    <input 
                      required
                      type="number" step="0.01"
                      value={editingProduct.price}
                      onChange={(e) => setEditingProduct({...editingProduct, price: parseFloat(e.target.value) || 0})}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]" 
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Categoria do Catálogo</label>
                  <select 
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value as Category})}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]"
                  >
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Marca</label>
                  <select 
                    value={editingProduct.brand}
                    onChange={(e) => setEditingProduct({...editingProduct, brand: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]"
                  >
                    {BRANDS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">URL da Imagem</label>
                <div className="relative">
                  <Image className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={14} />
                  <input 
                    required
                    value={editingProduct.imageUrl}
                    onChange={(e) => setEditingProduct({...editingProduct, imageUrl: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Resumo do Pedido</label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 text-gray-300" size={14} />
                  <textarea 
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                    rows={2}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border-none outline-none text-xs focus:ring-1 focus:ring-[#C5A059]" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#D8B4A6]">Detalhes Técnicos</label>
                <textarea 
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
                className="flex-grow bg-[#2D2D2D] text-white py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-xl shadow-orange-100 hover:bg-black transition-all"
              >
                <Save size={16} /> Salvar Alterações
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
