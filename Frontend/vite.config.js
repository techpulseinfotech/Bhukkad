import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Server all network devices ko access karne dega
    port: 5173,      // Port ka number wahi rakhein jo aap use kar rahe hain
  },

})

