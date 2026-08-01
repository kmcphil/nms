import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import { publicRoutePaths } from './src/routePaths';

/** Sitemap plugin already emits `/`; only pass non-root routes. */
const sitemapRoutes = publicRoutePaths.filter((path) => path !== '/');

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://nataliemicaleschultz.com',
      dynamicRoutes: [...sitemapRoutes],
      readable: true,
    }),
  ],
});
