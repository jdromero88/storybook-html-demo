module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "storybook-addon-designs",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/preset-scss"
  ],
  "framework": "@storybook/html"
}