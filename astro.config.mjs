import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import netlify from "@astrojs/netlify/edge-functions'";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify()
});
