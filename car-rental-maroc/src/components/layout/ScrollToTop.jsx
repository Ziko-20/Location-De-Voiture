import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-5 z-40 w-11 h-11 rounded-full bg-dark-800 dark:bg-white text-white dark:text-dark-900 shadow-premium flex items-center justify-center hover:-translate-y-1 transition-transform duration-200"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
