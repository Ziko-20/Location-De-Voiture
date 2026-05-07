import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';

export default function SectionTitle({ title, subtitle, light = false, center = true, className = '' }) {
  const { isRTL } = useLanguage();

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-12 ${center ? 'text-center' : ''} ${isRTL && !center ? 'text-right' : ''} ${className}`}
    >
      {/* Decorative line */}
      <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : isRTL ? 'flex-row-reverse' : ''}`}>
        <div className="h-px w-10 bg-gold-500" />
        <div className="w-2 h-2 rounded-full bg-gold-500" />
        <div className="h-px w-10 bg-gold-500" />
      </div>

      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight
        ${light ? 'text-white' : 'text-gray-900 dark:text-white'}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg max-w-2xl leading-relaxed
          ${center ? 'mx-auto' : ''}
          ${light ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
