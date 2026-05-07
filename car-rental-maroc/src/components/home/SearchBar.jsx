import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../ui/Button';

const moroccanCities = [
  'Casablanca', 'Marrakech', 'Rabat', 'Fès', 'Agadir',
  'Tanger', 'Oujda', 'Meknès', 'Tétouan', 'Dakhla',
];

export default function SearchBar({ compact = false }) {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [pickup, setPickup] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/voitures');
  };

  const today = new Date().toISOString().split('T')[0];

  if (compact) {
    return (
      <form onSubmit={handleSearch}
        className={`flex flex-wrap gap-3 items-end ${isRTL ? 'flex-row-reverse' : ''}`}
      >
        <div className="flex-1 min-w-[140px]">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
            {t('hero.searchPlaceholder')}
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input-field text-sm"
          >
            <option value="">Choisir une ville</option>
            {moroccanCities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
            {t('hero.searchPickup')}
          </label>
          <input type="date" min={today} value={pickup} onChange={(e) => setPickup(e.target.value)}
            className="input-field text-sm" />
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
            {t('hero.searchReturn')}
          </label>
          <input type="date" min={pickup || today} value={returnDate} onChange={(e) => setReturnDate(e.target.value)}
            className="input-field text-sm" />
        </div>
        <Button type="submit" size="md">
          {t('hero.searchButton')}
        </Button>
      </form>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-white dark:bg-dark-700 rounded-2xl shadow-premium dark:shadow-premium-dark p-6 border border-gray-100 dark:border-dark-600"
    >
      <form onSubmit={handleSearch}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end`}>
          {/* City */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
              📍 {t('hero.searchPlaceholder')}
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="input-field"
            >
              <option value="">Toutes les villes</option>
              {moroccanCities.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {/* Pickup date */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
              📅 {t('hero.searchPickup')}
            </label>
            <input
              type="date"
              min={today}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="input-field"
            />
          </div>

          {/* Return date */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
              🔄 {t('hero.searchReturn')}
            </label>
            <input
              type="date"
              min={pickup || today}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="input-field"
            />
          </div>

          {/* Submit */}
          <Button type="submit" size="lg" className="w-full">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            {t('hero.searchButton')}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
