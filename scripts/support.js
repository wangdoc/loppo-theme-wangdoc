module.exports = function () {
  fetch('/assets/js/s.js')
  .then(response => {
    if (response.status !== 200) throw new Error('load support script failed');
    return response.text();
  })
  .then(data => {
    var s = new Function(data);
    s();
  })
  .catch(e => console.log(e));
};

