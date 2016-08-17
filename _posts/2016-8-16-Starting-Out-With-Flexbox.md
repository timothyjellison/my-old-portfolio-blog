---
layout: post
title: Starting Out With Flexbox
---

I've always needed to support back to IE8 in my front-end dev work, which means no flexbox. But today I met some guys whose company (a *big* company) only worries about supporting back to IE11 and they use flexbox *all the time*. Talking with them, and looking at [the very positive outlook on the caniuse page for flexbox](http://caniuse.com/#feat=flexbox), has got me thinking I should give flexbox a shot.

So how to start? Here's the example I was shown during my conversation earlier today. Say we have a parent div with three item divs inside.

```html
<div class="parent">
    <div class="item">item text</div>
    <div class="item">item text</div>
    <div class="item">item text</div>
</div>
```

And now say we want to make each of those items occupy 33.333% of the horizontal space in the parent. How would you get that done? Here's the flexbox way.

```css
.parent {
    display: flex;
}

.item {
    width: 33.333%
}
```

That's literally all it takes. Flexbox will automatically distribute the items across the parent. [Here's a pen of the above code.](http://codepen.io/tellison/pen/wWOqWb)

There's a lot more to flexbox, of course. I'll try and explore some more over the course of my next posts, and I'll probably be doing that by working through [Chris Coyier's amazing guide on CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).