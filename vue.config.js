module.exports = {
  pwa: {
    name: 'שער טבע שלם',
    manifestOptions: {
      icons: [
        {'src': './img/icons/android-chrome-144x144.png', 'sizes': '144x144', 'type': 'image/png'},
      ],
    },
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src',
        }

        return options
      })

    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'טבע שלם'
        return args
      })
  },
}
