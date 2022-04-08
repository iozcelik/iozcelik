import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  build: {
    format: 'file'
  },
  markdown: {
    shikiConfig: {
      theme: 'nord',
      wrap: true,
    },
  },
  integrations: [tailwind(), sitemap()],
});
