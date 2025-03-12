import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
// https://vite.dev/config/
export default defineConfig({
  base:'./',
  plugins: [react(),legacy()],
})
