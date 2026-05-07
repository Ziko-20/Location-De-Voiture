import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../ui/Button';

const floatVariants = {
  animate: {
    y: [0, -18, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
};

export default function HeroSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,168,76,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(211,47,47,0.08)_0%,_transparent_50%)]" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-crimson-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center py-32">
        {/* Left — Text content */}
        <div className={`${isRTL ? 'text-right lg:order-2' : ''}`}>
          {/* Badge */}
          <motion.div
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/15 border border-gold-500/30 mb-6`}
          >
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-gold-400 text-sm font-semibold tracking-wide">
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
          >
            {t('hero.title')}{' '}
            <span className="text-gradient-gold block">{t('hero.titleHighlight')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : ''}`}
          >
            <Link to="/voitures">
              <Button size="lg" variant="primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m-4-5V3" />
                </svg>
                {t('hero.cta')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 border border-white/20">
                {t('hero.ctaSecondary')}
              </Button>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            custom={4}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className={`flex gap-8 mt-14 pt-8 border-t border-white/10 ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {[
              { value: '1200+', label: t('stats.clients') },
              { value: '50+', label: t('stats.cars') },
              { value: '8', label: t('stats.cities') },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-gradient-gold">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Visual car card */}
        <motion.div
          variants={floatVariants}
          animate="animate"
          className={`relative ${isRTL ? 'lg:order-1' : ''}`}
        >
          <div className="relative mx-auto max-w-md">
            {/* Main card */}
            <div className="glass rounded-3xl p-6 border border-white/10 shadow-premium-dark">
              {/* Car illustration placeholder */}
              <div className="h-56 rounded-2xl bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent" />
                <svg className="w-40 h-28 text-gold-500/60" viewBox="0 0 200 120" fill="currentColor">
                  <path d="M 20 80 L 30 50 Q 35 40 50 38 L 80 35 L 100 25 L 140 25 L 160 38 L 175 42 L 180 50 L 185 80 Z" />
                  <circle cx="55" cy="85" r="18" fill="#1a1a1a" stroke="currentColor" strokeWidth="3" />
                  <circle cx="55" cy="85" r="8" fill="currentColor" opacity="0.6" />
                  <circle cx="145" cy="85" r="18" fill="#1a1a1a" stroke="currentColor" strokeWidth="3" />
                  <circle cx="145" cy="85" r="8" fill="currentColor" opacity="0.6" />
                  <path d="M 90 38 L 88 55 L 125 55 L 125 38 Z" fill="#1a1a1a" opacity="0.5" />
                </svg>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white font-bold text-xl">Range Rover</p>
                  <p className="text-gray-400 text-sm">SUV Luxe · 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-gold-400 font-black text-2xl">1800</p>
                  <p className="text-gray-500 text-xs">MAD / jour</p>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                {['Automatique', 'Hybride', '5 Places'].map((tag) => (
                  <span key={tag} className="badge bg-white/10 text-gray-300 text-xs px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-gold-500 text-white rounded-2xl px-4 py-2 shadow-gold-lg font-bold text-sm"
            >
              ✓ Disponible
            </motion.div>

            {/* Floating whatsapp pill */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card dark:bg-dark-700/90 rounded-2xl px-4 py-2 shadow-premium-dark border border-white/10 flex items-center gap-2"
            >
              <span className="text-green-400 text-lg">💬</span>
              <span className="text-white text-sm font-semibold">Réserver sur WhatsApp</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
