import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Your repo name EXACTLY
export default defineConfig({
  plugins: [react()],
  base: "/expense-tracker-frontend/", 
})
