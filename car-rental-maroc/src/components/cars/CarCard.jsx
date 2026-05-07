import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const fuelLabels = { diesel: 'Diesel', gasoline: 'Essence', hybrid: 'Hybride' };
const transLabels = { manual: 'Manuelle', automatic: 'Auto' };
const fuelIcons   = { diesel: '⛽', gasoline: '🔥', hybrid: '⚡' };

export default function CarCard({ car }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-premium dark:hover:shadow-premium-dark border border-gray-100 dark:border-dark-600 transition-all duration-300 flex flex-col"
    >
      {/* Car image */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-dark-600">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
            {car.category}
          </span>
        </div>

        {/* Availability */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${
            car.available
              ? 'bg-green-500/90 text-white'
              : 'bg-gray-600/90 text-white'
          }`}>
            {car.available ? t('cars.available') : t('cars.unavailable')}
          </span>
        </div>

        {/* Brand + year */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-white/15 backdrop-blur-sm text-white/90 text-xs px-2 py-0.5 rounded font-medium">
            {car.brand} · {car.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3 truncate">{car.name}</h3>

        {/* Specs row */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="badge bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-300">
            {fuelIcons[car.fuel]} {fuelLabels[car.fuel] || car.fuel}
          </span>
          <span className="badge bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-300">
            ⚙️ {transLabels[car.transmission] || car.transmission}
          </span>
          <span className="badge bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-300">
            👥 {car.seats} {t('cars.seats')}
          </span>
          {car.ac && (
            <span className="badge bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
              ❄️ Clim
            </span>
          )}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-dark-600">
          <div>
            <span className="text-2xl font-black text-gold-500">{car.price}</span>
            <span className="text-gray-400 text-sm font-medium"> MAD{t('cars.perDay')}</span>
          </div>
          <Link to={`/voitures/${car.slug}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors duration-200 shadow-gold"
            >
              {t('cars.details')}
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
