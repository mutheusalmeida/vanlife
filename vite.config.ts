import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteSvgr from 'vite-plugin-svgr'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tsConfigPaths(), viteSvgr()],
})
