import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    open: true,
    allowedHosts: [
      "portfolio-website-nh9r.onrender.com", // apna Render domain add kiya
    ],
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
