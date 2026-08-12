import { useState } from 'react';
import { ExternalLink, Github, Sparkles, Layers, Eye } from 'lucide-react';
import { projects, translations } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { playClickSound } from '../utils/audio';

interface ProjectsProps {
  onSelectProject: (id: string) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Mobile App', 'Mini App', 'Frontend Web'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const getCategoryLabel = (cat: string) => {
    if (cat === 'All') return t.all;
    if (cat === 'Mobile App') return t.mobile;
    if (cat === 'Mini App') return t.miniApp;
    if (cat === 'Frontend Web') return t.web;
    return cat;
  };

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Title */}
      <div className="flex flex-col items-center text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.title} <span className="text-gradient-primary">{t.titleGradient}</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl">
          {t.subtitle}
        </p>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playClickSound();
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              playClickSound();
              onSelectProject(project.id);
            }}
            className="group relative glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
          >
            {/* Project Cover Image */}
            <div className="relative h-56 w-full overflow-hidden bg-slate-900/90 flex items-center justify-center p-3 border-b border-slate-800/80">
              <img
                src={project.image}
                alt={project.title[lang]}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Category Badge */}
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-slate-900/90 text-blue-400 border border-slate-700/80 backdrop-blur-md z-10">
                {project.category}
              </span>

              {/* Year Badge */}
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-400 bg-slate-900/90 border border-slate-800 backdrop-blur-md z-10">
                {project.year}
              </span>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title[lang]}
                  </h3>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                      <Sparkles className="w-3 h-3" /> {t.featured}
                    </span>
                  )}
                </div>

                <p className="text-xs font-semibold text-indigo-300">
                  {project.tagline[lang]}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {project.description[lang]}
                </p>
              </div>

              {/* Highlights Bullet List preview */}
              <ul className="space-y-1 pt-2 border-t border-slate-800/80">
                {project.highlights[lang].slice(0, 2).map((h, i) => (
                  <li key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                    <span className="text-blue-400 font-bold">•</span>
                    <span className="line-clamp-1">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Action Links */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playClickSound();
                      onSelectProject(project.id);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-xs text-blue-400 hover:text-blue-300 font-semibold cursor-pointer transition-all group/btn"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.viewSpecs}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title="GitHub Repo"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          playClickSound();
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-blue-600/10 transition-colors"
                        title="Live App"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
