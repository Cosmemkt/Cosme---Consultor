import React, { useState } from 'react';
import { Target, CheckSquare, Square, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { TARGET_AUDIENCE } from '../data/landingData';

interface TargetAudienceSectionProps {
  onOpenDiagnostic: () => void;
}

export const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({ onOpenDiagnostic }) => {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const toggleCard = (id: string) => {
    if (selectedCards.includes(id)) {
      setSelectedCards(selectedCards.filter(c => c !== id));
    } else {
      setSelectedCards([...selectedCards, id]);
    }
  };

  return (
    <section id="para-quem" className="py-20 md:py-28 bg-[#080d1a] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Target className="w-3.5 h-3.5 text-blue-400" />
            <span>Perfil de Empresa Ideal</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Esta consultoria pode ser ideal para sua empresa se você…
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Selecione as frases abaixo que correspondem ao momento atual do seu negócio para avaliar a aderência à nossa solução.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {TARGET_AUDIENCE.map((item) => {
            const isChecked = selectedCards.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleCard(item.id)}
                className={`rounded-2xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isChecked
                    ? 'bg-blue-950/90 border-blue-500 shadow-xl shadow-blue-600/20 ring-1 ring-blue-500/50'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
                      Ponto de Atenção
                    </span>
                    <button type="button" className="text-blue-400">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-blue-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-600 group-hover:text-slate-400" />
                      )}
                    </button>
                  </div>

                  <h3 className="font-heading font-extrabold text-base text-white mb-2 group-hover:text-blue-200 transition-colors">
                    “{item.text}”
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-medium text-slate-400 flex items-center justify-between">
                  <span>{isChecked ? 'Selecionado' : 'Clique para marcar'}</span>
                  {isChecked && <span className="text-blue-400 font-bold">100% Aderente</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Interactive Counter Banner */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Diagnóstico Rápido de Aderência
            </span>
          </div>

          <p className="text-base text-white font-semibold mb-4">
            Você marcou <span className="text-blue-400 font-extrabold text-xl">{selectedCards.length}</span> de <span className="text-slate-400 font-bold">8</span> cenários.
          </p>

          <p className="text-xs sm:text-sm text-slate-300 mb-6">
            {selectedCards.length === 0
              ? 'Clique em um ou mais cartões acima para simular a necessidade de estruturação da sua empresa.'
              : selectedCards.length <= 2
              ? 'Sua empresa já possui alguns pontos organizados, mas os pontos marcados representam gargalos diretos no faturamento.'
              : 'Sua empresa apresenta múltiplos sintomas de desconexão entre anúncios e vendas. O Diagnóstico Estratégico é altamente recomendado.'}
          </p>

          <button
            onClick={onOpenDiagnostic}
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
          >
            <span>Agendar Diagnóstico Para Minha Empresa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
