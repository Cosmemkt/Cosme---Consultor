import React from 'react';
import { ArrowRight, TrendingUp, Target, ShieldCheck, CheckCircle2, BarChart3, Users, Zap } from 'lucide-react';
import { HERO_DATA, BRAND_INFO } from '../data/landingData';

interface HeroSectionProps {
  onOpenDiagnostic: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDiagnostic }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>{HERO_DATA.badgeText}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Transforme marketing e vendas em uma <span className="gradient-blue-text">operação previsível</span> de crescimento.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              {HERO_DATA.subtitle}
            </p>

            {/* Core Value Proposition Quote Card */}
            <div className="w-full bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 sm:p-5 mb-8 backdrop-blur-md shadow-xl">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-600/20 text-blue-400 rounded-lg shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-200 italic leading-snug">
                  “{BRAND_INFO.valueProposition}”
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenDiagnostic}
                className="flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <span>{HERO_DATA.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#metodologia"
                className="flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700/80 hover:border-slate-600 transition-all text-center"
              >
                <span>{HERO_DATA.ctaSecondary}</span>
              </a>
            </div>

            {/* Key trust bullets */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Integração Marketing + Vendas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Qualificação de Leads</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Processo com Previsibilidade</span>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Portrait & Strategic Dashboard Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 rounded-3xl blur-lg opacity-40 animate-pulse" />

              {/* Main Card Wrapper */}
              <div className="relative bg-[#0d162a] border border-slate-700/80 rounded-3xl overflow-hidden p-6 sm:p-8 shadow-2xl">
                
                {/* Executive Profile Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-700 p-0.5 shadow-lg shrink-0">
                      <div className="w-full h-full rounded-[14px] bg-[#0f172a] flex items-center justify-center overflow-hidden relative">
                        <img
                          src="https://lh3.googleusercontent.com/d/1Vjfvq9AMi_vmkhnZ-nz2pwJ_yI5S9ozD=s1000?authuser=0"
                          alt="Cosme Araújo"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = "https://drive.google.com/uc?export=view&id=1Vjfvq9AMi_vmkhnZ-nz2pwJ_yI5S9ozD";
                          }}
                        />
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 rounded-full ring-4 ring-[#0d162a]" title="Disponível para Consultoria" />
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-white">
                      Cosme Araújo
                    </h3>
                    <p className="text-xs text-blue-400 font-semibold tracking-wide uppercase mt-0.5">
                      Consultor Comercial & Tráfego Pago
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Especialista em Estruturação e Escala de Operações de Vendas
                    </p>
                  </div>
                </div>

                {/* Simulated Strategic Growth Card */}
                <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                        Indicador de Eficiência
                      </span>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                      Metodologia Integrada
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                        <span>Lead ➔ Oportunidade Qualificada</span>
                        <span className="font-bold text-emerald-400">+185%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-emerald-400 h-full w-[85%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                        <span>Tempo Médio de Atendimento (SLA)</span>
                        <span className="font-bold text-blue-400">-70% tempo</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[92%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Pill 1 */}
                <div className="flex items-center justify-between bg-blue-950/60 border border-blue-800/60 rounded-xl p-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-blue-600/30 text-blue-400 rounded-lg">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-100">Crescimento Previsível</div>
                      <div className="text-[11px] text-slate-400">Processo padronizado & tráfego contínuo</div>
                    </div>
                  </div>
                  <span className="font-bold text-blue-400 text-sm">ROI Comercial</span>
                </div>

                {/* Floating Badge overlay */}
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-400" />
                    <span>Foco em PMEs e Gestores</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Diagnóstico Personalizado</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
