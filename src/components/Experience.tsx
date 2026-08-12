import { Briefcase, MapPin, Calendar, CheckCircle2, GraduationCap } from 'lucide-react';
import { experiences, education, translations } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
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

      {/* Education & Certifications Section */}
      <div className="mt-20 pt-12 border-t border-slate-800/80 space-y-8">
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
              <p className="text-xs font-semibold text-blue-400">{edu.institution}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{edu.details[lang]}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
