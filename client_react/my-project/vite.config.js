import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    sourcemap: true,
    assetsDir: "assets",
    assetsInlineLimit: 4096,
  },
});
