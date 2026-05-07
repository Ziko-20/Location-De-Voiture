import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function DarkModeToggle({ textColor = 'text-gray-800' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className={`p-2 rounded-lg transition-all duration-200 ${
        textColor === 'text-white'
          ? 'hover:bg-white/10 text-white'
          : 'hover:bg-gray-100 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300'
      }`}
      aria-label="Toggle dark mode"
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
      </motion.div>
    </motion.button>
  );
}
