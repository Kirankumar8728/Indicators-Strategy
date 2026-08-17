import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Clock, Target, CheckCircle2, ShieldCheck, ArrowRight, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';
import { Lesson } from '../types';

interface VideoPreviewModalProps {
  lesson: Lesson | null;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({
  lesson,
  onClose,
  onOpenCheckout
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!lesson) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lesson, onClose]);

  if (!lesson) return null;

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-amber-500/10 text-amber-400">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Lesson Breakdown &amp; Video Preview
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Simulated Video Player with Lesson Thumbnail */}
        <div className="relative w-full aspect-video bg-black overflow-hidden border-b border-slate-800">
          <img
            src={lesson.thumbnailUrl}
            alt={lesson.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isPlaying ? 'opacity-90' : 'opacity-75'
            }`}
          />

          {/* Player Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Top Player Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="text-[10px] font-bold text-slate-950 bg-amber-400 px-2 py-0.5 rounded shadow-md">
              {lesson.highlightBadge || lesson.category}
            </span>
            <span className="text-[10px] font-mono text-white bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
              1080p HD • {lesson.duration}
            </span>
          </div>

          {/* Center Play/Pause Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl shadow-amber-500/30 transition-transform transform hover:scale-110 cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-slate-950" />
              ) : (
                <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
              )}
            </button>
          </div>

          {/* Bottom Player Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-1.5">
            {/* Progress bar */}
            <div className="w-full h-1 rounded-full bg-slate-700 overflow-hidden cursor-pointer">
              <div className={`h-full bg-amber-400 ${isPlaying ? 'w-2/5 animate-pulse' : 'w-1/4'}`} />
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-300 font-mono pt-1">
              <div className="flex items-center gap-2">
                <span>{isPlaying ? '04:12' : '00:00'} / {lesson.duration}</span>
                <span className="text-slate-500">•</span>
                <span className="text-amber-400 text-[10px]">Private Unlisted YouTube Player</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1 text-slate-300 hover:text-white"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[50vh] overflow-y-auto">
          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              {lesson.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lesson.description}
            </p>
          </div>

          {/* Indicators covered */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
            <div className="font-bold text-slate-200">Tools &amp; Indicators Covered in this Video:</div>
            <div className="flex flex-wrap gap-1.5">
              {lesson.indicators.map((ind, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-700 text-amber-300 font-mono text-[11px]"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Key Edge */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Target className="w-4 h-4" />
              <span>Institutional Rule / Edge:</span>
            </div>
            <p className="text-amber-100 font-medium leading-relaxed text-xs">
              {lesson.keyTakeaway}
            </p>
          </div>

          {/* Delivery Note */}
          <div className="text-[11px] text-slate-400 text-center py-1">
            Instant digital access via email immediately upon ₹99 payment.
          </div>

          {/* Action */}
          <div className="pt-1">
            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Unlock All 13 Video Lessons for ₹99</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

