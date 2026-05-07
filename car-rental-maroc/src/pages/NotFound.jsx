import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-900 px-4"
    >
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative inline-block mb-8"
        >
          <span className="text-[10rem] font-black text-gray-100 dark:text-dark-700 select-none leading-none">
            404
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-7xl">🚗</span>
        </motion.div>

        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
          {t('notFound.title')}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
          {t('notFound.subtitle')}
        </p>

        <Link to="/">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 rounded-2xl shadow-gold transition-all text-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('notFound.back')}
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
