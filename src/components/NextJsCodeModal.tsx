import React, { useState, useEffect } from 'react';
import { X, Code2, Copy, Check, FileText, Server, ShieldCheck, Download, ExternalLink, Sparkles } from 'lucide-react';
import { NEXTJS_CODE_SNIPPETS, CodeSnippet } from '../data/nextJsSnippets';

interface NextJsCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NextJsCodeModal: React.FC<NextJsCodeModalProps> = ({ isOpen, onClose }) => {
  const [selectedSnippetIndex, setSelectedSnippetIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentSnippet: CodeSnippet = NEXTJS_CODE_SNIPPETS[selectedSnippetIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden my-6 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Code2 className="w-4 h-4" />
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Next.js &amp; Vercel Serverless Export Files
              </h3>
              <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                KYC Ready
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Copy &amp; paste these files directly into a new Next.js 14/15 project for instant deployment to Vercel.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          {/* File Explorer Sidebar */}
          <div className="md:col-span-4 bg-slate-950/90 border-r border-slate-800 p-3 sm:p-4 overflow-y-auto space-y-2">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
              Project File Structure
            </div>

            {NEXTJS_CODE_SNIPPETS.map((snippet, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedSnippetIndex(idx);
                  setCopied(false);
                }}
                className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 ${selectedSnippetIndex === idx ? 'bg-amber-500/15 border border-amber-500/40 text-amber-300 font-semibold' : 'bg-slate-900/50 border border-slate-800/60 text-slate-300 hover:bg-slate-800/60'}`}
              >
                {snippet.category === 'API Route & Backend' ? (
                  <Server className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <FileText className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                )}
                <div className="min-w-0">
                  <div className="truncate font-mono">{snippet.filePath}</div>
                  <div className="text-[10px] text-slate-500 truncate mt-0.5">{snippet.category}</div>
                </div>
              </button>
            ))}

            <div className="p-3 mt-4 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-1.5">
              <div className="font-bold text-slate-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>KYC Review Note:</span>
              </div>
              <p className="leading-relaxed">
                All mandatory legal disclosures (Operated by Kiran Kumar, JNTU, Hyderabad, support@dealsbomma.in, and strict no-refund policy for digital video courses) are already built-in.
              </p>
            </div>
          </div>

          {/* Code Viewer Panel */}
          <div className="md:col-span-8 flex flex-col bg-slate-900 overflow-hidden">
            {/* Action Bar */}
            <div className="p-3 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between gap-2 shrink-0">
              <div className="space-y-0.5 min-w-0">
                <div className="text-xs font-mono font-bold text-amber-400 truncate">
                  {currentSnippet.filePath}
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  {currentSnippet.description}
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-950" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Pre Block */}
            <div className="flex-1 p-4 overflow-auto bg-[#0a0d14] text-xs font-mono text-slate-300 leading-relaxed selection:bg-amber-500/30">
              <pre className="whitespace-pre overflow-x-auto">
                <code>{currentSnippet.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
