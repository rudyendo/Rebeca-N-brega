
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
    price: 175.00,
    category: 'ACIDIFICANTE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/07/Captura-de-tela-de-2025-07-23-17-37-42.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Formulado para acidificar e paralisar processos químicos, garantindo controle total em descolorações. Previne o corte químico e reconstrói a fibra com blend de aminoácidos ramificados.',
    reviews: []
  },

  // --- ELEMENTS: PROTEÍNAS DO LEITE ---
  {
    id: 'elements-leite-kit',
    name: 'Kit Elements Proteínas do Leite',
    brand: 'Mirra Professional',
    description: 'Tratamento completo revitalizante e hidratante.',
    price: 380.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/home.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Kit profissional contendo Shampoo, Condicionador e Máscara. Ideal para restauração profunda pós-química.',
    reviews: []
  },
  {
    id: 'elements-leite-shampoo',
    name: 'Shampoo Elements Proteínas do Leite',
    brand: 'Mirra Professional',
    description: 'Limpeza suave e hidratante para fios fragilizados.',
    price: 110.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Shampoo-proteinas-do-leite-pro.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Com aminoácidos do leite que preparam a fibra para o tratamento.',
    reviews: []
  },
  {
    id: 'elements-leite-cond',
    name: 'Condicionador Elements Proteínas do Leite',
    brand: 'Mirra Professional',
    description: 'Selamento de cutículas com brilho instantâneo.',
    price: 125.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Cond-mask-proteinas-do-leite-pro-1.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Desembaraço imediato e proteção lipídica.',
    reviews: []
  },
  {
    id: 'elements-leite-masc',
    name: 'Máscara Elements Proteínas do Leite',
    brand: 'Mirra Professional',
    description: 'Nutrição intensiva e reposição de proteínas.',
    price: 145.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Mask-proteinas-do-leite-pro.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000g. Recupera a elasticidade e a força da fibra capilar.',
    reviews: []
  },

  // --- ELEMENTS: GINKGO BILOBA ---
  {
    id: 'elements-ginkgo-kit',
    name: 'Kit Elements Ginkgo Biloba + Aloe Vera',
    brand: 'Mirra Professional',
    description: 'Cronograma de crescimento e fortalecimento capilar.',
    price: 380.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/ginkgo-pro-Photoroom-1010x1024.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Kit completo para induzir o crescimento saudável e prevenir a queda.',
    reviews: []
  },
  {
    id: 'elements-ginkgo-shampoo',
    name: 'Shampoo Elements Ginkgo Biloba + Aloe Vera',
    brand: 'Mirra Professional',
    description: 'Estimulante do couro cabeludo com limpeza refrescante.',
    price: 110.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Shampoo-pro-ginkgo-biloba.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Aumenta a microcirculação na raiz para fios mais fortes.',
    reviews: []
  },
  {
    id: 'elements-ginkgo-cond',
    name: 'Condicionador Elements Ginkgo Biloba + Aloe Vera',
    brand: 'Mirra Professional',
    description: 'Hidratação leve que não pesa nos fios finos.',
    price: 125.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Cond-mask-pro-ginkgo-biloba.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Com Aloe Vera para brilho e maciez natural.',
    reviews: []
  },
  {
    id: 'elements-ginkgo-masc',
    name: 'Máscara Elements Ginkgo Biloba + Aloe Vera',
    brand: 'Mirra Professional',
    description: 'Fortalecimento intensivo da extensão às pontas.',
    price: 145.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Mask-1000-ginkgo-biloba.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000g. Tratamento antiquebra com ativos fitossomados.',
    reviews: []
  },

  // --- ELEMENTS: TUTANO + CAVIAR ---
  {
    id: 'elements-tutano-kit',
    name: 'Kit Elements Tutano + Caviar',
    brand: 'Mirra Professional',
    description: 'Nutrição de luxo para cabelos extra ressecados.',
    price: 235.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/tutano-e-caviar-PRO.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Kit de alto impacto nutritivo. Rico em colágeno e ômegas.',
    reviews: []
  },
  {
    id: 'elements-tutano-shampoo',
    name: 'Shampoo Elements Tutano + Caviar',
    brand: 'Mirra Professional',
    description: 'Limpeza nutritiva que evita o embaraço no lavatório.',
    price: 110.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/tutano-e-caviar-shampoo.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Início do tratamento de reposição lipídica.',
    reviews: []
  },
  {
    id: 'elements-tutano-cond',
    name: 'Condicionador Elements Tutano + Caviar',
    brand: 'Mirra Professional',
    description: 'Desembaraço imediato para cabelos porosos.',
    price: 125.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/tutano-e-caviar-cond-e-mask.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Sela as cutículas mantendo a nutrição dentro do fio.',
    reviews: []
  },

  // --- ELEMENTS: QUERATINA + MANTEIGA DE KARITÊ ---
  {
    id: 'elements-queratina-kit',
    name: 'Kit Elements Queratina + Manteiga de Karitê',
    brand: 'Mirra Professional',
    description: 'Reconstrução profunda para cabelos extremamente danificados.',
    price: 235.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/elements-queratina-manteiga-de-karite-Copia-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Combina o poder reconstrutor da queratina com a nutrição intensa da manteiga de karitê.',
    reviews: []
  },
  {
    id: 'elements-queratina-shampoo',
    name: 'Shampoo Elements Queratina + Manteiga de Karitê',
    brand: 'Mirra Professional',
    description: 'Limpeza técnica reconstrutora.',
    price: 110.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/shampoo-QUERATINA-MANTEIGA-DE-KARITE.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Devolve a resistência aos fios fragilizados por processos químicos.',
    reviews: []
  },
  {
    id: 'elements-queratina-cond',
    name: 'Condicionador Elements Queratina + Manteiga de Karitê',
    brand: 'Mirra Professional',
    description: 'Condicionamento e proteção da fibra.',
    price: 125.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/cond-mask-QUERATINA-MANTEIGA-DE-KARITE.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Sela as cutículas e repõe lipídios essenciais.',
    reviews: []
  },

  // --- ELEMENTS: CACAU + AÇAÍ + MEL ---
  {
    id: 'elements-cacau-kit',
    name: 'Kit Elements Cacau + Açaí + Mel',
    brand: 'Mirra Professional',
    description: 'Revitalização antioxidante e brilho intenso.',
    price: 235.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/elements-1000-cacau-acai-mel-Photoroom-1024x1024.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Tratamento rico em vitaminas e polifenóis para fios sedosos e brilhantes.',
    reviews: []
  },
  {
    id: 'elements-cacau-shampoo',
    name: 'Shampoo Elements Cacau + Açaí + Mel',
    brand: 'Mirra Professional',
    description: 'Limpeza revigorante com ação antioxidante.',
    price: 110.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/shampoo-1000-cacau-acai-mel.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Protege os fios contra o envelhecimento precoce.',
    reviews: []
  },
  {
    id: 'elements-cacau-cond',
    name: 'Condicionador Elements Cacau + Açaí + Mel',
    brand: 'Mirra Professional',
    description: 'Desembaraço imediato e brilho extremo.',
    price: 125.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Cond-mask-1000-cacau-acai-mel.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Com mel puro para hidratação e maciez superior.',
    reviews: []
  },

  // --- ELEMENTS: NUTRIÇÃO VEGETAL ---
  {
    id: 'elements-nutricao-kit',
    name: 'Kit Elements Nutrição Vegetal',
    brand: 'Mirra Professional',
    description: 'Reposição de massa e óleos vegetais essenciais.',
    price: 235.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Elements-nutricao-1000.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Nutrição profunda para cabelos secos, opacos e sem vida.',
    reviews: []
  },
  {
    id: 'elements-nutricao-shampoo',
    name: 'Shampoo Elements Nutrição Vegetal',
    brand: 'Mirra Professional',
    description: 'Limpeza nutritiva para fios porosos.',
    price: 110.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Shampoo-nutricao-vegetal.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Inicia o processo de umectação capilar.',
    reviews: []
  },
  {
    id: 'elements-nutricao-cond',
    name: 'Condicionador Elements Nutrição Vegetal',
    brand: 'Mirra Professional',
    description: 'Condicionamento lipídico e selagem.',
    price: 125.00,
    category: 'ELEMENTS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Cond-mask-nutricao-vegetal-2.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Devolve a elasticidade e combate o frizz.',
    reviews: []
  },

  // --- BIORESTORE: TOTAL REPAIR ---
  {
    id: 'biorestore-total-repair-kit',
    name: 'Kit BioRestore Total Repair',
    brand: 'Mirra Professional',
    description: 'Poderoso tratamento com Cistina e Óleo de Ojon orgânico.',
    price: 278.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Shampoo-total-repair-pro-Photoroom-1024x1024.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Aumenta a durabilidade do alisamento e repõe aminoácidos perdidos. Contém filtros UVA/UVB.',
    reviews: []
  },
  {
    id: 'biorestore-total-repair-shampoo',
    name: 'Shampoo BioRestore Total Repair',
    brand: 'Mirra Professional',
    description: 'Limpeza técnica reconstrutora com Ojon.',
    price: 128.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Shampoo-total-repair-pro.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Prepara a fibra para reposição de cistina.',
    reviews: []
  },
  {
    id: 'biorestore-total-repair-cond',
    name: 'Condicionador BioRestore Total Repair',
    brand: 'Mirra Professional',
    description: 'Selamento de aminoácidos e brilho.',
    price: 150.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Cond-mask-total-repair-pro.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Proteção contra danos térmicos e químicos.',
    reviews: []
  },

  // --- BIORESTORE: ARGAN ---
  {
    id: 'biorestore-argan-kit',
    name: 'Kit BioRestore Argan',
    brand: 'Mirra Professional',
    description: 'Tratamento hidratante e reparador com Ômegas 3, 6 e 9.',
    price: 278.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/pro-1.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Alta concentração de vitaminas para o combate aos radicais livres e diminuição drástica do frizz.',
    reviews: []
  },
  {
    id: 'biorestore-argan-shampoo',
    name: 'Shampoo BioRestore Argan',
    brand: 'Mirra Professional',
    description: 'Limpeza nutritiva com óleo de Argan puro.',
    price: 128.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Shampoo-argan-pro.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Hidratação imediata desde a lavagem.',
    reviews: []
  },
  {
    id: 'biorestore-argan-cond',
    name: 'Condicionador BioRestore Argan',
    brand: 'Mirra Professional',
    description: 'Proteção lipídica e brilho radiante.',
    price: 150.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Cond-mask-argan-pro.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Devolve a sedosidade e combate o ressecamento.',
    reviews: []
  },

  // --- BIORESTORE: JOJOBA E ANDIROBA ---
  {
    id: 'biorestore-jojoba-kit',
    name: 'Kit BioRestore Jojoba e Andiroba',
    brand: 'Mirra Professional',
    description: 'Regeneração intensiva para fios extremamente secos.',
    price: 465.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/pro.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Combinação luxuosa de óleos da Amazônia para reconstrução lipídica de alto impacto.',
    reviews: []
  },
  {
    id: 'biorestore-jojoba-shampoo',
    name: 'Shampoo BioRestore Jojoba e Andiroba',
    brand: 'Mirra Professional',
    description: 'Limpeza regeneradora profunda.',
    price: 128.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/shampoo-jojoba-pro.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Inicia o tratamento de reposição de óleos essenciais.',
    reviews: []
  },
  {
    id: 'biorestore-jojoba-cond',
    name: 'Condicionador BioRestore Jojoba e Andiroba',
    brand: 'Mirra Professional',
    description: 'Condicionamento umectante intenso.',
    price: 150.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Cond-mask-jojoba-pro.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Sela a umidade natural dentro da fibra.',
    reviews: []
  },
  {
    id: 'biorestore-jojoba-masc',
    name: 'Máscara BioRestore Jojoba e Andiroba',
    brand: 'Mirra Professional',
    description: 'Tratamento de choque regenerativo.',
    price: 187.00,
    category: 'BIORESTORE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/mask-jojoba-mask-pro.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000g. Máxima nutrição para fios quebradiços e desvitalizados.',
    reviews: []
  },

  // --- DETOX THERAPY ---
  {
    id: 'detox-therapy-kit',
    name: 'Kit Detox Therapy - Desintoxicação',
    brand: 'Mirra Professional',
    description: 'Tratamento rico em argila verde, gengibre e hortelã.',
    price: 533.00,
    category: 'CRONOGRAMA CAPILAR',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/detox.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Elimina toxinas, regula a sebosidade e combate a caspa, estimulando o crescimento saudável.',
    reviews: []
  },
  {
    id: 'detox-therapy-shampoo',
    name: 'Shampoo Detox Therapy',
    brand: 'Mirra Professional',
    description: 'Limpeza refrescante e purificante.',
    price: 209.00,
    category: 'CRONOGRAMA CAPILAR',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/2-3.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000ml. Desintoxica o couro cabeludo e prepara para o tratamento.',
    reviews: []
  },
  {
    id: 'detox-therapy-masc',
    name: 'Máscara Detox Therapy',
    brand: 'Mirra Professional',
    description: 'Argiloterapia técnica para fios e couro.',
    price: 209.00,
    category: 'CRONOGRAMA CAPILAR',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/4-2.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '1000g. Com argila verde para remineralização capilar.',
    reviews: []
  },
  {
    id: 'detox-therapy-final',
    name: 'Finalizador Detox Therapy',
    brand: 'Mirra Professional',
    description: 'Fluido revitalizante sem enxágue.',
    price: 115.00,
    category: 'CRONOGRAMA CAPILAR',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/3-2.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Ação refrescante prolongada e proteção contra agentes externos.',
    reviews: []
  },

  // --- PLÁSTICA CAPILAR ---
  {
    id: 'plastica-capilar-kit',
    name: 'Kit Plástica Capilar - Repositor de Massa',
    brand: 'Mirra Professional',
    description: 'Repõe minerais, proteínas e nutrientes perdidos no envelhecimento.',
    price: 665.00,
    category: 'CRONOGRAMA CAPILAR',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Plastica-Capilar-conjunto.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Reconstrução instantânea de alto impacto que defende os fios de processos oxidativos.',
    reviews: []
  },
  {
    id: 'plastica-step-1',
    name: 'Shampoo Cream (Passo 1 - Plástica Capilar)',
    brand: 'Mirra Professional',
    description: 'Limpeza técnica preparadora.',
    price: 165.00,
    category: 'CRONOGRAMA CAPILAR',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/plastica-etapa1.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Inicia a reposição de massa com limpeza equilibrada.',
    reviews: []
  },
  {
    id: 'plastica-step-2',
    name: 'Bálsamo Revitalizante (Passo 2 - Plástica Capilar)',
    brand: 'Mirra Professional',
    description: 'Revitalização intensiva da fibra.',
    price: 203.00,
    category: 'CRONOGRAMA CAPILAR',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/plastica-etapa-2.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Penetra profundamente para devolver a elasticidade.',
    reviews: []
  },
  {
    id: 'plastica-step-3',
    name: 'Máscara Plástica (Passo 3 - Plástica Capilar)',
    brand: 'Mirra Professional',
    description: 'Selamento mineral e proteico.',
    price: 209.00,
    category: 'CRONOGRAMA CAPILAR',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/plastica-etapa-3.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Sela os nutrientes dentro da fibra capilar.',
    reviews: []
  },
  {
    id: 'plastica-step-4',
    name: 'Serum Reconstrutor (Passo 4 - Plástica Capilar)',
    brand: 'Mirra Professional',
    description: 'Finalização técnica de alto brilho.',
    price: 88.00,
    category: 'CRONOGRAMA CAPILAR',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/plastica-etapa4.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Proteção final e brilho espelhado.',
    reviews: []
  },

  // --- COLORAÇÕES ---
  {
    id: 'trend-colors-kit',
    name: 'Coloração Trend Colors',
    brand: 'Mirra Professional',
    description: 'Coloração permanente com Nanopigmentação.',
    price: 30.00,
    category: 'COLORAÇÕES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/coloracao.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Angstrons Technology com baixo teor de amônia e blend de ômegas.',
    reviews: []
  },
  {
    id: 'trend-tonalizante',
    name: 'Coloração Trend Colors – Tonalizante',
    brand: 'Mirra Professional',
    description: 'Brilho e cor sem amônia.',
    price: 30.00,
    category: 'COLORAÇÕES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/tonalizante.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Ideal para realçar a cor e neutralizar tons indesejados.',
    reviews: []
  },
  {
    id: 'trend-semipermanente',
    name: 'Coloração Trend Colors – Semipermanente',
    brand: 'Mirra Professional',
    description: 'Pigmentação intensa de longa duração.',
    price: 30.00,
    category: 'COLORAÇÕES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/semipermanente.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Alta cobertura e proteção da fibra capilar.',
    reviews: []
  },
  {
    id: 'trend-express-10',
    name: 'Trend Express 10 Minutes',
    brand: 'Mirra Professional',
    description: 'Coloração permanente em apenas 10 minutos.',
    price: 45.00,
    category: 'COLORAÇÕES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/trend-express-10-minutes-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Vegana, livre de amônia e PPD.',
    reviews: []
  },

  // --- FUSION CMC ---
  {
    id: 'fusion-cmc-kit',
    name: 'Kit Fusion CMC - Reconstituição CMC',
    brand: 'Mirra Professional',
    description: 'Fusão de aminoácidos para cabelos 98% mais resistentes.',
    price: 825.00,
    category: 'RESTAURAÇÃO',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/fusion-cmc2.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Reconstitui a película que protege o córtex através do CMC (Complexo de Membrana Celular).',
    reviews: []
  },
  {
    id: 'fusion-step-1',
    name: 'Shampoo Treatment (Passo 1 - Fusion CMC)',
    brand: 'Mirra Professional',
    description: 'Limpeza reconstrutora profissional.',
    price: 175.00,
    category: 'RESTAURAÇÃO',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/1-2.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Prepara a fibra para receber a carga de aminoácidos.',
    reviews: []
  },
  {
    id: 'fusion-step-2',
    name: 'Therapeutic Balm (Passo 2 - Fusion CMC)',
    brand: 'Mirra Professional',
    description: 'Bálsamo de reconstrução profunda.',
    price: 300.00,
    category: 'RESTAURAÇÃO',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/2-4.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Ação terapêutica no interior da fibra capilar.',
    reviews: []
  },
  {
    id: 'fusion-step-3',
    name: 'Cream Oil Treatment (Passo 3 - Fusion CMC)',
    brand: 'Mirra Professional',
    description: 'Reposição lipídica e selamento CMC.',
    price: 350.00,
    category: 'RESTAURAÇÃO',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/3-3.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Finaliza o processo de fusão proteica com óleos essenciais.',
    reviews: []
  },

  // --- CAPSITRAT ---
  {
    id: 'capsitrat-kit',
    name: 'Kit Capsitrat - Tratamento Antiqueda',
    brand: 'Maison Visage',
    description: 'Tecnologia de microchoque folicular.',
    price: 231.00,
    category: 'TRATAMENTOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/capsitrat-todos.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Protocolo completo para saúde do bulbo piloso e controle de queda.',
    reviews: []
  },
  {
    id: 'capsitrat-step-1',
    name: 'Shampoo Ativador Antiqueda (Passo 1 - Capsitrat)',
    brand: 'Maison Visage',
    description: 'Limpeza purificante e estimulante.',
    price: 77.00,
    category: 'TRATAMENTOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/capsitrat-1.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Inicia a desobstrução folicular e ativa a microcirculação.',
    reviews: []
  },
  {
    id: 'capsitrat-step-2',
    name: 'Bálsamo Estimulante (Passo 2 - Capsitrat)',
    brand: 'Maison Visage',
    description: 'Condicionamento e força da raiz.',
    price: 77.00,
    category: 'TRATAMENTOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/capsitrat-2.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Nutre o couro cabeludo e fortalece os fios existentes.',
    reviews: []
  },
  {
    id: 'capsitrat-step-3',
    name: 'Loção Spray (Passo 3 - Capsitrat)',
    brand: 'Maison Visage',
    description: 'Tratamento intensivo sem enxágue.',
    price: 77.00,
    category: 'TRATAMENTOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/capsitrat-3.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Ação direta no bulbo para induzir o crescimento capilar.',
    reviews: []
  },

  // --- BLOND RADIANT ---
  {
    id: 'blond-radiant-kit',
    name: 'Kit Pós Progressiva Blond Radiant',
    brand: 'Mirra Professional',
    description: 'Manutenção luxuosa para loiras com progressiva.',
    price: 615.00,
    category: 'TRATAMENTOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/todos-mascara-pos-progressiva-pro-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Neutraliza tons amarelados enquanto mantém o liso e a integridade da fibra.',
    reviews: []
  },
  {
    id: 'blond-radiant-shampoo',
    name: 'Shampoo Pós Progressiva Blond Radiant',
    brand: 'Mirra Professional',
    description: 'Limpeza matizadora suave.',
    price: 160.00,
    category: 'TRATAMENTOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/shampoo-mascara-pos-progressiva-pro.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Higienização com pigmentação violeta para controle de oxidação.',
    reviews: []
  },
  {
    id: 'blond-radiant-cond',
    name: 'Condicionador Pós Progressiva Blond Radiant',
    brand: 'Mirra Professional',
    description: 'Selamento e brilho platinado.',
    price: 160.00,
    category: 'TRATAMENTOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/condicionador-mascara-pos-progressiva-pro.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Condicionamento equilibrado que preserva a col e o efeito liso.',
    reviews: []
  },
  {
    id: 'blond-radiant-masc',
    name: 'Máscara Pós Progressiva Blond Radiant',
    brand: 'Mirra Professional',
    description: 'Tratamento matizador intensivo.',
    price: 185.00,
    category: 'TRATAMENTOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/mascara-pos-progressiva-pro.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Recuperação imediata da fibra com efeito platinado profissional.',
    reviews: []
  },
  {
    id: 'blond-radiant-fluido',
    name: 'Fluido Matizador Pós Progressiva Blond Radiant',
    brand: 'Mirra Professional',
    description: 'Finalizador protetor e matizador.',
    price: 110.00,
    category: 'TRATAMENTOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/mattizador-pos-progressiva-pro.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Proteção térmica e solar com realce da cor platinada.',
    reviews: []
  },

  // --- OUTROS ATUALIZADOS ---
  {
    id: 'btxv-tanino',
    name: 'BTX-V Volume Reducer',
    brand: 'Mirra Professional',
    description: 'Redutor de volume com Avocado Oil e Apple Tannin.',
    price: 285.00,
    category: 'REDUTOR DE VOLUME',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/btx.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Realinhamento saudável com Taninoplastia.',
    reviews: []
  },
  {
    id: 'miss-curls-cocoa',
    name: 'Kit Miss Curls - Cachos Intensos',
    brand: 'Mirra Professional',
    description: 'Definição e hidratação profunda para curvaturas.',
    price: 600.00,
    category: 'CACHOS PERFEITOS',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/miss-curls-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Tratamento premium para cachos definidos e livres de frizz.',
    reviews: []
  },
  {
    id: 'perfect-blond-po',
    name: 'Pó Descolorante Extreme Plus',
    brand: 'Mirra Professional',
    description: 'Clareamento de até 9 tons.',
    price: 165.00,
    category: 'PERFECT BLOND',
    imageUrl: 'https://mfdistribuidoramt.com.br/wp-content/uploads/2020/11/p%C3%B3s-descolorantes-scaled.jpg',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Dust Free com Silk Protein.',
    reviews: []
  },

  // --- LINHA LAVATÓRIO ---
  {
    id: 'kit-back-bar',
    name: 'Ultra Hydration - Kit Back Bar',
    brand: 'Mirra Professional',
    description: 'Kit Profissional de Lavatório 2.5L.',
    price: 198.00,
    category: 'LINHA LAVATÓRIO',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/ULTRA-HYDRATION-Photoroom-1024x1024.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Hidratação de alto volume para o dia a dia do salão.',
    reviews: []
  },
  {
    id: 'deep-clean-antiresiduo',
    name: 'Deep Clean - Antirresíduos',
    brand: 'Mirra Professional',
    description: 'Limpeza profunda técnica.',
    price: 68.00,
    category: 'LINHA LAVATÓRIO',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/deep-clean.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Abertura de cutículas para processos químicos.',
    reviews: []
  },

  // --- FINALIZADORES ---
  {
    id: 'bioelixir-oleo',
    name: 'Bio Elixir - Óleo Bifásico',
    brand: 'Mirra Professional',
    description: 'Reconstrução termoativada.',
    price: 78.00,
    category: 'FINALIZADORES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/02/Captura-de-tela-de-2025-07-21-16-15-45.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Proteção térmica e brilho espelhado.',
    reviews: []
  },
  {
    id: 'uniq-pro-12x1-final',
    name: 'Uniq Pro 12x1 - BB Cream',
    brand: 'Mirra Professional',
    description: 'Finalizador multifuncional.',
    price: 85.00,
    category: 'FINALIZADORES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/batch_todos-uniq-pro-12-Photoroom.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: '12 benefícios em um único produto.',
    reviews: []
  },
  {
    id: 'styling-wax-matte',
    name: 'Styling Wax - Pomada Efeito Mate',
    brand: 'Mirra Professional',
    description: 'Fixação forte sem brilho.',
    price: 55.00,
    category: 'FINALIZADORES',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/styling-wax.webp',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Acabamento seco para penteados.',
    reviews: []
  },

  // --- HOMBRE ---
  {
    id: 'hombre-shampoo-2x1',
    name: 'Hombre Shampoo 2x1',
    brand: 'Mirra Professional',
    description: 'Cabelo e Barba.',
    price: 53.00,
    category: 'HOMBRE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/afrodis_shampoo.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Praticidade para o homem moderno.',
    reviews: []
  },
  {
    id: 'hombre-colonia',
    name: 'Hombre Colônia',
    brand: 'Mirra Professional',
    description: 'Fragrância marcante.',
    price: 58.00,
    category: 'HOMBRE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/afrodis_colonia.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Frescor prolongado.',
    reviews: []
  },
  {
    id: 'hombre-creme-barbear',
    name: 'Hombre Creme de Barbear',
    brand: 'Mirra Professional',
    description: 'Filme protetor para lâmina.',
    price: 93.00,
    category: 'HOMBRE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/afrodis_creme.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Evita irritações no barbear.',
    reviews: []
  },
  {
    id: 'hombre-oleo-barba',
    name: 'Hombre Óleo Multifuncional',
    brand: 'Mirra Professional',
    description: 'Controle de frizz da barba.',
    price: 35.00,
    category: 'HOMBRE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/afrodis_oleo.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Nutrição e alinhamento.',
    reviews: []
  },
  {
    id: 'hombre-cera-multifuncional',
    name: 'Hombre Cera Multifuncional',
    brand: 'Mirra Professional',
    description: 'Acabamento Matte.',
    price: 51.00,
    category: 'HOMBRE',
    imageUrl: 'https://mirracosmeticos.com/wp-content/uploads/2025/03/afrodis_cera.png',
    ebookUrl: 'https://mirracosmeticos.com/linha-professional/',
    details: 'Modelagem flexível.',
    reviews: []
  }
];
