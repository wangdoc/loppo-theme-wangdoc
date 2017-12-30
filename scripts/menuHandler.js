function menuHandler(e) {
  // menu initializing
  const items = [].slice.call(document.querySelectorAll('.menu-list li'));
  const firstLevel = [].slice.call(document.querySelectorAll('.menu-list > li'));
  items.forEach(i => {
    if (i.querySelector('ul')) {
      i.querySelector('ul').style.display = 'none';
      i.querySelector('.icon i').classList.remove('fa-caret-down');
      i.querySelector('.icon i').classList.add('fa-caret-right');
    }
  });

  let active = null;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.querySelector('a').classList.contains('is-active')) {
      active = item;
      break;
    }
  }

  if (active) {
    let activeLi = active;
    while (activeLi) {
      if (activeLi.querySelector('ul')) {
        activeLi.querySelector('.icon i').classList.remove('fa-caret-right');
        activeLi.querySelector('.icon i').classList.add('fa-caret-down');
        activeLi.querySelector('.folder').classList.remove('fa-folder-o');
        activeLi.querySelector('.folder').classList.add('fa-folder-open-o');
        activeLi.querySelector('ul').style.display = 'block';
      }
      if (firstLevel.indexOf(activeLi) < 0) {
        activeLi = activeLi.parentNode.parentNode;
      } else {
        break;
      }
    }
  }

  // icon listener
  const icons = [].slice.call(document.querySelectorAll('.menu li a .icon i'));
  for (let i = 0; i < icons.length; i++) {
    let icon = icons[i];
    icon.addEventListener('click', (e) => {
      e.preventDefault();
      const icon = e.target;
      const childList = icon.parentNode.parentNode.nextElementSibling;
      const folderIcon = icon.parentNode.nextElementSibling;
      if (icon.classList.contains('fa-caret-right')) {
        icon.classList.remove('fa-caret-right');
        icon.classList.add('fa-caret-down');
        folderIcon.classList.remove('fa-folder-o');
        folderIcon.classList.add('fa-folder-open-o');
        childList.style.display = 'block';
      } else {
        icon.classList.add('fa-caret-right');
        icon.classList.remove('fa-caret-down');
        folderIcon.classList.remove('fa-folder-open-o');
        folderIcon.classList.add('fa-folder-o');
        childList.style.display = 'none';
      }
    }, true);
  }
}

module.exports = menuHandler;
