var setMinHeight = require('./setMinHeight');
var insertArticleToc = require('./insertArticleToc');
var hashChange = require('./hashChange');

/* set content's min-height */
setMinHeight();

/* insert article's toc */
insertArticleToc();

/* hashchange handler */
window.onhashchange = hashChange;
