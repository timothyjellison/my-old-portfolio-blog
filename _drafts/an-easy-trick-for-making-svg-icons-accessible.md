---
title: An Easy Trick for Making SVG Icons Accessible
permalink: '/blog/:title/'
tags:
  - Blog
  - Accessibility
---

Lighthouse was flagging the SVG icons in my site's footer as inaccessible to screen reader software. I thought I'd have to create some hidden text elements or something unsemantic (🤢) but the solution was actually much more elegant.

I found [this helpful little article](https://fontawesome.com/how-to-use/accessibility) on the FontAwesome website that explains all you have to do is add a title attribute to your &lt;svg&gt; tag with a text explanation of what the SVG conveys. Seriously, that was it. Problem solved. 🍾

It reminded me of an important principle: 99 times out of 100 the browser makers and the good folks at the W3C have usually already found a solution for your problem. Don't just start hacking; get reading and solve your problems the smart way.&nbsp;