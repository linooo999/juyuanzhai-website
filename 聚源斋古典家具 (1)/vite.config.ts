import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about.html'),
          products: path.resolve(__dirname, 'products.html'),
          custom: path.resolve(__dirname, 'custom.html'),
          craft: path.resolve(__dirname, 'craft.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          cases: path.resolve(__dirname, 'cases.html'),
          'case-furniture-detail': path.resolve(__dirname, 'case-furniture-detail.html'),
          'case-renovation-detail': path.resolve(__dirname, 'case-renovation-detail.html'),
          'product-detail': path.resolve(__dirname, 'product-detail.html'),
        },
      },
    },
  };
});
