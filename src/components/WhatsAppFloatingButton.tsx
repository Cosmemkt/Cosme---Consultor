import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/landingData';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com Cosme Araújo"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-105 transition-all duration-300"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full" />
      </div>

      <div className="hidden sm:flex flex-col text-left">
        <span className="text-xs font-bold leading-tight">Diagnóstico Direto</span>
        <span className="text-[10px] text-emerald-100">Falar via WhatsApp</span>
      </div>
    </a>
  );
};
