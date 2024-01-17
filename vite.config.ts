import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { createHtmlPlugin } from "vite-plugin-html";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({ inject: { data: { title: "Vite React App" } } }), // comment this line in order solve the issue
    crx({ manifest }),
  ],
});
