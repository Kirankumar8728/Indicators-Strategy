import React, { useState } from 'react';
import { Sparkles, ArrowRight, Play, ShieldCheck, CheckCircle2, Zap, Layers, BarChart2, Activity, Clock, Award, Star } from 'lucide-react';
import { MERCHANT_INFO } from '../data/courseData';

interface HeroProps {
  onOpenCheckout: () => void;
  onExploreSyllabus: () => void;
  onPreviewLesson: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCheckout,
  onExploreSyllabus,
  onPreviewLesson
}) => {
  const [activeThumbTab, setActiveThumbTab] = useState<'vwap' | 'ema' | 'volume' | 'risk'>('vwap');

  const previewTabs = {
    vwap: {
      title: 'Anchored VWAP & Standard Deviation Bands',
      tag: 'Module 2 • Lesson 4',
      duration: '38:20 HD',
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&auto=format&fit=crop&q=80',
      keyPoint: 'Pinpoint smart money institutional mean reversion with 1σ & 2σ bands.'
    },
    ema: {
      title: 'Multi-EMA Ribbon Confluence (9/21/50/200)',
      tag: 'Module 2 • Lesson 5',
      duration: '34:55 HD',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
      keyPoint: 'Dynamic trend compression cycle with zero-whipsaw pullback triggers.'
    },
    volume: {
      title: 'Volume Profile POC & Value Area (VAH/VAL)',
      tag: 'Module 3 • Lesson 8',
      duration: '36:10 HD',
      image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&auto=format&fit=crop&q=80',
      keyPoint: 'Identify high-conviction order blocks and retail trapped buyer squeezes.'
    },
    risk: {
      title: '1% Mathematical Sizing & Trailing R:R Matrix',
      tag: 'Module 4 • Lesson 11',
      duration: '32:15 HD',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      keyPoint: 'Formulaic lot/share sizing that protects capital across losing streaks.'
    }
  };

  const currentPreview = previewTabs[activeThumbTab];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20 border-b border-slate-800/60">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Full Video Masterclass Series</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14]">
              Master High-Probability Setups with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">
                Advanced Trading Indicators
              </span>{' '}
              &amp; Trading Tips
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Stop entering retail bull/bear traps with single lagging indicators. Master how professional institutional traders build an impenetrable edge using <strong className="text-white">VWAP, Multi-EMA Confluence, Volume Profile POC, and RSI Divergences</strong> with 1:3+ mathematical risk-to-reward frameworks.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-slate-300 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>13 HD Video Lessons (7.5+ Hours)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Paid Tools (Free TradingView Setup)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant YouTube Private Playlist Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>5 Real Market Live Trade Breakdowns</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                id="hero-cta-buy-now"
                onClick={onOpenCheckout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Get Instant Access — ₹99 <span className="text-xs bg-slate-950/20 px-2 py-0.5 rounded ml-1 font-bold">Limited Time</span></span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-syllabus"
                onClick={onExploreSyllabus}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Explore Course Thumbnails &amp; Syllabus</span>
              </button>
            </div>

            {/* Compliance Guarantee Badges */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Instructor: <strong className="text-white">{MERCHANT_INFO.merchantName}</strong>
              </span>
              <span className="text-slate-600">•</span>
              <span>100% Secure UPI &amp; Card Gateway</span>
              <span className="text-slate-600">•</span>
              <span>Instant Digital Delivery</span>
            </div>
          </div>

          {/* Right Column: Clean Masterclass Video Thumbnail Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5 shadow-2xl shadow-black/60 backdrop-blur-sm">
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Masterclass Video Preview
                  </span>
                </div>
                <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
                  13 LESSONS • ₹99 (LIMITED TIME)
                </span>
              </div>

              {/* Main Video Thumbnail with Play Button */}
              <div
                onClick={onPreviewLesson}
                className="group relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-700/80 cursor-pointer shadow-inner"
              >
                <img
                  src={currentPreview.image}
                  alt={currentPreview.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-950 bg-amber-400 px-2 py-0.5 rounded-md shadow-sm">
                    {currentPreview.tag}
                  </span>
                  <span className="text-[10px] font-mono text-slate-200 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {currentPreview.duration}
                  </span>
                </div>

                {/* Center Play Button with pulse glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-amber-500/90 group-hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/40 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                  </div>
                </div>

                {/* Bottom title inside thumbnail */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug drop-shadow-md">
                    {currentPreview.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                    {currentPreview.keyPoint}
                  </p>
                </div>
              </div>

              {/* Interactive Thumbnail Selector Tabs */}
              <div className="mt-3.5 grid grid-cols-4 gap-1.5">
                <button
                  onClick={() => setActiveThumbTab('vwap')}
                  className={`p-2 rounded-lg text-left transition-all text-[11px] font-semibold border ${
                    activeThumbTab === 'vwap'
                      ? 'bg-amber-500/15 border-amber-500/50 text-amber-300'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="font-mono text-[9px] uppercase text-amber-400/80">VWAP</div>
                  <div className="truncate font-medium">Bands</div>
                </button>

                <button
                  onClick={() => setActiveThumbTab('ema')}
                  className={`p-2 rounded-lg text-left transition-all text-[11px] font-semibold border ${
                    activeThumbTab === 'ema'
                      ? 'bg-amber-500/15 border-amber-500/50 text-amber-300'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="font-mono text-[9px] uppercase text-sky-400/80">EMA</div>
                  <div className="truncate font-medium">Ribbon</div>
                </button>

                <button
                  onClick={() => setActiveThumbTab('volume')}
                  className={`p-2 rounded-lg text-left transition-all text-[11px] font-semibold border ${
                    activeThumbTab === 'volume'
                      ? 'bg-amber-500/15 border-amber-500/50 text-amber-300'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="font-mono text-[9px] uppercase text-purple-400/80">Volume</div>
                  <div className="truncate font-medium">POC/VAH</div>
                </button>

                <button
                  onClick={() => setActiveThumbTab('risk')}
                  className={`p-2 rounded-lg text-left transition-all text-[11px] font-semibold border ${
                    activeThumbTab === 'risk'
                      ? 'bg-amber-500/15 border-amber-500/50 text-amber-300'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="font-mono text-[9px] uppercase text-emerald-400/80">Risk</div>
                  <div className="truncate font-medium">1% Rule</div>
                </button>
              </div>

              {/* Bottom Quick Trigger */}
              <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <button
                  onClick={onPreviewLesson}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5 hover:underline"
                >
                  <Play className="w-3.5 h-3.5 fill-amber-400" />
                  <span>Click to view lesson outline</span>
                </button>
                <button
                  onClick={onOpenCheckout}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  Unlock All 13 Lessons →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

