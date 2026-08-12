import { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Sparkles, CheckCircle2, Layers, Calendar, UserCheck, ShieldCheck, Mail } from 'lucide-react';
import { projects, translations } from '../data/portfolioData';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { playClickSound, playSuccessSound } from '../utils/audio';

interface ProjectDetailPageProps {
  projectId: string;
  onBack: () => void;
  onSelectProject: (id: string) => void;
}

export default function ProjectDetailPage({ projectId, onBack, onSelectProject }: ProjectDetailPageProps) {
  const { lang } = useLanguage();
  const t = translations[lang].detail;

  const project: Project | undefined = projects.find((p) => p.id === projectId) || projects[0];
  const otherProjects = projects.filter((p) => p.id !== project.id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  if (!project) return null;

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 max-w-5xl mx-auto space-y-12 animate-fadeIn">
      
      {/* Top Breadcrumb & Back Navigation */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <button
          onClick={() => {
            playClickSound();
            onBack();
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-all hover:-translate-x-1 cursor-pointer shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 text-blue-400" />
          <span>{t.backToProjects}</span>
        </button>

        <div className="text-xs font-mono text-slate-500 hidden sm:flex items-center gap-2">
          <span>Portfolio</span>
          <span>/</span>
          <span>Projects</span>
          <span>/</span>
          <span className="text-blue-400 font-bold">{project.title[lang]}</span>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="space-y-4 relative z-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800">
              {project.year}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1.5 text-xs font-mono text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                <Sparkles className="w-3.5 h-3.5" /> Featured Project
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {project.title[lang]}
          </h1>

          <p className="text-lg font-semibold text-indigo-300 max-w-2xl">
            {project.tagline[lang]}
          </p>

          {/* Key Info Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 text-blue-400 border border-slate-800">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-400">{t.category}</p>
                <p className="text-xs font-bold text-white">{project.category}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 text-indigo-400 border border-slate-800">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-400">{t.timeline}</p>
                <p className="text-xs font-bold text-white">{project.year}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 text-emerald-400 border border-slate-800">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-slate-400">{t.role}</p>
                <p className="text-xs font-bold text-white">{t.developerRole}</p>
              </div>
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={playSuccessSound}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold font-mono shadow-xl shadow-blue-500/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>{project.liveUrl.includes('play.google.com') ? 'Google Play Store' : t.openApp}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={playClickSound}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-bold font-mono flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span>{t.githubRepo}</span>
              </a>
            )}

            <a
              href="#contact"
              onClick={() => {
                playClickSound();
                onBack();
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800/80 text-xs font-mono flex items-center gap-2 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>{t.contactDev}</span>
            </a>
          </div>
        </div>

        {/* Project Feature Banner Image */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group bg-slate-900/90 flex items-center justify-center min-h-[260px] sm:min-h-[340px] p-4 sm:p-6">
          <img
            src={project.image}
            alt={project.title[lang]}
            className="max-h-80 sm:max-h-[380px] w-auto max-w-full object-contain group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Main Content Layout: Overview & Features */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Overview & Highlights (2 Cols) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Detailed Overview */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5 border-b border-slate-800 pb-3">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span>{t.projectOverview}</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-sans whitespace-pre-line">
              {project.description[lang]}
            </p>
          </div>

          {/* Key Features & Highlights */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5 border-b border-slate-800 pb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>{t.keyHighlights}</span>
            </h2>

            <ul className="space-y-3 pt-2">
              {project.highlights[lang].map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Tech Stack & Meta (1 Col) */}
        <div className="space-y-8">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>{t.techStack}</span>
            </h3>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-900 text-blue-300 border border-slate-800 hover:border-blue-500/40 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section: Explore Other Projects */}
      <div className="pt-8 border-t border-slate-800 space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span>{t.exploreOther}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                playClickSound();
                onSelectProject(p.id);
              }}
              className="group glass-panel p-4 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-3"
            >
              <div className="relative h-32 rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={p.image}
                  alt={p.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <span className="text-[10px] font-mono text-blue-400 font-semibold uppercase">{p.category}</span>
                <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                  {p.title[lang]}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {p.tagline[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
