import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Heart, Clock, FileText } from 'lucide-react';
import { personalInfo, translations } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { playClickSound } from '../utils/audio';

export default function Footer() {
  const [time, setTime] = useState('');
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Ho_Chi_Minh',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Local Clock */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <span className="text-sm font-bold text-white">Kim Anh — Android Developer</span>
            <p className="text-xs text-slate-500 font-mono">
              {t.designedBy}
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>HCM City {time || '10:00 AM'} (GMT+7)</span>
          </div>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            title="View CV"
          >
            <FileText className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top & copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> © {new Date().getFullYear()} {t.copyright}
          </span>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
