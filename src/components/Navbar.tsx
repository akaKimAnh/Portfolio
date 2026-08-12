import { useState, useEffect } from 'react';
import { Command, Sparkles, Languages } from 'lucide-react';
import { playClickSound } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, translations } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assetHelper';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  activeSection: string;
  onNavigateHome?: () => void;
}

export default function Navbar({ onOpenCommandPalette, activeSection, onNavigateHome }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.about, href: '#hero' },
    { label: t.projects, href: '#projects' },
    { label: t.experience, href: '#experience' },
    { label: t.skills, href: '#skills' },
    { label: t.blog, href: '#blog' },
    { label: t.contact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    playClickSound();
    if (onNavigateHome) {
      onNavigateHome();
    }
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header
      className={`fixed top-4 inset-x-0 z-40 flex justify-center px-4 transition-all duration-300 ${
        scrolled ? 'py-1' : 'py-2'
      }`}
    >
      <div className="glass-panel rounded-full px-4 py-2 flex items-center justify-between w-full max-w-4xl shadow-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <img
            src={personalInfo.avatarUrl || getAssetUrl('/images/user.jpeg')}
            alt={personalInfo.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = getAssetUrl('/images/user.jpg');
            }}
            className="w-8 h-8 rounded-full object-cover border border-blue-500/40 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
              Kim Anh
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block online-pulse" />
            </span>
            <span className="text-[10px] text-slate-400 font-mono hidden sm:inline-block">
              Android Developer
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-blue-600/20 border border-blue-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2">
          {/* Language Toggle Button */}
          <button
            onClick={() => {
              playClickSound();
              toggleLang();
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold transition-all cursor-pointer"
            title={lang === 'en' ? 'Chuyển sang Tiếng Việt' : 'Switch to English'}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              playClickSound();
              onOpenCommandPalette();
            }}
            className="flex items-center gap-1 p-2 sm:px-2.5 sm:py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs transition-all cursor-pointer group"
            title="Open Command Palette"
          >
            <Command className="w-3.5 h-3.5 text-blue-400 group-hover:rotate-12 transition-transform" />
          </button>

          {/* CTA Contact button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.contact}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
