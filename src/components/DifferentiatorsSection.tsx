import React from 'react';
import { CheckCircle2, Shield, Eye, Settings, Compass, BarChart, Rocket, UserCheck } from 'lucide-react';
import { DIFFERENTIATORS } from '../data/landingData';

export const DifferentiatorsSection: React.FC = () => {
  const icons = [
    <Compass key="1" className="w-5 h-5 text-blue-400" />,
    <Eye key="2" className="w-5 h-5 text-indigo-400" />,
    <BarChart key="3" className="w-5 h-5 text-emerald-400" />,
    <Rocket key="4" className="w-5 h-5 text-purple-400" />,
    <Settings key="5" className="w-5 h-5 text-amber-400" />,
    <UserCheck key="6" className="w-5 h-5 text-cyan-400" />,
    <Shield key="7" className="w-5 h-5 text-rose-400" />,
    <CheckCircle2 key="8" className="w-5 h-5 text-blue-400" />
  ];

  return (
    <section className="py-20 md:py-28 bg-[#060a17] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span>Diferenciais Estratégicos</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Uma visão completa do caminho entre o anúncio e a venda.
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            O trabalho de Cosme Araújo elimina adivinhações e conecta o investimento de marketing ao resultado financeiro no caixa.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIATORS.map((diff, index) => (
            <div
              key={diff.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-blue-600/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800 group-hover:bg-blue-600/20 transition-colors">
                    {icons[index % icons.length]}
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-blue-400" />
                </div>

                <h3 className="font-heading font-extrabold text-lg text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {diff.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-blue-400 font-semibold">
                ✓ Padrão de Excelência
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
