import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import path from 'node:path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [Inspect(),vue()],
    resolve:{
      alias:{
        '@': path.resolve(__dirname, './src')
      }
    },
    server:{
      host:true
    },
    base: env.VITE_BASE_URL,
  })
}
