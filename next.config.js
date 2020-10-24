/* eslint-disable no-undef */


const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  distDir: 'build',
  trailingSlash: true
});







