import { useEffect } from 'react';
import { initGA, trackPageView } from '../scripts/analytics';

const Analytics = () => {
  useEffect(() => {
    initGA();
    trackPageView(window.location.pathname + window.location.search);

    // Track page views on navigation (for Astro view transitions)
    const handlePageLoad = () => {
      trackPageView(window.location.pathname + window.location.search);
    };

    document.addEventListener('astro:page-load', handlePageLoad);

    return () => {
      document.removeEventListener('astro:page-load', handlePageLoad);
    };
  }, []);

  return null;
};

export default Analytics;
