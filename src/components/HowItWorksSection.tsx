import React, { useState } from 'react';
import { Search, Compass, Cpu, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/landingData';

interface HowItWorksSectionProps {
  onOpenDiagnostic: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenDiagnostic }) => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const stepIcons = [
    <Search key="1" className="w-5 h-5 text-blue-400" />,
    <Compass key="2" className="w-5 h-5 text-indigo-400" />,
    <Cpu key="3" className="w-5 h-5 text-purple-400" />,
    <TrendingUp key="4" className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#060a17] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>Processo de Trabalho</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Um plano estratégico conectado à realidade da sua empresa.
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Uma jornada de 4 passos estruturados para diagnosticar, planejar, executar e escalar seus resultados comerciais.
          </p>
        </div>

        {/* Interactive Step Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {HOW_IT_WORKS_STEPS.map((stepItem) => {
            const isActive = selectedStep === stepItem.number;
            return (
              <div
                key={stepItem.number}
                onClick={() => setSelectedStep(stepItem.number)}
                className={`rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-b from-blue-950 to-slate-900 border-blue-500 shadow-2xl shadow-blue-600/20 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-400" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-slate-800 text-blue-400 border border-slate-700 uppercase tracking-widest">
                      {stepItem.step}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-800">
                      {stepIcons[stepItem.number - 1]}
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-white mb-2">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {stepItem.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800">
                  {stepItem.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1">
              Próximo Passo Prático
            </span>
            <h4 className="font-heading font-bold text-xl text-white">
              Sua jornada começa no Diagnóstico Estratégico sem compromisso.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Analisamos seus números atuais e identificamos onde estão os vazamentos do seu funil.
            </p>
          </div>

          <button
            onClick={onOpenDiagnostic}
            className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 shrink-0 transition-all cursor-pointer"
          >
            <span>Iniciar no Passo 1</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
