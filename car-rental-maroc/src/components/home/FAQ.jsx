import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { faqs as faq } from '../../data/faq';

function FAQItem({ item, isOpen, onToggle }) {
  const { language } = useLanguage();
  return (
    <div className="border border-gray-200 dark:border-dark-600 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-dark-700 hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-900 dark:text-white pr-4">
          {language === 'ar' ? item.questionAr : item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold text-lg"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-5 text-gray-500 dark:text-gray-400 text-sm leading-relaxed bg-white dark:bg-dark-700">
              {language === 'ar' ? item.answerAr : item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold-500" /><div className="w-2 h-2 rounded-full bg-gold-500" /><div className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">{t('faq.title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">{t('faq.subtitle')}</p>
        </motion.div>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <FAQItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
