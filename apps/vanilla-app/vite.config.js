import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname),
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "../../packages/utils"),
      "@styles": path.resolve(__dirname, "../../packages/styles"),
    },
  },
  server: {
    port: 3002,
    open: true,
  },
});
