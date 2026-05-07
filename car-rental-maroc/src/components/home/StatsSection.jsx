import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    { value: 1200, suffix: '+', label: t('stats.clients'), icon: '👥' },
    { value: 50,   suffix: '+', label: t('stats.cars'),    icon: '🚗' },
    { value: 10,   suffix: '',  label: t('stats.years'),   icon: '⭐' },
    { value: 8,    suffix: '',  label: t('stats.cities'),  icon: '🏙️' },
  ];

  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.12)_0%,_transparent_70%)]" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <p className="text-4xl sm:text-5xl font-black text-gold-400 mb-2">
                <AnimatedCounter target={s.value} />{s.suffix}
              </p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
