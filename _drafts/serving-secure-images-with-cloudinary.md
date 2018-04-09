---
title: Serving Secure Images with Cloudinary
permalink: '/blog/:title/'
tags:
  - Blog
---

I was surprised to see a security warning in the console when I fired up my website this morning.&nbsp;
{: .present-before-paste}

&nbsp;
{: .present-before-paste}

My site is hosted using&nbsp;[GitHub pages](https://pages.github.com/), I made sure to go into my repository's settings and select "Enforce HTTPS". But to keep things 💯 you need to make sure&nbsp;*everything*&nbsp;your site interacts with also uses HTTPS. The culprit was my profile picture hosted on [Cloudinary](https://cloudinary.com/).
{: .present-before-paste}

How hard would it be to get my Cloudinary image to use HTTPS rather than plain, unsecure HTTP?
{: .present-before-paste}

Not hard at all! 👍
{: .present-before-paste}

&nbsp;
{: .present-before-paste}

When you store an image in your Cloudinary Media Library, the app provides you with a bunch of links to easily integrate your image into whatever context you need. There's a plain URL and an HTTPS URL, plus a bunch of preformatted links for [React](https://github.com/cloudinary/cloudinary-react), Angular, Android, iOS, and more. I just needed to choose the HTTPS version of my image and use that link instead of the plain URL. Problem solved!
{: .present-before-paste}