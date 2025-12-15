import Button from './Button';
import arrowLeft from '../assets/icon-arrow-left.svg?url';
import homeIcon from '../assets/icon-home.svg?url';

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
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Callback function when the Spanish language button is clicked */
  onSpanishClick?: () => void;
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
  className = '',
  onSpanishClick,
  showHome = true,
}: NavigationButtonsProps) => {
  return (
    <div
      className={`absolute  bottom-0 left-0 right-0 flex justify-between [view-transition-name:navigation-buttons] pb-24 ${className} `}
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
            <span className="text-details">BACK</span>
          </Button>
        )}
        {showHome && (
          <Button as="a" href="/" className="flex items-center gap-2">
            <img src={homeIcon} alt="Home" className="w-[29px] h-[29px]" />
            HOME
          </Button>
        )}
      </div>
      {onSpanishClick && <Button onClick={onSpanishClick}>Español</Button>}
    </div>
  );
};

export default NavigationButtons;
