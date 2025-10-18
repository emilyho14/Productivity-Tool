import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace <repo-name> with your repo
export default defineConfig({
  plugins: [react()],
  base: '/ADHDRewardSystem/', 
})