import { useEffect, useState } from 'react';
import { 
  ArrowLeft, BookOpen, Calendar, Clock, Tag, Sparkles, Mail, Check, 
  Share2, ExternalLink, Copy, Terminal, ShieldCheck, ListOrdered, 
  Layers, CheckCircle2, MessageSquare, ThumbsUp, Code2
} from 'lucide-react';
import { blogPosts, translations, personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { playClickSound, playSuccessSound } from '../utils/audio';
import { getAssetUrl, defaultAvatar } from '../utils/assetHelper';

interface BlogDetailPageProps {
  postId: string;
  onBack: () => void;
  onSelectPost: (id: string) => void;
}

export default function BlogDetailPage({ postId, onBack, onSelectPost }: BlogDetailPageProps) {
  const { lang } = useLanguage();
  const t = translations[lang].blogDetail;

  const post = blogPosts.find((p) => p.id === postId) || blogPosts[0];
  const otherPosts = blogPosts.filter((p) => p.id !== post.id);

  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [likes, setLikes] = useState(24);
  const [hasLiked, setHasLiked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [postId]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) return null;

  const handleShare = () => {
    playSuccessSound();
    if (navigator.share) {
      navigator.share({
        title: post.title[lang],
        text: post.excerpt[lang],
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleCopyCode = (codeText: string, blockId: string) => {
    playSuccessSound();
    navigator.clipboard.writeText(codeText);
    setCopiedCode(blockId);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleLike = () => {
    playSuccessSound();
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  // Helper function to render rich inline markdown (bold, inline code, links)
  const renderInlineMarkdown = (text: string) => {
    // Regex for [label](url), **bold**, `code`, *italic*
    const parts = text.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*|`.*?`|\*.*?\*)/g);

    return parts.map((part, index) => {
      if (!part) return null;

      // Link: [label](url)
      if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
        const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (match) {
          const [, label, url] = match;
          return (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="text-blue-400 hover:text-blue-300 font-semibold underline decoration-blue-500/40 underline-offset-4 hover:decoration-blue-400 inline-flex items-center gap-1 transition-colors px-1 py-0.5 rounded bg-blue-500/10 border border-blue-500/20"
            >
              <span>{renderInlineMarkdown(label)}</span>
              <ExternalLink className="w-3 h-3 text-blue-400 shrink-0 inline" />
            </a>
          );
        }
      }

      // Bold: **text**
      if (part.startsWith('**') && part.endsWith('**')) {
        const innerText = part.slice(2, -2);
        return (
          <strong key={index} className="text-white font-bold tracking-wide">
            {innerText}
          </strong>
        );
      }

      // Inline code: `code`
      if (part.startsWith('`') && part.endsWith('`')) {
        const codeContent = part.slice(1, -1);
        return (
          <code
            key={index}
            className="px-2 py-0.5 mx-0.5 rounded-md text-[13px] font-mono text-blue-300 bg-slate-900 border border-slate-700/80 shadow-inner inline-block"
          >
            {codeContent}
          </code>
        );
      }

      // Italic: *text*
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={index} className="italic text-slate-200">
            {part.slice(1, -1)}
          </em>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  // Extract section headings for Table of Contents
  const rawSections = post.content[lang].split('\n\n').filter((p) => p.startsWith('### '));
  const tableOfContents = rawSections.map((s, idx) => {
    const firstLine = s.split('\n')[0] || '';
    const title = firstLine.replace(/^###\s*/, '').trim();
    return {
      id: `section-${idx + 1}`,
      number: `0${idx + 1}`,
      title,
    };
  });

  return (
    <div className="min-h-screen pt-20 pb-24 px-4 sm:px-6 max-w-4xl mx-auto space-y-10 animate-fadeIn">
      
      {/* Scroll Progress Indicator Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-900">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Navigation & Breadcrumbs */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <button
          onClick={() => {
            playClickSound();
            onBack();
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-all hover:-translate-x-1 cursor-pointer shadow-lg group"
        >
          <ArrowLeft className="w-4 h-4 text-blue-400 group-hover:-translate-x-1 transition-transform" />
          <span>{t.backToBlog}</span>
        </button>

        <div className="text-xs font-mono text-slate-500 hidden sm:flex items-center gap-2">
          <span>Portfolio</span>
          <span>/</span>
          <span>Blog</span>
          <span>/</span>
          <span className="text-blue-400 font-bold truncate max-w-[220px]">{post.category}</span>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800/90 space-y-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-600/10 rounded-full filter blur-3xl pointer-events-none" />

        <div className="space-y-6 relative z-10">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-900/80 px-3.5 py-1 rounded-full border border-slate-800">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-900/80 px-3.5 py-1 rounded-full border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {post.readTime[lang]}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-sans">
            {post.title[lang]}
          </h1>

          {/* Excerpt Quote Card */}
          <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/80 to-slate-900/60 border-l-4 border-blue-500 border-y border-r border-slate-800/80 shadow-md">
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic font-sans">
              "{post.excerpt[lang]}"
            </p>
          </div>

          {/* Author Card & Quick Share Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-3.5">
              <img
                src={personalInfo.avatarUrl || defaultAvatar}
                alt={post.author}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = defaultAvatar;
                }}
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/40 shadow-md"
              />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-white">{post.author}</p>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    Verified Author
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Android Developer & Mobile System Specialist
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`mailto:${personalInfo.email}?subject=Question regarding ${encodeURIComponent(post.title[lang])}`}
                onClick={playClickSound}
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                title="Email Author"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span className="hidden sm:inline">Contact</span>
              </a>

              <button
                onClick={handleShare}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-600/20 active:scale-95"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Copied Link!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-white" />
                    <span>Share Article</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* GitHub Repo Direct Reference Banner if EUDI post */}
          {post.id === "eudi-wallet-openid4vp-android" && (
            <a
              href="https://github.com/eu-digital-identity-wallet/eudi-lib-android-wallet-core"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="mt-2 flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-blue-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400">Official Repository Reference</p>
                  <p className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-blue-400 transition-colors">
                    eu-digital-identity-wallet/eudi-lib-android-wallet-core
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
            </a>
          )}

          {/* Tag Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-xs font-mono text-slate-300 border border-slate-800 flex items-center gap-1.5 shadow-sm"
              >
                <Tag className="w-3 h-3 text-blue-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Table of Contents Card */}
      {tableOfContents.length > 0 && (
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-sm font-mono">
            <ListOrdered className="w-4 h-4 text-blue-400" />
            <span>TABLE OF CONTENTS / MỤC LỤC BÀI VIẾT</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  playClickSound();
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-xs font-sans text-slate-300 hover:text-blue-400 transition-all group"
              >
                <span className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono font-bold text-[10px] flex items-center justify-center shrink-0 group-hover:bg-blue-500 text-white transition-colors">
                  {item.number}
                </span>
                <span className="truncate font-medium">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main Article Content Body */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-white font-bold text-lg font-sans">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span>{t.articleOverview}</span>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Format: Markdown / Technical Spec
          </span>
        </div>

        <div className="space-y-8">
          {post.content[lang].split('\n\n').map((paragraphBlock, idx) => {
            // 1. Heading 3 parsing
            if (paragraphBlock.startsWith('### ')) {
              const rawBlockLines = paragraphBlock.split('\n').map((l) => l.trim()).filter(Boolean);
              const headingLine = rawBlockLines[0] || '';
              const headingText = headingLine.replace(/^###\s*/, '').trim();

              const sectionIndex = rawSections.findIndex((s) => s.startsWith(headingLine));
              const sectionId = sectionIndex !== -1 ? `section-${sectionIndex + 1}` : undefined;
              const sectionNumber = sectionIndex !== -1 ? `0${sectionIndex + 1}` : '';

              const bodyLines = rawBlockLines.slice(1);
              const hasBodyListItems = bodyLines.some((line) => /^(-\s*|\d+\.\s*)/.test(line));

              let bodyIntroLines: string[] = [];
              let bodyListItems: string[] = [];

              if (hasBodyListItems) {
                bodyLines.forEach((line) => {
                  if (/^(-\s*|\d+\.\s*)/.test(line)) {
                    bodyListItems.push(line);
                  } else {
                    bodyIntroLines.push(line);
                  }
                });
              } else {
                bodyIntroLines = bodyLines;
              }

              return (
                <div key={idx} id={sectionId} className="pt-8 pb-3 border-t border-slate-800/80 space-y-4 scroll-mt-24">
                  {/* Heading Title Row */}
                  <div className="flex items-center gap-3">
                    {sectionNumber && (
                      <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono font-bold shrink-0">
                        {sectionNumber}
                      </span>
                    )}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                      {renderInlineMarkdown(headingText)}
                    </h3>
                  </div>

                  {/* Body Intro Paragraphs */}
                  {bodyIntroLines.length > 0 && (
                    <div className="space-y-2 pt-1">
                      {bodyIntroLines.map((intro, i) => (
                        <p key={i} className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                          {renderInlineMarkdown(intro)}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Body List Items */}
                  {bodyListItems.length > 0 && (
                    <div className="grid grid-cols-1 gap-3.5 pt-1">
                      {bodyListItems.map((item, itemIdx) => {
                        const matchPrefix = item.match(/^(-\s*|\d+\.\s*)/);
                        const prefixStr = matchPrefix ? matchPrefix[0].trim() : '-';
                        const cleanItem = item.replace(/^(-\s*|\d+\.\s*)/, '').trim();

                        let itemTitle: string | null = null;
                        let itemDesc: string = cleanItem;

                        const boldMatch = cleanItem.match(/^\*\*(.*?)\*\*(?::|-)?\s*(.*)$/);
                        if (boldMatch) {
                          itemTitle = boldMatch[1];
                          itemDesc = boldMatch[2];
                        }

                        const isNumbered = /^\d+/.test(prefixStr);

                        return (
                          <div
                            key={itemIdx}
                            className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-blue-500/30 transition-all shadow-md group"
                          >
                            <div className="shrink-0 mt-0.5">
                              {isNumbered ? (
                                <span className="w-7 h-7 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono font-bold text-xs flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                  {prefixStr}
                                </span>
                              ) : (
                                <div className="p-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:text-blue-300 transition-colors">
                                  <CheckCircle2 className="w-4 h-4" />
                                </div>
                              )}
                            </div>

                            <div className="space-y-1 min-w-0 flex-1">
                              {itemTitle ? (
                                <div>
                                  <h4 className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-blue-300 transition-colors">
                                    {renderInlineMarkdown(itemTitle)}
                                  </h4>
                                  {itemDesc && (
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                                      {renderInlineMarkdown(itemDesc)}
                                    </p>
                                  )}
                                </div>
                              ) : (
                                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                  {renderInlineMarkdown(cleanItem)}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // 2. Code snippet block parsing: ```kotlin ... ```
            if (paragraphBlock.includes('```')) {
              const lines = paragraphBlock.split('\n');
              const firstLine = lines[0] || '';
              const language = firstLine.replace('```', '').trim().toUpperCase() || 'CODE';
              const codeBody = lines.slice(1, lines.length - 1).join('\n');
              const blockId = `code-block-${idx}`;

              return (
                <div key={idx} className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl my-6">
                  {/* Code Editor Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="ml-3 flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Terminal className="w-3.5 h-3.5 text-blue-400" />
                        <span>EudiWalletSetup.kt</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                        {language}
                      </span>
                      <button
                        onClick={() => handleCopyCode(codeBody, blockId)}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {copiedCode === blockId ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Code Body */}
                  <pre className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed bg-slate-950/90">
                    <code>{codeBody}</code>
                  </pre>
                </div>
              );
            }

            // 3. Multi-line block analysis (separating intro text from bullet / numbered items)
            const rawLines = paragraphBlock.split('\n').map((l) => l.trim()).filter(Boolean);
            const hasListItems = rawLines.some((line) => /^(-\s*|\d+\.\s*)/.test(line));

            if (hasListItems) {
              const introLines: string[] = [];
              const listItems: string[] = [];

              rawLines.forEach((line) => {
                if (/^(-\s*|\d+\.\s*)/.test(line)) {
                  listItems.push(line);
                } else {
                  introLines.push(line);
                }
              });

              return (
                <div key={idx} className="space-y-4 my-4">
                  {introLines.length > 0 && (
                    <div className="space-y-2">
                      {introLines.map((intro, i) => (
                        <p key={i} className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans font-medium">
                          {renderInlineMarkdown(intro)}
                        </p>
                      ))}
                    </div>
                  )}

                  {listItems.length > 0 && (
                    <div className="grid grid-cols-1 gap-3.5 pt-1">
                      {listItems.map((item, itemIdx) => {
                        const matchPrefix = item.match(/^(-\s*|\d+\.\s*)/);
                        const prefixStr = matchPrefix ? matchPrefix[0].trim() : '-';
                        const cleanItem = item.replace(/^(-\s*|\d+\.\s*)/, '').trim();

                        // Check if item starts with bold title: **Title:** Description or **Title** - Description
                        let itemTitle: string | null = null;
                        let itemDesc: string = cleanItem;

                        const boldMatch = cleanItem.match(/^\*\*(.*?)\*\*(?::|-)?\s*(.*)$/);
                        if (boldMatch) {
                          itemTitle = boldMatch[1];
                          itemDesc = boldMatch[2];
                        }

                        const isNumbered = /^\d+/.test(prefixStr);

                        return (
                          <div
                            key={itemIdx}
                            className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-blue-500/30 transition-all shadow-md group"
                          >
                            <div className="shrink-0 mt-0.5">
                              {isNumbered ? (
                                <span className="w-7 h-7 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono font-bold text-xs flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                  {prefixStr}
                                </span>
                              ) : (
                                <div className="p-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:text-blue-300 transition-colors">
                                  <CheckCircle2 className="w-4 h-4" />
                                </div>
                              )}
                            </div>

                            <div className="space-y-1 min-w-0 flex-1">
                              {itemTitle ? (
                                <div>
                                  <h4 className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-blue-300 transition-colors">
                                    {renderInlineMarkdown(itemTitle)}
                                  </h4>
                                  {itemDesc && (
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                                      {renderInlineMarkdown(itemDesc)}
                                    </p>
                                  )}
                                </div>
                              ) : (
                                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                  {renderInlineMarkdown(cleanItem)}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // 4. Standard text block with multiple lines
            return (
              <div key={idx} className="space-y-3 my-3">
                {rawLines.map((line, lIdx) => (
                  <p key={lIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                    {renderInlineMarkdown(line)}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Article Feedback & Interaction Bar */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-wrap items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <ThumbsUp className="w-4 h-4 text-amber-400" />
            <span>Was this technical article helpful?</span>
          </h4>
          <p className="text-xs text-slate-400">
            Let the author know if you enjoyed reading about Android EUDI Wallet Core architecture.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleLike}
            className={`px-5 py-2.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              hasLiked
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-200'
            }`}
          >
            <ThumbsUp className={`w-4 h-4 ${hasLiked ? 'fill-amber-400 text-amber-400' : 'text-slate-400'}`} />
            <span>{likes} Helpful</span>
          </button>

          <a
            href={`mailto:${personalInfo.email}?subject=Feedback on EUDI Wallet Article`}
            onClick={playClickSound}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span>Feedback</span>
          </a>
        </div>
      </div>

      {/* Explore Other Articles Section */}
      <div className="pt-8 border-t border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>{t.exploreOther}</span>
          </h3>
          <span className="text-xs font-mono text-slate-500">More Posts</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {otherPosts.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                playClickSound();
                onSelectPost(p.id);
              }}
              className="group glass-panel p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20">
                    {p.category}
                  </span>
                  <span className="text-slate-500">{p.readTime[lang]}</span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                  {p.title[lang]}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {p.excerpt[lang]}
                </p>
              </div>

              <div className="text-xs font-mono text-blue-400 font-bold flex items-center justify-between pt-3 border-t border-slate-800/80 group-hover:text-blue-300">
                <span>{lang === 'en' ? 'Read Article' : 'Đọc bài viết'}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
