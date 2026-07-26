---
layout: archive
title: "Contact"
permalink: /contact/
author_profile: true
---

<div class="contact-page">
<h2>Office</h2>
<p>
{% for line in site.data.contact.address %}
{{ line }}<br>
{% endfor %}
</p>
<h2>Email</h2>
<p>
<a href="mailto:{{ site.data.contact.email }}">
{{ site.data.contact.email }}
</a>
</p>
<h2>Office Hours</h2>
<p>
{{ site.data.contact.office_hours }}
</p>
<h2>Location</h2>
<a href="{{ site.data.contact.google_maps }}"
target="_blank"
rel="noopener">
<img
src="{{ site.data.contact.map_image | relative_url }}"
alt="Department location"
class="contact-map">
</a>
<p>
<a class="contact-button"
href="{{ site.data.contact.google_maps }}"
target="_blank"
rel="noopener">
View on Google Maps →
</a>
</p>
<h2>Contact Card</h2>
<p>
<a
class="contact-button"
href="{{ site.data.contact.vcard | relative_url }}">
Download Contact Card (.vcf)
</a>
</p>
</div>
