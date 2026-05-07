import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import { WHATSAPP_URL, NAV_LINKS, COMPANY_EMAIL, COMPANY_PHONE } from '../../utils/constants';

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ${isRTL ? 'text-right' : ''}`}>
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className={`flex items-center gap-2.5 mb-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center">
                <span className="text-white font-black text-sm">LA</span>
              </div>
              <div>
                <div className="font-black text-white text-lg">LocationAuto</div>
                <div className="text-xs text-gold-500 font-bold tracking-widest">MAROC</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              {t('footer.desc')}
            </p>
            {/* Social */}
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              {[
                { Icon: FaWhatsapp, href: WHATSAPP_URL, color: 'hover:bg-green-600' },
                { Icon: FaInstagram, href: '#', color: 'hover:bg-pink-600' },
                { Icon: FaFacebook, href: '#', color: 'hover:bg-blue-600' },
                { Icon: FaTiktok, href: '#', color: 'hover:bg-gray-600' },
              ].map(({ Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg bg-dark-600 ${color} flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-1`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">{t('footer.links')}</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ key, path }) => (
                <li key={key}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors duration-200"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">{t('footer.privacy')}</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">{t('footer.terms')}</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${COMPANY_PHONE}`} className={`flex items-center gap-2.5 text-gray-400 hover:text-gold-400 text-sm transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <FiPhone size={14} className="text-gold-500 flex-shrink-0" />
                  {COMPANY_PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_EMAIL}`} className={`flex items-center gap-2.5 text-gray-400 hover:text-gold-400 text-sm transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <FiMail size={14} className="text-gold-500 flex-shrink-0" />
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li>
                <span className={`flex items-start gap-2.5 text-gray-400 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <FiMapPin size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                  {t('contact.addressValue')}
                </span>
              </li>
              <li className="pt-1">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  <FaWhatsapp size={14} /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-600">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          <span>© {year} LocationAuto Maroc. {t('footer.rights')}</span>
          <span>{t('footer.madeIn')}</span>
        </div>
      </div>
    </footer>
  );
}
