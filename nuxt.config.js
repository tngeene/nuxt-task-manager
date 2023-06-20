const env = require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: env.parsed,
  head: {
    title: 'Task Manager',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'Employee Task Management System',
        content: '',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/persistedState.client.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/dotenv',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.baseAPIURL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  auth: {
    strategies: {
      local: {
        token: {
          type: 'Token',
        },
        endpoints: {
          login: {
            url: 'v1/auth-token/',
            method: 'post',
            propertyName: 'auth_token',
          },
          user: {
            url: 'v1/auth/users/me/',
            method: 'get',
            propertyName: false,
          },
          logout: {
            url: 'v1/auth/token/logout/',
            method: 'post',
          },
        },
        user: {
          property: ''
        },
        tokenType: 'Token',
        tokenRequired: true,
        tokenName: 'Authorization',
        redirect: {
          login: '/login',
          home: '/',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
