
import React, { useState, useEffect } from 'react';
import { User, Lock, ArrowRight, UserPlus, LogIn, X, ShieldCheck } from 'lucide-react';

interface AuthProps {
  onLogin: (user: any) => void;
  onClose: () => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin, onClose }) => {
  const [usersExist, setUsersExist] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const hasUsers = users.length > 0;
    setUsersExist(hasUsers);
    // Se não existem usuários, força para a tela de cadastro inicial
    if (!hasUsers) {
      setIsLogin(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (isLogin) {
      const user = users.find((u: any) => u.email === email && u.password === password);
      if (user) {
        onLogin(user);
      } else {
        setError('E-mail ou senha inválidos.');
      }
    } else {
      // Bloqueio de segurança adicional para evitar cadastros extras via manipulação de estado
      if (users.length > 0) {
        setError('O cadastro de novos administradores está bloqueado.');
        return;
      }

      if (!name || !email || !password) {
        setError('Preencha todos os campos.');
        return;
      }

      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      onLogin(newUser);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#2D2D2D]/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-md rounded-[48px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-black transition-colors">
          <X size={20} />
        </button>

        <div className="p-10 pt-16 text-center">
          <div className="bg-orange-50 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 text-[#C5A059]">
            {!usersExist ? <ShieldCheck size={28} /> : (isLogin ? <LogIn size={28} /> : <UserPlus size={28} />)}
          </div>
          
          <h2 className="text-3xl font-bold font-serif text-[#2D2D2D] mb-2">
            {!usersExist ? 'Acesso Mestre' : (isLogin ? 'Bem-vinda de volta' : 'Nova Conta')}
          </h2>
          
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black mb-8">
            {!usersExist 
              ? 'Configure sua credencial única de acesso' 
              : 'Painel Restrito à Consultoria'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                <input 
                  type="text" 
                  placeholder="Seu Nome Completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#C5A059] outline-none text-sm transition-all"
                />
              </div>
            )}
            <div className="relative">
              <LogIn className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
              <input 
                type="email" 
                placeholder="Seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#C5A059] outline-none text-sm transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
              <input 
                type="password" 
                placeholder="Sua Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#C5A059] outline-none text-sm transition-all"
              />
            </div>

            {error && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest leading-tight">{error}</p>}

            <button 
              type="submit"
              className="w-full bg-gold-gradient text-white py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-xl shadow-orange-100 hover:opacity-95 transition-all"
            >
              {!usersExist ? 'Criar Acesso Mestre' : (isLogin ? 'Entrar no Sistema' : 'Cadastrar')}
              <ArrowRight size={16} />
            </button>
          </form>

          {/* O link de alternância só aparece se NÃO houver usuários ainda ou se quisermos permitir múltiplos (removido conforme pedido) */}
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            {usersExist ? (
               <p className="text-[9px] font-black uppercase tracking-widest text-gray-300">
                Sistema de segurança ativo: Cadastro bloqueado
              </p>
            ) : (
              <p className="text-[9px] font-black uppercase tracking-widest text-[#C5A059]">
                Configuração inicial de segurança
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
