import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  vite: {
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
