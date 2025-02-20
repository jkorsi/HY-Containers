import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/Tests/setupTests.js",
  },
  server: {
    port: 3001, // must be a port other than 5173
    host: true,
    watch: {
      usePolling: true,
    },
  },
});
