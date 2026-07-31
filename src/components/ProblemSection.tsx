import React from 'react';
import { AlertTriangle, XCircle, ArrowDown, HelpCircle, Flame, DollarSign, Clock, HelpCircle as QuestionIcon } from 'lucide-react';
import { PROBLEM_DATA } from '../data/landingData';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-20 md:py-28 bg-[#060a17] relative border-t border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/50 text-rose-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Diagnóstico do Gargalo Atual</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            {PROBLEM_DATA.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
            {PROBLEM_DATA.descriptionParagraph1}
          </p>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {PROBLEM_DATA.descriptionParagraph2}
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-rose-950/80 via-slate-900 to-rose-950/80 border border-rose-800/60 text-center shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl" />
            
            <span className="text-xs font-bold text-rose-400 tracking-widest uppercase block mb-2">
              Alerta de Eficiência Comercial
            </span>
            <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              “{PROBLEM_DATA.highlight}”
            </p>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_DATA.painPoints.map((pain, index) => (
            <div
              key={pain.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-400 font-bold text-xs flex items-center justify-center border border-rose-500/20">
                    0{index + 1}
                  </span>
                  <XCircle className="w-5 h-5 text-rose-400/70 group-hover:text-rose-400 transition-colors" />
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-rose-200 transition-colors">
                  {pain.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  “{pain.description}”
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-rose-400 font-medium">
                <QuestionIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Gargalo frequente em PMEs</span>
              </div>
            </div>
          ))}

          {/* Special summary card */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/60 border border-blue-900/50 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>O Custo do Silêncio</span>
              </div>

              <h3 className="font-heading font-bold text-lg text-white mb-3">
                Quanto dinheiro sua empresa perde a cada mês?
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Sem uma estrutura comercial clara, até os melhores leads gerados pelos anúncios se perdem por falta de acompanhamento no tempo certo.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-semibold text-blue-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>A solução exige integração estratégica.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
