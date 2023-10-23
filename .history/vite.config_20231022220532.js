import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite configuration options...

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/main.css';`,
      },
    },
  },
});
