
import { Category, Product, Review } from './types';

export const WHATSAPP_NUMBER = "5584996611849";
export const VENDOR_NAME = "Rebeca Nóbrega";
export const VENDOR_SUBTITLE = "Consultora Mirra Cosméticos e Maison Visagé";

export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop";

export const CATEGORIES: Category[] = [
  'Todos',
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
  // --- ACIDIFICANTE ---
  {
    id: 'acidic-bonding-900',
    name: 'Acidic Bonding - Estabilizador de pH',
    brand: 'Mirra Professional',
    description: 'Estabilizador de pH revolucionário para paralisar processos químicos.',
    price: 185.00,
    category: 'ACIDIFICANTE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/07/Captura-de-tela-de-2025-07-23-17-37-42.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Formulado para acidificar e paralisar processos químicos, garantindo controle total em descolorações. Previne o corte químico e reconstrói a fibra com blend de aminoácidos ramificados.',
    reviews: []
  },

  // --- ELEMENTS ---
  {
    id: 'elements-leite',
    name: 'Elements Proteínas do Leite',
    brand: 'Mirra Professional',
    description: 'Tratamento revitalizante e hidratante com aminoácidos e vitaminas.',
    price: 89.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/home.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Contém caseína que neutraliza odores químicos. Rico em Ômegas que nutrem e promovem brilho radiante. Ideal para restauração profunda.',
    reviews: []
  },
  {
    id: 'elements-ginkgo',
    name: 'Elements Ginkgo Biloba + Aloe Vera',
    brand: 'Mirra Professional',
    description: 'Linha antiqueda, crescimento e fortalecimento da raiz.',
    price: 85.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/ginkgo-pro-Photoroom-1010x1024.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Com extratos fitossomados que aumentam a circulação sanguínea no couro cabeludo e induzem o crescimento do fio.',
    reviews: []
  },
  {
    id: 'elements-tutano',
    name: 'Elements Tutano + Caviar',
    brand: 'Mirra Professional',
    description: 'Tratamento para cabelos ressecados com alto poder nutritivo.',
    price: 92.00,
    category: 'ELEMENTS',
    imageUrl: 'https://images.unsplash.com/photo-1626784213176-f48d80bbd1ee?q=80&w=800&auto=format&fit=crop',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Rico em colágeno, sela as cutículas deixando os fios flexíveis e resistentes contra a quebra.',
    reviews: []
  },

  // --- BIORESTORE ---
  {
    id: 'biorestore-total-repair',
    name: 'BioRestore Total Repair',
    brand: 'Mirra Professional',
    description: 'O poderoso tratamento com Cistina e Óleo de Ojon orgânico.',
    price: 115.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Shampoo-total-repair-pro-Photoroom-1024x1024.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Aumenta a durabilidade do alisamento e repõe aminoácidos perdidos. Contém filtros UVA/UVB.',
    reviews: []
  },
  {
    id: 'biorestore-argan',
    name: 'BioRestore Argan',
    brand: 'Mirra Professional',
    description: 'Tratamento hidratante e reparador com Ômegas 3, 6 e 9.',
    price: 98.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/pro-1.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Alta concentração de vitaminas para o combate aos radicais livres e diminuição drástica do frizz.',
    reviews: []
  },

  // --- CRONOGRAMA CAPILAR ---
  {
    id: 'detox-therapy',
    name: 'Detox Therapy - Desintoxicação',
    brand: 'Mirra Professional',
    description: 'Tratamento rico em argila verde, gengibre e hortelã.',
    price: 145.00,
    category: 'CRONOGRAMA CAPILAR',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/detox.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Elimina toxinas, regula a sebosidade e combate a caspa, estimulando o crescimento saudável.',
    reviews: []
  },
  {
    id: 'plastica-capilar',
    name: 'Plástica Capilar - Repositor de Massa',
    brand: 'Mirra Professional',
    description: 'Repõe minerais, proteínas e nutrientes perdidos no envelhecimento.',
    price: 158.00,
    category: 'CRONOGRAMA CAPILAR',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Plastica-Capilar-conjunto.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Defende os fios de futuros processos oxidativos. Reconstrução instantânea de alto impacto.',
    reviews: []
  },

  // --- PERFECT BLOND ---
  {
    id: 'perfect-blond-po',
    name: 'Pó Descolorante Extreme Plus',
    brand: 'Mirra Professional',
    description: 'Clareamento ultra rápido de até 9 tons com Silk Protein.',
    price: 165.00,
    category: 'PERFECT BLOND',
    imageUrl: 'https://mfdistribuidoramt.com.br/wp-content/uploads/2020/11/p%C3%B3s-descolorantes-scaled.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Preserva a saúde e integridade dos fios. Proporção de 1:3 no medidor. Dust Free.',
    reviews: []
  },

  // --- COLORAÇÕES ---
  {
    id: 'trend-colors-base',
    name: 'Trend Colors - Nanopigmentação',
    brand: 'Mirra Professional',
    description: 'Coloração permanente com Angstrons Technology e baixo teor de amônia.',
    price: 38.00,
    category: 'COLORAÇÕES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/coloracao.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Blend de Ômegas (Argan, Canola, Chia, Moringa, etc) que protegem a cor e a fibra durante a pausa.',
    reviews: []
  },
  {
    id: 'trend-express-10',
    name: 'Trend Express 10 Minutes',
    brand: 'Mirra Professional',
    description: 'Coloração permanente em apenas 10 minutos para retoque de raiz.',
    price: 42.00,
    category: 'COLORAÇÕES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/trend-express-10-minutes-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Vegana, livre de amônia, PPD e parabenos. Possui ativos protetores do couro cabeludo.',
    reviews: []
  },

  // --- RESTAURAÇÃO ---
  {
    id: 'fusion-cmc-restaura',
    name: 'Fusion CMC - Reconstituição CMC',
    brand: 'Mirra Professional',
    description: 'Fusão de aminoácidos para deixar o cabelo 98% mais resistente.',
    price: 167.00,
    category: 'RESTAURAÇÃO',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/fusion-cmc2.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Penetra no interior da fibra para reconstituir a película que protege o córtex.',
    reviews: []
  },

  // --- REDUTOR DE VOLUME ---
  {
    id: 'btxv-tanino',
    name: 'BTX-V - Taninoplastia',
    brand: 'Mirra Professional',
    description: 'Redutor de volume com Avocado Oil e Apple Tannin.',
    price: 245.00,
    category: 'REDUTOR DE VOLUME',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/btx.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Realinhamento saudável com zero porosidade desde a primeira aplicação. Liso natural e anti-frizz.',
    reviews: []
  },

  // --- TRATAMENTOS ---
  {
    id: 'capsitrat-anti-queda',
    name: 'Capsitrat - Tratamento Antiqueda',
    brand: 'Maison Visage',
    description: 'Tecnologia de microchoque folicular para saúde do bulbo piloso.',
    price: 135.00,
    category: 'TRATAMENTOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/capsitrat-todos.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Estimula a microcirculação periférica e induz o crescimento capilar através da limpeza profunda.',
    reviews: []
  },
  {
    id: 'blonds-platinados',
    name: 'Blonds Platinados - Recuperação Imediata',
    brand: 'Mirra Professional',
    description: 'Pigmentos da Flor da Violeta para neutralização de tons amarelados.',
    price: 95.00,
    category: 'TRATAMENTOS',
    imageUrl: 'https://images.unsplash.com/photo-1527799822367-a233b47b0ee6?q=80&w=800&auto=format&fit=crop',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Pigmentos nanotecnológicos que não desidratam os fios. Conferem efeito platinado luxuoso.',
    reviews: []
  },

  // --- CACHOS PERFEITOS ---
  {
    id: 'miss-curls-cocoa',
    name: 'Miss Curls - Cocoa + Protein',
    brand: 'Mirra Professional',
    description: 'Definição e hidratação profunda com metionina.',
    price: 75.00,
    category: 'CACHOS PERFEITOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/miss-curls-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Combinação de óleos que fortalecem as pontes de hidrogênio, proporcionando brilho e controle.',
    reviews: []
  },

  // --- LINHA LAVATÓRIO ---
  {
    id: 'kit-back-bar',
    name: 'Ultra Hydration - Kit Back Bar',
    brand: 'Mirra Professional',
    description: 'Sofisticação e experiência de spa profissional com Argan e Quinoa.',
    price: 198.00,
    category: 'LINHA LAVATÓRIO',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/ULTRA-HYDRATION-Photoroom-1024x1024.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Rico em nutrientes que proporcionam um pré e pós ideal para qualquer tratamento técnico no lavatório.',
    reviews: []
  },
  {
    id: 'deep-clean-antiresiduo',
    name: 'Deep Clean - Antirresíduos',
    brand: 'Mirra Professional',
    description: 'Limpeza profunda sem danificar os fios (pH 8.0).',
    price: 68.00,
    category: 'LINHA LAVATÓRIO',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/deep-clean.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Facilita a absorção dos nutrientes do passo seguinte. Ideal para pré-progressivas e tratamentos intensos.',
    reviews: []
  },

  // --- FINALIZADORES ---
  {
    id: 'bioelixir-oleo',
    name: 'Bio Elixir - Óleo Bifásico',
    brand: 'Mirra Professional',
    description: 'Reconstrução termoativada para brilho espelhado e antifrizz.',
    price: 78.00,
    category: 'FINALIZADORES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Captura-de-tela-de-2025-07-21-16-15-45.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Selante cuticular para proteger os fios do calor da chapinha, piscina, mar e sol.',
    reviews: []
  },
  {
    id: 'uniq-pro-12x1-final',
    name: 'Uniq Pro 12x1 - BB Cream',
    brand: 'Mirra Professional',
    description: 'O finalizador multifuncional de 12 benefícios reais.',
    price: 85.00,
    category: 'FINALIZADORES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/batch_todos-uniq-pro-12-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Reposição de massa, proteção térmica, redução de frizz e manutenção do penteado.',
    reviews: []
  },
  {
    id: 'styling-wax-matte',
    name: 'Styling Wax - Pomada Efeito Mate',
    brand: 'Mirra Professional',
    description: 'Fixação forte e acabamento natural sem brilho.',
    price: 55.00,
    category: 'FINALIZADORES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/styling-wax.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Consistência seca que não deixa o cabelo oleoso. Ideal para penteados clássicos e despojados.',
    reviews: []
  },

  // --- HOMBRE ---
  {
    id: 'hombre-shampoo-2x1',
    name: 'Hombre Shampoo 2x1',
    brand: 'Mirra Professional',
    description: 'Limpa e hidrata cabelo e barba sem agredir.',
    price: 48.00,
    category: 'HOMBRE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/afrodis_shampoo.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Fórmula exclusiva Mirra Hombre para o cuidado diário do homem moderno.',
    reviews: []
  },
  {
    id: 'hombre-oleo-barba',
    name: 'Hombre Óleo Multifuncional',
    brand: 'Mirra Professional',
    description: 'Barba mais uniforme e sem frizz.',
    price: 52.00,
    category: 'HOMBRE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/afrodis_oleo.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Pode ser usado no cabelo e na barba para proteção e brilho discreto.',
    reviews: []
  }
];
