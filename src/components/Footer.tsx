import React from 'react';
import { MERCHANT_INFO } from '../data/courseData';
import { ActivePage } from '../types';
import { ShieldCheck, MapPin, Mail, Clock, Lock, TrendingUp, AlertTriangle, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigatePolicy: (page: ActivePage) => void;
  onOpenCheckout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePolicy, onOpenCheckout }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-xs text-slate-400">
      {/* Upper Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Col 1: Course & Merchant Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-yellow-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <span className="font-extrabold text-sm text-white tracking-tight">
                {MERCHANT_INFO.brandName}
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Official course platform for "Advanced Trading Indicators and Trading Tips" video playlist. Designed for systematic retail and positional traders in India.
            </p>

            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1">
              <div className="text-[11px] text-slate-400">Merchant Identity:</div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Operated by {MERCHANT_INFO.merchantName}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Hardcoded Registered Address & Contact (MANDATORY KYC) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Business &amp; Registered Address
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>{MERCHANT_INFO.registeredAddress}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-300 pt-1">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${MERCHANT_INFO.supportEmail}`}
                  className="text-amber-400 hover:text-amber-300 underline font-medium"
                >
                  {MERCHANT_INFO.supportEmail}
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-400 pt-1 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Support Hours: {MERCHANT_INFO.supportHours}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Mandatory Legal Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Mandatory Legal Policies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigatePolicy('terms')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePolicy('privacy')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePolicy('refund')}
                  className="text-amber-400 hover:underline font-semibold text-left"
                >
                  Refund &amp; Cancellation Policy (No Refunds)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePolicy('shipping')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Shipping &amp; Digital Delivery Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigatePolicy('contact')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Contact Us &amp; KYC Verification
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Payment Gateway Security & Quick Enroll */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Secure Checkout &amp; Delivery
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              256-bit encrypted checkout. Accepted via Indian UPI, RuPay, Visa, MasterCard &amp; NetBanking.
            </p>

            <button
              onClick={onOpenCheckout}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Enroll Now for ₹99</span>
            </button>

            <div className="pt-2 text-[10px] text-slate-500 text-center">
              Delivery: Instant automated unlisted playlist email.
            </div>
          </div>
        </div>

        {/* Bottom SEBI Disclaimer */}
        <div className="mt-10 pt-6 border-t border-slate-900">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>SEBI Regulatory &amp; Financial Risk Notice:</span>
            </div>
            <p>
              {MERCHANT_INFO.merchantName} is NOT a SEBI registered investment adviser or research analyst. All courses, indicators, setups, and materials are purely for educational and training purposes. We do not provide stock recommendations or guaranteed profit schemes. Trading in derivatives (Futures &amp; Options) and equity markets involves significant risk of capital loss.
            </p>
          </div>
        </div>

        {/* Copyright & Gateway trust */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {MERCHANT_INFO.merchantName}. All Rights Reserved. Product: Advanced Trading Indicators and Trading Tips.
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">UPI</span>
            <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">RuPay</span>
            <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">Visa / MC</span>
            <span className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800">NetBanking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
