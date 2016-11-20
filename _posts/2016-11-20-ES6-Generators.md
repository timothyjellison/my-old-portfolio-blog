---
layout: post
title: Intro to ES6 Generators
---

We use a lot of ES6 generators at work since we're working with Redux Sagas. So far I've gotten by well enough without grokking generators but today I'm putting an end to that.

Here's a simple generator.

```javascript
function* MyGenerator() {
  var x = 0;

  while (true) {
    yield x;
    x++;
  }
};
```

Notice the * that I've attached to the ```function``` keyword. That's the signal that we're looking at a generator rather than a normal function declaration.

So what's it do? Nothing on its own. A generator is basically a constructor. When you create a ```Car``` constructor, the real work is done by instances of ```Car```. In the same way, the actual work is done by *instances* of your generator.

Let's create an instance of ```MyGenerator```.

```javascript
const instanceOfMG = MyGenerator();
```

That's it. You can have as many instances of ```MyGenerator``` running as you want, and thanks to closure they'll all have their own copy of the ```x``` variable to refer to.

So what does an instance of a generator do? Again, nothing much on its own. *But* it has a ```next()``` method available to it, which lets you iterate through the generator script one ```yield``` at a time, and which returns a simple object with the ```value``` that was yielded up and a boolean that says whether or not the generator is ```done``` with it routine.

Wow, that was probably a really confusing sentence if you've never seen generators at work before. Let's call ```next()``` on ```instanceOfMG``` and see what happens.

```javascript
let what_this_returns_the_first_time = instanceOfMG.next();

console.log(what_this_returns_the_first_time);
// { value: 0, done: false }
```

What's happening here? Our ```instanceOfMG``` started executing the ```MyGenerator``` script. It initialized a variable ```x``` with value 0, started a ```while``` loop, and then *WATCH OUT!* encountered a ```yield``` keyword. Here's where it created that object.

The ```yield``` keyword is a lot like ```return```. Whatever you ```yield``` will be the value of the ```value``` property.

And the ```done```? The generator exited through a 'yield' so it knows there's still more to do. So it sets ```done``` to ```false```. If it had resumed the code and hadn't found another ```yield``` it would have set ```done``` to ```true```.

And that's it. We've gotten the value out of our generator. Maybe you saw that infinite ```while``` loop and thought there would be trouble, but we've broken out of the loop with the ```yield``` keyword.

Except that *the next time* ```next()``` is called the generator will remember which ```yield``` you left off at. Let's call it again.

```javascript
let what_this_returns_the_second_time = instanceOfMG.next();

console.log(what_this_returns_the_second_time);
// { value: 1, done: false }
```

See that? The code has picked up right where it left off. It increments x, restarts the loop, and then *WATCH OUT!* encounters that ```yield``` keyword again. So it yields the new value of ```x``` to the ```value``` property and then sets ```done``` to ```false``` since it knows there are still more ```yield```s to come.

We can keep doing this forever.

```javascript
console.log(instanceOfMG.next());
// { value: 2, done: false }

console.log(instanceOfMG.next());
// { value: 3, done: false }
```

Let's make a new generator that doesn't have an infinite loop just so you can see what happens when it runs of our ```yield```s. And we'll create an instance of it since the generator's pretty much useless otherwise.

```javascript
function* AnotherGenerator() {
  yield "Hello"
  yield "World"
};

const instanceOfAG = AnotherGenerator();
```

What do you think will happen when we call ```next()``` on ```instanceOfAG```? Let's call it four times, just to be thorough.

```javascript
console.log(instanceOfAG.next());
// { value: 'Hello', done: false }

console.log(instanceOfAG.next());
// { value: 'World', done: false }

console.log(instanceOfAG.next());
// { value: undefined, done: true }

console.log(instanceOfAG.next());
// { value: undefined, done: true }
```

The first two are pretty intuitive. When you called ```next()``` the first time the instance started running the generator and found a value to ```yield``` ('Hello'). When you called it the second time it picked up where it left off and immediately encountered another value to ```yield``` ('World').

But the third and fourth time (and every other time until the end of the world) the ```next()``` found that there was nothing more to ```yield```, so it spit out a ```value``` of ```undefined``` and set ```done``` to ```true```.

I'll dig into how these work specifically in the context of Redux Sagas in a future post.
