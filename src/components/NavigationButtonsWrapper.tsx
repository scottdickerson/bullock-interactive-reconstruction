import type { ComponentProps } from 'react';
import NavigationButtons from './NavigationButtons';

interface NavigationButtonsWrapperProps extends ComponentProps<'div'> {
  pathname: string;
}

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
