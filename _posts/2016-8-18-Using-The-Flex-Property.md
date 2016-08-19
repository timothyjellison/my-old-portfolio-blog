---
layout: post
title: Using the Flex Property
---

In my earlier examples I set the width of my divs with the width property. This was the only way I had to evenly distribute the item divs across the page. But when using flexbox there's a better and easier tool available: *the flex property*. It's an easier way to create layouts.

Let's assume the same HTML as last time, except now we'll add a class to each item indicating how it relates to the parent. This is just because we're going to want to take a little more control of our individual items, and giving each a unique class makes it easier to grab in our CSS. 

```html
<div class="parent">
    <div class="item parent__first-child">item text</div>
    <div class="item parent__second-child">item text</div>
    <div class="item parent__third-child">item text</div>
</div>
```

We'll set our parent to "display: flex", but that's all we'll give it. We'll only need to each item a flex property. Let's set the flex property of each item to 1 to distribute them evenly across the page. 

```css
.parent {
    display: flex;
}

.item {
		flex: 1;	
}
```

The browser automatically detects how many children of parent you're trying to flex across the screen (let's call it n) and since all of their flex properties are set to the same number gives each of them one nth. In this case you're trying to flex three children across the screen, so each is given a width of one third. If we added a fourth or fifth item, the layout would know what to do to divide the screen into fourths and fifths. This is distinctly easier than trying to control the width of the layout using percentages. 

You can also weight the items differently by varying the numbers in the flex. Say you wanted to have a main content section on the left and a small side bar on the left, and a slightly larger sidebar on the left. Rather than calculate out all the percentages yourself, just use flexbox. Set your parent_first-child class to 2, your parent_second-child class to 4, and your parent_third-child to 1. The browser will automatically divide the screen width into 7 units of equal length and distribute the widths as 2/7, 4/7, and 1/7. That beats the heck out of calculating percentages.  


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