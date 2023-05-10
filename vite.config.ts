import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url);
const pathName = require.resolve('@ffmpeg/core/dist/ffmpeg-core.worker.js');


/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
})
