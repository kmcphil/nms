import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import { publicRoutePaths } from './src/routePaths';

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://nataliemicaleschultz.com',
      dynamicRoutes: [...publicRoutePaths],
      readable: true,
    }),
  ],
});
