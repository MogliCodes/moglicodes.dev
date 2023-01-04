---
title: "Looking for an adequate platform"
description: 'Currently on the lookout for a platform to host scheduled serverless functions'
category: Services
date: 10/16/2022
navigation:
    title: 'Home'
    icon: '🏡'
---

# Looking for an adequate platform

You may have noticed that I display my GitHub actions on the home page. Currently the data is fetch in the frontend, which means every visitor on this site makes a request to GitHub.

I would like to build a serverless functions which fetches the data from GitHub, like every hour or so, and then put it into my own database. 

Since heroku abolished their free tier, they are out of the picture for me. I tested Netlify functions, but apparently they are "not good" with async functions. Which seems really strange to me.

A while ago I mentioned render.com which offers cron jobs as a feature. Most likely I will give this a try since I want to avoid any big providers like AWS or GCP.
