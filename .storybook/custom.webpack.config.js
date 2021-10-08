const path = require('path')
const custom = require('../webpack.config.js')

const svgLoaders = [
  {
    test: /\.(svg)$/,
    loader: 'url-loader',
    exclude: [path.resolve(__dirname, '../src/components/Icon')]
  },
  {
    test: /\.svg$/,
    include: [path.resolve(__dirname, '../src/components/Icon')], 
    use: [
      { 
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]',
        } 
      },
      { loader: 'svgo-loader', options: {} },
    ]
  }
]

module.exports = async (config) => {

  config.resolve.modules.push(...custom.resolve.modules)

  config.module.rules.push({
    test: /\.less$/,
    include: /src|node_modules/,
    use: [
      'style-loader', 
      'css-loader', 
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#ff934a',
              'font-size-base': '14px'
            },
            javascriptEnabled: true
          }
      }
    }]
  })

  // 去除原有的 svg 处理loader
  config.module.rules = config.module.rules.map(rule => {
    if (rule.test.toString().includes('svg')) {
      const test = rule.test.toString().replace('svg|', '').replace(/\//g, '')
      return { ...rule, test: new RegExp(test) }
    } else {
      return rule
    }
  })

  config.module.rules.push(...svgLoaders)
  console.log(config.module.rules)
  return config
}