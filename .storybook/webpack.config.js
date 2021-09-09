const path = require('path')

module.exports = ({config}) => {
    config.resolve.modules = [
      path.resolve(__dirname, "../node_modules"),
      path.resolve(__dirname, "../src"),
    ]
    config.module.rules.push({
      test: /\.less$/,
      include: /src|node_modules/,
      use: ['style-loader', 'css-loader', {
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

    return config
}