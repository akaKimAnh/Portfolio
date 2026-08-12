import { useState, FormEvent } from 'react';
import { Mail, Send, MapPin, Check, Copy, MessageSquare, Sparkles } from 'lucide-react';
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    playClickSound();

    const targetEmail = personalInfo.email || 'anhltk.work@gmail.com';
    const emailSubject = encodeURIComponent(formData.subject || `[Portfolio Contact] Message from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Họ và tên / Full Name: ${formData.name}\n` +
      `Email liên hệ / Contact Email: ${formData.email}\n` +
      `Tiêu đề / Subject: ${formData.subject || 'Không có tiêu đề'}\n\n` +
      `Nội dung tin nhắn / Message:\n${formData.message}`
    );

    // Open mail client addressed to anhltk.work@gmail.com
    window.location.href = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      playSuccessSound();

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Title */}
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side Info Cards (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800/80 pb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>{t.contactInfo}</span>
            </h3>

            {/* Direct Contact Items */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-mono text-slate-400">{t.emailLabel}</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      onClick={playClickSound}
                      className="text-sm font-bold text-blue-400 hover:text-blue-300 font-mono truncate hover:underline block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    playSuccessSound();
                    onCopyEmail();
                  }}
                  className="w-full py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/60 text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer"
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

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">{t.locationLabel}</p>
                  <p className="text-sm font-bold text-white">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Status Badge Card */}
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

        {/* Right Side Form (7 Cols) */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-center">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t.successTitle}</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                {t.successDesc}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-medium border border-slate-700 cursor-pointer"
              >
                {t.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">{t.nameLabel}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Lê Văn A"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">{t.emailInputLabel}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">{t.subjectLabel}</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Android Development / Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">{t.messageLabel}</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Requirement details, scope, or inquiry..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-xs shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                {submitting ? (
                  <span>{t.sendingBtn}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.sendBtn}</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
