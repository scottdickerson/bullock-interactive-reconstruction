import { useEffect } from 'react';
import { initGA,  } from '../utils/analytics';

/**
 * Analytics component that initializes Google Analytics and tracks page views.
 * Handles both initial page load and Astro view transitions for SPA-like navigation.
 * Tracks session end when user navigates back to attract screen (home).
 * Returns null as it doesn't render any UI elements.
 *
 * @returns null (no UI rendering)
 */
const Analytics = () => {
  useEffect(() => {
    initGA();

  }, []);

  return null;
};

export default Analytics;
