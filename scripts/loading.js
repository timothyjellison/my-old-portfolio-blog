(function() {
  var header = document.getElementById('header');
  var mainContent = document.getElementById('mainContent');

  var updateHeaderHue = (function() {
    var bgHue = 0;

    return function() {
      bgHue += bgHue >= 360 ? -360 : 20;
      header.style.backgroundColor = 'hsl(' + bgHue + ', 60%, 40%)';
    }
  })();

  updateHeaderHue();
  setInterval(updateHeaderHue, 10000);

  window.addEventListener('scroll', function(e) {
    if (window.scrollY >= (mainContent.offsetTop - 500)) {
      mainContent.classList.remove('hidden');
    }
  });
})();