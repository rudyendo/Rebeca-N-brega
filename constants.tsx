
import { Category, Product, ProductLine } from './types';

export const WHATSAPP_NUMBER = "5584996611849";
export const VENDOR_NAME = "Rebeca Nóbrega";
export const VENDOR_SUBTITLE = "Consultora Mirra Cosméticos e Maison Visagé";

export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop";

export const LINES: ProductLine[] = ['PROFISSIONAL', 'HOME CARE'];

export const CATEGORIES: Category[] = [
  'ACIDIFICANTE',
  'BIORESTORE',
  'COLORAÇÕES',
  'CRONOGRAMA CAPILAR',
  'ELEMENTS',
  'FINALIZADORES',
  'FINALIZADORES E TRATAMENTOS',
  'HOMBRE',
  'LAVATÓRIO',
  'MANUTENÇÃO',
  'NUTRIÇÃO',
  'PERFECT BLOND',
  'RESTAURAÇÃO E NUTRIÇÃO',
  'TRANSFORMAÇÃO',
  'TRATAMENTOS'
];

export const BRANDS = ['Mirra Professional', 'Maison Visage'];

export const PRODUCTS_DATA: Product[] = [
  // --- HOME CARE ---
  {
    id: 'elements-leite-home-kit',
    name: 'Kit Home Care Elements Proteínas do Leite',
    line: 'HOME CARE',
    category: 'MANUTENÇÃO',
    brand: 'Mirra Professional',
    description: 'Composto por: Shampoo (250ml), Condicionador (250ml), Leave-in (180ml) e Máscara de Tratamento (250g)',
    price: 188.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Elements-_ProteinaLeite-copy-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Tratamento de manutenção diária para restauração profunda pós-química em casa.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'elements-leite-home-shampoo',
    name: 'Shampoo Home Care Elements Proteínas do Leite (250ml)',
    line: 'HOME CARE',
    category: 'MANUTENÇÃO',
    brand: 'Mirra Professional',
    description: 'Limpeza suave e nutritiva.',
    price: 47.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Shampoo-proteinas-do-leite.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '250ml.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'elements-ginkgo-home-kit',
    name: 'Kit Home Care Elements Ginkgo Biloba + Aloe Vera',
    line: 'HOME CARE',
    category: 'NUTRIÇÃO',
    brand: 'Mirra Professional',
    description: 'Composto por: Shampoo (250ml), Condicionador (250ml), Leave-in (180ml) e Máscara de Tratamento (250g)',
    price: 188.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Elements-_GingkoAlta_versao001-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Crescimento saudável.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'elements-tutano-home-kit',
    name: 'Kit Home Care Elements Tutano + Caviar',
    line: 'HOME CARE',
    category: 'NUTRIÇÃO',
    brand: 'Mirra Professional',
    description: 'Composto por: Shampoo (250ml), Condicionador (250ml), Leave-in (180ml) e Máscara de Tratamento (250g)',
    price: 188.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/tutano-e-caviar-Photoroom-3-768x768.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Nutrição intensiva.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'elements-queratina-home-kit',
    name: 'Kit Home Care Elements Queratina + Manteiga de Karitê',
    line: 'HOME CARE',
    category: 'MANUTENÇÃO',
    brand: 'Mirra Professional',
    description: 'Composto por: Shampoo (250ml), Condicionador (250ml), Leave-in (180ml) e Máscara de Tratamento (250g)',
    price: 188.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Elements-_Queratina.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Reconstrução diária.',
    reviews: [],
    isVisible: true
  },

  // --- PROFESSIONAL ---
  {
    id: 'acidic-bonding-900',
    name: 'Acidic Bonding - Estabilizador de pH',
    line: 'PROFISSIONAL',
    category: 'ACIDIFICANTE',
    brand: 'Mirra Professional',
    description: 'Estabilizador de pH revolucionário para paralisar processos químicos.',
    price: 175.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/07/Captura-de-tela-de-2025-07-23-17-37-42.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '900ml. Acidifica e reconstrói.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'elements-leite-pro-kit',
    name: 'Kit Elements Proteínas do Leite (Lavatório)',
    line: 'PROFISSIONAL',
    category: 'ELEMENTS',
    brand: 'Mirra Professional',
    description: 'Shampoo (1L), Condicionador (1L) e Máscara (1kg).',
    price: 380.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/home.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Uso técnico.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'biorestore-total-repair',
    name: 'Kit BioRestore Total Repair',
    line: 'PROFISSIONAL',
    category: 'BIORESTORE',
    brand: 'Mirra Professional',
    description: 'Shampoo (1L) e Condicionador (1L).',
    price: 278.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Shampoo-total-repair-pro-Photoroom-1024x1024.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Com Cistina e Ojon.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'detox-therapy',
    name: 'Kit Detox Therapy',
    line: 'PROFISSIONAL',
    category: 'CRONOGRAMA CAPILAR',
    brand: 'Mirra Professional',
    description: 'Shampoo (1L), Máscara (500g) e Finalizador (300ml).',
    price: 533.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/detox.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Argila Verde e Gengibre.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'trend-colors-tube',
    name: 'Coloração Trend Colors (60g)',
    line: 'PROFISSIONAL',
    category: 'COLORAÇÕES',
    brand: 'Mirra Professional',
    description: 'Permanente com Nanopigmentação.',
    price: 30.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/coloracao.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '60 nuances disponíveis.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'fusion-cmc',
    name: 'Kit Fusion CMC Reconstituição',
    line: 'PROFISSIONAL',
    category: 'RESTAURAÇÃO E NUTRIÇÃO',
    brand: 'Mirra Professional',
    description: 'Shampoo, Balm e Cream Oil (750ml cada).',
    price: 825.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/fusion-cmc2.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Reconstituição da película CMC.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'btxv-tanino',
    name: 'BTX-V Volume Reducer (1kg)',
    line: 'PROFISSIONAL',
    category: 'TRANSFORMAÇÃO',
    brand: 'Mirra Professional',
    description: 'Redutor com Taninoplastia.',
    price: 285.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/btx.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Realinhamento capilar.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'back-bar-25l',
    name: 'Ultra Hydration Kit Back Bar (2.5L)',
    line: 'PROFISSIONAL',
    category: 'LAVATÓRIO',
    brand: 'Mirra Professional',
    description: 'Shampoo e Condicionador gigantes.',
    price: 198.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/ULTRA-HYDRATION-Photoroom-1024x1024.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Economia para o salão.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'bioelixir-oleo',
    name: 'Bio Elixir Bifásico (60ml)',
    line: 'PROFISSIONAL',
    category: 'FINALIZADORES',
    brand: 'Mirra Professional',
    description: 'Reconstrução e brilho.',
    price: 78.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Captura-de-tela-de-2025-07-21-16-15-45.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Proteção térmica.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'hombre-shampoo',
    name: 'Hombre Shampoo 2x1 (Cabelo e Barba)',
    line: 'PROFISSIONAL',
    category: 'HOMBRE',
    brand: 'Mirra Professional',
    description: 'Limpeza prática masculina.',
    price: 53.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/afrodis_shampoo.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Fragrância exclusiva.',
    reviews: [],
    isVisible: true
  },
  {
    id: 'hombre-colonia',
    name: 'Hombre Colônia Afrodisíaca',
    line: 'PROFISSIONAL',
    category: 'HOMBRE',
    brand: 'Mirra Professional',
    description: 'Perfume marcante.',
    price: 58.00,
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/afrodis_colonia.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Longa duração.',
    reviews: [],
    isVisible: true
  }
];
