module.exports = function () {
  fetch('/wangdoc.com/assets/js/s.js')
  .then(response => response.text())
  .then(data => {
    const s = new Function(data);
    s();
  })
  .catch(e => console.log(e));
};

