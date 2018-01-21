(function() {
  var header = document.getElementById('header');
  var headerNav = document.getElementById('headerNav');

  var updateHeaderHue = (function() {
    var bgHue = 0;

    return function() {
      bgHue += bgHue >= 360 ? -360 : 20;
      header.style.backgroundColor = 'hsl(' + bgHue + ', 60%, 40%)';
      headerNav.style.backgroundColor = 'hsl(' + bgHue + ', 60%, 30%)';
    }
  })();

  updateHeaderHue();
  setInterval(updateHeaderHue, 10000);

  window.addEventListener('scroll', function(e) {
    if (window.scrollY >= 429) {
      headerNav.classList.add('header__nav--sticky');
    } else {
      headerNav.classList.remove('header__nav--sticky');
    }
  });
})();