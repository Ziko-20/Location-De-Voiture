import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { cars, maxPrice } from '../data/cars';
import CarGrid from '../components/cars/CarGrid';
import FilterPanel from '../components/filters/FilterPanel';
import SearchBar from '../components/home/SearchBar';

const DEFAULT_FILTERS = {
  maxPrice: maxPrice,
  brand: '',
  fuel: '',
  transmission: '',
  availableOnly: false,
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

export default function Cars() {
  const { t } = useLanguage();
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return cars.filter((c) => {
      if (c.price > filters.maxPrice) return false;
      if (filters.brand && c.brand !== filters.brand) return false;
      if (filters.fuel && c.fuel !== filters.fuel) return false;
      if (filters.transmission && c.transmission !== filters.transmission) return false;
      if (filters.availableOnly && !c.available) return false;
      return true;
    });
  }, [filters]);

  const handleReset = () => setFilters(DEFAULT_FILTERS);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Page header */}
      <div className="bg-dark-900 pt-24 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.12)_0%,_transparent_60%)]" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Notre Flotte</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">{t('cars.title')}</h1>
            <p className="text-gray-400 text-lg max-w-xl">{t('cars.subtitle')}</p>
          </motion.div>

          {/* Search bar inline */}
          <div className="mt-8">
            <SearchBar compact />
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            <span className="font-bold text-gray-900 dark:text-white">{filtered.length}</span> véhicule{filtered.length !== 1 ? 's' : ''} trouvé{filtered.length !== 1 ? 's' : ''}
          </p>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-gold-500 text-white text-sm font-semibold px-4 py-2 rounded-xl"
          >
            ⚙️ {t('cars.filters')}
          </button>
        </div>

        {/* Mobile filter drawer */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 lg:hidden"
          >
            <FilterPanel filters={filters} onChange={setFilters} onReset={handleReset} />
          </motion.div>
        )}

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterPanel filters={filters} onChange={setFilters} onReset={handleReset} />
          </aside>

          {/* Results */}
          <div className="flex-1 min-w-0">
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                <span className="font-bold text-gray-900 dark:text-white">{filtered.length}</span> véhicule{filtered.length !== 1 ? 's' : ''} trouvé{filtered.length !== 1 ? 's' : ''}
              </p>
            </div>
            <CarGrid cars={filtered} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
