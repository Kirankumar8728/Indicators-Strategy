import React, { useState } from 'react';
import { COURSE_MODULES } from '../data/courseData';
import { BookOpen, ChevronDown, ChevronUp, Clock, Play, Shield, Target, Award, CheckCircle2, ArrowRight, LayoutGrid, List, Sparkles } from 'lucide-react';
import { Lesson } from '../types';

interface CourseCurriculumProps {
  onOpenCheckout: () => void;
  onSelectLessonPreview: (lesson: Lesson) => void;
}

export const CourseCurriculum: React.FC<CourseCurriculumProps> = ({
  onOpenCheckout,
  onSelectLessonPreview
}) => {
  const [viewMode, setViewMode] = useState<'thumbnails' | 'accordion'>('thumbnails');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedModules, setExpandedModules] = useState<string[]>(['mod-1', 'mod-2']);

  // Flatten lessons for thumbnail grid view
  const allLessons = COURSE_MODULES.flatMap(mod =>
    mod.lessons.map(les => ({ ...les, moduleTitle: mod.title, moduleNumber: mod.moduleNumber }))
  );

  const categories = ['All', 'Indicators', 'Strategy', 'Foundation', 'Risk Management', 'Live Execution'];

  const filteredLessons = selectedCategory === 'All'
    ? allLessons
    : allLessons.filter(l => l.category === selectedCategory);

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const expandAll = () => {
    setExpandedModules(COURSE_MODULES.map(m => m.id));
  };

  const collapseAll = () => {
    setExpandedModules([]);
  };

  return (
    <section id="curriculum" className="py-14 sm:py-20 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> 13 Video Masterclass Playlist
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Course Modules &amp; Video Lessons
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Browse through the 13 structured video lessons included in the private YouTube playlist. Each video delivers practical trading indicator strategies with zero fluff.
          </p>

          {/* View Mode & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/60 mt-6">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat === 'All' ? 'All 13 Lessons' : cat}
                </button>
              ))}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 shrink-0">
              <button
                onClick={() => setViewMode('thumbnails')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  viewMode === 'thumbnails'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Thumbnail Cards</span>
              </button>

              <button
                onClick={() => setViewMode('accordion')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  viewMode === 'accordion'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>Syllabus View</span>
              </button>
            </div>
          </div>
        </div>

        {/* THUMBNAILS GRID VIEW */}
        {viewMode === 'thumbnails' ? (
          <div>
            {/* Module Showcase Banners */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {COURSE_MODULES.map((mod) => (
                <div
                  key={mod.id}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 p-3.5 space-y-2.5 flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                    <img
                      src={mod.thumbnailUrl}
                      alt={mod.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute top-2 left-2">
                      <span className="text-[10px] font-bold text-amber-400 bg-black/70 px-2 py-0.5 rounded border border-amber-500/30">
                        MODULE {mod.moduleNumber}
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 text-left">
                      <span className="text-[10px] font-mono text-emerald-400 bg-black/60 px-1.5 py-0.5 rounded">
                        {mod.totalDuration} • {mod.lessonCount} Videos
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-white line-clamp-1">{mod.title}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug">{mod.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Individual Video Lessons Cards with Large Thumbnails */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="group rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-amber-500/5 hover:-translate-y-1"
                >
                  {/* Thumbnail Image Header */}
                  <div
                    onClick={() => onSelectLessonPreview(lesson)}
                    className="relative w-full aspect-video bg-slate-950 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={lesson.thumbnailUrl}
                      alt={lesson.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                    />

                    {/* Gradient shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                    {/* Highlight Badge */}
                    {lesson.highlightBadge && (
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold text-slate-950 bg-amber-400 px-2 py-0.5 rounded shadow-sm">
                          {lesson.highlightBadge}
                        </span>
                      </div>
                    )}

                    {/* Duration pill */}
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-mono font-semibold text-white bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        {lesson.duration}
                      </span>
                    </div>

                    {/* Center Play Icon on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-amber-500/90 group-hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-all duration-300">
                        <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                      </div>
                    </div>

                    {/* Category Stamp */}
                    <div className="absolute bottom-2.5 left-3">
                      <span className="text-[10px] font-mono uppercase text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-700">
                        {lesson.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                        {lesson.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {lesson.description}
                      </p>
                    </div>

                    {/* Indicators list */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[10px] uppercase font-semibold text-slate-500">Indicators:</div>
                      <div className="flex flex-wrap gap-1">
                        {lesson.indicators.map((ind, i) => (
                          <span
                            key={i}
                            className="text-[10px] bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800 font-mono"
                          >
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Takeaway */}
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-200/90 flex items-start gap-1.5">
                      <Target className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2"><strong>Key Edge:</strong> {lesson.keyTakeaway}</span>
                    </div>

                    {/* Action button */}
                    <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                      <button
                        onClick={() => onSelectLessonPreview(lesson)}
                        className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-amber-400" />
                        <span>Preview Breakdown</span>
                      </button>

                      <button
                        onClick={onOpenCheckout}
                        className="text-xs font-bold text-emerald-400 hover:text-emerald-300 cursor-pointer"
                      >
                        Unlock in ₹99 →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* DETAILED ACCORDION VIEW */
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-end gap-4 text-xs pb-2">
              <button
                onClick={expandAll}
                className="text-amber-400 hover:text-amber-300 underline font-medium cursor-pointer"
              >
                Expand All Modules
              </button>
              <span className="text-slate-600">•</span>
              <button
                onClick={collapseAll}
                className="text-slate-400 hover:text-slate-200 underline font-medium cursor-pointer"
              >
                Collapse All
              </button>
            </div>

            {COURSE_MODULES.map((module) => {
              const isExpanded = expandedModules.includes(module.id);

              return (
                <div
                  key={module.id}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden transition-all shadow-md"
                >
                  {/* Module Header Toggle */}
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      {/* Module Thumbnail Small */}
                      <div className="hidden sm:block w-20 aspect-video rounded-lg overflow-hidden bg-slate-950 shrink-0 border border-slate-800">
                        <img
                          src={module.thumbnailUrl}
                          alt={module.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover opacity-80"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                            MODULE {module.moduleNumber}
                          </span>
                          <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                            <Clock className="w-3.5 h-3.5 text-slate-400" /> {module.totalDuration} • {module.lessonCount} Lessons
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {module.title}
                        </h3>
                        <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                          {module.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-800 text-slate-300 shrink-0 mt-1 sm:mt-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Lessons Expanded Content */}
                  {isExpanded && (
                    <div className="border-t border-slate-800/80 bg-slate-950/60 divide-y divide-slate-800/60">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="p-4 sm:p-5 hover:bg-slate-900/40 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                        >
                          <div className="flex items-start gap-3 flex-1">
                            {/* Small Lesson Thumbnail */}
                            <div
                              onClick={() => onSelectLessonPreview(lesson)}
                              className="w-24 aspect-video rounded-lg overflow-hidden bg-slate-950 shrink-0 border border-slate-800 cursor-pointer relative group"
                            >
                              <img
                                src={lesson.thumbnailUrl}
                                alt={lesson.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform"
                              />
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                              </div>
                            </div>

                            <div className="space-y-1.5 flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <h4 className="text-xs sm:text-sm font-semibold text-slate-200">
                                  {lesson.title}
                                </h4>
                                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                  {lesson.duration}
                                </span>
                              </div>

                              <p className="text-xs text-slate-400 leading-relaxed">
                                {lesson.description}
                              </p>

                              {/* Indicators */}
                              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                <span className="text-[10px] text-slate-500 font-semibold uppercase">Tools:</span>
                                {lesson.indicators.map((ind, i) => (
                                  <span
                                    key={i}
                                    className="text-[10px] bg-slate-800/90 text-slate-300 px-2 py-0.5 rounded border border-slate-700 font-mono"
                                  >
                                    {ind}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="shrink-0 self-start sm:self-center">
                            <button
                              onClick={() => onSelectLessonPreview(lesson)}
                              className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold px-2.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors cursor-pointer"
                            >
                              <span>Preview</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">Ready to Master All 13 Video Lessons?</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Get immediate lifetime access to the entire private YouTube playlist for just ₹99 (Limited Time Offer).
            </p>
          </div>

          <button
            id="curriculum-cta-buy-now"
            onClick={onOpenCheckout}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Enroll for ₹99</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

