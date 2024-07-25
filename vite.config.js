import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup'; // import svgr plugin

export default defineConfig({
  base: '/createURLForReactApp/',
  plugins: [react(), svgr()],
});
