---
layout: archive
title: "All current and past members"
permalink: /group/members/
author_profile: true
---

{% assign current_members = site.data.students | where: "current", true | sort: "order" %}
{% assign former_all = site.data.students | where: "current", false %}
{% assign former_phd = former_all | where: "degree", "PhD" | sort: "graduation_year" | reverse %}
{% assign former_msc = former_all | where: "degree", "MSc" | sort: "graduation_year" | reverse %}

<p><a href="{{ '/group/' | relative_url }}">&larr; Back to the group</a></p>

## Current members

<div class="people-grid">
{% for person in current_members %}
  {% include person-card.html person=person %}
{% endfor %}
</div>

## Past members

<div class="alumni-grid">
{% if former_phd.size > 0 %}
<div class="alumni-col alumni-col--phd">
<h3 class="alumni-col__title">Former PhD students</h3>
<ul class="alumni-list">
{% for person in former_phd %}
  {% include alumni_row.html person=person %}
{% endfor %}
</ul>
</div>
{% endif %}
{% if former_msc.size > 0 %}
<div class="alumni-col alumni-col--msc">
<h3 class="alumni-col__title">MSc students</h3>
<ul class="alumni-list">
{% for person in former_msc %}
  {% include alumni_row.html person=person %}
{% endfor %}
</ul>
</div>
{% endif %}
</div>
