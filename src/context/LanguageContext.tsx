import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'vi';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved === 'vi' || saved === 'en') ? saved : 'en';
  });

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  const toggleLang = () => {
    handleSetLang(lang === 'en' ? 'vi' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
