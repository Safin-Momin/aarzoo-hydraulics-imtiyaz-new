// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    },
  },

  plugins: [
    '~/plugins/i18n.ts',
  ],

  modules: [[
    '@pinia/nuxt',
    {
      autoImports: ['defineStore'],
    },
  ], '@vite-pwa/nuxt', '@nuxtjs/tailwindcss', '@funken-studio/sitemap-nuxt-3', '@nuxt/image-edge', '@nuxt/image'],

  pwa: {
    strategies: 'injectManifest',
    srcDir: 'service-worker',
    filename: 'sw.ts',
    registerType: 'autoUpdate',
    manifest: {
      name: 'Aarzoo Hydraulics - New & Reconditioned Hydraulic Pumps, Motors, Valves',
      short_name: 'Aarzoo Hydraulics',
      description: 'Global supplier of new and reconditioned hydraulic pumps, motors, valves, and spares. Custom solutions for industrial needs. Reliable worldwide shipping.',
      theme_color: '#e0dedf',
      icons: [
        {
          src: '/favicons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: '/favicons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: '/favicons/mstile-150x150.png',
          sizes: '150x150',
          type: 'image/png',
        },
        {
          src: '/favicons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/favicons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/favicons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },

  app: {
    head: {
      title: 'Aarzoo Hydraulics - New & Reconditioned Hydraulic Pumps, Motors, Valves',

      link: [{ rel: 'icon', type: 'image/png', href: '/favicons/favicon.ico' }],

      bodyAttrs: {
        class: 'font-base h-full',
      },

      htmlAttrs: {
        class: 'h-full',
        lang: 'en',
      },

      meta: [
        { charset: 'utf-8' },
        { name: 'theme-color', content: '#EEEEEE' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Global supplier of new and reconditioned hydraulic pumps, motors, valves, and spares. Custom solutions for industrial needs. Reliable worldwide shipping.',
        },
        {
          name: 'keywords',
          content: 'hydraulic pumps supplier, reconditioned hydraulic pumps, new hydraulic motors, hydraulic valves for sale, industrial hydraulic spares, hydraulic motor repairs and supply, industrial hydraulic solutions, supplier of reconditioned hydraulic pumps and motors',
        },
        {
          name: 'publisher',
          content: 'Safin Momin',
        },

        // Open Graph
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Aarzoo Hydraulics',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Aarzoo Hydraulics - New & Reconditioned Hydraulic Pumps, Motors, Valves',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Global supplier of new and reconditioned hydraulic pumps, motors, valves, and spares. Custom solutions for industrial needs. Reliable worldwide shipping.',
        },

        // Twitter
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Aarzoo Hydraulics - New & Reconditioned Hydraulic Pumps, Motors, Valves',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Global supplier of new and reconditioned hydraulic pumps, motors, valves, and spares. Custom solutions for industrial needs. Reliable worldwide shipping.',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  eslint: {
    fix: true,
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  imports: {
    dirs: [

    ],
  },

  sitemap: {
    gzip: true,
    exclude: [
    ],
    routes: [
      {
        url: '/',
        priority: 1,
      },
    ],
  },
})