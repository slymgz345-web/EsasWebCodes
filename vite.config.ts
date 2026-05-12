import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Bu satır Vercel'in beklediği "export" işlemini yapar:
export default defineConfig({
  plugins: [react()],
})
