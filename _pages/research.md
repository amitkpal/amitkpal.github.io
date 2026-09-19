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

Our research aims to uncover how collective quantum phenomena in quantum many-body systems give rise to useful functionalities for emerging quantum technologies, combining ideas from quantum information theory, quantum many-body physics, and open quantum systems. The long-term goal is to develop robust principles for quantum protocols, including sensing, computation, and energy storage that remain effective in the presence of decoherence, disorder, and engineered dissipation. For this, we develop theoretical models, derive exact and approximate analytical results wherever possible, and complement them with numerical methods to explore regimes beyond analytical tractability. 

Current research interests
------
- Quantum information processing using quantum many-body systems
- Non-equilibrium quantum many-body systems  
- Open quantum systems and decoherence
- Many-body noisy quantum metrology
- Non-hermitian topology



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
