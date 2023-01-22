import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "apple-touch-icon.png"
      ],
      manifest: {
        name: "Bettler",
        short_name: "BT",
        start_url: "index.html",
        description:
            "A playable Bettler game for Web Applications at HTWG",
        id: "bettler",
        orientation: "any",
        shortcuts: [],
        dir: "ltr",
        prefer_related_applications: false,
        related_applications: [],
        categories: ["games", "Fun", "casual", "online"],
        iarc_rating_id: "none",
        share_target: {},
        display_override: [],
        screenshots: ["images/logo.png"],
        appleTouchIcon: "images/apple-touch-icon.png",
        icons: [
          {
            src: "images/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "images/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "images/logo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "images/logo.png",
            sizes: "310x310",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "images/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
        ],
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
