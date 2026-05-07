import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

const values = [
  { icon: '🏆', key: 'v1' },
  { icon: '🔍', key: 'v2' },
  { icon: '🤝', key: 'v3' },
  { icon: '💡', key: 'v4' },
];

const team = [
  { name: 'Youssef Benali', role: 'Directeur Général', initials: 'YB', color: 'from-gold-400 to-gold-600' },
  { name: 'Fatima Zahra',   role: 'Responsable Client', initials: 'FZ', color: 'from-rose-400 to-rose-600' },
  { name: 'Amine Idrissi',  role: 'Chef de Flotte',     initials: 'AI', color: 'from-blue-400 to-blue-600' },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Header */}
      <div className="bg-dark-900 pt-24 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.12)_0%,_transparent_60%)]" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="inline-block bg-gold-500/20 text-gold-400 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-gold-500/30">
              {t('about.title')}
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-4">{t('about.subtitle')}</h1>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-20 space-y-24">
        {/* Story + Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">📖</span> {t('about.story')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg mb-8">{t('about.storyText')}</p>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">🎯</span> {t('about.mission')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">{t('about.missionText')}</p>
          </motion.div>

          {/* Visual stat card */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="bg-dark-900 rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.15)_0%,_transparent_70%)]" />
              <div className="relative z-10 grid grid-cols-2 gap-6">
                {[
                  { val: '1200+', label: 'Clients satisfaits' },
                  { val: '50+',   label: 'Véhicules' },
                  { val: '10 ans', label: "D'expérience" },
                  { val: '8',     label: 'Villes' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-2xl p-5">
                    <p className="text-3xl font-black text-gold-400">{s.val}</p>
                    <p className="text-gray-400 text-sm mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-black text-gray-900 dark:text-white text-center mb-12">
            {t('about.values')}
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-dark-700 rounded-2xl p-6 text-center shadow-sm hover:shadow-premium dark:hover:shadow-premium-dark border border-gray-100 dark:border-dark-600 transition-all duration-300">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white">{t(`about.${v.key}`)}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-black text-gray-900 dark:text-white text-center mb-12">
            Notre Équipe
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-dark-700 rounded-2xl p-8 text-center shadow-sm border border-gray-100 dark:border-dark-600">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-white text-2xl font-black mx-auto mb-4`}>
                  {m.initials}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{m.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
