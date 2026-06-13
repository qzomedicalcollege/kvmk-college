import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kudajbergenrasul01.github.io',
  base: '/kvmk-college',
  output: 'static',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'kk', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
