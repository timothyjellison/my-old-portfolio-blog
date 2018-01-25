# timothyjellison.github.io

## January 2018

- [x] Add navigation bar
- [x] Add a /blog page that displays all blog posts
- [x] Limit the /blog page to only showing posts that have the Blog tag
- [x] Improve inline code highlighting in the blog posts
- [x] Add link to http://www.timothyellison.com/fave-resources/ in navigation bar
- [x] Add a sticky nav bar
- [x] Add an animated mobile hamburger for mobile navigation ([something like this](https://eichefam.net/2014/10/01/animated-hamburger/))
- [x] Have a larger header for the home page, and a slimmer header for all other pages
- [x] Make as much content as possible editable by CloudCannon
- [x] Write a blog post about switching to CloudCannon
- [x] Add links to the next and previous blog posts at the bottom of each blog post
- [ ] Make the fave-resources page into a yaml generated page
- [ ] Write a blog post that finishes my notes about Hartle chapter 2
- [ ] Display a preview of my two most recent blog posts on the front page, in a section marked **Blog**, with a link at the bottom to read more
- [ ] Explore better ways of displaying images in blog posts
- [ ] **Write some blog posts!**
  - [ ] My gulp setup for this website
  - [ ] My git-hooks setup
  - [ ] My design decisions and implementation (lots of vertical whitespace, fluid typography, font choice)
  - [ ] The experience of using [the w3c validator tool](https://validator.w3.org/) with jekyll

## December 2017

- [x] Create this checklist
- [x] Add a loading state with an animated font-awesome spinner icon
- [x] Add a JavaScript-based image loader for smart asset loading
- [x] Show spinner until background images load
- [x] Add scroll-based animation to make the text feel a bit more dynamic
- [x] Add babel-polyfill so the image loader (which uses window.Promises) works in IE11
- [x] Add a gulpfile to transpile, concatenate, and minify my JavaScript
- [x] Fix all w3c validation issues
- [x] Add [husky](https://www.npmjs.com/package/husky) to attach my gulp scripts to a git precommit hook
- [x] Add a .githooks directory to hold custom git hook shell scripts
- [x] Add a custom pre-commit hook shell script that will cancel a commit if the gulp process creates any new files (like bundle.js, for example)
- [x] Add a postinstall npm script that will tell git to look to .githooks for hook scripts rather than .git/hooks
- [x] Limit 1s text transition to opacity property to prevent awkward resize animation
