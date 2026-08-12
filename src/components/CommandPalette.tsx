import { useState, useEffect } from 'react';
import { Search, Code2, Briefcase, Cpu, BookOpen, Mail, Github, Linkedin, Send, FileText, X, Languages } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { playClickSound, playSuccessSound, toggleSound } from '../utils/audio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: () => void;
}

export default function CommandPalette({ isOpen, onClose, onCopyEmail }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (selector: string) => {
    playClickSound();
    onClose();
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commandGroups = [
    {
      heading: lang === 'en' ? 'Navigation' : 'Điều hướng',
      items: [
        { id: 'hero', title: lang === 'en' ? 'Go to Hero & Bio' : 'Trang chủ & Giới thiệu', icon: Code2, action: () => navigateTo('#hero') },
        { id: 'projects', title: lang === 'en' ? 'View Android & Mobile Projects' : 'Xem Các Dự án Mobile & Web', icon: Briefcase, action: () => navigateTo('#projects') },
        { id: 'experience', title: lang === 'en' ? 'Check Experience Timeline' : 'Lịch sử Làm việc & Kinh nghiệm', icon: Briefcase, action: () => navigateTo('#experience') },
        { id: 'skills', title: lang === 'en' ? 'Inspect Tech Stack & Skills' : 'Kỹ năng & Công nghệ', icon: Cpu, action: () => navigateTo('#skills') },
        { id: 'blog', title: lang === 'en' ? 'Read Technical Blog Articles' : 'Đọc các Bài viết Kỹ thuật', icon: BookOpen, action: () => navigateTo('#blog') },
        { id: 'contact', title: lang === 'en' ? 'Send Message / Hire Me' : 'Gửi Tin nhắn / Liên hệ', icon: Mail, action: () => navigateTo('#contact') },
      ]
    },
    {
      heading: lang === 'en' ? 'Actions & Settings' : 'Thao tác & Cài đặt',
      items: [
        {
          id: 'switch-lang',
          title: lang === 'en' ? 'Switch Language to Tiếng Việt (VI)' : 'Chuyển sang English (EN)',
          icon: Languages,
          action: () => {
            playClickSound();
            toggleLang();
            onClose();
          }
        },
        {
          id: 'copy-email',
          title: `Copy Email (${personalInfo.email})`,
          icon: Mail,
          action: () => {
            playSuccessSound();
            onCopyEmail();
            onClose();
          }
        },
        {
          id: 'resume',
          title: lang === 'en' ? 'View & Download CV' : 'Xem & Tải Hồ sơ CV',
          icon: FileText,
          action: () => {
            playSuccessSound();
            window.open(personalInfo.resumeUrl, '_blank');
            onClose();
          }
        }
      ]
    },
    {
      heading: lang === 'en' ? 'Social Links' : 'Mạng xã hội',
      items: [
        { id: 'github', title: 'GitHub Profile', icon: Github, action: () => { window.open(personalInfo.github, '_blank'); onClose(); } },
        { id: 'linkedin', title: 'LinkedIn Profile', icon: Linkedin, action: () => { window.open(personalInfo.linkedin, '_blank'); onClose(); } },
        { id: 'telegram', title: 'Telegram Chat', icon: Send, action: () => { window.open(personalInfo.telegram, '_blank'); onClose(); } }
      ]
    }
  ];

  const filteredGroups = commandGroups.map(group => ({
    ...group,
    items: group.items.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md transition-all animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden glass-panel">
        {/* Top Search Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'en' ? 'Type a command or search...' : 'Nhập lệnh hoặc tìm kiếm...'}
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-4">
          {filteredGroups.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm font-mono">
              No matching commands found for &quot;{query}&quot;
            </div>
          ) : (
            filteredGroups.map(group => (
              <div key={group.heading} className="space-y-1">
                <div className="px-3 py-1 text-[11px] font-semibold text-slate-500 uppercase tracking-wider font-mono">
                  {group.heading}
                </div>
                {group.items.map(item => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm text-slate-300 hover:text-white hover:bg-blue-600/20 hover:border hover:border-blue-500/30 transition-all group cursor-pointer"
                    >
                      <div className="p-1.5 rounded-lg bg-slate-800 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="flex-1 font-medium">{item.title}</span>
                      <span className="text-[10px] text-slate-500 font-mono group-hover:text-blue-400">Select ↵</span>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Tip: Use ↑ ↓ keys to navigate, Esc to close</span>
          <span className="text-blue-400">Kim Anh Portfolio OS v2.5</span>
        </div>
      </div>
    </div>
  );
}
