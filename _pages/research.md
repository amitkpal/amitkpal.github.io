---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

Our research aims to uncover how collective quantum phenomena give rise to useful functionalities for emerging quantum technologies, combining ideas from quantum information theory, condensed matter physics, and open quantum systems. The long-term goal is to develop robust principles for quantum protocols, including communication, sensing, computation, and energy storage that remain effective in the presence of decoherence, disorder, and engineered dissipation. For this, we develop theoretical models, derive exact and approximate analytical results wherever possible, and complement them with numerical methods to explore regimes beyond analytical tractability. 

Current research interests
------
- Quantum information processing in low-dimensional quantum spin models
- Measurement-based quantum protocols and resource recovery
- Quantum error correction and mitigation
- Non-equilibrium quantum systems and quantum thermodynamics
- Noisy quantum devices and applications
- Many-body noisy quantum metrology.

This year so far
------

{% assign current_year = site.time | date: "%Y" %}
{% for paper in site.data.quantum_papers %}
  {% if paper.year == current_year and paper.status == "preprint" %}
  <p>
    <strong>{{ paper.title }}</strong><br>
    {{ paper.authors }}<br>
    {% if paper.arxiv %}
      <a href="https://arxiv.org/abs/{{ paper.arxiv }}">
        arXiv:{{ paper.arxiv }}
      </a>
    {% endif %}
  </p>
  {% endif %}
{% endfor %}

For complete list of publications, see [here](publications.md).
