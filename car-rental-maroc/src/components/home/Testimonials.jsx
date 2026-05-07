import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { testimonials } from '../../data/testimonials';

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? 'text-gold-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.35 2.435c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.664 9.384c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold-500" /><div className="w-2 h-2 rounded-full bg-gold-500" /><div className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">{t('testimonials.title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">{t('testimonials.subtitle')}</p>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((r, i) => (
            <motion.div key={r.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-gray-50 dark:bg-dark-700 rounded-2xl p-6 border border-gray-100 dark:border-dark-600">
              <StarRating count={r.rating} />
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-3 mb-4">
                "{language === 'ar' ? r.textAr : r.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {r.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.city} · {r.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3 }}
              className="bg-gray-50 dark:bg-dark-700 rounded-2xl p-6 border border-gray-100 dark:border-dark-600">
              <StarRating count={testimonials[active].rating} />
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-3 mb-4">
                "{language === 'ar' ? testimonials[active].textAr : testimonials[active].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white text-sm font-bold">
                  {testimonials[active].avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{testimonials[active].name}</p>
                  <p className="text-gray-400 text-xs">{testimonials[active].city} · {testimonials[active].date}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-colors flex items-center justify-center">‹</button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-all ${i === active ? 'bg-gold-500 w-4' : 'bg-gray-300 dark:bg-dark-500'}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-colors flex items-center justify-center">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
