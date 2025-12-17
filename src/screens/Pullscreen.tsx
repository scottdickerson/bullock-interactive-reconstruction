import { useTranslation } from 'react-i18next';
import Woodblocks from '../components/Woodblocks';
import Button from '../components/Button';
import arrowRight from '../assets/icon-arrow-right.svg?url';

/**
 * Props for the Pullscreen component
 */
interface PullscreenProps {
  /** Server-side translations (optional, falls back to useTranslation) */
  translations?: {
    pullscreen: {
      title: string;
      subtitle: string;
      description: string;
    };
    common: {
      start: string;
    };
  };
  /** Language code (optional, used for href generation) */
  lang?: 'en' | 'es';
}

/**
 * The initial pullscreen/splash screen component displayed on the home page.
 * Features the main title, subtitle, description, and a START button.
 * Clicking anywhere on the screen navigates to the select screen.
 * Includes animated woodblock graphics in the background.
 *
 * @param props - Pullscreen component props
 * @returns The pullscreen layout with title, description, and start button
 */
const Pullscreen = ({ translations, lang: langProp }: PullscreenProps = {}) => {
  const { t, i18n } = useTranslation();
  const currentLang = langProp || i18n.language;
  const langPrefix = currentLang === 'es' ? '/es' : '';
  
  // Use server-side translations if provided, otherwise use client-side translations
  const title = translations?.pullscreen?.title || t('pullscreen.title');
  const subtitle = translations?.pullscreen?.subtitle || t('pullscreen.subtitle');
  const description = translations?.pullscreen?.description || t('pullscreen.description');
  const startText = translations?.common?.start || t('common.start');

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      onClick={() => {
        window.location.href = `${langPrefix}/select`;
      }}
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <div
          className={
            currentLang === 'es' ? 'max-w-[1200px]' : 'max-w-[934px]'
          }
        >
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-[100px] leading-none  font-extrabold text-yellow drop-shadow-lg animate-float">
              {title.split(' ').slice(0, 1).join(' ')}
            </h1>
            <h1 className="text-[100px] leading-none  font-extrabold text-yellow drop-shadow-lg animate-float">
              {title.split(' ').slice(1).join(' ')}
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-3xl font-semibold text-pullscreen-text  mb-8 ">
            {subtitle}
          </p>

          {/* Description */}
          <div className="text-2xl text-pullscreen-text font-medium mb-12 leading-relaxed">
            <p>{description}</p>
          </div>
        </div>

        {/* Start Button */}
        <Button
          as="a"
          href={`${langPrefix}/select`}
          className="flex items-center gap-2 [view-transition-name:start-button]"
        >
          {startText}{' '}
          <img src={arrowRight} alt="Arrow Right" className="w-11 h-4" />
        </Button>
      </div>
      <Woodblocks />
    </div>
  );
};

export default Pullscreen;
