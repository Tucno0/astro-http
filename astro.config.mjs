// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],

  // output: es una configuración que se puede usar para especificar cómo se debe construir el proyecto Astro.
  // puede ser 'hybrid', 'server' o 'static'
  // 'static' es el valor predeterminado y se utiliza para generar un sitio web estático.
  // 'hybrid' se utiliza para generar un sitio web híbrido que se puede servir desde un servidor o como un sitio web estático.
  // 'server' se utiliza para generar un sitio web todo desde el servidor.
  output: 'hybrid', // 

  adapter: node({
    mode: 'standalone',
  }),
});