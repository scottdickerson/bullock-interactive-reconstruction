import Button from './Button';

interface NavigationButtonsProps {
  showBack?: boolean;
  showHome?: boolean;
  backHref?: string;
  className?: string;
  onSpanishClick?: () => void;
}

const NavigationButtons = ({
  showBack = false,
  backHref = '/select',
  className = '',
  onSpanishClick,
  showHome = true,
}: NavigationButtonsProps) => {
  return (
    <div
      className={`absolute z-50 bottom-0 left-0 right-0 flex justify-between [view-transition-name:navigation-buttons] ${className}`}
    >
      <div className="flex gap-4">
        {showBack && (
          <Button as="a" href={backHref} className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-details">BACK</span>
          </Button>
        )}
        {showHome && (
          <Button as="a" href="/" className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            HOME
          </Button>
        )}
      </div>
      {onSpanishClick && <Button onClick={onSpanishClick}>Español</Button>}
    </div>
  );
};

export default NavigationButtons;
