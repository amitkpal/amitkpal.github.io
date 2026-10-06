---
permalink: /
title: "Hello!"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Welcome to my homepage. 

I am an Associate Professor at the [Department of Physics](https://physics.iitpkd.ac.in), [IIT Palakkad](https://iitpkd.ac.in), where I lead the [Complex Quantum Systems (CQS) Group](group.md). Our research brings together cocepts from quantum information theory, quantum many-body physics, quantum optics, and open quantum systems. For my brief bio, see [here](bio.md).

Recent papers
------

{% include paper_slideshow.html limit=10 %}


This year so far
------

{% assign current_year = site.time | date: "%Y" %}
{% include news_timeline.html year=current_year %}

For older news and events, see [here](news.md).
