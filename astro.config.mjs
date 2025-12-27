// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://shim3z.github.io",
  base: "shim3z.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
