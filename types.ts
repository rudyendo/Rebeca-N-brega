
export type Category = 
  | 'Todos' 
  | 'HOME CARE'
  | 'PROFISSIONAL';

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
  brand: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  ebookUrl: string;
  details: string;
  reviews?: Review[];
  isVisible: boolean; // Nova propriedade
}

export interface CartItem extends Product {
  quantity: number;
}
