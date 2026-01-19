import Cookies from 'js-cookie';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: Record<string, unknown>[];
  }
}

export const GA_TRACKING_ID = import.meta.env.PUBLIC_GA_TRACKING_ID;
console.log('GA_TRACKING_ID', GA_TRACKING_ID);

/**
 * Initialize Google Analytics 4 using native gtag.js
 * Checks if gtag is already loaded before initializing
 */
export const initGA = () => {
  if (!GA_TRACKING_ID) {
    return;
  }

  // Check if gtag is already loaded (from Layout.astro script tag)
  if (typeof window !== 'undefined' && window.gtag) {
    window.dataLayer.push({
      'language': 'es',
    });
    // Generate a new client_id (format: timestamp.random)
  const newClientId = `${Date.now()}.${Math.random().toString(36).substring(2, 15)}`;

  // Set new client_id in dataLayer to trigger a new session
  window.gtag('config', GA_TRACKING_ID, {
    client_id: newClientId,
    user_id: newClientId,
  });
  }
};


/**
 * Track a custom event in Google Analytics 4
 * @param eventName - The name of the event
 * @param parameters - Optional event parameters
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  if (!GA_TRACKING_ID || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', eventName, parameters);
};

export const setLanguage = (language: string) => {
  if (!GA_TRACKING_ID || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.dataLayer.push({
    'language': language,
  });
};

/**
 * Reset user session by deleting all Google Analytics cookies
 * and setting a new client_id to trigger a new session
 */
export const resetUserSession = () => {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  // Delete known GA cookies
  Cookies.remove('_ga', { path: '/' });
  Cookies.remove('_gid', { path: '/' });
  Cookies.remove('_gat', { path: '/' });

  // Delete GA4 measurement ID specific cookies (_ga_*)
  // Iterate through all cookies to find pattern matches
  const allCookies = document.cookie.split(';');
  allCookies.forEach((cookie) => {
    const cookieName = cookie.split('=')[0].trim();
    if (cookieName.startsWith('_ga_')) {
      Cookies.remove(cookieName, { path: '/' });
    }
  });

  // Generate a new client_id (format: timestamp.random)
  const newClientId = `${Date.now()}.${Math.random().toString(36).substring(2, 15)}`;

  // Set new client_id in dataLayer to trigger a new session
  window.gtag('config', GA_TRACKING_ID, {
    client_id: newClientId,
    user_id: newClientId,
  });

  // Trigger session_start event
  window.dataLayer.push({ event: 'session_start' });
};