
const customWebpackConfig = require('./custom.webpack.config')

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/components/**/index.stories.@(js|jsx|ts|tsx)",
    "../src/blocks/**/index.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.tsx",
    // "../src/layouts/**/index.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  core: { builder: 'webpack5' },
  webpackFinal: customWebpackConfig,
}