import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages needs a repo base-path; Vercel/custom domains need root.
  base: process.env.GITHUB_PAGES === 'true' ? '/vastgoed-/' : '/',
  plugins: [react()],
})
