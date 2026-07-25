---
layout: archive
title: "Teaching"
permalink: /teaching/
author_profile: true
---

Following are some of the courses that I have previously taught at IIT Palakkad. The class notes are accessible only via an IIT Palakkad student account. 

UG Courses
------

- **PH1010:** Physics I - Classical Mechanics
  - [Consolidated class notes](https://drive.google.com/file/d/12U6TAoM7qgmoWM-8pIJe9jgHKm05UXut/view)
- **PH1030:** Physics Lab
- **PH3601:** Quantum Mechanics for Engineers
- **PH3602:** Basics of Quantum Information, Communication, and Computation (UG)

PG Courses
------

- **PH5007:** Quantum Mechanics I (Core)
  - Module 1: [Linear Algebra 101](https://drive.google.com/file/d/1jDZO9PdxJ_dURC-2z56U7EKOIzVGz_qG/view)
  - Module 2: [Postulates of Quantum Mechanics](https://drive.google.com/file/d/1CyjWXbcC_qaUve2uJZwWRRnq6KSk8iij/view)
  - Module 3: [Single Particle in One Dimension](https://drive.google.com/file/d/1-EaGSKXsshS59QzScXoNJg9D4VvkrFNR/view)
  - Module 4: [Primer on Symmetry](https://drive.google.com/file/d/1tfRsJ-opcdAYQ8WgZatFNjVHxEBcpD66/view)
  - Module 5: [Many-Particle Systems](https://drive.google.com/file/d/1D-LJ3hW2ceWeNuQtDRNsJygrRw710DoQ/view)
  - Module 6: [Rotation and Angular Momentum](https://drive.google.com/file/d/1ShA9qiY0UvhAZE6qy_onPOY6slTL8pgI/view)
- **PH5610:** Quantum Information and Many-Body Systems (Elective, Designed)
- **PH5606:** Quantum Information and Computation (Elective, Designed)
- **PH5621:** Quantum Optics (Elective, Designed)
- **PH6XXX:** Exploring Quantum Spin Models using Python (Elective, Designed)
- **PH6603:** Introduction to Open Quantum Systems (Elective, Designed)
- **PH6XXX:** Introduction to Quantum Thermodynamics (Elective, Designed)




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
