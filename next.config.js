const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  // optional
  lessVarsFilePath: './src/styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: true,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {
    esModule: false,
    sourceMap: false,
    modules: {
      mode: 'local'
    }
  },

  // Other Config Here...

  webpack(config) {
    return config
  },

  // NextFuture
  future: {
    // webpack5: true,
  }
})
