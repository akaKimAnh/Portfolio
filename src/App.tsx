import { useState, useEffect } from 'react';
import SpotlightCursor from './components/SpotlightCursor';
import Navbar from './components/Navbar';
import CommandPalette from './components/CommandPalette';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetailPage from './components/ProjectDetailPage';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import BlogSection from './components/BlogSection';
import BlogDetailPage from './components/BlogDetailPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalInfo } from './data/portfolioData';
import { LanguageProvider } from './context/LanguageContext';
import { Check } from 'lucide-react';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (selectedProjectId || selectedBlogId) return;
      const sections = ['hero', 'projects', 'experience', 'skills', 'blog', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProjectId, selectedBlogId]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#08090a] text-slate-100 bg-grid-pattern selection:bg-blue-600 selection:text-white font-sans relative">
        {/* Radial Spotlight mouse follower */}
        <SpotlightCursor />

        {/* Floating Pill Top Navbar */}
        <Navbar
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          activeSection={selectedProjectId ? 'projects' : selectedBlogId ? 'blog' : activeSection}
          onNavigateHome={() => {
            setSelectedProjectId(null);
            setSelectedBlogId(null);
          }}
        />

        {/* Command Palette (⌘K) Modal */}
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
          onCopyEmail={handleCopyEmail}
        />

        {/* Main Content View */}
        <main className="relative z-10">
          {selectedProjectId ? (
            <ProjectDetailPage
              projectId={selectedProjectId}
              onBack={() => {
                setSelectedProjectId(null);
                setTimeout(() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              onSelectProject={(id) => setSelectedProjectId(id)}
            />
          ) : selectedBlogId ? (
            <BlogDetailPage
              postId={selectedBlogId}
              onBack={() => {
                setSelectedBlogId(null);
                setTimeout(() => {
                  const el = document.getElementById('blog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 50);
              }}
              onSelectPost={(id) => setSelectedBlogId(id)}
            />
          ) : (
            <>
              <Hero onCopyEmail={handleCopyEmail} emailCopied={emailCopied} />
              <Projects onSelectProject={(id) => setSelectedProjectId(id)} />
              <Experience />
              <TechStack />
              <BlogSection onSelectBlogPost={(id) => setSelectedBlogId(id)} />
              <Contact onCopyEmail={handleCopyEmail} emailCopied={emailCopied} />
            </>
          )}
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Toast Notification for Copied Email */}
        {emailCopied && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-white shadow-2xl animate-bounce font-mono text-xs">
            <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
              <Check className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-emerald-400">Copied to Clipboard!</span>
              <span className="text-[11px] text-slate-400">{personalInfo.email}</span>
            </div>
          </div>
        )}
      </div>
    </LanguageProvider>
  );
}
