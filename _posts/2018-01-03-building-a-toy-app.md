---
title: Building a Toy App with Rails
tags: Blog
---

I'm continuing my notes on Michael Hartl's free Ruby on Rails Tutorial, picking up where I left off in chapter 2.

* You can add validation to a data model in the model's `.rb` file. For example, to limit the length of a micropost's to 140 characters, we just add `validates :content, length: { maximum: 140 }` to `model/micropost.rb`. To require a field, add `presence: true`. Rails adds a bunch of super ugly validation messages for you, so you'll want to restyle those at some point.

* We can also add **associations** between data models with keywords like `has_many` and `belongs_to`. To associate microposts to a user, we can add `belongs_to :user` to `model/micropost.rb` and `has_many :microposts` to `model/user.rb`. Rails only has six types of associations currently, so you might as well [learn them all](http://guides.rubyonrails.org/association_basics.html).

* Cool tip: we can use `rails console` to open a CLI that lets us interact with our database via Rails. No need to write SQL queries to play in the database; Rails can handle all that for us.

So something I'm impressed by as I learn more about Rails is that it's very opinionated. In React and Angular land things feel more open ended, while Rails is very clearly guiding your toward creating a specific type of web product. It feels kind of *awesome*, frankly. We don't need a big blank canvas and every type of brush for every project. Sometimes you just need a paint-by-numbers book and some watercolors.