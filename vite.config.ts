import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Inspect(),vue()],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src')
    }
  },
  server:{
    host:true
  }
})
