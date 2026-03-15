import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { hmr: true, // Use polling for specific environments like WSL or networked drives
  watch: { usePolling: true } }
})
