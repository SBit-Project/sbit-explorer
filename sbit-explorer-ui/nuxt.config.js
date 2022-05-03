import webpack from 'webpack'

export default {
  mode: 'universal',
  loading: "@/components/loading",
  head: {
    titleTemplate: '%s - sbit.info',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }
    ]
  },
  build: {
    extend(config, { isServer }) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader'
      })
      config.plugins.push(new webpack.DefinePlugin({
        'process.env.sbitinfoAPIBase': JSON.stringify(process.env.SBITINFO_API_BASE
          || process.env[isServer ? 'SBITINFO_API_BASE_SERVER' : 'SBITINFO_API_BASE_CLIENT']
          || 'https://sbit.info/api/'),
        'process.env.sbitinfoWSBase': JSON.stringify(process.env.SBITINFO_WS_BASE
          || process.env.SBITINFO_API_BASE_WS
          || '//sbit.info/'),
        'process.env.network': JSON.stringify(process.env.SBIT_NETWORK || 'mainnet')
      }))
    },
    extractCSS: true,
    postcss: {
      features: {
        customProperties: false
      }
    }
  },
  modules: [
    '@nuxtjs/style-resources'
  ],
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '@/icons/style.css',
    '@/styles/reset.css'
  ],
  styleResources: {
    less: ['./styles/mixins.less', './styles/variables.less']
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => ['script', 'style', 'font'].includes(type)
    }
  },
  serverMiddleware: ['~/middleware/ip.js'],
  plugins: [
    '~/plugins/components.js',
    '~/plugins/i18n.js',
    '~/plugins/sbit-utils.js',
    { src: '~/plugins/websocket.js', ssr: false }
  ]
}
