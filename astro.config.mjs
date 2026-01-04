import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bursa-insaat-tadilat.com', // TODO: Domain aldığınızda güncelleyin
  integrations: [react(), tailwind(), sitemap()],
});
