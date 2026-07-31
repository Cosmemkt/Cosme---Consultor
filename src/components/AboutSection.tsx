import React from 'react';
import { UserCheck, Briefcase, Award, CheckCircle2, Target, BarChart2 } from 'lucide-react';
import { ABOUT_DATA, BRAND_INFO } from '../data/landingData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#060a17] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Executive Profile Card Left */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 rounded-3xl blur-md opacity-30" />
              
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="w-full aspect-[4/5] sm:aspect-square rounded-2xl bg-slate-950 mb-6 flex flex-col items-center justify-center text-center relative overflow-hidden border border-amber-500/30 group">
                  <img
                    src="https://lh3.googleusercontent.com/d/1Vjfvq9AMi_vmkhnZ-nz2pwJ_yI5S9ozD=s1000?authuser=0"
                    alt="Cosme Araújo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to direct drive export or original if needed
                      (e.currentTarget as HTMLImageElement).src = "https://drive.google.com/uc?export=view&id=1Vjfvq9AMi_vmkhnZ-nz2pwJ_yI5S9ozD";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-left">
                    <h3 className="font-heading font-extrabold text-xl text-white drop-shadow-md">
                      Cosme Araújo
                    </h3>
                    <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      Consultor & Estrategista Comercial
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 flex items-center gap-3">
                    <Target className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-xs text-slate-300 font-medium">Visão integrada de Marketing + Vendas</span>
                  </div>

                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span className="text-xs text-slate-300 font-medium">Prospecção Ativa + Tráfego Pago</span>
                  </div>

                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 flex items-center gap-3">
                    <BarChart2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-xs text-slate-300 font-medium">Foco em Processos e Métricas de Conversão</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Copy Content Right */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Posicionamento Profissional</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              {ABOUT_DATA.title}
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed mb-8">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Practical highlights */}
            <div className="space-y-3 bg-slate-900/60 p-5 rounded-2xl border border-slate-800 mb-8">
              <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-2">
                Diferenciais da Atuação de Cosme Araújo
              </h4>
              {ABOUT_DATA.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 text-xs text-blue-300 font-medium">
              💡 <span className="font-bold text-white">Comunicação Direta:</span> Sem rodeios, sem falsas promessas de riqueza rápida. Apenas estratégias fundamentadas em dados, processos e execução comercial rigorosa.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
