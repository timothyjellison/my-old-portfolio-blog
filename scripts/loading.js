(function() {
  var headerNav = document.getElementById('headerNav');
  var navburgerContainer = document.getElementById('navburgerContainer');
  var navburger = document.getElementById('navburger');

  navburger.addEventListener('click', function(e) {
    var action = navburgerContainer.classList.contains('mobile-nav-open') ? 'remove' : 'add';

    navburgerContainer.classList[action]('mobile-nav-open');
  });

  window.addEventListener('scroll', function(e) {
    var action = window.scrollY >= 429 ? 'add' : 'remove';

    if (headerNav) {
      headerNav.classList[action]('header__nav--sticky');
      headerNav.classList[action]('header__nav--scroll-event');
    }
  });
})();