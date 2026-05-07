import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const items = [
    { icon: '🚗', title: t('why.item1Title'), desc: t('why.item1Desc'), gradient: 'from-gold-400 to-gold-600' },
    { icon: '💰', title: t('why.item2Title'), desc: t('why.item2Desc'), gradient: 'from-green-400 to-emerald-600' },
    { icon: '🕐', title: t('why.item3Title'), desc: t('why.item3Desc'), gradient: 'from-blue-400 to-blue-600' },
    { icon: '🚚', title: t('why.item4Title'), desc: t('why.item4Desc'), gradient: 'from-purple-400 to-purple-600' },
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold-500" /><div className="w-2 h-2 rounded-full bg-gold-500" /><div className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">{t('why.title')}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">{t('why.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -6 }}
              className="bg-white dark:bg-dark-700 rounded-2xl p-6 shadow-sm hover:shadow-premium dark:hover:shadow-premium-dark border border-gray-100 dark:border-dark-600 transition-all duration-300 text-center group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
