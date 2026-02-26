import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// Load .env so PUBLIC_GA_TRACKING_ID is available at build (from .env or process.env)
const mode = process.env.NODE_ENV || 'production';
const env = loadEnv(mode, process.cwd(), '');
const publicGaTrackingId =
  process.env.PUBLIC_GA_TRACKING_ID || env.PUBLIC_GA_TRACKING_ID || '';

console.log('Building with GA Tracking ID:', publicGaTrackingId);

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  vite: {
    define: {
      'import.meta.env.PUBLIC_GA_TRACKING_ID':
        JSON.stringify(publicGaTrackingId),
    },
    plugins: [
      viteStaticCopy({
        targets: [
          { src: 'docs/**/*.md', dest: 'docs', structured: true },
          { src: 'docs/**/*.mdx', dest: 'docs', structured: true },
          { src: 'README.md', dest: '.' },
        ],
      }),
    ],
    assetsInclude: [
      '**/*.png',
      '**/*.jpg',
      '**/*.jpeg',
      '**/*.svg',
      '**/*.woff2',
    ],
    ssr: {
      noExternal: [],
    },
  },
});
