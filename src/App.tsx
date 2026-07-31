import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { DiagnosticCalculator } from './components/DiagnosticCalculator';
import { CTASection } from './components/CTASection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { TrackingModal } from './components/TrackingModal';

export default function App() {
  const [trackingModalOpen, setTrackingModalOpen] = useState(false);
  const [diagnosticReportText, setDiagnosticReportText] = useState('');

  const handleOpenDiagnostic = () => {
    const section = document.getElementById('agendamento');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCalculatorComplete = (score: number, reportText: string) => {
    setDiagnosticReportText(reportText);
    handleOpenDiagnostic();
  };

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Top Navbar */}
      <Navbar
        onOpenDiagnostic={handleOpenDiagnostic}
        onOpenTracking={() => setTrackingModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Seção 1: Hero */}
        <HeroSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* Seção 2: Problema */}
        <ProblemSection />

        {/* Seção 3: Solução & 3 Pilares */}
        <SolutionSection />

        {/* Seção 4: Sobre Cosme Araújo */}
        <AboutSection />

        {/* Seção 5: Experiência & Empresas */}
        <ExperienceSection />

        {/* Seção 6: Como Funciona */}
        <HowItWorksSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* Seção 7: Para Quem É */}
        <TargetAudienceSection onOpenDiagnostic={handleOpenDiagnostic} />

        {/* Seção 8: Diferenciais */}
        <DifferentiatorsSection />

        {/* Interactive Business Diagnostic Calculator */}
        <section className="py-8 bg-[#060a17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DiagnosticCalculator onCompleteScore={handleCalculatorComplete} />
          </div>
        </section>

        {/* Seção 9: CTA & Formulário de Agendamento */}
        <CTASection initialReportText={diagnosticReportText} />

        {/* Seção 10: FAQ */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenTracking={() => setTrackingModalOpen(true)} />

      {/* WhatsApp Direct Action Button */}
      <WhatsAppFloatingButton />

      {/* Tracking / Pixel Configuration Modal */}
      <TrackingModal
        isOpen={trackingModalOpen}
        onClose={() => setTrackingModalOpen(false)}
      />

    </div>
  );
}
