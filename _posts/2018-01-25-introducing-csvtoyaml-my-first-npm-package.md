---
layout: post
title: 'Introducing csvtoyaml: My First NPM Package'
permalink: /blog/:title/
---


Well this is a proud day indeed!
{: .present-before-paste}

This morning I thought it would be fun to convert my big .csv spreadsheet from Goodreads into a .yaml file that I could store in my Jekyll blog's data folder. After some searching I found there weren't any packages on npm for this purpose. 😲&nbsp;
{: .present-before-paste}

But there's&nbsp;[csvtojson](https://www.npmjs.com/package/csvtojson), and there's [json2yaml](https://www.npmjs.com/package/json2yaml). Why not bring the two together into a single package?
{: .present-before-paste}

Literally an hour's worth of work later and behold: [csvtoyaml](https://www.npmjs.com/package/csvtoyaml)!
{: .present-before-paste}

It's still pretty rough, admittedly. Currently it always writes a new file using Node's file system library, whereas I'd like that to be just one of many options. It has no documentation and no unit tests and no minification and OK I'm panicking a bit.&nbsp;
{: .present-before-paste}

But it's out there and it's only going to get better. I don't know about anybody else, but I'm going to use it.
{: .present-before-paste}