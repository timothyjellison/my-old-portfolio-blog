---
layout: post
title: Feeling the Flex-Flow
---

The flex-flow property is a shorthand for two properties commonly given to the container/parent element: flex-direction and flex-wrap. 

I used flex-direction [in an earlier post](http://www.timothyellison.com/Easy-Responsive-Layouts-With-Flexbox/). It accepts four values: row, column, row-reverse, and column-reverse. It's great for switching from wide screens (like desktop monitors) where rows are more appropriate to narrow screens (like phones) where columns are more appropriate.

Flex-wrap accepts three values: nowrap, wrap, and wrap-reverse. Nowrap does everything it can to keep your child elements in a single row, including shrinking the width of elements to sizes lower than you explicitly set. Wrap, on the other hand, will push elements to the next row if there simply isn't enough room for them in the container element.

So flex-flow saves you some time by putting these two rules into a single declaration. The default value is "row nowrap". Probably the most common value you'll want to give is "row wrap".

[Here's a pen.](http://codepen.io/tellison/pen/LkvARg) Notice the top row doesn't have flex-wrap set to wrap, so even though the we've specified that its item elements should be 20 ems long it decreases their width to less than that. The bottom row, on the other hand, wraps items to the next row when there isn't enough space.

Over this weekend I think I'll bring all this home by creating a basic responsive layout for the front page of a news site, laying out the whole page top-to-bottom in flexbox. Should be fun!