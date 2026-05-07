import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { brands, fuels, transmissions, maxPrice } from '../../data/cars';

export default function FilterPanel({ filters, onChange, onReset }) {
  const { t } = useLanguage();

  const fuelLabels  = { diesel: t('cars.diesel'), gasoline: t('cars.gasoline'), hybrid: t('cars.hybrid') };
  const transLabels = { manual: t('cars.manual'), automatic: t('cars.automatic') };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white dark:bg-dark-700 rounded-2xl border border-gray-100 dark:border-dark-600 p-5 space-y-6 sticky top-24"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-900 dark:text-white">{t('cars.filters')}</h3>
        <button
          onClick={onReset}
          className="text-xs text-gold-500 hover:text-gold-600 font-semibold underline"
        >
          {t('cars.reset')}
        </button>
      </div>

      {/* Price slider */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
          {t('cars.filterPrice')}: <span className="text-gold-500">{filters.maxPrice} MAD</span>
        </label>
        <input
          type="range" min={100} max={maxPrice} step={50}
          value={filters.maxPrice}
          onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full accent-gold-500 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>100 MAD</span><span>{maxPrice} MAD</span>
        </div>
      </div>

      {/* Brand */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
          {t('cars.filterBrand')}
        </label>
        <select
          value={filters.brand}
          onChange={(e) => onChange({ ...filters, brand: e.target.value })}
          className="input-field text-sm"
        >
          <option value="">{t('cars.allBrands')}</option>
          {brands.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      {/* Fuel toggle */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
          {t('cars.filterFuel')}
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onChange({ ...filters, fuel: '' })}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${!filters.fuel ? 'bg-gold-500 text-white' : 'bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-300'}`}
          >
            {t('cars.allFuels')}
          </button>
          {fuels.map((f) => (
            <button key={f}
              onClick={() => onChange({ ...filters, fuel: f === filters.fuel ? '' : f })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${filters.fuel === f ? 'bg-gold-500 text-white' : 'bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-300'}`}
            >
              {fuelLabels[f] || f}
            </button>
          ))}
        </div>
      </div>

      {/* Transmission toggle */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
          {t('cars.filterTransmission')}
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onChange({ ...filters, transmission: '' })}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${!filters.transmission ? 'bg-gold-500 text-white' : 'bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-300'}`}
          >
            {t('cars.allTransmissions')}
          </button>
          {transmissions.map((tr) => (
            <button key={tr}
              onClick={() => onChange({ ...filters, transmission: tr === filters.transmission ? '' : tr })}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${filters.transmission === tr ? 'bg-gold-500 text-white' : 'bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-300'}`}
            >
              {transLabels[tr] || tr}
            </button>
          ))}
        </div>
      </div>

      {/* Availability */}
      <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative">
          <input
            type="checkbox"
            checked={filters.availableOnly}
            onChange={(e) => onChange({ ...filters, availableOnly: e.target.checked })}
            className="sr-only"
          />
          <div className={`w-11 h-6 rounded-full transition-colors ${filters.availableOnly ? 'bg-gold-500' : 'bg-gray-200 dark:bg-dark-500'}`} />
          <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${filters.availableOnly ? 'translate-x-6' : 'translate-x-1'}`} />
        </div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('cars.available')} uniquement</span>
      </label>
    </motion.div>
  );
}
