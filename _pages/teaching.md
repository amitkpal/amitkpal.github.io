---
layout: archive
title: "Teaching"
permalink: /teaching/
author_profile: true
---

<div class="teaching-list">
{% assign courses = site.data.teaching | sort: "code" %}
{% for course in courses %}{% if course.current %}
  {% include course_card.html course=course %}
{% endif %}{% endfor %}
{% for course in courses %}{% unless course.current %}
  {% include course_card.html course=course %}
{% endunless %}{% endfor %}
</div>
