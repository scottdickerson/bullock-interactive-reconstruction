import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n-client';

interface I18nProviderProps {
  children: React.ReactNode;
  lang?: 'en' | 'es';
}

/**
 * Provider component that initializes i18next for React components.
 * Should be used to wrap client-side React components that need translations.
 *
 * @param props - I18nProvider component props
 * @returns The children wrapped with i18n context
 */
const I18nProvider = ({ children, lang }: I18nProviderProps) => {
  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
