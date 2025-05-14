import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 10000,
    strictPort: true,
    allowedHosts: 'all' // ✅ Allow requests from any host (needed for Render)
  }
});
