import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translations } from '../translations';

// Get language from URL path or default to 'en'
const getLanguageFromPath = (): string => {
  if (typeof window === 'undefined') return 'en';
  const path = window.location.pathname;
  if (path.startsWith('/es/') || path === '/es') {
    return 'es';
  }
  return 'en';
};

// Initialize singleton instance (for backward compatibility)
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translations.en },
      es: { translation: translations.es },
    },
    lng: getLanguageFromPath(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupFromPathIndex: 0,
    },
  });

// Export function to setup i18n with a specific language
export const setupClientI18n = (lang: 'en' | 'es' = 'en') => {
  // Set language synchronously to prevent flash of wrong language
  if (i18n.language !== lang) {
    i18n.language = lang;
    i18n.resolvedLanguage = lang;
    // Also trigger changeLanguage for async operations, but don't wait
    i18n.changeLanguage(lang);
  }
  return i18n;
};

export default i18n;
