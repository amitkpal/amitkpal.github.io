---
layout: archive
title: "Complex Quantum Systems Group"
permalink: /group/
author_profile: true
---

Current Members
------

<div class="people-grid">
{% for person in site.data.students %}
  {% include person-card.html person=person %}
{% endfor %}
</div>

Former Members
------

<ol class="former-members">
{% for member in site.data.former_members %}
<li>
<strong>{{ member.name }}</strong>,
{{ member.degree }}
&nbsp;|&nbsp;
{{ member.years }}
{% if member.current %}
&nbsp;|&nbsp;
Currently {{ member.current }}
{% endif %}
</li>
{% endfor %}
</ol>

Joining the Group
------

**PhD:** We are always looking for motivated and skilled candidates from diverse backgrounds to join our group as PhD students. To pursue your PhD with us, you have to hold a MSc/MS degree in Physics, and pass one of the competitive national-level examinations (see [IIT Palakkad Research Portal](https://resap.iitpkd.ac.in) for details). Eligible candidates will have to go through the admission procedure in place, typically including an examination and an interview. If you are interested, please get in touch via email, attaching your CV, prior to applying formally for more information on research topics and availability of positions. 

**Postdoc:** We have a few very competitive post-doc positions at the Department, and we encourage interested postdoctoral candidates to apply for their own funding with us. If you are interested,  please contact by sending an email with your CV. Possible funding information can be found below. 

- [ANRF-National Post-Doctoral Fellowship](https://anrfonline.in/ANRF/npdf)
- [DST Woman Scientist Position](https://dst.gov.in/scientific-programmes/wise-kiran)
- [KSCSTE Women in Science and Technology](https://kscste.kerala.gov.in/service/women-in-science-technology/)

**MSc Projects:** Motivated Students from the MSc Physics program of IIT Palakkad can pursue their third (minor) and fourth (major) semester projects in the group. If you are interested, please contact by sending an email to know more about the available projects. 
