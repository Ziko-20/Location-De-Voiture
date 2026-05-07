import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import { NAV_LINKS, WHATSAPP_URL } from '../../utils/constants';
import { FaWhatsapp } from 'react-icons/fa';

export default function MobileMenu({ isOpen, onClose }) {
  const { t, isRTL } = useLanguage();
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} z-50 h-full w-[280px] bg-white dark:bg-dark-800 shadow-2xl flex flex-col`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-dark-600">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
                  <span className="text-white font-black text-xs">LA</span>
                </div>
                <span className="font-black text-sm text-gray-900 dark:text-white">LocationAuto Maroc</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 text-gray-600 dark:text-gray-400 transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 p-5 space-y-1">
              {NAV_LINKS.map(({ key, path }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={path}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-200
                      ${location.pathname === path
                        ? 'bg-gold-50 dark:bg-gold-500/10 text-gold-600 dark:text-gold-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-600'
                      }`}
                  >
                    {t(`nav.${key}`)}
                    {location.pathname === path && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold-500" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <div className="p-5 space-y-3 border-t border-gray-100 dark:border-dark-600">
              <Link
                to="/voitures"
                onClick={onClose}
                className="block w-full text-center py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl transition-colors"
              >
                {t('nav.reserve')}
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
