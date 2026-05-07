import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const fuelIcons   = { diesel: '⛽', gasoline: '🔥', hybrid: '⚡' };
const fuelLabels  = { diesel: 'Diesel', gasoline: 'Essence', hybrid: 'Hybride' };
const transLabels = { manual: 'Manuelle', automatic: 'Automatique' };

export default function CarSpecifications({ car }) {
  const { t } = useLanguage();

  const specRows = [
    { label: 'Moteur',        value: car.specs.engine },
    { label: 'Puissance',     value: car.specs.power },
    { label: 'Couple',        value: car.specs.torque },
    { label: 'Consommation',  value: car.specs.consumption },
    { label: 'Vitesse max',   value: car.specs.topSpeed },
    { label: 'Volume coffre', value: car.specs.luggage },
  ];

  const badges = [
    { icon: fuelIcons[car.fuel],   label: fuelLabels[car.fuel] || car.fuel },
    { icon: '⚙️', label: transLabels[car.transmission] || car.transmission },
    { icon: '👥', label: `${car.seats} places` },
    { icon: '❄️', label: car.ac ? 'Climatisation' : 'Sans clim' },
    { icon: '📅', label: `Année ${car.year}` },
    { icon: '🎨', label: car.color },
  ];

  return (
    <div className="space-y-6">
      {/* Badge chips */}
      <div className="flex flex-wrap gap-2">
        {badges.map((b) => (
          <span key={b.label} className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm font-medium">
            <span>{b.icon}</span> {b.label}
          </span>
        ))}
      </div>

      {/* Spec table */}
      <div className="bg-gray-50 dark:bg-dark-700 rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-600">
        <div className="px-5 py-3 border-b border-gray-200 dark:border-dark-600">
          <h4 className="font-bold text-gray-900 dark:text-white">{t('carDetails.specs')}</h4>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-dark-600">
          {specRows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex justify-between items-center px-5 py-3"
            >
              <span className="text-gray-500 dark:text-gray-400 text-sm">{row.label}</span>
              <span className="font-semibold text-gray-900 dark:text-white text-sm">{row.value}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      {car.features?.length > 0 && (
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-3">Équipements</h4>
          <div className="flex flex-wrap gap-2">
            {car.features.map((f) => (
              <span key={f} className="inline-flex items-center gap-1 bg-gold-50 dark:bg-gold-900/20 text-gold-700 dark:text-gold-400 border border-gold-200 dark:border-gold-800 px-3 py-1 rounded-full text-xs font-medium">
                ✓ {f}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Rental conditions */}
      <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-5 border border-blue-100 dark:border-blue-900/30">
        <h4 className="font-bold text-gray-900 dark:text-white mb-3">{t('carDetails.conditions')}</h4>
        <ul className="space-y-2">
          {['cond1','cond2','cond3','cond4','cond5'].map((k) => (
            <li key={k} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <span className="text-green-500 font-bold">✓</span>
              {t(`carDetails.${k}`)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
