import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/courseData';
import { HelpCircle, ChevronDown, ChevronUp, Mail, ShieldAlert } from 'lucide-react';
import { ActivePage } from '../types';

interface FAQProps {
  onNavigatePolicy: (page: ActivePage) => void;
}

export const FAQ: React.FC<FAQProps> = ({ onNavigatePolicy }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="py-16 sm:py-20 border-b border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Everything you need to know regarding digital delivery, access validity, and refund rules.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-100">
                    {item.question}
                  </span>
                  <div className="p-1 rounded bg-slate-800 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 border-t border-slate-800/60 bg-slate-950/40">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-3">
                      {item.answer}
                    </p>
                    {item.category === 'Refund Policy' && (
                      <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs">
                        <button
                          onClick={() => onNavigatePolicy('refund')}
                          className="text-amber-400 hover:underline font-semibold"
                        >
                          Read full Refund &amp; Cancellation Policy →
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
