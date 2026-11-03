import { useState } from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, GraduationCap, Award, ExternalLink, Eye, X, ShieldCheck } from 'lucide-react';
import { experiences, education, certifications, translations } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { playClickSound } from '../utils/audio';
import { Certification } from '../types';

export default function Experience() {
  const { lang } = useLanguage();
  const t = translations[lang].experience;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleOpenCert = (cert: Certification) => {
    playClickSound();
    setSelectedCert(cert);
  };

  const handleCloseCert = () => {
    playClickSound();
    setSelectedCert(null);
  };

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-28 sm:scroll-mt-32">
      {/* Section Title */}
      <div className="flex flex-col items-center text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-semibold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.title} <span className="text-gradient-primary">{t.titleGradient}</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl">
          {t.subtitle}
        </p>
      </div>

      {/* Experience Vertical Timeline */}
      <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-6 sm:pl-8 group">
            {/* Timeline node dot */}
            <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-md group-hover:scale-125 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <span className="w-2 h-2 rounded-full bg-current" />
            </div>

            {/* Experience Card */}
            <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 space-y-4">
              
              {/* Header Details */}
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {exp.role[lang]}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {exp.type[lang]}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-indigo-400 mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono space-y-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Achievements */}
              <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                {exp.description[lang].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Certifications & Honors Section */}
      <div className="mt-20 pt-12 border-t border-slate-800/80 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-white">{t.certificationsTitle || 'Certifications & Honors'}</h3>
          </div>
          <span className="text-xs font-mono text-amber-400/90 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Google for Developers</span>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-amber-500/30 hover:border-amber-400/60 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-amber-950/20 relative overflow-hidden group transition-all"
            >
              {/* Background ambient gold shine */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-all" />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                {/* Left side text info */}
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1 shadow-lg shadow-amber-500/10">
                      🏆 {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                      📅 {cert.issueDate}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {cert.title[lang]}
                  </h4>

                  <p className="text-xs font-semibold text-blue-400 flex items-center gap-1.5">
                    <span>{cert.issuer[lang]}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                    {cert.description[lang]}
                  </p>

                  {/* Tags */}
                  {cert.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right side Thumbnail & View Button */}
                {cert.image && (
                  <div className="w-full md:w-56 shrink-0 space-y-3">
                    <div
                      onClick={() => handleOpenCert(cert)}
                      className="relative rounded-xl overflow-hidden border border-amber-500/30 group/thumb cursor-pointer shadow-xl bg-slate-950 aspect-[4/3]"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title[lang]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white">
                        <Eye className="w-6 h-6 text-amber-400" />
                        <span className="text-xs font-semibold tracking-wide">
                          {lang === 'en' ? 'View Certificate' : 'Xem Chứng nhận'}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenCert(cert)}
                      className="w-full py-2 px-3 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'View Certificate Image' : 'Xem Bằng Chứng nhận'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-16 pt-12 border-t border-slate-800/80 space-y-8">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-indigo-400" />
          <h3 className="text-xl font-bold text-white">{t.educationTitle}</h3>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-bold text-white">{edu.degree[lang]}</h4>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  {edu.period}
                </span>
              </div>
              <p className="text-xs font-semibold text-blue-400">{edu.institution[lang]}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{edu.details[lang]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Certificate Modal */}
      {selectedCert && (
        <div
          onClick={handleCloseCert}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28 bg-slate-950/90 backdrop-blur-lg animate-fade-in overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden max-h-[80vh] sm:max-h-[82vh] flex flex-col my-auto"
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/90">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {selectedCert.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {selectedCert.issuer[lang]} • {selectedCert.issueDate}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCloseCert}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-slate-950/50">
              {selectedCert.image && (
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title[lang]}
                  className="w-full max-h-[65vh] object-contain rounded-xl border border-slate-800 shadow-2xl"
                />
              )}

              <p className="text-xs text-slate-300 text-center max-w-2xl mt-4 leading-relaxed">
                {selectedCert.description[lang]}
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                🏆 {selectedCert.badge} Participant
              </span>

              <button
                onClick={handleCloseCert}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Close' : 'Đóng'}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
