---
title: Starting Up With Rails
---

So I've started working through Michael Hartl's free [Ruby on Rails Tutorial](https://www.railstutorial.org/book), and here are some first impressions and key takeaways. I'm looking at this from the perspective of someone whose primary coding experience is JavaScript and Node.

* For JavaScript developers familar with Node's more common app scaffolding options (Yeoman, create-react-app, the Angular CLI), Ruby on Rails is a breeze to start working with. Just `rails new dirname`, wait for it to build, then `cd` into `dirname` and `rails server` to get the thing running on `localhost:3000`.

* Along those same lines, if you're already familiar with npm or yarn, Rails has a `Gemfile` that's exactly like `package.json` (or like a `csproj` file in .NET). Gems are just like npm packages: somebody else's publically-available version-controlled code that you can pull into your project as needed. If you add or remove gems or update version numbers in the `Gemfile` just be sure to run `bundle install` to update your gems. You might get an error message saying to run `bundle update` first, so do that and then run `bundle install` again.

* I really love [this diagram of the MVC architecture](https://softcover.s3.amazonaws.com/636/ruby_on_rails_tutorial_4th_edition/images/figures/mvc_schematic.png). Rails creates an `app` directory that contains separate folders for `models`, `views`, and `controllers`. Views are .erb files (just stands for Embedded RuBy, a run-of-the-mill templating language). Models and controllers are real meat-and-potatoes Ruby, so you've gotta know your stuff there.

* When you're building an Express API, remember how your basic task is to match HTTP verb and url combos to controllers? You do the same thing here. Your controllers are `.rb` files in `app/controllers/` and your routes are in `config/routes.rb`. This part of Hartl's tutorial gets pretty specific with the Ruby code, using syntax for extending one class from another, so be sure to [reference his code examples](https://www.railstutorial.org/book/beginning#sec-hello_world).

* So Hartl's example uses this `root` keyword to represent the root url (in this case `localhost:3000`), but you can get a bit more specific by creating a function like this `get 'hello' => 'application#hello'`. This matches a GET request to `localhost:3000/get` to the `application` controller's `hello` method. Easy as pie.

* Chapter 1 ends with a bunch of stuff about Git and Heroku, which basically already know and right now I just want to get my hands dirty with Ruby, so I'll double back to this later.

Lovin' it. A great way to kick off 2018.
