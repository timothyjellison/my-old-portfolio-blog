---
title: Documentation-Driven Development
permalink: '/blog/:title/'
tags:
  - Blog
---

What if we wrote the docs first, then the unit tests, and only after those were solid wrote the code?

We've been bringing on a new team member at work and as I've been explaining to him how our rather large React/Redux project is set up I'm kicking myself that we don't have any documentation. All knowledge is shared developer-to-developer and by reading the code. But peer-to-peer knowledge can only ever result in juniors knowing less than seniors, and reading code is a slow and taxing experience. As Peter Seibel has pointed out, ["We don’t read code, we *decode*&nbsp;it."](http://www.gigamonkeys.com/code-reading/)

Now for us, the solution is clearly to get serious about documenting our existing pages in our existing documentation solution. The backend devs use [Confluence](https://www.atlassian.com/software/confluence); some other front-end teams use [GitHub Wikis](https://help.github.com/articles/about-github-wikis/). The pieces are all there and we just need to get serious about using them.

But moving forward or (more ideally) for a greenfield project, I think it would be interesting to try a documentation-driven solution. The basic setup:

1. In your documentation tool of choice, create a page or paragraph for the new feature you want to add. Using jargon-free language and without going into the specifics of the code, describe what the feature is, what it does, and what value it's intended to provide. Include links to wireframes, user stories, etc.
2. Share your writing! Show it to other developers, show it to the business stakeholders, show it to the designers. See if there's anything they want to add or there's anything you've misunderstood about the project. Update your documentation as needed.
3. If there are any key pieces of business logic you'll need to code, start writing unit tests for them. This is where we switch from DDD (documentation-driven development) to TDD (test-driven development). For front-end developers, use this time as a discovery phase. Look for existing components and styles in your styleguide that you can reuse or repurpose. (Don't have a styleguide? You should! Now go dig through the code like a gopher.)
4. Now you can start coding. Make frequent reference to the documentation and unit tests as you write. Stay aligned with the plan. Only if you encounter a really big blocker should you consider going back and revising the plan.&nbsp;
5. Now that everything's coded, go ahead and add code examples and explanations of any tricky code or gotchas to the documentation.

I'd love to see what tools people might have developed that can aid in the transition from DDD to TDD. (I wonder if something like [Cucumber](https://cucumber.io/)&nbsp;could be useful here.) And it also opens up the question of how styleguides relate to documentation. And then there's the big question of how we share this information in a way that's helpful to everyone involved in developing the software. Purely in terms of dollars and cents these are really important questions.