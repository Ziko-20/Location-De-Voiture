import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function GoogleMapSection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold-500" /><div className="w-2 h-2 rounded-full bg-gold-500" /><div className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4">{t('contact.mapTitle')}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden shadow-premium dark:shadow-premium-dark border border-gray-100 dark:border-dark-600"
        >
          {/* Map embed — Casablanca */}
          <iframe
            title="Location LocationAuto Maroc"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.17870580397!2d-7.653814!3d33.589886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sfr!2sma!4v1700000000000"
            width="100%" height="420"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Overlay info card */}
          <div className="absolute top-4 left-4 bg-white dark:bg-dark-700 rounded-2xl shadow-premium p-4 max-w-xs border border-gray-100 dark:border-dark-600">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white text-sm">📍</div>
              <span className="font-bold text-gray-900 dark:text-white text-sm">LocationAuto Maroc</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">{t('contact.addressValue')}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">📞 {t('contact.phoneValue')}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">{t('contact.hoursValue')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
