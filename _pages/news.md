---
layout: archive
title: "News and Events"
permalink: /news/
author_profile: true
---

<div class="news-list">
{% for item in site.data.news %}
<div class="news-item">
  <div class="news-date">
    {{ item.date | date: "%B %-d, %Y" }}
  </div>
  {% if item.link and item.link != "" %}
    <div class="news-title">
      <a href="{{ item.link }}">{{ item.title }}</a>
    </div>
  {% else %}
    <div class="news-title">
      {{ item.title }}
    </div>
  {% endif %}
  <div class="news-description">
    {{ item.description }}
  </div>
</div>
{% endfor %}
</div>
