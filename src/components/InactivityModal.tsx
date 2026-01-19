import { useEffect, useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import homeIcon from '../assets/icon-home.svg?url';
import arrowRight from '../assets/icon-arrow-right.svg?url';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { trackEvent } from '../utils/analytics';

/**
 * Props for the InactivityModal component
 */
interface InactivityModalProps {
  /** Time in milliseconds before showing the modal after user inactivity (default: 90000) */
  inactivityTimeout?: number;
  /** Time in milliseconds before auto-navigating to home if no response after modal appears (default: 15000) */
  autoCloseTimeout?: number;
  /** The path to navigate to when the user clicks "Home" */
  homePath?: string;
}

/**
 * A modal component that appears after a period of user inactivity.
 * Tracks user activity (mouse, keyboard, scroll, touch) and shows a modal
 * prompting the user to continue or return home. Auto-navigates to home
 * if no response is received within the specified timeout.
 *
 * @param props - InactivityModal component props
 * @returns A modal overlay with inactivity prompt, or null if not visible
 */
const InactivityModal = ({
  inactivityTimeout = 90000, // 90 seconds
  autoCloseTimeout = 15000, // 15 seconds
  homePath = '/',
}: InactivityModalProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const inactivityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastActivityRef = useRef<number>(Date.now());
  const modalRef = useRef<HTMLDivElement>(null);

  const resetInactivityTimer = useCallback(() => {
    // Clear existing timer
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
    }

    // Hide modal if visible
    setIsVisible(false);

    // Update last activity time
    lastActivityRef.current = Date.now();

    // Set new timer
    inactivityTimerRef.current = setTimeout(() => {
      setIsVisible(true);
      // Start auto-close timer when modal appears
      autoCloseTimerRef.current = setTimeout(() => {
        window.location.href = homePath;
      }, autoCloseTimeout);
    }, inactivityTimeout);
  }, [inactivityTimeout, autoCloseTimeout, homePath]);

  useEffect(() => {
    const activities = ['mousedown', 'keypress', 'touchstart', 'click'];

    const handleActivity = (event: Event) => {
      // Check if the click is inside the modal
      if (modalRef.current && event.target instanceof Node) {
        if (modalRef.current.contains(event.target)) {
          // Click is inside the modal, don't reset the timer
          return;
        }
      }
      // Click is outside the modal, reset the timer
      resetInactivityTimer();
    };

    // Initialize timer
    resetInactivityTimer();

    // Add event listeners
    activities.forEach(activity => {
      window.addEventListener(activity, handleActivity, { passive: true });
    });
    return () => {
      activities.forEach(activity => {
        window.removeEventListener(activity, handleActivity);
      });
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      if (autoCloseTimerRef.current) {
        clearTimeout(autoCloseTimerRef.current);
      }
    };
  }, [resetInactivityTimer]);

  const handleKeepReading = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      // Track timeout "No" event (user wants to keep reading)
      trackEvent('ButtonPress_TimeoutNo');
      resetInactivityTimer();
    },
    [resetInactivityTimer]
  );

  const handleHome = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      // Track timeout "Yes" event (user clicked home) and session end
      trackEvent('ButtonPress_TimeoutYes');
      window.location.href = homePath;
    },
    [homePath]
  );

  return (
    <Dialog open={isVisible} onOpenChange={setIsVisible}>
      <DialogContent
        ref={modalRef}
        className="py-14 bg-black border-yellow rounded-2xl w-[830px] !z-[60]"
        overlayClassName="!z-[55]"
      >
        <DialogHeader>
          <DialogTitle className="flex justify-center">
            <img
              src="/countdown_timer.gif"
              alt="Countdown Timer"
              className="w-[183px] h-[183px]"
            />
          </DialogTitle>
          <DialogDescription className="text-center mt-6 mb-6 text-details font-bold text-2xl">
            {t('inactivity.needMoreTime')}
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-6 justify-center">
          <Button
            as="a"
            href={homePath}
            onClick={handleHome}
            className="flex items-center gap-2 p-6 bg-mauve text-white"
          >
            <img src={homeIcon} alt="Home" className="w-[29px] h-[29px]" />
            <span>{t('inactivity.home')}</span>
          </Button>
          <Button
            onClick={handleKeepReading}
            className="flex items-center gap-2 p-6 bg-mauve text-white text-nowrap"
          >
            <span>{t('inactivity.keepReading')}</span>
            <img
              src={arrowRight}
              alt="Arrow Right"
              className="w-[29px] h-[29px]"
            />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InactivityModal;
