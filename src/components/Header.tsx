import React from 'react';
import { TrendingUp, CreditCard } from 'lucide-react';
import { ActivePage } from '../types';
import { MERCHANT_INFO } from '../data/courseData';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onOpenCheckout: () => void;
  onOpenCodeExport?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  onOpenCheckout
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800/80">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Brand */}
          <button
            id="nav-brand-logo"
            onClick={() => setActivePage('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-white tracking-tight flex items-center gap-1.5">
                <span>Advanced Trading Indicators</span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 font-semibold px-1.5 py-0.5 rounded border border-amber-500/30">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-none">
                Masterclass by <span className="text-slate-300 font-medium">{MERCHANT_INFO.merchantName}</span>
              </p>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-slate-300">
            <button
              id="nav-link-home"
              onClick={() => setActivePage('home')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${activePage === 'home' ? 'text-amber-400 bg-slate-800/80 font-semibold' : 'hover:text-white hover:bg-slate-800/50'}`}
            >
              Course Overview
            </button>
            <button
              id="nav-link-curriculum"
              onClick={() => {
                setActivePage('home');
                setTimeout(() => {
                  document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/50 transition-colors cursor-pointer"
            >
              Syllabus (13 Lessons)
            </button>
            <button
              id="nav-link-pricing"
              onClick={() => {
                setActivePage('home');
                setTimeout(() => {
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/50 transition-colors cursor-pointer"
            >
              Pricing (₹99)
            </button>
            <button
              id="nav-link-refund"
              onClick={() => setActivePage('refund')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${activePage === 'refund' ? 'text-amber-400 bg-slate-800/80 font-semibold' : 'hover:text-white hover:bg-slate-800/50'}`}
            >
              Refund Policy
            </button>
            <button
              id="nav-link-contact"
              onClick={() => setActivePage('contact')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${activePage === 'contact' ? 'text-amber-400 bg-slate-800/80 font-semibold' : 'hover:text-white hover:bg-slate-800/50'}`}
            >
              Contact / KYC
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              id="btn-header-buy-now"
              onClick={onOpenCheckout}
              className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <CreditCard className="w-4 h-4" />
              <span>Enroll ₹99</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
