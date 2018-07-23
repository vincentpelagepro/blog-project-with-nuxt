const pkg = require("./package");
const bodyParser = require('body-parser');

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: "Nuxt.js blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#44e12d", height: "40px", duration: 5000 },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js',

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: "https://nuxt-project-c777b.firebaseio.com"
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },

  /*
  ** Environnement variable
  */
  env: {
    baseUrl: "https://nuxt-project-c777b.firebaseio.com",
    fbAPIKey: 'AIzaSyBtiphFa58UkmaAT-hn-Cquenstb5IHARo',
  },

  /*
  ** Access router
  */
  router: {
    // https://router.vuejs.org/api/#router-construction-options
  },

  /*
  ** Transition
  */
  transition: {
    name: 'fade',
    mode: 'out-in',
  },

  /*
  ** Server middleware
   */

  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
};
