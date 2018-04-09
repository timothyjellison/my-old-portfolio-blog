---
title: Serving Images Securely with Cloudinary
permalink: '/blog/:title/'
tags:
  - Blog
---

I was surprised to see a security warning in the console when I fired up my website this morning. My site is hosted using GitHub pages, and to keep my site secure I made sure to go into my repository's settings and select "Enforce HTTPS". But to keep things 💯 you need to make sure&nbsp;*everything*&nbsp;your site interacts with also uses HTTPS.

![console warning about image from unsecure source](https://res.cloudinary.com/dzwa7qhj1/image/upload/v1523272027/https_warning.png)

The culprit was my profile picture hosted on [Cloudinary](https://cloudinary.com/). I'm super happy with Cloudinary, BTW. The problem was entirely with how I was using it. How hard would it be to get my Cloudinary image to use HTTPS rather than plain, unsecure HTTP?

Not hard at all! 👍

![picture of cloudinary interface](https://res.cloudinary.com/dzwa7qhj1/image/upload/v1523272036/Cloudinary_https.png)

When you store an image in your Cloudinary Media Library, the app provides you with a bunch of links to easily integrate your image into whatever context you need. There's a plain URL and an HTTPS URL, plus a bunch of preformatted links for [React](https://github.com/cloudinary/cloudinary-react), Angular, Android, iOS, and more. I just needed to choose the HTTPS version of my image and use that link instead of the plain URL. Problem solved!