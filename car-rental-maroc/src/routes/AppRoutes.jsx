import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Cars from '../pages/Cars';
import CarDetailsPage from '../pages/CarDetailsPage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/voitures" element={<Cars />} />
        <Route path="/voitures/:slug" element={<CarDetailsPage />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
