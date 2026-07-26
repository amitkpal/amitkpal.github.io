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
    <div class="teaching-item">
      <div class="course-title">
        {% if course.materials and course.materials.url %}
          <strong>
            <a href="{{ course.materials.url }}">
              {{ course.code }} — {{ course.title }}
            </a>
          </strong>
        {% else %}
          <strong>
            {{ course.code }} — {{ course.title }}
          </strong>
        {% endif %}
      </div>
      <div class="course-meta">
        <strong>Programme:</strong>
        {{ course.programme }}
      </div>
    </div>
  {% endif %}
{% endfor %}
{% unless current_found %}
<p>No courses are currently running.</p>
{% endunless %}
<h2>Past courses</h2>
{% assign courses = site.data.teaching | sort: "code" %}
{% for course in courses %}
<div class="teaching-item">
  <div class="course-title">
    {% if course.materials and course.materials.url %}
      <strong>
        <a href="{{ course.materials.url }}">
          {{ course.code }} — {{ course.title }}
        </a>
      </strong>
    {% else %}
      <strong>
        {{ course.code }} — {{ course.title }}
      </strong>
    {% endif %}
  </div>
  <div class="course-meta">
    <strong>Programme:</strong>
    {{ course.programme }}
    <br>
    <strong>Semester:</strong>
    {{ course.semester }}
    <br>
    <strong>Academic years:</strong>
    {% for year in course.years %}
      {{ year }}–{{ year | plus: 1 | modulo: 100 | prepend: "0" | slice: -2,2 }}{% unless forloop.last %}, {% endunless %}
    {% endfor %}
  </div>
</div>
{% endfor %}
</div>
