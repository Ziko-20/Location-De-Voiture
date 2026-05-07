// Format price to MAD currency
export const formatPrice = (price, lang = 'fr') => {
  if (lang === 'ar') {
    return `${price.toLocaleString('ar-MA')} درهم`;
  }
  return `${price.toLocaleString('fr-MA')} MAD`;
};

export const formatPriceShort = (price) => `${price} MAD`;
