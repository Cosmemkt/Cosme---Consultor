import React, { useState } from 'react';
import { Target, Layers, TrendingUp, ArrowRight, CheckCircle2, ChevronRight, Zap, RefreshCw } from 'lucide-react';
import { SOLUTION_DATA } from '../data/landingData';

export const SolutionSection: React.FC = () => {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);

  const pillarIcons = [
    <Target key="1" className="w-6 h-6 text-blue-400" />,
    <Layers key="2" className="w-6 h-6 text-indigo-400" />,
    <TrendingUp key="3" className="w-6 h-6 text-emerald-400" />
  ];

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-[#080d1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>A Abordagem Integrada</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            {SOLUTION_DATA.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A metodologia de Cosme Araújo conecta a atração de novos clientes com uma operação interna rápida, qualificada e orientada ao fechamento de contratos.
          </p>
        </div>

        {/* Concept Equation Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {SOLUTION_DATA.conceptEquation.map((item) => {
            const isPositive = item.status === 'positive';
            return (
              <div
                key={item.title}
                className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isPositive
                    ? 'bg-gradient-to-b from-blue-950/90 to-slate-900 border-blue-500/80 shadow-2xl shadow-blue-600/20 ring-1 ring-blue-500/50'
                    : 'bg-slate-900/50 border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                        isPositive
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : item.status === 'warning'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      }`}
                    >
                      {isPositive ? 'Modelo Recomendado' : 'Modelo Incompleto'}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-3">
                    {item.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${isPositive ? 'text-slate-100 font-medium' : 'text-slate-400'}`}>
                    {item.result}
                  </p>
                </div>

                {isPositive && (
                  <div className="mt-6 pt-4 border-t border-blue-800/80 flex items-center gap-2 text-xs font-bold text-blue-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Objetivo Principal da Consultoria</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 3 Pillars Cards */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Os 3 Pilares da Metodologia
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Três etapas fundamentais para estruturar e acelerar sua operação de vendas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SOLUTION_DATA.pillars.map((pillar, idx) => (
              <div
                key={pillar.number}
                className="bg-slate-900/80 border border-slate-800 hover:border-blue-700/60 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-slate-800 group-hover:bg-blue-600/20 rounded-xl transition-colors">
                      {pillarIcons[idx]}
                    </div>
                    <span className="font-heading font-extrabold text-2xl text-slate-600 group-hover:text-blue-400 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-blue-400 tracking-wider uppercase block mb-1">
                    {pillar.pilar}
                  </span>

                  <h4 className="font-heading font-extrabold text-xl text-white mb-3">
                    {pillar.titulo}
                  </h4>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {pillar.descricao}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800">
                    {pillar.detalhes.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Implementação prática</span>
                  <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Flowchart Diagram */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
              Fluxo Contínuo da Operação Comercial Integrada
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Clique nas etapas para entender a conexão entre tráfego e vendas
            </p>
          </div>

          {/* Desktop Flowchart */}
          <div className="hidden lg:flex items-center justify-between gap-2 relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-400 -translate-y-1/2 z-0" />

            {SOLUTION_DATA.flowSteps.map((step, index) => {
              const isActive = activeFlowIndex === index;
              return (
                <button
                  key={step.label}
                  onClick={() => setActiveFlowIndex(index)}
                  className={`relative z-10 flex flex-col items-center p-4 rounded-2xl border transition-all duration-300 w-44 cursor-pointer text-center ${
                    isActive
                      ? 'bg-blue-600 border-blue-400 text-white shadow-xl shadow-blue-600/40 scale-105'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs mb-2 ${
                    isActive ? 'bg-white text-blue-700' : 'bg-slate-800 text-slate-400'
                  }`}>
                    0{index + 1}
                  </span>
                  <span className="font-heading font-extrabold text-xs tracking-tight uppercase leading-snug mb-1">
                    {step.label}
                  </span>
                  <span className={`text-[11px] leading-tight ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                    {step.desc}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Flowchart */}
          <div className="lg:hidden flex flex-col gap-3">
            {SOLUTION_DATA.flowSteps.map((step, index) => {
              const isActive = activeFlowIndex === index;
              return (
                <button
                  key={step.label}
                  onClick={() => setActiveFlowIndex(index)}
                  className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                    isActive
                      ? 'bg-blue-600 border-blue-400 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                      isActive ? 'bg-white text-blue-700' : 'bg-slate-800 text-slate-400'
                    }`}>
                      0{index + 1}
                    </span>
                    <div>
                      <div className="font-heading font-bold text-sm uppercase">{step.label}</div>
                      <div className={`text-xs ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>{step.desc}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 shrink-0" />
                </button>
              );
            })}
          </div>

          {/* Flow Detail Display Box */}
          <div className="mt-8 p-5 bg-slate-950 border border-slate-800 rounded-2xl text-center">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest block mb-1">
              Fase Selecionada: {SOLUTION_DATA.flowSteps[activeFlowIndex].label}
            </span>
            <p className="text-sm sm:text-base text-slate-200 font-medium max-w-2xl mx-auto">
              {activeFlowIndex === 0 && "Iniciamos criando campanhas direcionadas ao Perfil de Cliente Ideal (ICP), filtrando curiosos e direcionando tráfego qualificado."}
              {activeFlowIndex === 1 && "Capturamos oportunidades através de páginas de alta conversão e formulários estratégicos que coletam dados essenciais para o comercial."}
              {activeFlowIndex === 2 && "Definimos SLA rápido de atendimento, roteiro de qualificação (SDR/BDR) e CRM organizado para não perder nenhuma oportunidade."}
              {activeFlowIndex === 3 && "Estratégias de acompanhamento e técnicas de fechamento para aumentar a taxa de conversão de propostas apresentadas em novos contratos."}
              {activeFlowIndex === 4 && "Métricas consolidadas de CAC, LTV e ROAS permitindo escalabilidade segura e previsível dos investimentos."}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
