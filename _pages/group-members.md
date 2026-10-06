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

{% if former_phd.size > 0 %}
<h3 class="alumni-sub alumni-sub--phd">Former PhD students</h3>
<ul class="alumni-lines">
{% for person in former_phd %}
  {% include alumni_line.html person=person %}
{% endfor %}
</ul>
{% endif %}

{% if former_msc.size > 0 %}
<h3 class="alumni-sub alumni-sub--msc">Former MSc students</h3>
<ul class="alumni-lines">
{% for person in former_msc %}
  {% include alumni_line.html person=person %}
{% endfor %}
</ul>
{% endif %}
