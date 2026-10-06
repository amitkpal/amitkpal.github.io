---
layout: archive
title: "Contact"
permalink: /contact/
author_profile: true
---

<div class="contact-page">
<div class="contact-main">

<div class="contact-address">
<h3><i class="fas fa-fw fa-location-dot" aria-hidden="true"></i> Office</h3>
<p>{% for line in site.data.contact.address %}{{ line }}{% unless forloop.last %}<br>{% endunless %}{% endfor %}</p>
{% if site.data.contact.office_hours != "" and site.data.contact.office_hours %}<p class="contact-address__hours"><i class="fas fa-fw fa-clock" aria-hidden="true"></i> Office hours: {{ site.data.contact.office_hours }}</p>{% endif %}
</div>

<div class="contact-actions">
<a class="contact-btn" href="mailto:{{ site.data.contact.email }}"><i class="fas fa-fw fa-envelope" aria-hidden="true"></i> Send an email</a>
<a class="contact-btn" href="{{ site.data.contact.google_maps }}" target="_blank" rel="noopener"><i class="fas fa-fw fa-map-location-dot" aria-hidden="true"></i> View on Google Maps</a>
</div>

</div>
</div>
