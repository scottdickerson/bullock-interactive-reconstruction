import type { ComponentProps } from 'react';
import NavigationButtons from './NavigationButtons';

/**
 * Props for the NavigationButtonsWrapper component
 */
interface NavigationButtonsWrapperProps extends ComponentProps<'div'> {
  /** The current pathname to determine which navigation buttons to show */
  pathname: string;
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
  ...rest
}: NavigationButtonsWrapperProps) => {
  const handleSpanishClick = () => {
    // TODO: Implement Spanish language toggle
    console.log('Spanish button clicked');
  };

  // Show back button on detail pages
  const showBack = pathname.startsWith('/detail/');
  const backHref = '/select';
  const showHome = pathname !== '/';

  return (
    <NavigationButtons
      showBack={showBack}
      backHref={backHref}
      onSpanishClick={handleSpanishClick}
      showHome={showHome}
      {...rest}
    />
  );
};

export default NavigationButtonsWrapper;
