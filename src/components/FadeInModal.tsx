import { useEffect, useState, type ReactNode } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { cn } from '../lib/utils';

type DialogContentProps = ComponentPropsWithoutRef<typeof DialogContent>;

/**
 * Props for the FadeInModal component
 */
interface FadeInModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback function when the modal open state changes */
  onOpenChange: (open: boolean) => void;
  /** The content to display in the modal */
  children: ReactNode;
  /** Additional props to pass to DialogContent */
  contentProps?: Omit<DialogContentProps, 'children'>;
  /** Duration of the fade transition in milliseconds (default: 500) */
  fadeDuration?: number;
  /** Delay before fade-in starts in milliseconds (default: 10) */
  fadeInDelay?: number;
  /** Delay before removing from DOM after fade-out starts in milliseconds (default: matches fadeDuration) */
  fadeOutDelay?: number;
}

/**
 * A modal component that handles fade-in and fade-out transitions.
 * Manages the internal state to ensure smooth animations even when
 * the component is removed from the DOM when closed.
 *
 * @param props - FadeInModal component props
 * @returns A dialog with fade transitions
 */
const FadeInModal = ({
  isOpen,
  onOpenChange,
  children,
  contentProps,
  fadeDuration = 500,
  fadeInDelay = 10,
  fadeOutDelay,
}: FadeInModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [internalOpen, setInternalOpen] = useState(isOpen);

  // Default fadeOutDelay to fadeDuration to ensure fade-out completes
  const actualFadeOutDelay = fadeOutDelay ?? fadeDuration;

  // Handle opening - fade in after mount
  useEffect(() => {
    if (isOpen) {
      setInternalOpen(true);
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, fadeInDelay);
      return () => clearTimeout(timer);
    }
  }, [isOpen, fadeInDelay]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Start fade-out, then notify parent after animation completes
      setIsVisible(false);
      setTimeout(() => {
        setInternalOpen(false);
        onOpenChange(false);
      }, actualFadeOutDelay);
    } else {
      onOpenChange(true);
    }
  };

  return (
    <Dialog open={internalOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        {...contentProps}
        className={cn('transition-opacity', contentProps?.className)}
        style={{
          opacity: isVisible ? 1 : 0,
          transitionDuration: `${fadeDuration}ms`,
          ...contentProps?.style,
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default FadeInModal;
