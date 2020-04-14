var setMinHeight = require('./setMinHeight');
var insertArticleToc = require('./insertArticleToc');
var hashChange = require('./hashChange');
var menuHandler = require('./menuHandler');
var goTop = require('./goTop');
var support = require('./support');

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

/* toc controller */
require('./tocHide');

/* social share utilities */
require('./social-share');

/* loading support script */
support();
