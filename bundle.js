"use strict";!function(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-52933192-2")}(),function(){var e=document.getElementById("header"),n=document.getElementById("headerNav"),t=function(){var t=0;return function(){t+=t>=360?-360:20,e.style.backgroundColor="hsl("+t+", 60%, 40%)",n.style.backgroundColor="hsl("+t+", 60%, 30%)"}}();t(),setInterval(t,1e4),window.addEventListener("scroll",function(e){window.scrollY>=429?n.classList.add("header__nav--sticky"):n.classList.remove("header__nav--sticky")})}();