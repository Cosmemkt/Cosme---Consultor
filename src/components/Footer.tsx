import React, { useState } from 'react';
import { Shield, Lock, Phone, Mail, ArrowUp, Settings } from 'lucide-react';
import { BRAND_INFO } from '../data/landingData';

interface FooterProps {
  onOpenTracking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTracking }) => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040710] border-t border-slate-800 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Final Message Callout */}
        <div className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-blue-950/80 border border-blue-800/60 text-center shadow-2xl relative overflow-hidden">
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase block mb-3">
            Mensagem Final da Marca
          </span>
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white max-w-4xl mx-auto leading-tight">
            “{BRAND_INFO.brandMessage}”
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-600 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/d/1L47x1gEvMgxfPc9qDT9tU0RrGQIE1jQY=s1000?authuser=0"
                  alt="Cosme Araújo Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-[10px]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://drive.google.com/uc?export=view&id=1L47x1gEvMgxfPc9qDT9tU0RrGQIE1jQY";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-white text-lg tracking-tight">
                  COSME ARAÚJO
                </span>
                <span className="text-[11px] font-medium text-amber-500/80 uppercase tracking-wider">
                  Consultoria Comercial & Tráfego Pago
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Estruturação e otimização de processos comerciais, prospecção ativa e geração previsível de oportunidades integradas ao tráfego pago.
            </p>

            <div className="flex items-center gap-3 text-xs">
              <button
                onClick={onOpenTracking}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Settings className="w-3.5 h-3.5 text-blue-400" />
                <span>Configurações de Tracking</span>
              </button>

              <button
                onClick={() => setShowPrivacy(true)}
                className="text-slate-400 hover:text-slate-200 underline"
              >
                Privacidade & Termos
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#problema" className="hover:text-blue-400 transition-colors">O Problema do Lead</a></li>
              <li><a href="#metodologia" className="hover:text-blue-400 transition-colors">A Metodologia 3 Pilares</a></li>
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre Cosme Araújo</a></li>
              <li><a href="#experiencia" className="hover:text-blue-400 transition-colors">Empresas e Experiência</a></li>
              <li><a href="#como-funciona" className="hover:text-blue-400 transition-colors">Como Funciona</a></li>
              <li><a href="#agendamento" className="hover:text-blue-400 transition-colors">Agendar Diagnóstico</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-4">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Atendimento Executivo
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Agendamentos prioritários para empresários, diretores comerciais e CEOs.
            </p>

            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-blue-500 hover:text-white text-xs font-semibold transition-all mb-4"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{BRAND_INFO.whatsappDisplay}</span>
            </a>

            <div className="text-[11px] text-slate-400">
              <span className="font-semibold text-slate-300 block mb-1">Nota Legal & Transparência:</span>
              As estratégias de consultoria dependem do engajamento e execução da equipe do cliente. Resultados passados não garantem faturamento automático.
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Cosme Araújo. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors"
            title="Voltar ao topo"
          >
            <span>Topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-left relative shadow-2xl">
            <h3 className="font-heading font-bold text-lg text-white mb-3">
              Política de Privacidade e Proteção de Dados
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Respeitamos rigorosamente a LGPD (Lei Geral de Proteção de Dados). As informações fornecidas no formulário de Diagnóstico Estratégico são utilizadas exclusivamente para o contato comercial e avaliação do cenário da sua empresa.
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Nenhum dado é compartilhado com terceiros sem consentimento.
            </p>
            <button
              onClick={() => setShowPrivacy(false)}
              className="w-full py-2.5 text-xs font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
