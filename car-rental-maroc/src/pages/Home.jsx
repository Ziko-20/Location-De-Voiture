import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import SearchBar from '../components/home/SearchBar';
import FeaturedCars from '../components/home/FeaturedCars';
import WhyChooseUs from '../components/home/WhyChooseUs';
import StatsSection from '../components/home/StatsSection';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import CTASection from '../components/home/CTASection';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <HeroSection />

      {/* Floating search bar */}
      <div className="container-custom -mt-8 relative z-20">
        <SearchBar />
      </div>

      <FeaturedCars />
      <WhyChooseUs />
      <StatsSection />
      <Testimonials />
      <FAQ />
      <CTASection />
    </motion.div>
  );
}
