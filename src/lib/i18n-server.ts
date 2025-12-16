import i18n from 'i18next';
import { translations } from '../translations';

export const initI18nServer = (lang: 'en' | 'es' = 'en') => {
  i18n.init({
    resources: {
      en: { translation: translations.en },
      es: { translation: translations.es },
    },
    lng: lang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
};

export const getServerTranslation = (lang: 'en' | 'es' = 'en') => {
  const instance = initI18nServer(lang);
  return instance.getFixedT(lang);
};

