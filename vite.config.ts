import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins : [react(), nodePolyfills()],
  resolve : {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals     : true,
    environment : 'jsdom',
    setupFiles  : ['./vitest.setup.ts'],
    coverage    : {
      exclude: ['src/components/ui/**'],
    }
  },
});
