import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  root: path.resolve(__dirname),
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "../../packages/utils"),
      "@styles": path.resolve(__dirname, "../../packages/styles"),
    },
  },
  server: {
    port: 3001,
    open: true,
  },
});
