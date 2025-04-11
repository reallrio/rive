import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/user': {
        target: 'http://fi7.bot-hosting.net:20331',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/user/, '/api/user'),
      },
    },
  }  
});
