/* set content's min-height */
function setMinHeight() {
  var content = document.querySelector('.article');
  if (!content) {
    content = document.querySelector('.homepage');
  }

  var navbarHeight =
    window.getComputedStyle(document.querySelector('.navbar'))
    .getPropertyValue('height');

  var heroHeight = 0;
  if (document.querySelector('.hero')) {
    var heroHeight =
      window.getComputedStyle(document.querySelector('.hero'))
      .getPropertyValue('height');
  }

  var footHeight =
    window.getComputedStyle(document.querySelector('.footer'))
    .getPropertyValue('height');

  var minHeight = document.documentElement.clientHeight
    - parseInt(navbarHeight)
    - parseInt(heroHeight)
    - parseInt(footHeight);

  content.style.minHeight = minHeight + 'px';
}

module.exports = setMinHeight;
