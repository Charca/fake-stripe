import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import react from '@astrojs/react'

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',

  adapter: node({
    mode: 'standalone',
  }),

  integrations: [
    starlight({
      title: 'My Docs',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en', // lang is required for root locales
        },

        es: {
          label: 'Español',
        },
      },
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      components: {
        Head: './src/components/Head.astro',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Example Guide',
              link: '/guides/example/',
            },
          ],
        },
        {
          label: 'Reference',
          autogenerate: {
            directory: 'reference',
          },
        },
      ],
    }),
    react(),
  ],
})
