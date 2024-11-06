import { defineConfig } from 'vite';
 
export default defineConfig({
    root: 'src',
  server: {
    port: process.env.PORT as unknown as number,
  },
  publicDir: '../public',
  build: {
    outDir: '../dist',
    assetsInlineLimit: 0,
    emptyOutDir: true
  }
});