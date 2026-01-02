import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    // Production build optimizations
    build: {
      // Use built-in esbuild minification (faster, no extra dependency)
      minify: 'esbuild',
      // Code splitting for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            // Vendor chunk for React
            'react-vendor': ['react', 'react-dom'],
            // UI libraries chunk
            'ui-vendor': ['framer-motion', 'lucide-react'],
            // i18n chunk
            'i18n': ['i18next', 'react-i18next'],
          },
        },
      },
      // Generate source maps for debugging
      sourcemap: false,
      // Chunk size warning limit
      chunkSizeWarningLimit: 500,
      // Asset inlining threshold (4kb)
      assetsInlineLimit: 4096,
    },
    // Dependency pre-bundling optimization
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'i18next', 'react-i18next'],
    },
  };
});
