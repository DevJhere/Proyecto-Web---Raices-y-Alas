import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      png:  { quality: 70 },
      jpeg: { quality: 75 },
      jpg:  { quality: 75 },
      webp: { quality: 80 },
    }),
  ],
  build: {
    // Assets < 4 KB se inline como base64 (evita petición HTTP extra)
    assetsInlineLimit: 4096,
  },
  server:  { headers: securityHeaders },
  preview: { headers: securityHeaders },
});
