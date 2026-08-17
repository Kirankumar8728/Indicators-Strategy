import React from 'react';
import { LEGAL_POLICIES } from '../data/legalPolicies';
import { MERCHANT_INFO } from '../data/courseData';
import { ActivePage } from '../types';
import { ArrowLeft, ShieldCheck, AlertTriangle, Mail, MapPin, Clock, FileText, CheckCircle2, Lock, Sparkles } from 'lucide-react';

interface PolicyViewProps {
  page: ActivePage;
  onBack: () => void;
  onOpenCheckout: () => void;
}

export const PolicyView: React.FC<PolicyViewProps> = ({ page, onBack, onOpenCheckout }) => {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-200 py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Back to Home Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 mb-6 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Main Landing Page
      </button>

      {/* Main Card Container */}
      <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8">
        {/* ========================================================================= */}
        {/* 1. REFUND AND CANCELLATION POLICY (CRITICAL MANDATORY FOR KYC) */}
        {/* ========================================================================= */}
        {page === 'refund' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-2">
                <FileText className="w-3.5 h-3.5" /> Digital Product Policy
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
                Refund and Cancellation Policy
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Last updated: {LEGAL_POLICIES.refundPolicy.lastUpdated} • Product: Advanced Trading Indicators and Trading Tips
              </p>
            </div>

            {/* CRITICAL EXACT MANDATORY STATEMENT */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>Mandatory Digital Product Sales Notice:</span>
              </div>
              <p className="text-amber-100 font-bold text-sm sm:text-base leading-relaxed">
                "Because this is a digital information product, all sales are final. Strictly NO REFUNDS are provided on digital course purchases once the playlist link has been delivered."
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {LEGAL_POLICIES.refundPolicy.sections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {section.heading}
                  </h3>
                  <div className="whitespace-pre-line text-slate-300">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
              <h4 className="font-bold text-white text-sm">Need Help with Payment Resolution?</h4>
              <p className="text-slate-400">
                If money was deducted twice by your bank or UPI aggregator, write directly to <a href={`mailto:${MERCHANT_INFO.supportEmail}`} className="text-amber-400 underline font-medium">{MERCHANT_INFO.supportEmail}</a> with your transaction reference.
              </p>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. TERMS AND CONDITIONS */}
        {/* ========================================================================= */}
        {page === 'terms' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold mb-2">
                <ShieldCheck className="w-3.5 h-3.5" /> Legal Terms of Service
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
                Terms and Conditions
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Last updated: {LEGAL_POLICIES.termsAndConditions.lastUpdated} • Operated by {MERCHANT_INFO.merchantName}
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {LEGAL_POLICIES.termsAndConditions.sections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {section.heading}
                  </h3>
                  <p className="whitespace-pre-line text-slate-300">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. PRIVACY POLICY */}
        {/* ========================================================================= */}
        {page === 'privacy' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-2">
                <Lock className="w-3.5 h-3.5" /> Data Security &amp; Privacy
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
                Privacy Policy
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Last updated: {LEGAL_POLICIES.privacyPolicy.lastUpdated} • Compliance with IT Act, 2000
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {LEGAL_POLICIES.privacyPolicy.sections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {section.heading}
                  </h3>
                  <div className="whitespace-pre-line text-slate-300">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. SHIPPING & DIGITAL DELIVERY POLICY */}
        {/* ========================================================================= */}
        {page === 'shipping' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" /> Fulfillment &amp; Dispatch
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
                Shipping &amp; Digital Delivery Policy
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Instant delivery policy for online course access.
              </p>
            </div>

            {/* Exact delivery notice */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 font-semibold text-xs sm:text-sm leading-relaxed">
              "Delivery: Upon successful payment, you will instantly receive a secure, private link to the complete YouTube playlist via email."
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {LEGAL_POLICIES.shippingPolicy.sections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {section.heading}
                  </h3>
                  <div className="whitespace-pre-line text-slate-300">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. CONTACT & KYC DETAILS */}
        {/* ========================================================================= */}
        {page === 'contact' && (
          <div className="space-y-8">
            <div className="border-b border-slate-800 pb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
                <ShieldCheck className="w-3.5 h-3.5" /> Official KYC Merchant Profile
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
                Contact &amp; Business Information
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Verified merchant records for Indian payment gateway audit and customer communication.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase">Official Support Email</h3>
                <p className="text-xs text-slate-400">
                  For course delivery assistance, invoice queries, or technical access issues:
                </p>
                <p className="text-sm font-bold text-amber-400">
                  <a href={`mailto:${MERCHANT_INFO.supportEmail}`} className="hover:underline">
                    {MERCHANT_INFO.supportEmail}
                  </a>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase">Registered Operating Address</h3>
                <p className="text-xs text-slate-400">Exact physical KYC verified address:</p>
                <p className="text-sm font-medium text-slate-200 leading-relaxed">
                  {MERCHANT_INFO.registeredAddress}
                </p>
              </div>
            </div>

            {/* Merchant Details Table */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden text-xs">
              <div className="p-4 bg-slate-900 border-b border-slate-800 font-bold text-white text-sm">
                Compliance Verification Summary
              </div>
              <div className="divide-y divide-slate-800/80">
                <div className="p-3.5 flex justify-between">
                  <span className="text-slate-400">Legal Merchant Name:</span>
                  <span className="font-bold text-white">{MERCHANT_INFO.merchantName}</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-slate-400">Product Title:</span>
                  <span className="font-medium text-slate-200">Advanced Trading Indicators and Trading Tips</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-slate-400">Operational Hours:</span>
                  <span className="text-slate-200">{MERCHANT_INFO.supportHours}</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-slate-400">Response Turnaround:</span>
                  <span className="text-emerald-400 font-semibold">{MERCHANT_INFO.responseTurnaround}</span>
                </div>
                <div className="p-3.5 flex justify-between">
                  <span className="text-slate-400">Jurisdiction / District:</span>
                  <span className="text-slate-200">{MERCHANT_INFO.complianceJurisdiction}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA on all policy pages */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Have questions before joining? Email us at <a href={`mailto:${MERCHANT_INFO.supportEmail}`} className="text-amber-400 underline">{MERCHANT_INFO.supportEmail}</a>
          </div>

          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            Enroll in Course — ₹99
          </button>
        </div>
      </div>
    </div>
  );
};
