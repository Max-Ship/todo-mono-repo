import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname),
  plugins: [react()],
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "../../packages/utils"),
      "@styles": path.resolve(__dirname, "../../packages/styles"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
