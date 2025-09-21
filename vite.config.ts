import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ✅ Add this for SPA routing on Vercel
  base: "/", // ensure root deployment
  build: {
    outDir: "dist",
    rollupOptions: {
      // fallback to index.html for all routes
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
}));
