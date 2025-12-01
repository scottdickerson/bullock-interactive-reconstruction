// Enable Astro view transitions
if (import.meta.env.DEV) {
  import('astro:transitions/client').then(({ setupViewTransitions }) => {
    setupViewTransitions();
  });
}

