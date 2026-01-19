import { useEffect, useState } from 'react';
import InactivityModal from './InactivityModal';

/**
 * Props for the InactivityModalWrapper component
 */
interface InactivityModalWrapperProps {
  /** The current pathname to determine if the modal should be shown */
  pathname?: string;
  /** The current language */
  lang?: 'en' | 'es';
}

/**
 * A wrapper component that conditionally renders the InactivityModal.
 * Only shows the modal on pages other than the pullscreen (index page).
 *
 * @param props - InactivityModalWrapper component props
 * @returns The InactivityModal component if pathname is not '/', otherwise null
 */
const InactivityModalWrapper = ({ pathname,  }: InactivityModalWrapperProps) => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Get current pathname from window if not provided
    const currentPath =
      pathname ??
      (typeof window !== 'undefined' ? window.location.pathname : '');
    // Show modal on all pages except the pullscreen (index page)
    console.log('shouldTrackInactivityModal', currentPath !== '/' && currentPath !== '/es/');
    setShouldShow(currentPath !== '/' && currentPath !== '/es/');
  }, [pathname]);

  if (!shouldShow) {
    return null;
  }

  const homePath = '/';

  return <InactivityModal homePath={homePath} />;
};

export default InactivityModalWrapper;


