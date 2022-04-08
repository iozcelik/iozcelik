import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
site: 'https://iozcelik.github.io/',
  markdown: {
    drafts: true,
  },
  integrations: [tailwind(), sitemap()],
});
