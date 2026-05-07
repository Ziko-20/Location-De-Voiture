import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-dark-900 z-[9999]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 border-4 border-gold-200 dark:border-dark-600 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            style={{ borderTopColor: '#C9A84C' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-gold-500 rounded-full animate-pulse" />
          </div>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 animate-pulse">
          LocationAuto Maroc
        </p>
      </div>
    </div>
  );
}
