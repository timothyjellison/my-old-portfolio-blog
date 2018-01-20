(function() {
  var header = document.getElementById('header');

  var bgHue = 0;

  setInterval(function() {
    bgHue += bgHue < 359 ? 1 : -359;
    header.style.backgroundColor = 'hsl(' + bgHue + ', 60%, 40%)';
  }, 500);

  var mainContent = document.getElementById('mainContent');

  window.addEventListener('scroll', function(e) {
    if (window.scrollY >= (mainContent.offsetTop - 500)) {
      mainContent.classList.remove('hidden');
    }
  });
})();