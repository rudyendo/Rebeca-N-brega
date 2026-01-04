
export type Category = 'Todos' | 'Tratamento Técnico' | 'Coloração' | 'Descoloração' | 'Cachos' | 'Finalização' | 'Masculino';

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
  reviews: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}
