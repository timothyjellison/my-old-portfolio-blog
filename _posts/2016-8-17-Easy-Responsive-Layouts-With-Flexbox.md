---
layout: post
title: Easy Responsive Layouts With Flexbox
---

Continuing [from yesterday's post](http://www.timothyellison.com/Starting-Out-With-Flexbox/), today I want to show a quick example of how to create a responsive layout with flexbox. We're going to work with the same HTML as last time, a parent div with three item divs in side it. 

```html
<div class="parent">
    <div class="item">item text</div>
    <div class="item">item text</div>
    <div class="item">item text</div>
</div>
```

But this time instead of just laying them out in thirds horizontally, we're going to also lay them out vertically when the window is less than 600 pixels wide. Here's our CSS:

```css
.parent {
    display: flex;
    flex-direction: column;
}

@media screen and (min-width: 700px) {
	.parent {
		flex-direction: row;
	}

	.item {
	    width: 33.333%
	}	
}
```

Notice we started with the column arrangement first to keep within a mobile-first design pattern. All we need for the vertical arrangement of items is to set the parent's display property to a value of "flex" and its flex-direction property to a value of "column". Then inside the media query we change the flex-direction to "row" so that our items are arranged horizontally, and we set the items' width to 33.333% to make sure they're spread in three evenly sized columns across the page. 

You can easily adapt this to create, for example, a four-column layout for a news site. It will have 25% width on each news story when there's enough room, but will switch to a column layout when space gets tight. [Here's a pen to demonstrate.](http://codepen.io/tellison/pen/VjRRwa)

Pretty cool, huh? So far we've gotten some good milage out of just two flexbox properties. I'll dig more into flexbox tomorrow. And again, I want to recommend Chris Coyier's awesome [guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) over on CSS Tricks.