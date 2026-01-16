
import { Category, Product } from './types';

export const WHATSAPP_NUMBER = "5584996611849";
export const VENDOR_NAME = "Rebeca Nóbrega";
export const VENDOR_SUBTITLE = "Consultora Mirra Cosméticos e Maison Visagé";

export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop";

export const CATEGORIES: Category[] = [
  'HOME CARE',
  'ACIDIFICANTE',
  'ELEMENTS',
  'BIORESTORE',
  'CRONOGRAMA CAPILAR',
  'PERFECT BLOND',
  'COLORAÇÕES',
  'RESTAURAÇÃO',
  'REDUTOR DE VOLUME',
  'TRATAMENTOS',
  'CACHOS PERFEITOS',
  'LINHA LAVATÓRIO',
  'FINALIZADORES',
  'HOMBRE'
];

export const BRANDS = ['Mirra Professional', 'Maison Visage'];

export const PRODUCTS_DATA: Product[] = [
  // --- 1. HOME CARE: PROTEÍNAS DO LEITE ---
  {
    id: 'elements-leite-home-kit',
    name: 'Kit Home Care Elements Proteínas do Leite',
    brand: 'Mirra Professional',
    description: 'Composto por: Shampoo (250ml), Condicionador (250ml), Leave-in (180ml) e Máscara de Tratamento (250g)',
    price: 188.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Elements-_ProteinaLeite-copy-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Tratamento de manutenção diária para restauração profunda pós-química em casa.',
    reviews: []
  },
  {
    id: 'elements-leite-home-shampoo',
    name: 'Shampoo Home Care Elements Proteínas do Leite (250ml)',
    brand: 'Mirra Professional',
    description: 'Limpeza suave e nutritiva.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Shampoo-proteinas-do-leite.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '250ml.',
    reviews: []
  },
  {
    id: 'elements-leite-home-cond',
    name: 'Condicionador Home Care Elements Proteínas do Leite (250ml)',
    brand: 'Mirra Professional',
    description: 'Desembaraço e selamento.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Cond-mask-proteinas-do-leite.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '250ml.',
    reviews: []
  },
  {
    id: 'elements-leite-home-leavin',
    name: 'Leave-in Home Care Elements Proteínas do Leite (180ml)',
    brand: 'Mirra Professional',
    description: 'Proteção termoativada.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Leavin-proteinas-do-leite.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '180ml.',
    reviews: []
  },
  {
    id: 'elements-leite-home-masc',
    name: 'Máscara Home Care Elements Proteínas do Leite (250g)',
    brand: 'Mirra Professional',
    description: 'Nutrição intensiva.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Mask-proteinas-do-leite.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '250g.',
    reviews: []
  },

  // --- 2. HOME CARE: GINKGO BILOBA ---
  {
    id: 'elements-ginkgo-home-kit',
    name: 'Kit Home Care Elements Ginkgo Biloba + Aloe Vera',
    brand: 'Mirra Professional',
    description: 'Composto por: Shampoo (250ml), Condicionador (250ml), Leave-in (180ml) e Máscara de Tratamento (250g)',
    price: 188.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Elements-_GingkoAlta_versao001-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Crescimento saudável.',
    reviews: []
  },
  {
    id: 'elements-ginkgo-home-shampoo',
    name: 'Shampoo Home Care Elements Ginkgo Biloba + Aloe Vera (250ml)',
    brand: 'Mirra Professional',
    description: 'Estimulante capilar.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/shampoo-ginkgo-biloba.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '250ml.',
    reviews: []
  },
  {
    id: 'elements-ginkgo-home-cond',
    name: 'Condicionador Home Care Elements Ginkgo Biloba + Aloe Vera (250ml)',
    brand: 'Mirra Professional',
    description: 'Hidratação equilibrada.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/cond-mask-ginkgo-biloba.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '250ml.',
    reviews: []
  },
  {
    id: 'elements-ginkgo-home-leavin',
    name: 'Leave-in Home Care Elements Ginkgo Biloba + Aloe Vera (180ml)',
    brand: 'Mirra Professional',
    description: 'Finalizador estimulante.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/leavin-ginkgo-biloba.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '180ml.',
    reviews: []
  },
  {
    id: 'elements-ginkgo-home-masc',
    name: 'Máscara Home Care Elements Ginkgo Biloba + Aloe Vera (250g)',
    brand: 'Mirra Professional',
    description: 'Fortalecimento semanal.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/mask-ginkgo-biloba.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '250g.',
    reviews: []
  },

  // --- 3. HOME CARE: TUTANO + CAVIAR ---
  {
    id: 'elements-tutano-home-kit',
    name: 'Kit Home Care Elements Tutano + Caviar',
    brand: 'Mirra Professional',
    description: 'Composto por: Shampoo (250ml), Condicionador (250ml), Leave-in (180ml) e Máscara de Tratamento (250g)',
    price: 188.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/tutano-e-caviar-Photoroom-3-768x768.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Nutrição intensiva.',
    reviews: []
  },
  {
    id: 'elements-tutano-home-shampoo',
    name: 'Shampoo Home Care Elements Tutano + Caviar (250ml)',
    brand: 'Mirra Professional',
    description: 'Limpeza nutritiva.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/tutano-e-caviar-shampoo-2.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '250ml.',
    reviews: []
  },
  {
    id: 'elements-tutano-home-cond',
    name: 'Condicionador Home Care Elements Tutano + Caviar (250ml)',
    brand: 'Mirra Professional',
    description: 'Condicionamento umectante.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/tutano-e-caviar-cond-e-mask-2.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '250ml.',
    reviews: []
  },
  {
    id: 'elements-tutano-home-leavin',
    name: 'Leave-in Home Care Elements Tutano + Caviar (180ml)',
    brand: 'Mirra Professional',
    description: 'Brilho nutritivo.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/tutano-e-caviar-leavin.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '180ml.',
    reviews: []
  },
  {
    id: 'elements-tutano-home-masc',
    name: 'Máscara Home Care Elements Tutano + Caviar (250g)',
    brand: 'Mirra Professional',
    description: 'Nutrição lipídica.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/tutano-e-caviar-mask.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '250g.',
    reviews: []
  },

  // --- 4. HOME CARE: QUERATINA + KARITÉ ---
  {
    id: 'elements-queratina-home-kit',
    name: 'Kit Home Care Elements Queratina + Manteiga de Karitê',
    brand: 'Mirra Professional',
    description: 'Composto por: Shampoo (250ml), Condicionador (250ml), Leave-in (180ml) e Máscara de Tratamento (250g)',
    price: 188.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Elements-_Queratina.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Reconstrução diária.',
    reviews: []
  },
  {
    id: 'elements-queratina-home-shampoo',
    name: 'Shampoo Home Care Elements Queratina + Manteiga de Karitê (250ml)',
    brand: 'Mirra Professional',
    description: 'Limpeza reconstrutora.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/shampoo-QUERATINA-MANTEIGA-DE-KARITE-2.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '250ml.',
    reviews: []
  },
  {
    id: 'elements-queratina-home-cond',
    name: 'Condicionador Home Care Elements Queratina + Manteiga de Karitê (250ml)',
    brand: 'Mirra Professional',
    description: 'Sela aminoácidos.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/cond-mask-QUERATINA-MANTEIGA-DE-KARITE-2.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '250ml.',
    reviews: []
  },
  {
    id: 'elements-queratina-home-leavin',
    name: 'Leave-in Home Care Elements Queratina + Manteiga de Karitê (180ml)',
    brand: 'Mirra Professional',
    description: 'Proteção técnica.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/leavin-QUERATINA-MANTEIGA-DE-KARITE.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '180ml.',
    reviews: []
  },
  {
    id: 'elements-queratina-home-masc',
    name: 'Máscara Home Care Elements Queratina + Manteiga de Karitê (250g)',
    brand: 'Mirra Professional',
    description: 'Reconstrução lipídica.',
    price: 47.00,
    category: 'HOME CARE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/mask-QUERATINA-MANTEIGA-DE-KARITE.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '250g.',
    reviews: []
  },

  // --- 5. ACIDIFICANTE ---
  {
    id: 'acidic-bonding-900',
    name: 'Acidic Bonding - Estabilizador de pH',
    brand: 'Mirra Professional',
    description: 'Estabilizador de pH revolucionário para paralisar processos químicos.',
    price: 175.00,
    category: 'ACIDIFICANTE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/07/Captura-de-tela-de-2025-07-23-17-37-42.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '900ml. Acidifica e reconstrói.',
    reviews: []
  },

  // --- 6. ELEMENTS PROFISSIONAL ---
  {
    id: 'elements-leite-pro-kit',
    name: 'Kit Elements Proteínas do Leite (Lavatório)',
    brand: 'Mirra Professional',
    description: 'Shampoo (1L), Condicionador (1L) e Máscara (1kg).',
    price: 380.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/home.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Uso técnico.',
    reviews: []
  },
  {
    id: 'elements-ginkgo-pro-kit',
    name: 'Kit Elements Ginkgo Biloba + Aloe Vera (Lavatório)',
    brand: 'Mirra Professional',
    description: 'Shampoo (1L), Condicionador (1L) e Máscara (1kg).',
    price: 380.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/ginkgo-pro-Photoroom-1010x1024.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Uso técnico estimulante.',
    reviews: []
  },

  // --- 7. BIORESTORE ---
  {
    id: 'biorestore-total-repair',
    name: 'Kit BioRestore Total Repair',
    brand: 'Mirra Professional',
    description: 'Shampoo (1L) e Condicionador (1L).',
    price: 278.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Shampoo-total-repair-pro-Photoroom-1024x1024.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Com Cistina e Ojon.',
    reviews: []
  },
  {
    id: 'biorestore-argan',
    name: 'Kit BioRestore Argan',
    brand: 'Mirra Professional',
    description: 'Shampoo (1L) e Condicionador (1L).',
    price: 278.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/pro-1.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Nutrição intensa.',
    reviews: []
  },

  // --- 8. CRONOGRAMA / DETOX ---
  {
    id: 'detox-therapy',
    name: 'Kit Detox Therapy',
    brand: 'Mirra Professional',
    description: 'Shampoo (1L), Máscara (500g) e Finalizador (300ml).',
    price: 533.00,
    category: 'CRONOGRAMA CAPILAR',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/detox.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Argila Verde e Gengibre.',
    reviews: []
  },
  {
    id: 'plastica-capilar',
    name: 'Kit Plástica Capilar Repositora',
    brand: 'Mirra Professional',
    description: 'Protocolo completo de reposição de massa.',
    price: 665.00,
    category: 'CRONOGRAMA CAPILAR',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Plastica-Capilar-conjunto.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Aminoácidos essenciais.',
    reviews: []
  },

  // --- 9. PERFECT BLOND (MATIZADORES) ---
  {
    id: 'blond-radiant-fluido',
    name: 'Fluido Matizador Blond Radiant (270ml)',
    brand: 'Mirra Professional',
    description: 'Matização instantânea e proteção.',
    price: 95.00,
    category: 'PERFECT BLOND',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/todos-mascara-pos-progressiva-pro-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Neutraliza tons amarelos.',
    reviews: []
  },

  // --- 10. COLORAÇÕES ---
  {
    id: 'trend-colors-tube',
    name: 'Coloração Trend Colors (60g)',
    brand: 'Mirra Professional',
    description: 'Permanente com Nanopigmentação.',
    price: 30.00,
    category: 'COLORAÇÕES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/coloracao.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '60 nuances disponíveis.',
    reviews: []
  },

  // --- 11. RESTAURAÇÃO ---
  {
    id: 'fusion-cmc',
    name: 'Kit Fusion CMC Reconstituição',
    brand: 'Mirra Professional',
    description: 'Shampoo, Balm e Cream Oil (750ml cada).',
    price: 825.00,
    category: 'RESTAURAÇÃO',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/fusion-cmc2.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Reconstituição da película CMC.',
    reviews: []
  },

  // --- 12. REDUTOR DE VOLUME ---
  {
    id: 'btxv-tanino',
    name: 'BTX-V Volume Reducer (1kg)',
    brand: 'Mirra Professional',
    description: 'Redutor com Taninoplastia.',
    price: 285.00,
    category: 'REDUTOR DE VOLUME',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/btx.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Realinhamento capilar.',
    reviews: []
  },

  // --- 13. TRATAMENTOS ---
  {
    id: 'capsitrat-kit',
    name: 'Kit Capsitrat Antiqueda',
    brand: 'Maison Visage',
    description: 'Protocolo completo antiqueda.',
    price: 231.00,
    category: 'TRATAMENTOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/capsitrat-todos.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Maison Visage.',
    reviews: []
  },

  // --- 14. CACHOS PERFEITOS ---
  {
    id: 'miss-curls-kit',
    name: 'Kit Miss Curls Definição',
    brand: 'Mirra Professional',
    description: 'Tratamento completo para curvaturas.',
    price: 600.00,
    category: 'CACHOS PERFEITOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/miss-curls-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Hidratação de cachos.',
    reviews: []
  },

  // --- 15. LINHA LAVATÓRIO ---
  {
    id: 'back-bar-25l',
    name: 'Ultra Hydration Kit Back Bar (2.5L)',
    brand: 'Mirra Professional',
    description: 'Shampoo e Condicionador gigantes.',
    price: 198.00,
    category: 'LINHA LAVATÓRIO',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/ULTRA-HYDRATION-Photoroom-1024x1024.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Economia para o salão.',
    reviews: []
  },

  // --- 16. FINALIZADORES ---
  {
    id: 'bioelixir-oleo',
    name: 'Bio Elixir Bifásico (60ml)',
    brand: 'Mirra Professional',
    description: 'Reconstrução e brilho.',
    price: 78.00,
    category: 'FINALIZADORES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Captura-de-tela-de-2025-07-21-16-15-45.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Proteção térmica.',
    reviews: []
  },
  {
    id: 'uniq-pro-bbcream',
    name: 'Uniq Pro 12x1 BB Cream',
    brand: 'Mirra Professional',
    description: 'Multifuncional em spray.',
    price: 85.00,
    category: 'FINALIZADORES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/batch_todos-uniq-pro-12-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '12 benefícios.',
    reviews: []
  },

  // --- 17. HOMBRE ---
  {
    id: 'hombre-shampoo',
    name: 'Hombre Shampoo 2x1 (Cabelo e Barba)',
    brand: 'Mirra Professional',
    description: 'Limpeza prática masculina.',
    price: 53.00,
    category: 'HOMBRE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/afrodis_shampoo.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Fragrância exclusiva.',
    reviews: []
  },
  {
    id: 'hombre-colonia',
    name: 'Hombre Colônia Afrodisíaca',
    brand: 'Mirra Professional',
    description: 'Perfume marcante.',
    price: 58.00,
    category: 'HOMBRE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/afrodis_colonia.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Longa duração.',
    reviews: []
  }
];
