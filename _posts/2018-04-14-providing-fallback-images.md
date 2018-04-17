---
title: Providing Fallback Images
permalink: '/blog/:title/'
tags:
  - Blog
  - CSS
  - Images
  - Cloudinary
---

The WebP image format provides excellent lossy and lossless image compression, but it isn't supported in all browsers. Happily, HTML5 is ready to come to the rescue with the &lt;picture&gt; and &lt;srcset&gt; elements. Here are some resources to help familiarize you with these two heroes in the war for performant image loading.

[Cloudinary had a great article](https://cloudinary.com/blog/quick_guide_using_webp_on_your_website_or_native_apps#implementing_webp_using_picture) about using &lt;picture&gt; and &lt;srcset&gt; to provide fallback paths to more traditional JPEG or PNG images when a client doesn't support WebP.

[Jeremy Wagner wrote a similar article on CSS-Tricks](https://css-tricks.com/using-webp-images/) that recommends the same solution and gives helpful details about how you can create WebP images yourself.&nbsp;

And since &lt;picture&gt; and &lt;srcset&gt; are HTML5 elements you'll want to add the&nbsp;[Picturefill](http://scottjehl.github.io/picturefill/)&nbsp;polyfill to your scripts to make sure older browsers don't get left in the lurch.&nbsp;