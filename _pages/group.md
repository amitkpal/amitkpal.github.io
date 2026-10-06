---
layout: archive
title: "Complex Quantum Systems Group"
permalink: /group/
author_profile: true
---

{% assign current_members = site.data.students | where: "current", true | sort: "order" %}

<div class="group-intro">
  <p class="group-intro__text">Welcome to the Complex Quantum Systems Group at IIT Palakkad. Our research aims to uncover how collective quantum phenomena in quantum many-body systems give rise to useful functionalities for emerging quantum technologies, combining ideas from quantum information theory, quantum many-body physics, and open quantum systems. The long-term goal is to develop robust principles for quantum protocols, including sensing, computation, and energy storage that remain effective in the presence of decoherence, disorder, and engineered dissipation. For this, we develop theoretical models, derive exact and approximate analytical results wherever possible, and complement them with numerical methods to explore regimes beyond analytical tractability. If you are interested, see <a href="#join">how to join our group</a>.</p>
  <aside class="group-intro__aside">
    <h3>Current research interests</h3>
    {% for item in site.data.interests %}
    <div class="interest-card">
      <div class="interest-card__title">{% if item.link and item.link != "" %}<a href="{{ item.link }}">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</div>
      {% assign idesc = item.description | strip %}
      {% if idesc != "" %}<div class="interest-card__text">{{ idesc }}</div>{% endif %}
    </div>
    {% endfor %}
  </aside>
</div>

<div class="section-head">
  <h2 id="current-members">Current members</h2>
  <a class="section-link" href="{{ '/group/members/' | relative_url }}">All current and past members <span aria-hidden="true">&rarr;</span></a>
</div>

<div class="people-grid">
{% for person in current_members %}
  {% include person-card.html person=person %}
{% endfor %}
</div>

<section id="join" class="join-section">
<h2>Join the group</h2>
<div class="join-grid">

<div class="join-card">
<h3>PhD</h3>
<p>We are always looking for motivated and skilled candidates from diverse backgrounds to join our group as PhD students. To pursue your PhD with us, you have to hold a MSc/MS degree in Physics, and pass one of the competitive national-level examinations (see <a href="https://resap.iitpkd.ac.in">IIT Palakkad Research Portal</a> for details). Eligible candidates will have to go through the admission procedure in place, typically including an examination and an interview. If you are interested, please get in touch via email, attaching your CV, prior to applying formally for more information on research topics and availability of positions.</p>
</div>

<div class="join-card">
<h3>Postdoc</h3>
<p>We have a few very competitive post-doc positions at the Department, and we encourage interested postdoctoral candidates to apply for their own funding with us. If you are interested, please contact by sending an email with your CV. Possible funding information can be found below.</p>
<ul>
<li><a href="https://anrfonline.in/ANRF/npdf">ANRF-National Post-Doctoral Fellowship</a></li>
<li><a href="https://dst.gov.in/scientific-programmes/wise-kiran">DST Woman Scientist Position</a></li>
<li><a href="https://kscste.kerala.gov.in/service/women-in-science-technology/">KSCSTE Women in Science and Technology</a></li>
</ul>
</div>

<div class="join-card">
<h3>MSc projects</h3>
<p>Motivated Students from the MSc Physics program of IIT Palakkad can pursue their third (minor) and fourth (major) semester projects in the group. If you are interested, please contact by sending an email to know more about the available projects.</p>
</div>

</div>
</section>
