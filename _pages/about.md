---
permalink: /
title: "Hello!"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Welcome to my homepage. 

I am Amit, an Associate Professor at the [Department of Physics](https://physics.iitpkd.ac.in), [IIT Palakkad](https://iitpkd.ac.in), where I lead the [Complex Quantum Systems Group](group.md). My research brings together cocepts from quantum information theory, quantum many-body physics, quantum optics, quantum thermodynamics, and open quantum systems. For my brief bio, see [here](bio.md).

This year so far
------

{% assign current_year = site.time | date: "%Y" %}
<div class="news-list">
{% for item in site.data.news %}
  {% assign item_year = item.date | date: "%Y" %}
  {% if item_year == current_year %}
  <div class="news-item">
    <div class="news-date">
      {{ item.date | date: "%B %-d, %Y" }}
    </div>
    {% if item.link and item.link != "" %}
        <strong><a href="{{ item.link }}">{{ item.title }}</a></strong>
    {% else %}
      <div class="news-title">
        {{ item.title }}
      </div>
    {% endif %}
    <div class="news-description">
      {{ item.description }}
    </div>
  </div>
  {% endif %}
{% endfor %}
</div>

For older news and events, see [here](news.md).
