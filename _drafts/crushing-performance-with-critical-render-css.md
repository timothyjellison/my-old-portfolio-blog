---
title: Sick Gains with Critical Path CSS
permalink: '/blog/:title/'
tags:
  - Blog
  - Performance
  - CSS
---

A couple days ago I used Chrome's Lighthouse feature to performance test my website. Overall it was pretty good but I wasn't wild about it taking over 1200 milliseconds for my site to paint. It's a static site with very little imagery—there's no reason it should take more than 1 second for the user to be able to read content. Something had to be done.

Thankfully Lighthouse provides helpful suggestions for every issue it finds in your website. It turned out the first meaning paint was being held up by the 600 ms spent downloading Bulma, my CSS framework of choice. At Lighthouse's suggestion, I took the following steps:

1. I moved my most critical CSS (the "above the fold" styles, to use a loathsome print metaphor) into a style sheet in the &lt;head&gt;. To get the job done quickly I used this awesome [Critical Path CSS Generator](https://jonassebastianohlsson.com/criticalpathcssgenerator/)&nbsp;created by Jonas Ohlsson Aden. You just enter your site's URL and your CSS, and it will generate a minified stylesheet with only the style's you'll need to avoid the dreaded flash of unstyled content.&nbsp;

2. I moved my &lt;link&gt; tags to just below my site's footer. This allows all the markup to render before any expensive calls get made. My CSS (Bulma plus my own styles) only take about 600ms to load, but that 1/2 second makes all the difference.

With those easy changes in place, my site now finishes painting in 700-800 ms, a speed increase of almost 42%! 🚀