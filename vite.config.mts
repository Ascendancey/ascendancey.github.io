import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

export default defineConfig({
  define: {
    focused: 'window.focused',
  },
  resolve: {
    alias: {
      jquery: 'jquery/dist/jquery.js',
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  plugins: [react(), tsconfigPaths(), svgr()],
});
