import { FAQItem, CompanyExperience, MethodologyPillar, StepItem, TargetCard, Differentiator } from '../types';

export const BRAND_INFO = {
  name: "Cosme Araújo",
  title: "Especialista em Consultoria Comercial, Vendas & Tráfego Pago",
  tagline: "Transforme marketing e vendas em uma operação previsível de crescimento.",
  whatsappNumber: "5541999470554", // Formatted for direct chat link (55 + 41 + 999470554)
  whatsappDisplay: "(41) 99947-0554",
  whatsappMessage: "Olá Cosme, gostaria de agendar meu diagnóstico estratégico para a minha empresa.",
  valueProposition: "Não basta gerar leads. É preciso estruturar a operação comercial para transformar oportunidades em vendas e crescimento previsível.",
  brandMessage: "Crescimento não acontece apenas com mais leads. Acontece quando marketing, processo comercial e execução trabalham na mesma direção.",
  experienceDisclaimer: "Experiência construída em projetos, operações e metodologias desenvolvidas ao lado de empresas e profissionais de diferentes segmentos."
};

export const HERO_DATA = {
  headline: "Transforme marketing e vendas em uma operação previsível de crescimento.",
  subtitle: "Unimos estratégia comercial, prospecção estruturada e tráfego pago para ajudar empresas a gerar oportunidades, melhorar a conversão e construir processos de vendas preparados para crescer.",
  ctaPrimary: "Agendar Diagnóstico Estratégico",
  ctaSecondary: "Entender a Metodologia",
  badgeText: "Consultoria Comercial & Estratégia de Escala"
};

export const PROBLEM_DATA = {
  title: "O problema não é apenas gerar mais leads.",
  descriptionParagraph1: "Muitas empresas investem em anúncios e conseguem aumentar o volume de contatos, mas não possuem uma operação comercial preparada para atender, qualificar, acompanhar e converter essas oportunidades.",
  descriptionParagraph2: "Quando marketing e vendas trabalham de forma desconectada, parte do investimento pode ser perdida em processos lentos, falta de acompanhamento, baixa conversão e ausência de indicadores.",
  highlight: "Mais leads não significa necessariamente mais vendas.",
  painPoints: [
    {
      id: "pain-1",
      title: "Desconexão entre Anúncios e Vendas",
      description: "Você investe em marketing, gera leads, mas as vendas não crescem na mesma proporção."
    },
    {
      id: "pain-2",
      title: "Falta de Processo Claro na Equipe",
      description: "Seu time comercial trabalha muito, mas não possui um processo claro para transformar oportunidades em clientes."
    },
    {
      id: "pain-3",
      title: "Demora e Perda de Oportunidades",
      description: "Os leads chegam, mas demoram para receber atendimento ou acabam sendo perdidos durante o processo comercial."
    },
    {
      id: "pain-4",
      title: "Dependência Exclusiva de Indicações",
      description: "Seu crescimento depende apenas de indicações e não existe previsibilidade na geração de novas oportunidades."
    },
    {
      id: "pain-5",
      title: "Gargalos Invisíveis no Funil",
      description: "Você não sabe exatamente onde estão os gargalos entre o marketing, o atendimento e as vendas."
    }
  ]
};

export const SOLUTION_DATA = {
  title: "Marketing e vendas precisam trabalhar como uma única estratégia.",
  conceptEquation: [
    {
      title: "Tráfego sem Processo Comercial",
      result: "Mais leads, mas possível desperdício de oportunidades.",
      status: "negative"
    },
    {
      title: "Processo Comercial sem Geração de Demanda",
      result: "Equipe preparada, mas sem volume consistente de novas oportunidades.",
      status: "warning"
    },
    {
      title: "Tráfego + Estratégia Comercial",
      result: "Mais controle, melhor conversão e crescimento estruturado.",
      status: "positive"
    }
  ],
  pillars: [
    {
      number: "01",
      pilar: "PILAR 1 — GERAÇÃO DE DEMANDA",
      titulo: "Atração Qualificada",
      descricao: "Estratégias de tráfego pago voltadas para atrair oportunidades alinhadas ao perfil de cliente ideal da empresa.",
      detalhes: [
        "Mapeamento detalhado do Perfil de Cliente Ideal (ICP)",
        "Campanhas de tráfego focado em intenção e conversão",
        "Anúncios segmentados para tomadores de decisão"
      ]
    },
    {
      number: "02",
      pilar: "PILAR 2 — ESTRUTURAÇÃO COMERCIAL",
      titulo: "Organização da Operação",
      descricao: "Organização do funil, definição de processos, melhoria do atendimento, qualificação de oportunidades e acompanhamento das negociações.",
      detalhes: [
        "Definição das etapas e critérios de passagem de leads no CRM",
        "SLA de tempo de resposta para primeiro atendimento",
        "Script e fluxos de qualificação de reuniões"
      ]
    },
    {
      number: "03",
      pilar: "PILAR 3 — CONVERSÃO E ESCALA",
      titulo: "Eficiência & Métricas",
      descricao: "Análise de indicadores, identificação de gargalos e otimização contínua para aumentar a eficiência comercial.",
      detalhes: [
        "Acompanhamento de métricas de conversão por etapa",
        "Auditoria de gargalos e taxas de perda no pipeline",
        "Ajustes de alta frequência entre anúncios e abordagem de vendas"
      ]
    }
  ],
  flowSteps: [
    { label: "TRÁFEGO PAGO", desc: "Atração do público qualificado" },
    { label: "GERAÇÃO DE OPORTUNIDADES", desc: "Captação de leads com intenção" },
    { label: "PROCESSO COMERCIAL", desc: "Qualificação, SDR e atendimento" },
    { label: "CONVERSÃO", desc: "Fechamento de novos contratos" },
    { label: "CRESCIMENTO", desc: "Previsibilidade e escala de receita" }
  ]
};

export const ABOUT_DATA = {
  title: "Estratégia comercial construída para gerar resultado na prática.",
  paragraphs: [
    "Cosme Araújo atua na interseção entre vendas e marketing, ajudando empresas a conectar geração de demanda, processos comerciais e estratégias de conversão.",
    "Seu trabalho parte de uma visão integrada: não basta aumentar o volume de leads. É necessário criar uma operação capaz de transformar oportunidades em relacionamentos, vendas e crescimento sustentável.",
    "Integra experiência em vendas, prospecção, estruturação comercial e tráfego pago para desenvolver estratégias adaptadas à realidade e aos objetivos de cada empresa."
  ],
  highlights: [
    "Mais de 8 anos combinando vendas, marketing e tráfego pago",
    "Visão unificada entre a origem do clique e o fechamento do contrato",
    "Metodologia sem promessas milagrosas: foco em processos e métricas"
  ]
};

export const COMPANIES_EXPERIENCE: CompanyExperience[] = [
  { id: "1", name: "AGF", subtitle: "Ações Garantem o Futuro", category: "Educação Financeira & Investimentos" },
  { id: "2", name: "Paulo Vieira", subtitle: "Febracis & Coaching Integrativo", category: "Treinamentos Executivos" },
  { id: "3", name: "Lucimara de Moraes", subtitle: "Carreira & Posicionamento", category: "Desenvolvimento Profissional" },
  { id: "4", name: "Renan Diego", subtitle: "Finanças Pessoais", category: "Mercado Digital & Cursos" },
  { id: "5", name: "Sistólica", subtitle: "Consultoria", category: "Empresas e negócios" },
  { id: "6", name: "Dermalog", subtitle: "Dermatologia & Saúde", category: "Inteligência Cosmético" },
  { id: "7", name: "EB Educação", subtitle: "Grupo Educacional", category: "Cursos e Capacitação" }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: 1,
    step: "Etapa 1",
    title: "DIAGNÓSTICO",
    description: "Analisamos o cenário atual, os objetivos, o processo comercial, a geração de oportunidades e os principais gargalos.",
    details: [
      "Mapeamento do funil atual de marketing e vendas",
      "Identificação dos pontos de fuga de leads",
      "Avaliação de ferramentas e capacidade da equipe comercial"
    ]
  },
  {
    number: 2,
    step: "Etapa 2",
    title: "ESTRATÉGIA",
    description: "Definimos prioridades e criamos um plano integrado de marketing, prospecção e estruturação comercial.",
    details: [
      "Desenho dos fluxos de atendimento e cadência de contato",
      "Estratégia de campanhas de tráfego segmentado",
      "Definição de metas de conversão por etapa"
    ]
  },
  {
    number: 3,
    step: "Etapa 3",
    title: "IMPLEMENTAÇÃO",
    description: "Organizamos processos, campanhas, fluxos e ações necessárias para melhorar a eficiência da operação.",
    details: [
      "Estruturação prática das abordagens e scripts de vendas",
      "Ajuste das campanhas de tráfego pago para qualificação",
      "Alinhamento dos critérios de oportunidade aceita"
    ]
  },
  {
    number: 4,
    step: "Etapa 4",
    title: "OTIMIZAÇÃO",
    description: "Acompanhamos indicadores e identificamos oportunidades para aumentar a conversão e a previsibilidade.",
    details: [
      "Análise contínua das taxas de fechamento",
      "Ajustes de urgência em gargalos de atendimento",
      "Reinvestimento estratégico em canais com maior ROI"
    ]
  }
];

export const TARGET_AUDIENCE: TargetCard[] = [
  {
    id: "target-1",
    text: "Já investe em marketing, mas precisa melhorar a conversão.",
    detail: "Para quem recebe contatos diariamente, mas sente que o fechamento fica muito abaixo do potencial."
  },
  {
    id: "target-2",
    text: "Possui uma equipe comercial sem processos bem definidos.",
    detail: "Para quem tem vendedores dedicados, mas cada um trabalha de um jeito sem padrão ou previsibilidade."
  },
  {
    id: "target-3",
    text: "Quer aumentar a geração de oportunidades.",
    detail: "Para empresas prontas para atender mais clientes, mas que sofrem com falta de novas reuniões e orçamentos."
  },
  {
    id: "target-4",
    text: "Depende excessivamente de indicações.",
    detail: "Para empresas que faturam bem quando são indicadas, mas não controlam a torneira de novos clientes."
  },
  {
    id: "target-5",
    text: "Precisa organizar o funil comercial.",
    detail: "Para gestores que não sabem ao certo quantas propostas estão abertas e em qual fase cada negociação está."
  },
  {
    id: "target-6",
    text: "Quer melhorar o acompanhamento dos leads.",
    detail: "Para quem nota que leads esfriam porque faltou um follow-up estruturado e no momento correto."
  },
  {
    id: "target-7",
    text: "Busca integrar marketing e vendas.",
    detail: "Para eliminar o conflito entre 'o marketing envia lead ruim' e 'o comercial não atende os leads'."
  },
  {
    id: "target-8",
    text: "Deseja crescer com mais controle e previsibilidade.",
    detail: "Para lideranças empresariais que querem planejar metas do próximo trimestre com base em dados concretos."
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "diff-1",
    title: "Estratégia comercial e marketing integrados",
    description: "Alinhamento completo do anúncio que atrai até a proposta comercial apresentada."
  },
  {
    id: "diff-2",
    title: "Diagnóstico baseado na realidade da operação",
    description: "Sem teorias de prateleira: análise profunda dos números e gargalos reais da sua empresa."
  },
  {
    id: "diff-3",
    title: "Foco em processos e indicadores",
    description: "Acompanhamento transparente de CAC, LTV, taxa de conversão e tempo de ciclo de vendas."
  },
  {
    id: "diff-4",
    title: "Tráfego pago conectado aos objetivos comerciais",
    description: "Campanhas rodadas com o objetivo final de faturamento, não apenas impressões ou cliques."
  },
  {
    id: "diff-5",
    title: "Estruturação de processos de prospecção",
    description: "Cadências ativas e receptivas para alcançar tomadores de decisão com alta conversão."
  },
  {
    id: "diff-6",
    title: "Melhoria da jornada do lead",
    description: "Acolhimento rápido, respostas precisas e experiência de compra fluida para o cliente."
  },
  {
    id: "diff-7",
    title: "Acompanhamento dos principais gargalos",
    description: "Identificação cirúrgica de onde o dinheiro está sendo perdido no funil."
  },
  {
    id: "diff-8",
    title: "Estratégias personalizadas para cada negócio",
    description: "Respeito ao momento, cultura da equipe e modelo de precificação do cliente."
  }
];

export const FATURAMENTO_OPTIONS = [
  "Até R$ 50 mil/mês",
  "De R$ 50 mil a R$ 100 mil/mês",
  "De R$ 100 mil a R$ 300 mil/mês",
  "De R$ 300 mil a R$ 500 mil/mês",
  "De R$ 500 mil a R$ 1 milhão/mês",
  "Acima de R$ 1 milhão/mês"
];

export const OBJETIVO_OPTIONS = [
  "Gerar mais oportunidades",
  "Melhorar a conversão",
  "Estruturar o processo comercial",
  "Organizar a prospecção",
  "Integrar marketing e vendas",
  "Aumentar o faturamento"
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    pergunta: "Esta consultoria é apenas para empresas que investem em tráfego pago?",
    resposta: "Não. A estratégia pode envolver estruturação comercial, prospecção, geração de demanda ou a integração dessas frentes, conforme o momento e os objetivos da empresa."
  },
  {
    id: "faq-2",
    pergunta: "Vocês também criam campanhas de tráfego pago?",
    resposta: "Sim. O tráfego pago pode fazer parte da estratégia quando estiver alinhado ao modelo comercial e aos objetivos de crescimento."
  },
  {
    id: "faq-3",
    pergunta: "Preciso ter uma equipe comercial?",
    resposta: "A análise considera a estrutura atual da empresa e identifica os processos necessários para melhorar a eficiência da operação."
  },
  {
    id: "faq-4",
    pergunta: "Quanto tempo leva para implementar?",
    resposta: "O prazo depende do cenário, dos objetivos e da complexidade da operação. Após o diagnóstico, será definido um plano de ação adequado."
  },
  {
    id: "faq-5",
    pergunta: "Como funciona o diagnóstico estratégico?",
    resposta: "É uma conversa para compreender o momento da empresa, identificar os principais desafios e avaliar oportunidades de melhoria no marketing e nas vendas."
  }
];
