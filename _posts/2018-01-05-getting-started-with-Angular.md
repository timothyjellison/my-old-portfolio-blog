---
title: Getting Started with Angular
permalink: /blog/:title/
tags: Blog
---

Here are some quick notes I through together when starting to learn Angular and TypeScript.

Angular offers a great command line tool for quickly scaffolding an Angular app. It's super simple like create-react-app or rails.

`npm i -g @angular/cli`

You can now use `ng new dirname` to create a new app. Then `cd` into `dirname` and `ng serve` and point your browser to `localhost:4200` to see the app in action. (Pro tip: add the `--open` flag to `ng serve` to automatically open the browser after webpack does its thing.)

Your app lives in the `src` directory. You'll see a bunch of `.ts` files, which of course stands for TypeScript. TypeScript isn't all that different from plain JavaScript but it's main features are worth exploring. The following breakdown of TypeScript's features is taken almost wholecloth from [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

TypeScript provides **type annotations** that will throw compile time errors if you have a type mismatch.


```javascript
function greeter(person: string) {
  return `Hello, ${person}`;
}
```

[Read more about types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

TypeScript allows you to define an **interface**, an object schema with strictly defined keys and property types. You can use an interface the same way you'd use a type annotation.

```javascript
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}
```

[Read more about interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

TypeScript also has **its own `class` syntax** that lets you define properties and methods using keywords like `static`, `private`, `public`, and `protected` that are more common in strongly typed languages.

```javascript
class Student {
  fullName: string;

  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

let user = new Student("Jane", "M.", "User");
```

[Read more about classes](https://www.typescriptlang.org/docs/handbook/classes.html)

Finally, TypeScript provides a decorator syntax that looks like this: `@Decorator`. You can use decorators to quickly add properties to classes. You define a decorator as a function, like this:

```javascript
function course(target) {
  Object.defineProperty(target.prototype, 'course', {value: () => "Angular 2"})
}
```

And implement it with the `@course` syntax in the line above your where you declare the class to decorate.

```javascript
@course
class Person {}
```

Now when `const x = new Person();` `x.course() === 'Angular 2' // true`.

To add arguments to a decorator (e.g. @course('Angular 2')), declare it as function that returns a decorator.

```javascript
function course(name) {
  return function(target) {
    Object.defineProperty(
      target.prototype,
      'course',
      {value: () => name}
    )
  }
}
```

OK, enough about TypeScript, let's get back to the Angular app. Your app.component.ts is already set up to use app.component.html for it's markup structure and app.component.css for its component-specific styling. Pretty awesome.

The easiest way to add your own new components to the app is with Angular CLI. Go ahead and run `ng generate component car` in the command line. Now you'll have more files inside src/app/car, and app.module.ts will automatically be updated to include your new CarComponent component.

Now that app.module.ts has imported 'CarComponent', you can add it to your `app.component.html` using whatever `selector` was specified in car.component.ts. The selector is `app-car`, so just add `<app-car></app-car>` into app.component.html and you should see the car.component.html rendered inside your app. Pretty easy. If you're already familiar with React, think of the .component.html file like JSX.

Angular components have lifecycle hooks just like React components. The generate component command already provided CarComponent with an `ngOnInit()` lifecycle hook, but of course there are lots of others. [Here's a complete list.](https://angular.io/guide/lifecycle-hooks#lifecycle-sequence) You just need to be sure to import the desired hook from '@angular/core' and specify in the component's class declaration that the class implements that hook. It's easier than it sounds.

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
```

You can give your component class private variables that will be exposed to the .component.html using curly-brace expression binding. So we can define `private x: string = "hi"` and then display that string value in our component using `{{x}}`.

So. Some vocab. The word **directive** gets thrown around a lot in discussions of Angular. Most attempts at a definition I've found online are actually just use-case examples. They demo how to use directives rather than explain what they actually *are*. Not super helpful. Here's my attempt: a *directive* is any code that tells Angular how to render HTML. That's crazy vague, but it kind of matches up with [this explanation from Angular's own documentation](https://angular.io/guide/attribute-directives#directives-overview). Since .component.html is directly responsible for rendering of HTML, the component as a whole is considered directive. Inside the component we can have *structural directives* (like ngIf and ngFor) that create or limit the creation of HTML elements and *attribute directives* (like ngClick and ngStyle) that modify the inline attributes of HTML elements. These are what are more commonly being referred to when we talk about directives.

You can use `ng generate directive` to quickly create a directive. (It's true that components are directives, too, but we generate those using `ng generate component`.) This will create a .directive.ts file and import it into app.module.ts so that you can apply the directive in any of your .component.html files.

Angular's core library exposes an ElementRef class that we can use to reference the element to which our directive is applied. Here's an example:

```javascript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

This lets us add the attribute directive "appHighlight" to any element in our application.

OK that's as far as I can get in one day. Hope some of this was helpful to anybody else just starting out with Angular and/or TypeScript!
