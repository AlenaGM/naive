import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/naiveart.netlify.app/",
  plugins: [vue()],
  resolve: {
    alias: {
      //eslint-disable-next-line
      "@": path.resolve(__dirname, "src"),
    },
  },
});