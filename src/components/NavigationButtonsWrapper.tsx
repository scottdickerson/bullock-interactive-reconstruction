import type { ComponentProps } from 'react';
import NavigationButtons from './NavigationButtons';

/**
 * Props for the NavigationButtonsWrapper component
 */
interface NavigationButtonsWrapperProps extends ComponentProps<'div'> {
  /** The current pathname to determine which navigation buttons to show */
  pathname: string;
  /** The current language */
  lang?: 'en' | 'es';
}

/**
 * A wrapper component that determines which navigation buttons to display
 * based on the current pathname. Shows back button on detail pages and
 * home button on all pages except the index.
 *
 * @param props - NavigationButtonsWrapper component props
 * @returns The NavigationButtons component with appropriate props
 */
const NavigationButtonsWrapper = ({
  pathname,
  lang = 'en',
  ...rest
}: NavigationButtonsWrapperProps) => {
  // Calculate Spanish href based on current location
  const calculateSpanishHref = (): string => {
    // Determine target language (toggle between en and es)
    const targetLang = lang === 'es' ? 'en' : 'es';
    const langPrefix = targetLang === 'es' ? '/es' : '';

    // Extract the path without language prefix
    let pathWithoutLang = pathname;
    if (pathname.startsWith('/es/')) {
      pathWithoutLang = pathname.replace('/es', '');
    } else if (pathname === '/es') {
      pathWithoutLang = '/';
    }

    // Build new path with target language prefix
    return pathWithoutLang === '/'
      ? `${langPrefix}/`
      : `${langPrefix}${pathWithoutLang}`;
  };

  // Show back button on detail pages
  const showBack =
    pathname.startsWith('/detail/') || pathname.startsWith('/es/detail/');
  const langPrefix = lang === 'es' ? '/es' : '';
  const backHref = `${langPrefix}/select`;
  const homeHref = langPrefix || '/';
  // Don't show home button on home pages (both / and /es)
  const showHome =
    pathname !== '/' && pathname !== '/es' && pathname !== '/es/';
  const spanishHref = calculateSpanishHref();

  return (
    <NavigationButtons
      showBack={showBack}
      backHref={backHref}
      homeHref={homeHref}
      spanishHref={spanishHref}
      showHome={showHome}
      lang={lang}
      {...rest}
    />
  );
};

export default NavigationButtonsWrapper;
