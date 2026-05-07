import { cars } from '../data/cars';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchCars() {
  await delay(600);
  return cars;
}

export async function fetchCarBySlug(slug) {
  await delay(400);
  const car = cars.find((c) => c.slug === slug);
  if (!car) throw new Error('Véhicule introuvable');
  return car;
}

export async function fetchFeaturedCars() {
  await delay(400);
  return cars.filter((c) => c.available).slice(0, 6);
}

export async function submitContactForm(data) {
  await delay(1000);
  console.log('Contact form submitted:', data);
  return { success: true };
}
