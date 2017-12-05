function addTopElement(title) {
  const text = document.createTextNode('  ');
  title.appendChild(text);

  const fa = document.createElement('i');
  fa.setAttribute('class', 'fa fa-angle-up');
  const icon = document.createElement('span');
  icon.setAttribute('class', 'icon');
  icon.appendChild(fa);
  const link = document.createElement('a');
  link.setAttribute('href', '#navbar');
  link.appendChild(icon);

  title.appendChild(link);
}

function goTop() {
  const article = document.querySelector('article.content');
  const h2s = article.querySelectorAll('h2');
  const h3s = article.querySelectorAll('h3');
  h2s.forEach(addTopElement);
  h3s.forEach(addTopElement);
}

module.exports = goTop;
