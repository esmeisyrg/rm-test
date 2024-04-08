import { defineConfig } from 'vite';
import sassPlugin from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  ],
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sassPlugin,
      },
    },
  },
});
