import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteTsConfigPaths()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
  },
});
