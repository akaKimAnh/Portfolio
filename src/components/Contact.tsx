import { Mail, Send, MapPin, Check, Copy, MessageSquare, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo, translations } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { playClickSound, playSuccessSound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface ContactProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
}

export default function Contact({ onCopyEmail, emailCopied }: ContactProps) {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const handleDirectEmail = () => {
    playClickSound();
    playSuccessSound();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }
    const targetEmail = personalInfo.email || 'anhltk.work@gmail.com';
    const subject = encodeURIComponent('[Portfolio Contact] Trao đổi cơ hội công việc / Collaboration Inquiry');
    window.location.href = `mailto:${targetEmail}?subject=${subject}`;
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-28 sm:scroll-mt-32">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.title} <span className="text-gradient-primary">{t.titleGradient}</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        
        {/* Card 1: Direct Email & Action */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6 hover:border-blue-500/30 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{t.emailDirect}</h3>
                <p className="text-xs text-slate-400 font-mono">{personalInfo.email}</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Send an email directly from your preferred mail client or copy the address with one click.'
                : 'Gửi email trực tiếp bằng ứng dụng thư mặc định của bạn hoặc sao chép địa chỉ với 1 cú nhấp.'}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={handleDirectEmail}
              className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-xs shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.sendBtn}</span>
            </button>

            <button
              onClick={() => {
                playSuccessSound();
                onCopyEmail();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {emailCopied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">{t.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>{t.copyAddress}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Card 2: Professional Social Channels & Availability */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6 hover:border-purple-500/30 transition-colors">
          <div className="space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>{lang === 'en' ? 'Social Channels & Location' : 'Mạng Xã hội & Địa điểm'}</span>
            </h3>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 flex items-center gap-3 transition-all group"
              >
                <div className="p-2 rounded-lg bg-slate-800 text-slate-200 group-hover:text-white shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-white group-hover:text-blue-400 flex items-center gap-1">
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono truncate">@akaKimAnh</p>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 flex items-center gap-3 transition-all group"
              >
                <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-white group-hover:text-blue-400 flex items-center gap-1">
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </p>
                  <p className="text-[10px] text-slate-400 font-mono truncate">Kim Anh Le</p>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-400">{t.locationLabel}</p>
                <p className="text-xs font-bold text-white">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Availability Badge */}
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 online-pulse" />
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                {t.availabilityTitle}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.availabilityDesc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
