import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CarGallery({ car }) {
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const images = car.gallery?.length ? car.gallery : [car.image, car.image, car.image];

  return (
    <div>
      {/* Main image */}
      <motion.div
        className="relative h-72 sm:h-96 rounded-3xl overflow-hidden cursor-zoom-in mb-4 bg-gray-100 dark:bg-dark-600"
        onClick={() => setLightbox(true)}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={images[selected]}
          alt={`${car.name} - photo ${selected + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
          🔍 Agrandir
        </div>
        {/* Image counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full font-medium">
          {selected + 1} / {images.length}
        </div>
      </motion.div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <motion.button
            key={i}
            onClick={() => setSelected(i)}
            whileHover={{ scale: 1.05 }}
            className={`flex-1 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
              selected === i
                ? 'border-gold-500 shadow-gold'
                : 'border-gray-200 dark:border-dark-600 opacity-70 hover:opacity-100'
            }`}
          >
            <img src={img} alt={`${car.name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selected]}
                alt={car.name}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <button
                onClick={() => setLightbox(false)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-xl transition-colors"
              >
                ×
              </button>
              {/* Nav arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelected((s) => (s - 1 + images.length) % images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-xl transition-colors"
                  >‹</button>
                  <button
                    onClick={() => setSelected((s) => (s + 1) % images.length)}
                    className="absolute right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center text-xl transition-colors"
                  >›</button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
