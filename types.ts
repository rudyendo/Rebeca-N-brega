
export type ProductLine = 'PROFISSIONAL' | 'HOME CARE';

export type Category = 
  | 'ACIDIFICANTE' 
  | 'BIORESTORE' 
  | 'COLORAÇÕES' 
  | 'CRONOGRAMA CAPILAR' 
  | 'ELEMENTS' 
  | 'FINALIZADORES' 
  | 'FINALIZADORES E TRATAMENTOS' 
  | 'HOMBRE'
  | 'LAVATÓRIO'
  | 'MANUTENÇÃO'
  | 'NUTRIÇÃO'
  | 'PERFECT BLOND' 
  | 'RESTAURAÇÃO E NUTRIÇÃO' 
  | 'TRANSFORMAÇÃO'
  | 'TRATAMENTOS';

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  line: ProductLine;
  category: Category;
  brand: string;
  description: string;
  price: number;
  imageUrl: string;
  ebookUrl: string;
  details: string;
  reviews?: Review[];
  isVisible: boolean; 
}

export interface CartItem extends Product {
  quantity: number;
}
