/*
 * @Date: 2021-10-09 17:16:36
 * @LastEditTime: 2021-10-11 12:37:55
 * @FilePath: /frontend-components/webpack-extension/loaders/svgo-loader.js
 * @Description: 用来处理 svg 文件的loader
 */

const { optimize } = require('svgo')

const svgoConfig = {
  plugins: [
    { name: 'removeStyleElement', active: true },
    { name: 'removeAttrs', params: { attrs: '(mask|stroke|fill|class|style)' } },
    { name: 'removeDimensions', active: true },
    { name: 'removeUselessDefs', active: true },
    { name: 'removeViewBox', active: false }
  ]
}

async function loader(source) {

  const result = optimize(source, { path: this.resourcePath, ...svgoConfig })

  if (result.error) {
    throw Error(result.error)
  }
  return result.data
}

module.exports = function (source) {
  const callback = this.async()
  loader.call(this, source)
    .then(result => callback(null, result))
    .catch(error => callback(error))
}