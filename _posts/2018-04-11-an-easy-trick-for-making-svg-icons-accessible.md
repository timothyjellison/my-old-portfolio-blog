---
layout: post
title: An Easy Trick for Making SVG Icons Accessible
permalink: '/blog/:title/'
tags:
  - Accessibility
---

If you're using svg icons as links, you need to provide some form of alt text so that screen readers can announce the icon. The solution to this problem is actually easier than you'd think.

I found [this helpful little article](https://fontawesome.com/how-to-use/accessibility) on the FontAwesome website that explains all you have to do is add a "title" attribute to your &lt;svg&gt; tag with a text explanation of what the SVG conveys. &lt;svg title="CodePen"&gt;, for example.&nbsp;

9 times out of 10, browser makers and the good folks at the W3C have already found a solution for your problem. Don't just start hacking; get reading and solve your problems the smart way.