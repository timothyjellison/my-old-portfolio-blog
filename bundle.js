"use strict";!function(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-52933192-2")}(),function(){var e=[],n=document.getElementById("header"),t=n.dataset.title,o=document.getElementById("spinner"),i=document.getElementById("contentWrapper"),a={Comcast:"http://www.ramsa.com/api/sites/default/files/A00007-ESTO-2008A63.420_0.jpg",Contribution:"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/1809Tdj/footage-of-computer-display-screen-with-green-moving-text-with-code-in-the-terminal-software_sjbizma2_thumbnail-full01.png"};a[t]?e.push(a[t]):e.push("../images/jesse-gardner-med.jpg"),function(e){var n=[];return e.forEach(function(e){n.push(function(e){return new Promise(function(n,t){var o=new Image;o.onload=function(){n(e)},o.onerror=function(e){t(e)},o.src=e})}(e))}),Promise.all(n)}(e).then(function(e){n.style.backgroundImage='url("'+e[0]+'")'}).then(function(){i.classList.remove("hidden"),o.classList.add("hidden")}).catch(function(e){console.error(e)});var r=document.getElementById("mainContent");window.addEventListener("scroll",function(e){window.scrollY>=r.offsetTop-500&&r.classList.remove("hidden")})}();