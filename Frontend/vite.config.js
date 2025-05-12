import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "X-Content-Type-Options": "nosniff",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "axios"],
          editor: ["react-simple-code-editor", "prismjs"],
          markdown: ["react-markdown", "rehype-highlight"],
        },
      },
    },
  },
});
