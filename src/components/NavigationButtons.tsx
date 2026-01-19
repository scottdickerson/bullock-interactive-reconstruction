import { useTranslation } from 'react-i18next';
import Button from './Button';
import arrowLeft from '../assets/icon-arrow-left.svg?url';
import homeIcon from '../assets/icon-home.svg?url';
import { trackEvent } from '../utils/analytics';

/**
 * Props for the NavigationButtons component
 */
interface NavigationButtonsProps {
  /** Whether to show the back button */
  showBack?: boolean;
  /** Whether to show the home button */
  showHome?: boolean;
  /** The href for the back button */
  backHref?: string;
  /** The href for the home button */
  homeHref?: string;
  /** The href for the Spanish language link */
  spanishHref?: string;
  /** The current language */
  lang?: 'en' | 'es';
  /** Additional CSS classes to apply to the container */
  className?: string;
}

/**
 * A navigation buttons component that displays back, home, and optional Spanish language buttons.
 * Positioned at the bottom of the screen with consistent styling.
 *
 * @param props - NavigationButtons component props
 * @returns A container with navigation buttons
 */
const NavigationButtons = ({
  showBack = false,
  backHref = '/select',
  homeHref = '/',
  className = '',
  spanishHref,
  showHome = true,
  lang = 'en',
}: NavigationButtonsProps) => {
  const { t } = useTranslation();

  // Show "English" when in Spanish, "Español" when in English
  const languageButtonText =
    lang === 'es' ? t('common.english') : t('common.español');


  const handleLanguageToggle = () => {
    // Track language toggle event
    const targetLang = lang === 'es' ? 'en' : 'es';
    trackEvent('language_toggle', { language: targetLang });
  };

  return (
    <div
      className={`absolute  bottom-0 left-0 right-0 flex justify-between [view-transition-name:navigation-buttons] pb-24 ${className} text-details`}
    >
      <div className="flex gap-4">
        {showBack && (
          <Button
            as="a"
            href={backHref}
            className="flex items-center gap-2 z-30"
          >
            <img
              src={arrowLeft}
              alt="Back arrow"
              className="w-[42px] h-[18px]"
            />
            {t('common.back')}
          </Button>
        )}
        {showHome && (
          <Button
            as="a"
            href={homeHref}
            className="flex items-center gap-2"
          >
            <img src={homeIcon} alt="Home" className="w-[29px] h-[29px]" />
            {t('common.home')}
          </Button>
        )}
      </div>
      {spanishHref && (
        <Button as="a" href={spanishHref} onClick={handleLanguageToggle}>
          {languageButtonText}
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
