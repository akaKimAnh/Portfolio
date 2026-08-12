import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Github, Linkedin, Mail, Download, Send, Check } from 'lucide-react';
import { personalInfo, translations } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { playClickSound, playSuccessSound } from '../utils/audio';
import { getAssetUrl } from '../utils/assetHelper';

interface HeroProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
}

export default function Hero({ onCopyEmail, emailCopied }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const [imgError, setImgError] = useState(false);

  const currentRoles = personalInfo.roles[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % currentRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [currentRoles.length]);

  const handleNavClick = (selector: string) => {
    playClickSound();
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="glow-spotlight w-96 h-96 bg-blue-600 top-10 left-1/2 -translate-x-1/2" />
      <div className="glow-spotlight w-80 h-80 bg-purple-600 top-40 -left-20" />
      <div className="glow-spotlight w-80 h-80 bg-pink-600 bottom-10 -right-20" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-lg shadow-blue-500/5 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-300 font-mono tracking-tight">
              {personalInfo.status[lang]}
            </span>
          </div>

          {/* Permanent Avatar Profile Frame */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>
            
            {imgError ? (
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-900 border-2 border-slate-700 flex flex-col items-center justify-center text-white shadow-2xl font-extrabold text-2xl font-mono">
                <span>KA</span>
                <span className="text-[10px] text-slate-400 font-sans font-normal mt-1">
                  {lang === 'en' ? 'No Image' : 'Lỗi Ảnh'}
                </span>
              </div>
            ) : (
              <img
                src={personalInfo.avatarUrl || getAssetUrl('/images/user.jpeg')}
                alt={personalInfo.name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('/images/user.jpg')) {
                    target.src = getAssetUrl('/images/user.jpg');
                  } else {
                    setImgError(true);
                  }
                }}
                className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-slate-800 shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
            )}

            <div className="absolute bottom-1 right-1 p-1.5 rounded-full bg-slate-900 border border-slate-700 text-blue-400 shadow-md">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              {t.greeting}{' '}
              <span className="text-gradient-primary">
                {personalInfo.name}
              </span>{' '}
              <span className="inline-block animate-bounce">👋</span>
            </h1>

            {/* Dynamic Role Typewriter */}
            <div className="h-10 flex items-center justify-center text-xl sm:text-2xl font-mono text-slate-300">
              <span className="text-blue-400 font-semibold">&lt;</span>
              <span className="mx-2 text-indigo-300 transition-all duration-300">
                {currentRoles[roleIndex % currentRoles.length]}
              </span>
              <span className="text-blue-400 font-semibold">/&gt;</span>
            </div>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
              {personalInfo.bio[lang]}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* View Work */}
            <button
              onClick={() => handleNavClick('#projects')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group cursor-pointer"
            >
              <span>{t.exploreWork}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Contact Me */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="px-6 py-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700 shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-blue-400" />
              <span>{t.getInTouch}</span>
            </button>

            {/* Quick Copy Email Pill */}
            <button
              onClick={() => {
                playSuccessSound();
                onCopyEmail();
              }}
              className="px-4 py-3 rounded-full bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white font-mono text-xs border border-slate-800 transition-all flex items-center gap-2 cursor-pointer"
              title="Click to copy email address"
            >
              {emailCopied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">{t.emailCopied}</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{personalInfo.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/10 transition-all hover:-translate-y-0.5"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/10 transition-all hover:-translate-y-0.5"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.telegram}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/10 transition-all hover:-translate-y-0.5"
              title="Telegram Chat"
            >
              <Send className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-600 transition-all hover:-translate-y-0.5 flex items-center gap-1.5 text-xs font-mono font-semibold"
              title="Download CV / Resume"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Key Stats Ticker Cards Grid */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
            {personalInfo.stats[lang].map((stat) => (
              <div
                key={stat.label}
                className="glass-panel glass-panel-hover p-4 rounded-2xl text-center space-y-1"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
