import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { submitContactForm } from '../services/api';
import GoogleMapSection from '../components/maps/GoogleMapSection';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await submitContactForm(form);
    setLoading(false);
    setSuccess(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSuccess(false), 5000);
  };

  const contactInfo = [
    { icon: '📍', label: t('contact.address'),   value: t('contact.addressValue') },
    { icon: '📞', label: 'Téléphone',             value: t('contact.phoneValue') },
    { icon: '✉️', label: 'Email',                 value: t('contact.emailValue') },
    { icon: '🕐', label: t('contact.hours'),      value: `${t('contact.hoursValue')} · ${t('contact.hoursWeekend')}` },
  ];

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Header */}
      <div className="bg-dark-900 pt-24 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.12)_0%,_transparent_60%)]" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <span className="inline-block bg-gold-500/20 text-gold-400 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-gold-500/30">
              {t('contact.title')}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">{t('contact.subtitle')}</h1>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Parlons-en 👋</h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Notre équipe est disponible 7j/7 pour répondre à toutes vos questions et organiser votre location.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-dark-700 rounded-2xl border border-gray-100 dark:border-dark-600">
                  <span className="text-2xl flex-shrink-0">{info.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{info.label}</p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/+212600000000" target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-4 cursor-pointer transition-colors"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <p className="font-bold">{t('contact.whatsapp')}</p>
                  <p className="text-green-100 text-sm">{t('contact.phoneValue')}</p>
                </div>
              </motion.div>
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-dark-700 rounded-3xl shadow-premium dark:shadow-premium-dark border border-gray-100 dark:border-dark-600 p-8">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{t('contact.success')}</h3>
                  <p className="text-gray-500 dark:text-gray-400">Nous vous répondrons dans les plus brefs délais.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">{t('contact.name')}</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Mohammed Alami" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">{t('contact.phone')}</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+212 6 00 00 00 00" className="input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">{t('contact.email')}</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="exemple@email.com" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">{t('contact.message')}</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Bonjour, je souhaite louer une voiture pour..." className="input-field resize-none" />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-gold-500 hover:bg-gold-600 disabled:opacity-70 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-lg shadow-gold"
                  >
                    {loading ? (
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    ) : '✉️'}
                    {loading ? 'Envoi en cours...' : t('contact.send')}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <GoogleMapSection />
    </motion.div>
  );
}
