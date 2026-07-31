export interface LeadFormData {
  nome: string;
  empresa: string;
  whatsapp: string;
  email: string;
  faturamento: string;
  desafio: string;
  objetivo: string;
  dataAgendamento?: string;
  horarioAgendamento?: string;
}

export interface FAQItem {
  id: string;
  pergunta: string;
  resposta: string;
  categoria?: string;
}

export interface CompanyExperience {
  id: string;
  name: string;
  subtitle: string;
  category: string;
}

export interface MethodologyPillar {
  number: string;
  pilar: string;
  titulo: string;
  descricao: string;
  detalhes: string[];
}

export interface StepItem {
  number: number;
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface TargetCard {
  id: string;
  text: string;
  detail: string;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
}

export interface TrackingConfig {
  metaPixelId: string;
  gtmId: string;
  ga4Id: string;
  enabled: boolean;
}
