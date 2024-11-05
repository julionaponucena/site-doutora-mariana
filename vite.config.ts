import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';
 
export default defineConfig({
 root: 'src',
  server: {
    port: process.env.PORT as unknown as number,
  },
  plugins: [vercel()],
});