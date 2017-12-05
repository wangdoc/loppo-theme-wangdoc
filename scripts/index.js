var setMinHeight = require('./setMinHeight');
var insertArticleToc = require('./insertArticleToc');
var hashChange = require('./hashChange');
var menuHandler = require('./menuHandler');
var goTop = require('./goTop');

/* set content's min-height */
setMinHeight();

/* add goTop */
goTop();

/* insert article's toc */
insertArticleToc();

/* hashchange handler */
window.onhashchange = hashChange;

/* menu handler */
menuHandler();
