(function() {
  var myImages = [];
  var header = document.getElementById('header');
  var headerTitle = header.dataset.title;
  var spinner = document.getElementById('spinner');
  var contentWrapper = document.getElementById('contentWrapper');

  var backgroundImages = {
    Comcast: 'http://www.ramsa.com/api/sites/default/files/A00007-ESTO-2008A63.420_0.jpg',
    Contribution: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/1809Tdj/footage-of-computer-display-screen-with-green-moving-text-with-code-in-the-terminal-software_sjbizma2_thumbnail-full01.png'
  }
  var defaultImage = '../images/jesse-gardner-med.jpg';

  if (backgroundImages[headerTitle]) {
    myImages.push(backgroundImages[headerTitle]);
  } else {
    myImages.push(defaultImage);
  }

  function loadImages (images) {
    let loader = function (src) {
      return new Promise(function (resolve, reject) {
        let img = new Image();
        img.onload = function () {
          resolve(src);
        };
        img.onerror = function (err) {
          reject(err);
        };
        img.src = src;
      });
    };

    let loaders = [];
    images.forEach(function (image) {
      loaders.push(loader(image));
    });

    return Promise.all(loaders);
  }

  function setBackground (images) {
    header.style.backgroundImage = 'url("' + images[0] + '")';
  }

  function reveal () {
    contentWrapper.classList.remove('hidden');
    spinner.classList.add('hidden');
  }

  loadImages(myImages)
  .then(setBackground)
  .then(reveal)
  .catch(function (err) {
    console.error(err);
  });

  var mainContent = document.getElementById('mainContent');

  window.addEventListener('scroll', function(e) {
  if (window.scrollY >= (mainContent.offsetTop - 500)) {
    mainContent.classList.remove('hidden');
  }
  });
})();