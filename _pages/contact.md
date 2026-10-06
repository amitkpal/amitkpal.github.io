---
layout: archive
title: "Contact"
permalink: /contact/
author_profile: true
---

<div class="contact-page">
<div class="contact-grid">

<div class="contact-cards">

<div class="contact-card">
<span class="contact-card__icon"><i class="fas fa-fw fa-location-dot" aria-hidden="true"></i></span>
<div class="contact-card__body">
<h3>Office</h3>
<p>{% for line in site.data.contact.address %}{{ line }}{% unless forloop.last %}<br>{% endunless %}{% endfor %}</p>
</div>
</div>

<div class="contact-card">
<span class="contact-card__icon"><i class="fas fa-fw fa-envelope" aria-hidden="true"></i></span>
<div class="contact-card__body">
<h3>Email</h3>
<p><a href="mailto:{{ site.data.contact.email }}">{{ site.data.contact.email }}</a></p>
</div>
</div>

<div class="contact-card">
<span class="contact-card__icon"><i class="fas fa-fw fa-clock" aria-hidden="true"></i></span>
<div class="contact-card__body">
<h3>Office hours</h3>
<p>{{ site.data.contact.office_hours }}</p>
</div>
</div>

</div>

<a class="contact-map-card" href="{{ site.data.contact.google_maps }}" target="_blank" rel="noopener">
<img src="{{ site.data.contact.map_image | relative_url }}" alt="Department location">
<span class="contact-map-card__cta"><i class="fas fa-fw fa-location-dot" aria-hidden="true"></i> View on Google Maps &rarr;</span>
</a>

</div>

<p class="contact-extra">
<a class="contact-vcard" href="{{ site.data.contact.vcard | relative_url }}"><i class="fas fa-fw fa-address-card" aria-hidden="true"></i> Download contact card (.vcf)</a>
</p>
</div>
