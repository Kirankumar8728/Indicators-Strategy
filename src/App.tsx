import React, { useState, useEffect } from 'react';
import { ActivePage, Lesson } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseCurriculum } from './components/CourseCurriculum';
import { PricingSection } from './components/PricingSection';
import { TrustAndKYC } from './components/TrustAndKYC';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PolicyView } from './components/PolicyView';
import { CheckoutModal } from './components/CheckoutModal';
import { NextJsCodeModal } from './components/NextJsCodeModal';
import { VideoPreviewModal } from './components/VideoPreviewModal';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCodeExportOpen, setIsCodeExportOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  // Scroll to top when page navigation happens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleNavigatePolicy = (page: ActivePage) => {
    setActivePage(page);
  };

  const handleBackToHome = () => {
    setActivePage('home');
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200 font-sans antialiased flex flex-col justify-between">
      {/* Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenCodeExport={() => setIsCodeExportOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' ? (
          <>
            <Hero
              onOpenCheckout={() => setIsCheckoutOpen(true)}
              onExploreSyllabus={() => {
                document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
              }}
              onPreviewLesson={() => {
                document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <CourseCurriculum
              onOpenCheckout={() => setIsCheckoutOpen(true)}
              onSelectLessonPreview={(lesson) => setSelectedLesson(lesson)}
            />

            <PricingSection
              onOpenCheckout={() => setIsCheckoutOpen(true)}
              onOpenRefundPolicy={() => setActivePage('refund')}
            />

            <TrustAndKYC onNavigatePolicy={handleNavigatePolicy} />

            <Testimonials />

            <FAQ onNavigatePolicy={handleNavigatePolicy} />
          </>
        ) : (
          <PolicyView
            page={activePage}
            onBack={handleBackToHome}
            onOpenCheckout={() => setIsCheckoutOpen(true)}
          />
        )}
      </main>

      {/* Footer with Hardcoded KYC Details on All Pages */}
      <Footer
        onNavigatePolicy={handleNavigatePolicy}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Interactive Checkout Modal (Razorpay / UPI simulation with invoice & YouTube link dispatch) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Next.js & Vercel Code Exporter Modal */}
      <NextJsCodeModal
        isOpen={isCodeExportOpen}
        onClose={() => setIsCodeExportOpen(false)}
      />

      {/* Lesson Preview Modal */}
      <VideoPreviewModal
        lesson={selectedLesson}
        onClose={() => setSelectedLesson(null)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />
    </div>
  );
}
