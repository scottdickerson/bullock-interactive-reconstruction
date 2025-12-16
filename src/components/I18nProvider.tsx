import { useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { setupClientI18n } from '../lib/i18n-client';

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
const I18nProvider = ({ children, lang = 'en' }: I18nProviderProps) => {
  // Initialize i18n with the correct language immediately (synchronously)
  // This prevents the flash of English content before Spanish loads
  const i18nInstance = useMemo(() => {
    return setupClientI18n(lang);
  }, [lang]);

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
};

export default I18nProvider;
