module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/components/**/index.stories.@(js|jsx|ts|tsx)",
    "../src/blocks/**/index.stories.@(js|jsx|ts|tsx)",
    "../src/layouts/**/index.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
}