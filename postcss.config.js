const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const pruneVar = require('postcss-prune-var');
const varCompress = require('postcss-variable-compress');

module.exports = {
  map: true,
  plugins: [
    purgecss({
      // file paths to your contents to remove unused styles. 
      // content: ['js/my.js','*.php'],
      // other wise our aria-selected is removed (like with purgecss online)
      content : [ './theme/*.template' ],
      safelist: ['main', 'container', 'article', 'nav', 'navbar', 'a', 'hljs', 'pre', 'code', 'h1', 'h2', 'h3', 'has-dropdown', 'is-hoverable', /^article-/, /^page-/, /^menu-/, /^nav-/, /^navbar-/, /^icon-/, /^hljs-/, /^social-/, /^share-/, /^wechat-/],
    }),
    pruneVar(), // remove unused css variables
    varCompress(), // compress css variables
    cssnano({
      preset: 'default',
    }),
  ],
}
