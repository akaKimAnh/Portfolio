import { useState } from 'react';
import { BookOpen, Calendar, Clock, Tag, ArrowRight, X, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { blogPosts, translations } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';

interface BlogSectionProps {
  onSelectBlogPost: (id: string) => void;
}

export default function BlogSection({ onSelectBlogPost }: BlogSectionProps) {
  const { lang } = useLanguage();
  const t = translations[lang].blog;
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background glow */}
      <div className="glow-spotlight w-96 h-96 bg-blue-600/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-12 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{t.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
          {t.title} <span className="text-gradient-primary">{t.titleGradient}</span>
        </h2>

        <p className="text-slate-400 text-sm max-w-2xl font-sans">
          {t.subtitle}
        </p>
      </div>

      {/* Search and Category Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 relative z-10">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-all font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClickSound();
                setSelectedCategory(cat);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-blue-600/20 text-blue-400 border-blue-500/40 font-semibold'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              {cat === 'All' ? t.allCategories : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => {
              playClickSound();
              onSelectBlogPost(post.id);
            }}
            className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between space-y-5 cursor-pointer group hover:-translate-y-1"
          >
            <div className="space-y-3">
              {/* Category & Meta info */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                  {post.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {post.readTime[lang]}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors font-sans leading-snug">
                {post.title[lang]}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed font-sans">
                {post.excerpt[lang]}
              </p>
            </div>

            {/* Tags & Action */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-400 border border-slate-800 flex items-center gap-1"
                  >
                    <Tag className="w-2.5 h-2.5 text-blue-400" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-xs font-mono text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>{lang === 'en' ? 'Read' : 'Đọc'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 text-slate-500 font-mono text-xs">
          {lang === 'en' ? 'No blog articles found matching your criteria.' : 'Không tìm thấy bài viết nào phù hợp.'}
        </div>
      )}
    </section>
  );
}
