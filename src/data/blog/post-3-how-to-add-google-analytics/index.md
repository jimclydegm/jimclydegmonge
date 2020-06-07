---
category: 'blog'
cover: './cover.jpg'
title: 'How to add Google Analytics to website' 
description: 'Tutorial on integrating Google Analytics to your Gatsby website.'
date: '2020-06-01'
tags: ['Gatsby', 'Google Analytics']
published: true
---

This tutorial will guide you on how to add Google Analytics into your Gatsby website.

</br>

</br>

<h1><font size="5", color="#2E86C1">Step 1: Setup Google Analytics</font></h1>

</br>

Visit https://analytics.google.com/ and setup your account

</br>

![google_analytics_create](./google_analytics_create.JPG)

</br>

</br>

<h1><font size="5", color="#2E86C1">Step 2: Get your Tracking ID</font></h1>

</br>

After you setup Google Analytics, go to Admin > Account Settings > Property Settings


![tracking_id](./tracking_id.JPG) 

</br>

Get your Tracking ID. It looks something like this **UA-111111111-1**

</br>

</br>

<h1><font size="5", color="#2E86C1">Step 3: Configure Gatsby </font></h1>

</br>

Open up gatsby-config.js file and add the code block below.

Make sure that the Tracking ID is same as your Tracking ID in Step#2.

![gatsby_config](./gatsby_config.JPG) 

</br>

</br>

That's basically it, go ahead and deploy your site to test. Page visits should automatically be picked up in your Google Analytics Dashboard.