import { defineConfig } from "vite";
// import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite()],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});
