import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldAlert, CheckCircle2, RefreshCw, BarChart2 } from 'lucide-react';

interface DiagnosticCalculatorProps {
  onCompleteScore: (score: number, reportText: string) => void;
}

export const DiagnosticCalculator: React.FC<DiagnosticCalculatorProps> = ({ onCompleteScore }) => {
  const [q1, setQ1] = useState<number>(2); // Investimento em anúncios
  const [q2, setQ2] = useState<number>(2); // Tempo de resposta do comercial
  const [q3, setQ3] = useState<number>(2); // CRM e Funil de Vendas
  const [q4, setQ4] = useState<number>(2); // Previsibilidade e Indicações

  const calculateScore = () => {
    // Max score = 20
    const raw = q1 + q2 + q3 + q4;
    const scorePct = Math.round((raw / 20) * 100);
    return scorePct;
  };

  const scorePct = calculateScore();

  const getDiagnosticStatus = () => {
    if (scorePct < 45) {
      return {
        level: "Alta Vulnerabilidade Comercial",
        color: "text-rose-400 bg-rose-500/10 border-rose-500/30",
        summary: "Sua operação possui vazamentos graves entre marketing e atendimento. Grande parte do orçamento de anúncios pode estar sendo desperdiçada por falta de processos.",
        action: "O Diagnóstico Estratégico é urgente para interromper a perda de receita."
      };
    } else if (scorePct < 75) {
      return {
        level: "Operação Parcialmente Estruturada",
        color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
        summary: "Você gera leads e tem algumas vendas, mas falta padronização, acompanhamento sistemático de indicadores e previsibilidade.",
        action: "Ajustar o SLA de atendimento e integrar o tráfego ao comercial pode dobrar sua conversão."
      };
    } else {
      return {
        level: "Operação Pronta para Escalar",
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        summary: "Sua base comercial está boa! Agora o foco deve ser otimizar a conversão cirúrgica e acelerar o tráfego pago de alta intenção.",
        action: "Ideal para estruturar a escala sem perder margem nem qualidade de atendimento."
      };
    }
  };

  const status = getDiagnosticStatus();

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto my-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 text-blue-400 border border-blue-800/60 text-xs font-bold uppercase tracking-wider mb-2">
          <Calculator className="w-3.5 h-3.5" />
          <span>Simulador de Maturidade Comercial</span>
        </div>

        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
          Avalie a Eficiência da sua Operação Atual
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 mt-2">
          Responda a 4 perguntas rápidas e descubra seu nível de previsibilidade comercial.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        
        {/* Q1 */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <label className="text-xs font-bold text-slate-200 block mb-2">
            1. Como é seu investimento atual em Tráfego Pago / Anúncios?
          </label>
          <select
            value={q1}
            onChange={(e) => setQ1(Number(e.target.value))}
            aria-label="Investimento em anúncios"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
          >
            <option value={1}>Não invisto ou invisto muito pouco (&lt; R$ 1 mil/mês)</option>
            <option value={3}>Invisto entre R$ 2 mil e R$ 10 mil/mês com retorno incerto</option>
            <option value={5}>Invisto acima de R$ 10 mil/mês e quero acelerar com processo</option>
          </select>
        </div>

        {/* Q2 */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <label className="text-xs font-bold text-slate-200 block mb-2">
            2. Quanto tempo seu comercial demora para responder um novo lead?
          </label>
          <select
            value={q2}
            onChange={(e) => setQ2(Number(e.target.value))}
            aria-label="Tempo de resposta do comercial"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
          >
            <option value={1}>Mais de 24 horas ou sem prazo definido</option>
            <option value={3}>Entre 2 e 6 horas após o contato</option>
            <option value={5}>Em menos de 15 minutos com SDR/equipe rápida</option>
          </select>
        </div>

        {/* Q3 */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <label className="text-xs font-bold text-slate-200 block mb-2">
            3. Como é a organização do CRM e Funil de Vendas?
          </label>
          <select
            value={q3}
            onChange={(e) => setQ3(Number(e.target.value))}
            aria-label="Organização do CRM e Funil de Vendas"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
          >
            <option value={1}>Controle informal no WhatsApp ou cadernos</option>
            <option value={3}>Usamos CRM mas a equipe esquece de atualizar</option>
            <option value={5}>CRM totalmente integrado com etapas e métricas claras</option>
          </select>
        </div>

        {/* Q4 */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <label className="text-xs font-bold text-slate-200 block mb-2">
            4. Qual a dependência atual de Indicações para vender?
          </label>
          <select
            value={q4}
            onChange={(e) => setQ4(Number(e.target.value))}
            aria-label="Dependência atual de indicações"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
          >
            <option value={1}>Mais de 80% das vendas vêm apenas de indicação</option>
            <option value={3}>Dependemos de indicação + alguns contatos passivos</option>
            <option value={5}>Temos um canal ativo/previsível de novas oportunidades</option>
          </select>
        </div>

      </div>

      {/* Results Display */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-left">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-full border-4 border-slate-800 flex items-center justify-center bg-slate-900 font-extrabold text-2xl text-white">
              {scorePct}%
            </div>
          </div>

          <div>
            <span className={`text-xs font-bold px-2.5 py-1 rounded border uppercase tracking-wider inline-block mb-1 ${status.color}`}>
              {status.level}
            </span>
            <p className="text-xs text-slate-300 max-w-lg mt-1">
              {status.summary}
            </p>
          </div>
        </div>

        <button
          onClick={() => onCompleteScore(scorePct, `${status.level} (${scorePct}%) - ${status.action}`)}
          className="flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 shrink-0 transition-all cursor-pointer w-full sm:w-auto"
        >
          <span>Receber Análise Completa</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
