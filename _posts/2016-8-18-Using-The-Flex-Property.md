---
layout: post
title: Using the Flex Property
---

In my earlier examples I set the width of my item divs by explicitly specifying their width properties. To evenly distribute three item divs across the page, I gave them 33.333% width. To distribute four, I have them 25% width. But when using flexbox there's a better and easier tool available: *the flex property*.

Let's use the same HTML as last time, except now we'll add a class to each item indicating how it relates to the parent. This is just because we're going to want to take a little more control of our individual items. 

```html
<div class="parent">
    <div class="item parent__first-child">item text</div>
    <div class="item parent__second-child">item text</div>
    <div class="item parent__third-child">item text</div>
</div>
```

We'll set our parent div to "display: flex", and give each item div a "flex" property set to 1.

```css
.parent {
    display: flex;
}

.item {
    flex: 1;	
}
```

So what's going on here? The browser is automatically detecting how many children you're trying to flex across the parent div (let's call it n) and since all of their flex properties are set to 1 it gives each of them 1 nth of that total width. In this case we're flexing three item divs across the parent div, so each is given a width of one third. If we added a fourth or fifth item, the layout would know what to do to divide the screen into fourths and fifths. 

You can also weight the items differently by using numbers other than 1. Say you wanted to have a main content section in the middle of your page, a small sidebar on the left, and a slightly smaller sidebar on the right. Set your parent_first-child class to 2, your parent_second-child class to 4, and your parent_third-child to 1. 

```css
.parent {
    display: flex;
}

.parent__first-child {
    flex: 2;	
}

.parent__second-child {
    flex: 4;
}

.parent__second-child {
    flex: 1;
}
```

Since these flex properties total 7, the browser will automatically divide the parent div's width into 7 equal units and distribute the widths as 2/7, 4/7, and 1/7. That beats the heck out of manually calculating percentages (28.57%, 57.14%, 14.29%), and since the math is so simple it's much easier to play around with until you have your layout just the way you like it.