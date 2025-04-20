import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = resolve(__dirname, "src");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: resolve(root, "app"),
      pages: resolve(root, "pages"),
      widgets: resolve(root, "widgets"),
      features: resolve(root, "features"),
      entities: resolve(root, "entities"),
      shared: resolve(root, "shared"),
      uikit: resolve(root, "uikit"),
    },
  },
});
