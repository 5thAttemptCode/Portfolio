import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
            react(),
            VitePluginRadar({
              // Google Analytics tag injection
              analytics: {
                id: process.env.VITE_GOOGLE_ANALYTICS_ID
              },
            })
          ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
