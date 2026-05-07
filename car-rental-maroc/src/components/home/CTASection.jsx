import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.15)_0%,_transparent_70%)]" />
      <div className="container-custom relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">{t('cta.title')}</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">{t('cta.subtitle')}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/voitures">
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 rounded-2xl shadow-gold-lg transition-all text-lg">
                {t('cta.button')}
              </motion.button>
            </Link>
            <a href="https://wa.me/+212600000000" target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl transition-all text-lg flex items-center gap-2">
                💬 {t('cta.whatsapp')}
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
