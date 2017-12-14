# timothyjellison.github.io

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
- [ ] Fix issue with text not animating into view on IE11 (opacity and transition are supported in IE11, so I think this actually an issue with scroll detection.)
- [ ] Provide fallback for displaying header background images in case any image fails to load
- [ ] Limit 1s text transition to opacity property to prevent awkward resize animation
- [ ] Explore better ways of displaying images in blog posts
- [ ] Add navigation bar to direct user to http://www.timothyellison.com/fave-resources/ and blog posts that don't have the frontPage tag
- [ ] Add an animated mobile hamburger for mobile navigation ([something like this](https://eichefam.net/2014/10/01/animated-hamburger/))
- [ ] Display a preview of my two most recent blog posts that *don't* have the frontPage tag on the front page, in a section marked **Blog**
- [ ] Add custom CSS for [/fave-resources](http://www.timothyellison.com/fave-resources/) so that it matches the rest of the pages' aesthetic
- [ ] **Write some blog posts!**
  - [ ] My gulp setup for this website
  - [ ] My git-hooks setup
  - [ ] How my font-awesome spinner works
  - [ ] How my image loader works
  - [ ] How I added babel-polyfill to make the image loading compatible with IE11
  - [ ] My design decisions and implementation (white text on a photo, lots of vertical whitespace, fluid typography, font choice)
  - [ ] The experience of using [the w3c validator tool](https://validator.w3.org/) with jekyll
