import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      useCredentials: true,
      manifest: {
        name: "test app",
        short_name: "test app",
        icons: [
          {
            src: "maskable_icon_x192.png",
            sizes: "196x196",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      registerType: "autoUpdate",
    }),
  ],
});
