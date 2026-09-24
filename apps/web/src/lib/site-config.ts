export const siteConfig = {
  whatsappNumber: '+5519999709308',
  experienceStartYear: 2020,
};

export function getFormattedWhatsAppNumber() {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, '');
  return `+${digits.slice(0, 2)} (${digits.slice(2, 4)}) ${digits.slice(4, 9)}-${digits.slice(9)}`;
}

export function getExperienceYears() {
  return Math.max(0, new Date().getFullYear() - siteConfig.experienceStartYear);
}

export function getWhatsAppUrl(message: string) {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
