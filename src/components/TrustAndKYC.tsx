import React from 'react';
import { ShieldCheck, MapPin, Mail, Clock, AlertTriangle, FileCheck, CheckCircle2, UserCheck } from 'lucide-react';
import { MERCHANT_INFO } from '../data/courseData';
import { ActivePage } from '../types';

interface TrustAndKYCProps {
  onNavigatePolicy: (page: ActivePage) => void;
}

export const TrustAndKYC: React.FC<TrustAndKYCProps> = ({ onNavigatePolicy }) => {
  return (
    <section className="py-16 border-b border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Transparent &amp; KYC Verified
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Official Merchant &amp; Business Information
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Hardcoded business credentials in strict compliance with Indian payment aggregator guidelines (Razorpay, Cashfree, PhonePe, Instamojo).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1: Merchant Identity */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wide">Operated &amp; Owned By</h3>
            <p className="text-lg font-extrabold text-amber-400">
              {MERCHANT_INFO.merchantName}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Proprietor &amp; Lead Instructor for "Advanced Trading Indicators and Trading Tips".
            </p>
            <div className="pt-2 text-[11px] text-slate-500">
              Entity Type: <span className="text-slate-300 font-medium">{MERCHANT_INFO.entityType}</span>
            </div>
          </div>

          {/* Card 2: Registered Address */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wide">Registered Office Address</h3>
            <p className="text-sm font-medium text-slate-200 leading-relaxed">
              {MERCHANT_INFO.registeredAddress}
            </p>
            <p className="text-xs text-slate-400">
              Jurisdiction: <span className="text-slate-300 font-medium">{MERCHANT_INFO.complianceJurisdiction}</span>
            </p>
          </div>

          {/* Card 3: Support & Grievances */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wide">Official Support Email</h3>
            <p className="text-sm font-semibold text-amber-400">
              <a href={`mailto:${MERCHANT_INFO.supportEmail}`} className="hover:underline">
                {MERCHANT_INFO.supportEmail}
              </a>
            </p>
            <div className="space-y-1 text-xs text-slate-400">
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{MERCHANT_INFO.supportHours}</span>
              </p>
              <p className="text-[11px] text-emerald-400">
                Turnaround: {MERCHANT_INFO.responseTurnaround}
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory SEBI Disclaimer Block */}
        <div className="mt-8 max-w-5xl mx-auto p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-400 text-xs sm:text-sm">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Statutory Disclaimer under SEBI (Investment Advisers) Regulations</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            The course "Advanced Trading Indicators and Trading Tips" and all related playlist materials provided by <strong className="text-slate-200">{MERCHANT_INFO.merchantName}</strong> are strictly for <strong>educational and training purposes only</strong>. We do NOT provide stock recommendations, financial advice, or portfolio management services. Trading in equity, derivatives, and commodities involves high market risk. Please consult a qualified, SEBI-registered advisor before committing real capital.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] text-slate-400">
            <button onClick={() => onNavigatePolicy('terms')} className="text-amber-400 hover:underline">
              Read Complete Terms &amp; Disclaimers →
            </button>
            <button onClick={() => onNavigatePolicy('refund')} className="text-amber-400 hover:underline">
              Read Refund &amp; Cancellation Policy →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
