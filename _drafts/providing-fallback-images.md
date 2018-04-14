---
title: Providing Fallback Images
permalink: '/blog/:title/'
tags:
  - Blog
  - Accessibility
---

The images in one of my posts weren't displaying on iPhone 😲. It seems the WebP image format isn't supported everywhere despite it's obvious radness. Happily, when I went looking for answers there were already plenty of helpful pointers in the right direction.&nbsp;

[Cloudinary had a great article](https://cloudinary.com/blog/quick_guide_using_webp_on_your_website_or_native_apps#implementing_webp_using_picture) about using the \`&lt;picture&gt;\` and \`&lt;srcset&gt;\` elements to provide fallback paths to more traditional JPEG or PNG images when a client doesn't support WebP.

[Jeremy Wagner wrote a similar article on CSS-Tricks](https://css-tricks.com/using-webp-images/) that recommends the same solution and gives helpful details about how you can create WebP images yourself.&nbsp;

And since \`&lt;picture&gt;\` and \`&lt;srcset&gt;\` are HTML5 elements you'll want to add the&nbsp;[Picturefill](http://scottjehl.github.io/picturefill/)&nbsp;polyfill to your scripts to make sure older browsers don't get left in the lurch.&nbsp;

Following the instructions on those sites did the trick!