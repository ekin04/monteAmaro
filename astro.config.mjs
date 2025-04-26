// @ts-check
import { defineConfig } from "astro/config";
import { siteConfig } from "./siteConfig";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), icon(), sitemap()],
  site: siteConfig.site.baseUrl,
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
