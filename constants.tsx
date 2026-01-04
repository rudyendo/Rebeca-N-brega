
import { Category, Product, Review } from './types';

export const WHATSAPP_NUMBER = "5511999999999";
export const VENDOR_NAME = "Rebeca Nóbrega";
export const VENDOR_SUBTITLE = "Consultora Mirra Cosméticos e Maison Visagé";

// Imagem padrão de alta qualidade para o setor de cosméticos
export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop";

export const CATEGORIES: Category[] = [
  'Todos', 
  'Tratamento Técnico', 
  'Coloração', 
  'Descoloração', 
  'Cachos', 
  'Finalização', 
  'Masculino'
];

export const BRANDS = ['Mirra Professional', 'Maison Visage'];

const mockReviews: Review[] = [
  { id: 'r1', user: 'Ana Paula - Studio Hair', rating: 5, comment: 'O Acidic Bonding salvou um cabelo elástico hoje. Produto indispensável.', date: '2024-03-01' },
  { id: 'r2', user: 'Carlos Beauty', rating: 5, comment: 'A fixação da cera Hombre é a melhor do mercado profissional.', date: '2024-03-10' }
];

export const PRODUCTS_DATA: Product[] = [
  // --- TRATAMENTO TÉCNICO ---
  {
    id: 'mirra-acidic-bonding',
    name: 'Acidic Bonding - Total Repair',
    brand: 'Mirra Professional',
    description: 'Sistema de reconstrução profunda e estabilização de pH para cabelos quimicamente tratados.',
    price: 185.00,
    category: 'Tratamento Técnico',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/07/ACIDID-final-copiar-1.png', 
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'O Acidic Bonding é um complexo reconstrutor que atua no córtex capilar, interrompendo a quebra e selando as cutículas instantaneamente após processos de descoloração ou coloração.',
    reviews: [mockReviews[0]]
  },
  {
    id: 'mirra-btxv',
    name: 'BTX-V - Taninoplastia',
    brand: 'Mirra Professional',
    description: 'Redução de volume e realinhamento capilar com tecnologia de Tanino e Óleo de Abacate.',
    price: 245.00,
    category: 'Tratamento Técnico',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/btx.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Promove um liso natural com brilho espelhado. Fórmula sem formol, segura para o profissional e para a cliente, com alta carga lipídica.',
    reviews: []
  },
  {
    id: 'mirra-fusion-cmc',
    name: 'Fusion CMC - Córtex Repair',
    brand: 'Mirra Professional',
    description: 'Reposição de massa e membrana celular complexa para fios extremamente porosos.',
    price: 167.00,
    category: 'Tratamento Técnico',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/fusion-cmc2.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Devolve a elasticidade natural. Ideal para cabelos que passaram por processos químicos sucessivos e perderam a resistência mecânica.',
    reviews: []
  },

  // --- COLORAÇÃO ---
  {
    id: 'mirra-trend-colors',
    name: 'Trend Colors - Coloração Permanente',
    brand: 'Mirra Professional',
    description: 'Nanopigmentação avançada com cobertura 100% de brancos e brilho tridimensional.',
    price: 38.00,
    category: 'Coloração',
    imageUrl: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Baixíssimo teor de amônia. Enriquecida com óleos essenciais que protegem o couro cabeludo durante a pausa.',
    reviews: []
  },

  // --- DESCOLORAÇÃO ---
  {
    id: 'mirra-perfect-blond',
    name: 'Pó Descolorante Perfect Blond',
    brand: 'Mirra Professional',
    description: 'Clareamento ultra rápido de até 9 tons com tecnologia anti-amarelo (Dust Free).',
    price: 165.00,
    category: 'Descoloração',
    imageUrl: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=800&auto=format&fit=crop',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Preserva a integridade da fibra graças ao colágeno presente na fórmula. Ideal para técnicas de Free Hands e Mechas Criativas.',
    reviews: []
  },

  // --- CACHOS ---
  {
    id: 'mirra-miss-curls',
    name: 'Miss Curls - Ativador de Cachos',
    brand: 'Mirra Professional',
    description: 'Definição extrema, controle de volume e nutrição para todas as curvaturas.',
    price: 75.00,
    category: 'Cachos',
    imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Livre de sulfatos, parabenos e petrolatos. Com Manteiga de Karité e Óleo de Coco para um Day After perfeito.',
    reviews: []
  },

  // --- FINALIZAÇÃO ---
  {
    id: 'mirra-bio-elixir',
    name: 'Bio Elixir - Thera Impact',
    brand: 'Mirra Professional',
    description: 'Blend de 12 óleos lendários para nutrição e selagem imediata.',
    price: 78.00,
    category: 'Finalização',
    imageUrl: 'https://images.unsplash.com/photo-1617897903246-739c9e6c3b00?q=80&w=800&auto=format&fit=crop',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Proteção térmica e contra raios UV. Pode ser usado como pré-shampoo, finalizador ou potencializador de máscaras.',
    reviews: []
  },
  {
    id: 'uniq-pro-12x1',
    name: 'Uniq Pro - BB Cream 12 em 1',
    brand: 'Mirra Professional',
    description: 'O finalizador multifuncional mais amado pelos salões. 12 benefícios reais.',
    price: 85.00,
    category: 'Finalização',
    imageUrl: 'https://images.unsplash.com/photo-1515377666659-717a0445ffad?q=80&w=800&auto=format&fit=crop',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Desembaraço imediato, controle de frizz, brilho intenso e proteção térmica. O coringa de toda bancada profissional.',
    reviews: []
  },

  // --- MASCULINO ---
  {
    id: 'mirra-hombre-pomade',
    name: 'Hombre - Pomada Modeladora',
    brand: 'Mirra Professional',
    description: 'Efeito matte (fosco) com alta fixação para penteados modernos.',
    price: 55.00,
    category: 'Masculino',
    imageUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=800&auto=format&fit=crop',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Não deixa resíduos e permite remodelar o penteado ao longo do dia. Fragrância exclusiva Mirra Hombre.',
    reviews: [mockReviews[1]]
  }
];
