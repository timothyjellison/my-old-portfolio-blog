---
title: My Poetry Blog
tags:
- FrontPage
---

timreadspoetry.com wasn't my first website, but it was the first site I stuck with for longer than a couple weeks. Here's its ongoing saga.

I started the site while I was living in Cambridge, UK. My wife was a research fellow at the university and I was keeping house and studying to become a web developer. 

(A bit about me: I was on the Ph.D. track in Comparative Literature at Yale when I came to the realization I really wouldn't be a happy or very good professor. I left grad school and professional literature studies behind, but I'm pretty much always reading books, averaging one book a week.)

The site began as timreadsbooks on tumblr, then became timreadspoetry on Blogger. In both cases I used free themes so it ended up looking indistinguishable from all the other sites out there. Popular themes were good enough for a while (because yay websites! 🎆) but when I started to get actual human visitors I decided I needed to make it my own.

My design decisions were pretty basic. I wanted to imitate the simplicity of books: black text on a white page, emphasis on readability. Here's a look:

![](/images/Old blog design.png)

It was OK, not great. A few crucial problems stand out right away. The main font is way too small. The post text is 14px Georgia, and even though it's fairly well balanced with line-height and width, it's just too small overall.

Another big mistake was dividing the page into two columns. The nav bar and email signup on the right serve an important function, but they do a disservice to the text. If I'd just got rid of them (so hard to kill your darlings!) there would be more room for the posts and I could increase the font size to something more readable.

The other design challenge I ran into was with social sharing. Blogger provided a social sharing bar that just didn't match up with my style:

![](/images/Old blog design -- social buttons.png)

The social sharing buttons on the left are skeuomorphic  (except for that flat G+1 button sticking out like a sore thumb). If I wanted to create the illusion of reading a book, this weird design hiccup certainly breaks the spell.

So! As you can see the time had come for a change. I wanted a new blogging platform that gave me more control of my design in order to create a site that is truly a pleasure to read. And I wanted it on a platform more professional than Blogger but less heavyweight than WordPress, preferably a platform based on Node with JavaScript-based templating.

After reading up on all the options, I chose to create a Ghost powered blog hosted on Digital Ocean. Setup was a breeze: Digital Ocean and Ghost both have excellent documentation, the [Blogger to Ghost utility](http://www.blogger2ghost.com/) made importing my Blogger posts into Ghost far less painfull than I'd expected (though see below for some ugliness on that point), and the admin panels I needed for updating A and CNAME records and setting up Google Analytics were intuitive.

(The close runner-up in my search for the right Node-based blogging platform was Keystone. If you're not sold on Ghost, check Keystone out. What ultimately swayed me away was that Ghost had such close integration with Digital Ocean.)

Now I had a clean slate. I surveyed my legacy posts in  Ghost's default Casper theme (oh, I just got the joke 👻). Behold:

![](/images/New Design.png)

![](/images/New Design - bottom of page.png)

Big beautiful fonts. Elegant social sharing buttons. No line breaks in the poems.

Umm ... what?

Yeah, all my line breaks were gone. Kind of a big deal if the whole point of your site is to share and analyze *poetry*. And then I looked closer -- there was missing text. Sometimes a word or two, sometimes whole paragraphs. Something had gone ugly wrong. I still had the old Blogspot site as a source of truth. Thus began a painstaking process of setting things right, one post at a time.

Next, I needed to edit the theme. Editing a Ghost theme is crazy easy; update your theme locally, zip it, and then upload the zip file using your Ghost admin panel. To give myself versioning and to streamline my builds, I [created a repo](https://github.com/timothyjellison/timreadspoetry-theme) with separate source and distribution files and created a little zip utility based on [archiver.js](https://archiverjs.com/docs/). Now editing my blog styling is super easy and I have a Git-powered safety net in case things go wrong.

[To be continued!]