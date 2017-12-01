/* hashchange handler */
function hashChange() {
  var hash = location.hash;
  if (!hash) return;
  var nav = document.querySelector('.navbar');
  var navHeight = nav.getBoundingClientRect().height;
  window.scrollBy(0, -1 * navHeight);
};

module.exports = hashChange;
