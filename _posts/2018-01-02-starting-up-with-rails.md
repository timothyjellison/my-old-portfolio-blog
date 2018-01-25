---
title: Starting Up With Rails
tags: Blog
---

So I've started working through Michael Hartl's free Ruby on Rails Tutorial, and here are some first impressions and key takeaways.

I'm looking at this from the perspective of someone whose primary coding experience is JavaScript and Node. ([Here's a link to the book, in case you want to follow along.](https://www.railstutorial.org/book).)

* For JavaScript developers familar with Node's more common app scaffolding options (Yeoman, create-react-app, the Angular CLI), Ruby on Rails is a breeze to start working with. Just `rails new dirname`, wait for it to build, then `cd` into `dirname` and `rails server` to get the thing running on `localhost:3000`.

* Along those same lines, if you're already familiar with npm or yarn, Rails has a `Gemfile` that's exactly like `package.json` (or like a `csproj` file in .NET). Gems are just like npm packages: somebody else's publically-available version-controlled code that you can pull into your project as needed. If you add or remove gems or update version numbers in the `Gemfile` just be sure to run `bundle install` to update your gems. You might get an error message saying to run `bundle update` first, so do that and then run `bundle install` again.

* I really love [this diagram of the MVC architecture](https://softcover.s3.amazonaws.com/636/ruby_on_rails_tutorial_4th_edition/images/figures/mvc_schematic.png). Rails creates an `app` directory that contains separate folders for `models`, `views`, and `controllers`. Views are .erb files (just stands for Embedded RuBy, a run-of-the-mill templating language). Models and controllers are real meat-and-potatoes Ruby, so you've gotta know your stuff there.

* When you're building an Express API, remember how your basic task is to match HTTP verb and url combos to controllers? You do the same thing here. Your controllers are `.rb` files in `app/controllers/` and your routes are in `config/routes.rb`. This part of Hartl's tutorial gets pretty specific with the Ruby code, using syntax for extending one class from another, so be sure to [reference his code examples](https://www.railstutorial.org/book/beginning#sec-hello_world).

* So Hartl's example uses this `root` keyword to represent the root url (in this case `localhost:3000`), but you can get a bit more specific by creating a function like this `get 'hello' => 'application#hello'`. This matches a GET request to `localhost:3000/hello` to the `application` controller's `hello` method. Easy as pie.

* Chapter 1 ends with a bunch of stuff about Git and Heroku. I know most of this already and right now I just want to get my hands dirty with Ruby, so I'll double back to this later.

* Chapter 2 introduces data model scaffolding. Using `rails generate scaffold` you can create data models in the command line. Not only that, rails will generate the controllers and routes for CRUD interaction with those data models, so no need to build everything yourself. After you run your generate your data model just be sure to run `rails db:migrate` ([See here for more about migrations](http://guides.rubyonrails.org/v3.2/migrations.html)).

* So, for this particular example we run `rails generate scaffold User name:string email:string` and then `rails db:migrate`. This gives us a new data model for user (User will automatically have an `id` value as well) and a bunch of new files in models, controllers, and especially views. You now can navigate to `/users`, `/users/:id`, `/users/new`, and `/users/:id/edit`. You can add `.json` to the end of most of these to get raw data. In routes.rb you can set `root` to the new controller's index method, like this: `root "users#index"`.

* `models/user.rb` is basically blank, but it inherits from the ApplicationRecord class so it's quite powerful. In `controllers/users_controller.rb` you'll expose the data model to the view by creating **instance variables**. For example, in the index method you'll have this line `@users = User.all`. This creates an instance variable `@users` that you can refer to in `views/users/index.html.erb` to iterate over all the users.

I'll pick up from [section 2.3.1](https://www.railstutorial.org/book/toy_app#sec-a_micropost_microtour) tomorrow. I'm feeling excited and feel like I'm making a lot of connections to what I've learned in the Node / Express world. It's helping me understand the fundamental principles of web development rather than just a particular implementation of those principles. A great way to kick off 2018.
