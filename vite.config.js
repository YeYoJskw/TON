import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Указывает корневой путь для раздачи файлов
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
