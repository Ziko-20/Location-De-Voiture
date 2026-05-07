import { motion } from 'framer-motion';
import CarCard from './CarCard';
import { CarCardSkeleton } from '../ui/Skeleton';
import { useLanguage } from '../../context/LanguageContext';

export default function CarGrid({ cars, loading = false }) {
  const { t } = useLanguage();

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => <CarCardSkeleton key={i} />)}
      </div>
    );
  }

  if (!cars || cars.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-24 text-center"
      >
        <div className="text-6xl mb-4">🚗</div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {t('cars.noResults')}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Essayez d'ajuster vos filtres.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
