import React, { useState } from 'react';
import { Calendar, Send, CheckCircle2, Phone, Building, Mail, DollarSign, Target, MessageSquare, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { FATURAMENTO_OPTIONS, OBJETIVO_OPTIONS, BRAND_INFO } from '../data/landingData';
import { LeadFormData } from '../types';

interface CTASectionProps {
  initialReportText?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ initialReportText }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    nome: '',
    empresa: '',
    whatsapp: '',
    email: '',
    faturamento: FATURAMENTO_OPTIONS[1],
    desafio: initialReportText || '',
    objetivo: OBJETIVO_OPTIONS[0],
    dataAgendamento: '',
    horarioAgendamento: '10:00'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormatWhatsApp = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, '');
    if (raw.length > 11) raw = raw.slice(0, 11);
    
    // Format (XX) XXXXX-XXXX
    let formatted = raw;
    if (raw.length > 2) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
    }
    if (raw.length > 7) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7)}`;
    }

    setFormData(prev => ({ ...prev, whatsapp: formatted }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay and dispatch tracking event
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger standard tracking event if available
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'form',
          event_label: 'diagnostico_estrategico'
        });
      }
    }, 800);
  };

  const handleWhatsAppDirectSubmit = () => {
    const msg = `*Novo Agendamento de Diagnóstico Estratégico*\n\n` +
      `👤 *Nome:* ${formData.nome || 'Não informado'}\n` +
      `🏢 *Empresa:* ${formData.empresa || 'Não informada'}\n` +
      `📱 *WhatsApp:* ${formData.whatsapp || 'Não informado'}\n` +
      `✉️ *E-mail:* ${formData.email || 'Não informado'}\n` +
      `💰 *Faturamento:* ${formData.faturamento}\n` +
      `🎯 *Objetivo:* ${formData.objetivo}\n` +
      `📝 *Desafio:* ${formData.desafio || 'Nenhum detalhe adicional'}\n` +
      `📅 *Data Preferencial:* ${formData.dataAgendamento || 'A combinar'} às ${formData.horarioAgendamento}`;

    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="agendamento" className="py-20 md:py-28 bg-[#080d1a] relative border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Sessão de Alinhamento Comercial</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Sua empresa está preparada para transformar mais oportunidades em vendas?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Agende um diagnóstico estratégico e entenda quais ajustes podem conectar melhor o marketing, o processo comercial e os objetivos de crescimento da sua empresa.
          </p>
        </div>

        {/* Main Form Box */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
                Diagnóstico Solicitado com Sucesso!
              </h3>

              <p className="text-slate-300 text-base max-w-lg mb-8">
                Recebemos os dados da sua empresa, <strong className="text-white">{formData.nome}</strong>. Nosso time entrará em contato em breve para confirmar o horário do seu diagnóstico.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleWhatsAppDirectSubmit}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Confirmar Agendamento via WhatsApp</span>
                </button>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-slate-200 underline mt-2 sm:mt-0"
                >
                  Preencher novamente
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label htmlFor="nome" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Seu Nome Completo *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Ex: Roberto Silva"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="empresa" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleInputChange}
                    placeholder="Ex: Grupo Alpha Comercial"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleFormatWhatsApp}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* E-mail */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="roberto@empresa.com.br"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Faturamento */}
                <div>
                  <label htmlFor="faturamento" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Faturamento Aproximado Mensal *
                  </label>
                  <select
                    id="faturamento"
                    name="faturamento"
                    value={formData.faturamento}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    {FATURAMENTO_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Objetivo Principal */}
                <div>
                  <label htmlFor="objetivo" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Qual é o seu Principal Objetivo? *
                  </label>
                  <select
                    id="objetivo"
                    name="objetivo"
                    value={formData.objetivo}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    {OBJETIVO_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Data Preferencial */}
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div>
                  <label htmlFor="dataAgendamento" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Data Preferencial para Atendimento
                  </label>
                  <input
                    type="date"
                    id="dataAgendamento"
                    name="dataAgendamento"
                    value={formData.dataAgendamento}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="horarioAgendamento" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Horário Preferencial
                  </label>
                  <select
                    id="horarioAgendamento"
                    name="horarioAgendamento"
                    value={formData.horarioAgendamento}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="09:00">09:00h</option>
                    <option value="10:30">10:30h</option>
                    <option value="14:00">14:00h</option>
                    <option value="15:30">15:30h</option>
                    <option value="17:00">17:00h</option>
                  </select>
                </div>
              </div>

              {/* Principal Desafio Atual */}
              <div>
                <label htmlFor="desafio" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Principal Desafio Atual da Operação Comercial
                </label>
                <textarea
                  id="desafio"
                  name="desafio"
                  rows={3}
                  value={formData.desafio}
                  onChange={handleInputChange}
                  placeholder="Conte resumidamente sobre seus leads, equipe comercial ou campanhas de tráfego..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processando solicitação...</span>
                  ) : (
                    <>
                      <span>Agendar Meu Diagnóstico</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirectSubmit}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Enviar via WhatsApp Direct</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 text-center pt-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Seus dados estão protegidos. Não enviamos spam.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
