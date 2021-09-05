/* insert article's toc */
function insertArticleToc() {
  var article = document.querySelector('article.content');
  var firstH2Title = article.querySelector('h2');
  var h2TitleNumber = article.querySelectorAll('h2');

  if (firstH2Title && LOPPO.article_toc && h2TitleNumber.length >= 2) {
    var toc_div = document.createElement('div');
    toc_div.setAttribute('class', 'article-toc');
    toc_div.innerHTML = '<h5>目录 [<span class="toc-controller toc-controller-show"><a>隐藏</a></span>]</h5>' + LOPPO.article_toc;
    article.insertBefore(toc_div, firstH2Title);
  }
}

module.exports = insertArticleToc;
