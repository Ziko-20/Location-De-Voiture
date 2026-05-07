import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import ScrollToTop from './components/layout/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
            <Navbar />
            <main className="flex-1">
              <AppRoutes />
            </main>
            <Footer />
            <FloatingWhatsApp />
            <ScrollToTop />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
