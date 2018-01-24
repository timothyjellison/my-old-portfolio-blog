(function() {
  var headerNav = document.getElementById('headerNav');
  var navburgerContainer = document.getElementById('navburgerContainer');
  var navburger = document.getElementById('navburger');
  var bgboiz = document.querySelectorAll('[data-bgboy]');

  var updateBgColor = (function() {
    var hue = 0;

    return function() {
      hue += hue >= 360 ? -360 : 20;

      for (var i = 0; i < bgboiz.length; i++) {
        var lightness = bgboiz[i].dataset.bgboy === "dark" ? '30%' : '40%';

        bgboiz[i].style.backgroundColor = 'hsl(' + hue + ', 60%, ' + lightness + ')';
      }
    }
  })();

  updateBgColor()
  setInterval(updateBgColor, 10000);

  navburger.addEventListener('click', function(e) {
    console.log('clickem');
    var action = navburgerContainer.classList.contains('mobile-nav-open') ? 'remove' : 'add';

    navburgerContainer.classList[action]('mobile-nav-open');
  });

  window.addEventListener('scroll', function(e) {
    var action = window.scrollY >= 429 ? 'add' : 'remove';

    headerNav.classList[action]('header__nav--sticky');
    headerNav.classList[action]('header__nav--scroll-event');
  });
})();