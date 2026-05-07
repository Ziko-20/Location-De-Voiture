import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { cars } from '../data/cars';
import CarGallery from '../components/cars/CarGallery';
import CarSpecifications from '../components/cars/CarSpecifications';
import CarBookingCard from '../components/cars/CarBookingCard';
import CarCard from '../components/cars/CarCard';
import NotFound from './NotFound';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

export default function CarDetailsPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const car = cars.find((c) => c.slug === slug);

  if (!car) return <NotFound />;

  const related = cars.filter((c) => c.id !== car.id && c.category === car.category).slice(0, 3);

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* Breadcrumb + header */}
      <div className="bg-dark-900 pt-24 pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,168,76,0.1)_0%,_transparent_60%)]" />
        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-gold-400 transition-colors">Accueil</Link>
            <span>›</span>
            <Link to="/voitures" className="hover:text-gold-400 transition-colors">{t('nav.cars')}</Link>
            <span>›</span>
            <span className="text-gold-400">{car.name}</span>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="text-gold-400 text-sm font-semibold">{car.brand} · {car.category}</span>
              <h1 className="text-3xl sm:text-4xl font-black text-white mt-1">{car.name}</h1>
            </div>
            <div className="text-right">
              <p className="text-4xl font-black text-gold-400">{car.price} <span className="text-lg font-medium text-gray-400">MAD</span></p>
              <p className="text-gray-500 text-sm">{t('cars.perDay')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: gallery + specs */}
          <div className="lg:col-span-2 space-y-10">
            <CarGallery car={car} />
            <div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-6">{t('carDetails.specs')}</h2>
              <CarSpecifications car={car} />
            </div>
          </div>

          {/* Right: booking card */}
          <div className="lg:col-span-1">
            <CarBookingCard car={car} />
          </div>
        </div>

        {/* Related cars */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8">
              Véhicules similaires
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((c) => <CarCard key={c.id} car={c} />)}
            </div>
          </section>
        )}
      </div>
    </motion.div>
  );
}
