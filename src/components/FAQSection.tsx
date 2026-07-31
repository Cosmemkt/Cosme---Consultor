import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQ_DATA, BRAND_INFO } from '../data/landingData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#060a17] relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Dúvidas Frequentes sobre a Consultoria
          </h2>

          <p className="text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
            Esclareça os principais pontos sobre como a integração entre processo comercial e tráfego pago é executada.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4 mb-12">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-extrabold text-base sm:text-lg text-white hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <span>{item.pergunta}</span>
                  <div className={`p-2 rounded-xl bg-slate-800 text-blue-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-600/20' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    <p>{item.resposta}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Prompt */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-white text-base">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Fale diretamente com nossa equipe via WhatsApp para atendimento personalizado.
            </p>
          </div>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent('Olá, tenho uma dúvida sobre o diagnóstico estratégico comercial.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
