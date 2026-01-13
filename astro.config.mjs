import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // TODO: Domain aldığınızda güncelleyin
  site: 'https://bursa-insaat-tadilat.com',

  integrations: [react(), tailwind(), sitemap()],
  adapter: vercel(),
});