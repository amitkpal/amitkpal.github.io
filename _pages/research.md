---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include slideshow.html
   data="research_slideshow"
   class="research-swiper"
%}

Our research aims to uncover how collective quantum phenomena give rise to useful functionalities for emerging quantum technologies, combining ideas from quantum information theory, quantum many-body physics, and open quantum systems. The long-term goal is to develop robust principles for quantum protocols, including communication, sensing, computation, and energy storage that remain effective in the presence of decoherence, disorder, and engineered dissipation. For this, we develop theoretical models, derive exact and approximate analytical results wherever possible, and complement them with numerical methods to explore regimes beyond analytical tractability. 

Current research interests
------
- Quantum information processing in low-dimensional quantum spin models
- Measurement-based quantum protocols and resource recovery
- Quantum error correction and mitigation
- Non-equilibrium quantum systems and quantum thermodynamics
- Noisy quantum devices and applications
- Many-body noisy quantum metrology.



{% assign current_year = site.time | date: "%Y" | plus: 0 %}
{% assign papers = site.data.papers | sort: "sort" | reverse %}
<div class="publication-list">
{% include publication_section_current.html
title="This year so far"
filter="recent_preprints"
papers=papers
current_year=current_year %}
</div>

For complete list of publications, see [here](publications.md).
