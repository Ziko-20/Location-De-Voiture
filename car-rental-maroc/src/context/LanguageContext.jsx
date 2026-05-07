import { createContext, useContext, useState, useEffect } from 'react';
import fr from '../i18n/fr.json';
import ar from '../i18n/ar.json';

const translations = { fr, ar };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('lang') || 'fr');
  const isRTL = language === 'ar';

  useEffect(() => {
    localStorage.setItem('lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.style.fontFamily = isRTL
      ? "'Cairo', 'Tajawal', sans-serif"
      : "'Poppins', 'Inter', sans-serif";
  }, [language, isRTL]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const toggleLanguage = () => setLanguage(prev => prev === 'fr' ? 'ar' : 'fr');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
