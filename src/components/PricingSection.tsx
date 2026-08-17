import React from 'react';
import { CheckCircle2, ShieldCheck, Lock, Sparkles, ArrowRight, Zap, RefreshCw, HelpCircle } from 'lucide-react';
import { MERCHANT_INFO } from '../data/courseData';

interface PricingSectionProps {
  onOpenCheckout: () => void;
  onOpenRefundPolicy: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenCheckout,
  onOpenRefundPolicy
}) => {
  return (
    <section id="pricing" className="py-16 sm:py-24 border-b border-slate-800/60 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Affordable Practical Education
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparent Pricing &amp; Instant Digital Delivery
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            No recurring monthly charges. No expensive subscription commitments. Unlock the entire 13-video masterclass playlist for a single flat fee.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border-2 border-amber-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-amber-500/10 relative overflow-hidden">
          {/* Top Badge */}
          <div className="absolute top-0 right-0">
            <div className="bg-gradient-to-l from-amber-500 to-yellow-500 text-slate-950 font-extrabold text-[11px] sm:text-xs uppercase px-5 py-1.5 rounded-bl-2xl tracking-wider shadow-md">
              Limited Time Offer • 96% OFF
            </div>
          </div>

          {/* Pricing Header */}
          <div className="text-center space-y-3 pb-8 border-b border-slate-800 pt-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Advanced Trading Indicators &amp; Trading Tips Playlist
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Complete 7.5+ Hours Video Course • Private Unlisted YouTube Playlist Access
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pt-3">
              <div className="flex items-baseline gap-3">
                <span className="text-slate-500 line-through text-2xl font-semibold">₹2,499</span>
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">₹99</span>
              </div>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Limited Time Special Price
              </span>
            </div>
            <p className="text-[11px] text-slate-500">One-time payment • Lifetime access</p>
          </div>

          {/* Deliverables Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-8 border-b border-slate-800/80">
            {[
              "13 Structured High-Definition Video Lessons",
              "VWAP & Standard Deviation Bands Framework",
              "9, 21, 50, 200 EMA Ribbon Trend System",
              "Volume Profile (POC, VAH, VAL) & Order Flow",
              "RSI Hidden & Regular Divergence Triggers",
              "1% Fixed Fractional Risk Management Sheet",
              "5 Real Market Trades Breakdown (Nifty / Stocks)",
              "Mobile, Tablet & Desktop Unlisted Playlist Link"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CRITICAL COMPLIANCE DELIVERY NOTICE (EXACT REQUIRED TEXT) */}
          <div className="my-6 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-amber-300 font-bold text-xs sm:text-sm">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Mandatory Product Delivery Policy</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-amber-100/95 leading-relaxed">
              "Delivery: Upon successful payment, you will instantly receive a secure, private link to the complete YouTube playlist via email."
            </p>
            <p className="text-[11px] text-amber-300/80">
              Dispatched automatically within 0–10 minutes to your checkout email address.
            </p>
          </div>

          {/* Checkout CTA */}
          <div className="space-y-4">
            <button
              id="pricing-cta-buy-now"
              onClick={onOpenCheckout}
              className="w-full py-4 sm:py-5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-lg sm:text-xl shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>Buy Now — Instant Access ₹99 (Limited Time Offer)</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Supported Payment Options & Trust */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>UPI (GPay, PhonePe, Paytm), Cards, NetBanking</span>
              </div>

              <button
                onClick={onOpenRefundPolicy}
                className="text-[11px] text-slate-400 hover:text-amber-400 underline"
              >
                View Digital Refund &amp; Cancellation Policy
              </button>
            </div>
          </div>
        </div>

        {/* Merchant KYC Summary Card below pricing */}
        <div className="mt-8 max-w-3xl mx-auto p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Operated by <strong className="text-white">{MERCHANT_INFO.merchantName}</strong> • Registered Address: {MERCHANT_INFO.registeredAddress}
            </span>
          </div>
          <a
            href={`mailto:${MERCHANT_INFO.supportEmail}`}
            className="text-amber-400 hover:underline shrink-0 font-medium"
          >
            {MERCHANT_INFO.supportEmail}
          </a>
        </div>
      </div>
    </section>
  );
};
