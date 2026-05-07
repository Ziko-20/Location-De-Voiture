import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { NAV_LINKS } from '../../utils/constants';
import DarkModeToggle from './DarkModeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, isRTL } = useLanguage();
  const { isDark } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const navBg = scrolled || !isHome
    ? 'bg-white/95 dark:bg-dark-800/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-dark-600'
    : 'bg-transparent';

  const textColor = scrolled || !isHome
    ? 'text-gray-800 dark:text-white'
    : 'text-white';

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <span className="text-white font-black text-sm">LA</span>
              </div>
              <div className="leading-tight">
                <span className={`font-black text-base tracking-tight ${textColor} transition-colors duration-300`}>
                  LocationAuto
                </span>
                <div className="text-xs text-gold-500 font-semibold -mt-0.5 tracking-wider">MAROC</div>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className={`hidden md:flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {NAV_LINKS.map(({ key, path }) => (
                <Link
                  key={key}
                  to={path}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                    ${location.pathname === path
                      ? 'text-gold-500 bg-gold-50 dark:bg-gold-500/10'
                      : `${textColor} hover:text-gold-500 hover:bg-white/10`
                    }`}
                >
                  {t(`nav.${key}`)}
                </Link>
              ))}
            </div>

            {/* Right Controls */}
            <div className={`hidden md:flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <LanguageSwitcher textColor={textColor} />
              <DarkModeToggle textColor={textColor} />
              <Link
                to="/voitures"
                className="px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-gold hover:-translate-y-0.5 active:translate-y-0"
              >
                {t('nav.reserve')}
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className={`flex md:hidden items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <LanguageSwitcher textColor={textColor} />
              <DarkModeToggle textColor={textColor} />
              <button
                onClick={() => setMobileOpen(true)}
                className={`p-2 rounded-lg ${textColor} hover:bg-white/10 transition-colors`}
                aria-label="Open menu"
              >
                <FiMenu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
