// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nitro-cloudflare-dev'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },
  nitro: {
    preset: 'cloudflare_pages'
  },
  app: {
    head: {
      title: 'Orbex — Google reviews, answered on WhatsApp',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        { name: 'description', content: 'Orbex sends every new Google review straight to your WhatsApp with an AI-written reply ready to go. Just tap and respond.' },
        { name: 'theme-color', content: '#070e24' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://orbex.ro' },
        { property: 'og:title', content: 'Orbex — Google reviews, answered on WhatsApp' },
        { property: 'og:description', content: 'Every new Google review goes straight to your WhatsApp with an AI-suggested reply. Tap once, done.' },
        { property: 'og:image', content: 'https://orbex.ro/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'Orbex' },
        // Twitter / X
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Orbex — Google reviews, answered on WhatsApp' },
        { name: 'twitter:description', content: 'Every new Google review goes straight to your WhatsApp with an AI-suggested reply. Tap once, done.' },
        { name: 'twitter:image', content: 'https://orbex.ro/og-image.png' }
      ]
    }
  }
})