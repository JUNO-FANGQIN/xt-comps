
module.exports = {
  plugins: [
    { name: 'removeStyleElement', active: true },
    { name: 'removeAttrs', params: { attrs: '(mask|stroke|fill|class|style)' } },
    { name: 'removeDimensions', active: true },
    { name: 'removeUselessDefs', active: true },
    { name: 'removeViewBox', active: false }
  ]
}
