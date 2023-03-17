import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],

  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      config: "/src/config",
      context: "/src/context",
      guards: "/src/guards",
      hooks: "/src/hooks",
      layouts: "/src/layouts",
      pages: "/src/pages",
      router: "/src/router",
      store: "/src/store",
      utils: "/src/utils",
      views: "/src/views",
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        ws: true,
      },
    },
  },
});
