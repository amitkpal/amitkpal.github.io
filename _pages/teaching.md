---
layout: archive
title: "Teaching"
permalink: /teaching/
author_profile: true
---


{% assign current_year = site.time | date: "%Y" | plus: 0 %}
<div class="teaching-list">
<h2>Current Courses</h2>
{% assign current_found = false %}
{% for course in site.data.teaching %}
  {% if course.years contains current_year %}
    {% assign current_found = true %}
    <div class="teaching-item">
      <div class="course-title">
      {% if course.materials and course.materials.url %}
        <strong>
          <a href="{{ course.materials.url }}">
            {{ course.code }} — {{ course.title }}
          </a>
        </strong>
      {% else %}
        <strong>{{ course.code }} — {{ course.title }}</strong>
      {% endif %}
      </div>
      <div class="course-meta">
        <strong>Programme:</strong> {{ course.programme }}<br>
        <strong>Semester:</strong> {{ course.semester }}<br>
        <strong>Academic years:</strong>
        {% for year in course.years %}
          {{ year }}–{{ year | plus: 1 | modulo: 100 | prepend: "0" | slice: -2,2 }}{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </div>
    </div>
  {% endif %}
{% endfor %}
{% unless current_found %}
<p>No courses offered during the current academic year.</p>
{% endunless %}
<h2>Previously Taught Courses</h2>
{% assign previous_found = false %}
{% for course in site.data.teaching %}
  {% unless course.years contains current_year %}
    {% assign previous_found = true %}
    <div class="teaching-item">
      <div class="course-title">
      {% if course.materials and course.materials.url %}
        <strong>
          <a href="{{ course.materials.url }}">
            {{ course.code }} — {{ course.title }}
          </a>
        </strong>
      {% else %}
        <strong>{{ course.code }} — {{ course.title }}</strong>
      {% endif %}
      </div>
      <div class="course-meta">
        <strong>Programme:</strong> {{ course.programme }}<br>
        <strong>Semester:</strong> {{ course.semester }}<br>
        <strong>Academic years:</strong>
        {% for year in course.years %}
          {{ year }}–{{ year | plus: 1 | modulo: 100 | prepend: "0" | slice: -2,2 }}{% unless forloop.last %}, {% endunless %}
        {% endfor %}
      </div>
    </div>
  {% endunless %}
{% endfor %}
{% unless previous_found %}
<p>No previously taught courses.</p>
{% endunless %}
</div>
