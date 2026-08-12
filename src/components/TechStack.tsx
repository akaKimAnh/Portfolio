import { useState } from 'react';
import { Cpu, Smartphone, ShieldCheck, Code2, Sparkles, Network } from 'lucide-react';
import { skills, translations } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { playClickSound } from '../utils/audio';

export default function TechStack() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Mobile Development', 'Auth & Security', 'Web Frontend'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Mobile Development': return Smartphone;
      case 'Auth & Security': return ShieldCheck;
      case 'Web Frontend': return Code2;
      default: return Network;
    }
  };

  const getCategoryLabel = (cat: string) => {
    if (cat === 'All') return t.all;
    if (cat === 'Mobile Development') return t.mobileDev;
    if (cat === 'Auth & Security') return t.authSec;
    if (cat === 'Web Frontend') return t.webFront;
    return cat;
  };

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Title */}
      <div className="flex flex-col items-center text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
          <Cpu className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.title} <span className="text-gradient-primary">{t.titleGradient}</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl">
          {t.subtitle}
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playClickSound();
                  setActiveCategory(cat);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSkills.map((skill) => {
          const CatIcon = getCategoryIcon(skill.category);
          return (
            <div
              key={skill.name}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400">
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    {skill.category}
                  </span>
                </div>

                {skill.description && (
                  <p className="text-xs text-slate-400 leading-relaxed font-sans pt-1">
                    {skill.description[lang]}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
