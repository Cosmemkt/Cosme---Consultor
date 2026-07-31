import React from 'react';
import { Building2, Info, ShieldCheck, Award } from 'lucide-react';
import { COMPANIES_EXPERIENCE, BRAND_INFO } from '../data/landingData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 md:py-28 bg-[#080d1a] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>Bagagem Profissional</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Experiência aplicada em diferentes negócios e mercados.
          </h2>

          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Empresas, profissionais e projetos que já passaram por estratégias, metodologias ou operações relacionadas a vendas, marketing, tráfego e estruturação comercial.
          </p>
        </div>

        {/* Company Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
          {COMPANIES_EXPERIENCE.map((comp) => (
            <div
              key={comp.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-blue-600/60 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 group-hover:bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm mb-4 transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>

                <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-blue-300 transition-colors">
                  {comp.name}
                </h3>

                <p className="text-xs font-semibold text-blue-400 mt-0.5">
                  {comp.subtitle}
                </p>

                <p className="text-xs text-slate-400 mt-2">
                  {comp.category}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-300 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Estratégia & Operação</span>
              </div>
            </div>
          ))}

          {/* Complementary Badge */}
          <div className="bg-gradient-to-br from-blue-950/60 to-slate-900 border border-blue-800/50 rounded-2xl p-5 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Multisegmentos</span>
            </div>
            <p className="text-sm text-slate-200 font-medium leading-relaxed">
              Adaptabilidade para B2B, B2C, Educação, Serviços e Tecnologia.
            </p>
            <span className="text-[11px] text-slate-300 mt-3 font-semibold">Projetos de Médio e Grande Porte</span>
          </div>
        </div>

        {/* Mandatory Transparency Notice Box */}
        <div className="max-w-3xl mx-auto bg-slate-900/80 border border-slate-800 rounded-2xl p-5 text-center shadow-lg">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 mb-1">
            <Info className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="uppercase tracking-widest text-slate-300">Nota de Transparência</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 italic">
            “{BRAND_INFO.experienceDisclaimer}”
          </p>
        </div>

      </div>
    </section>
  );
};
