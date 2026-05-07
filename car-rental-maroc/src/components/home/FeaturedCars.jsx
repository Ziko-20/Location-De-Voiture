import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { cars } from '../../data/cars';
import CarCard from '../cars/CarCard';

export default function FeaturedCars() {
  const { t } = useLanguage();
  const featured = cars.filter((c) => c.available).slice(0, 6);

  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold-500" /><div className="w-2 h-2 rounded-full bg-gold-500" /><div className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">{t('featured.title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">{t('featured.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/voitures">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border-2 border-gold-500 text-gold-600 dark:text-gold-400 hover:bg-gold-500 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              {t('featured.viewAll')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
