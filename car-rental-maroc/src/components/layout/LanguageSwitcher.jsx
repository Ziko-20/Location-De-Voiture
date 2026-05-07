import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSwitcher({ textColor = 'text-gray-800' }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider border transition-all duration-200
        ${textColor === 'text-white'
          ? 'border-white/30 hover:bg-white/10 text-white'
          : 'border-gray-200 dark:border-dark-500 hover:bg-gray-100 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300'
        }`}
      aria-label="Switch language"
    >
      <span className="text-sm">{language === 'fr' ? '🇲🇦' : '🇫🇷'}</span>
      <span>{language === 'fr' ? 'عربي' : 'FR'}</span>
    </button>
  );
}
