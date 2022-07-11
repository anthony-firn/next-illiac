const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = {
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    })
    return configuration
  },
  withMDX: (configuration) => {
    configuration.module.rules.push({
      pageExtensions: ['js', 'mdx']
    })
    return configuration
  },
}