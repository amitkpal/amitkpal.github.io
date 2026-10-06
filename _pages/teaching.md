---
layout: archive
title: "Teaching"
permalink: /teaching/
author_profile: true
---


<div class="teaching-list">
<h2>Currently running courses</h2>
{% assign current_found = false %}
{% for course in site.data.teaching %}
  {% if course.current %}
    {% assign current_found = true %}
    {% include course_card.html course=course %}
  {% endif %}
{% endfor %}
{% unless current_found %}
<p>No courses are currently running.</p>
{% endunless %}
<h2>Past courses</h2>
{% assign courses = site.data.teaching | sort: "code" %}
{% for course in courses %}
  {% include course_card.html course=course history=true %}
{% endfor %}
</div>
