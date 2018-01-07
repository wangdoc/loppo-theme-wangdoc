(function () {
  var controller = document.querySelector('.toc-controller');
  var toc = document.querySelector('.article-toc .markdownIt-TOC');
  if (!controller || !toc) return;
  controller.addEventListener('click', (e) => {
    e.preventDefault();
    if (controller.classList.contains('toc-controller-show')) {
      controller.classList.remove('toc-controller-show');
      controller.classList.add('toc-controller-hide');
      controller.innerHTML = '<a>显示</a>';
      toc.style.display = 'none';
    } else {
      controller.classList.remove('toc-controller-hide');
      controller.classList.add('toc-controller-show');
      controller.innerHTML = '<a>隐藏</a>';
      toc.style.display = 'block';
    }
  }, true);
})()
