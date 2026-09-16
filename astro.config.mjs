import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    server: {
      watch: {
        ignored: [
          '**/01 - Xadrez Girando/**',
          '**/Apresentação.pdf',
          '**/Neue Montreal.zip',
        ],
      },
    },
  },
});
