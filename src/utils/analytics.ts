import ReactGA from 'react-ga4';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: Record<string, unknown>[];
  }
}

export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || '';

export const initGA = () => {
  if (GA_TRACKING_ID) {
    ReactGA.initialize(GA_TRACKING_ID, {
      testMode: import.meta.env.DEV,
    });
  }
};

export const trackPageView = (path: string) => {
  if (GA_TRACKING_ID) {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  if (GA_TRACKING_ID) {
    ReactGA.event(eventName, parameters);
  }
};

export const trackCustomEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (GA_TRACKING_ID) {
    ReactGA.event({
      action,
      category,
      label,
      value,
    });
  }
};
