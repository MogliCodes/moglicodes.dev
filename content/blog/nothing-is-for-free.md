---
title: "Nothing (that's good) is for free"
description: 'This article is about heroku and netlify and more and more paltforms abolishing their free tier plans'
category: Services
date: 09/08/2022
navigation:
    title: 'Home'
    icon: '🏡'
---

# Nothing (that's good) is for free

## TLDR;
Heroku abolishes their free tier plan and that's why I currently use `@nuxtjs/content`{lang="javascript"} to manage my "articles" 🥴.

## Why Heroku and Strapi, and what happened?
When I started this website as side project just for fun, I decided to pick Strapi as my headless CMS. The main reason being that it is open source and at the time I liked that I could self-host it. 

So I deployed a Strapi instance to heroku and and tinkered around a bit. One thing that always annoyed me was that Heroku puts your free tier dynos to sleep and it takes quite some time to wake them up. So I was looking for a Heroku alternative anyways 👀. 

A few weeks ago I found out, that Strapi cannot sort entries in the order you sorted them in the admin UI. There is quite a discussion about this topic in the community and maybe they are going to implement it in the future. But a maybe is just to uncertain. 

That is why I am currently again in the process of evaluating a good headless CMS as well as a hosting platform for the CMS. I still would very much like to go with Strapi, but this sorting feature is a deal breaker for me. For the hosting platform I recently stumbled upon **[render.com](https://www.render.com)**. So far it looks good and interesting to me. I will try it out in the next couple weeks and summarize my results here. Till then

__Happy Coding!__


*Appendix:*
Yesterday Traversy Media released a YouTube Video where he talks about three Heroku alternatives. Check 
it out <a href="https://youtube.com/watch?v=MusIvEKjqsc" target="_blank">here</a>.