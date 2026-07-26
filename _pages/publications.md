---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

Preprints and peer-reviewed articles
------

{% include quantum_papers_list.html %}


Books / Book chapters
------

{% include book_chapters_list.html %}

Other than quantum
------

{% include other_papers_list.html %}



{% assign papers = site.data.papers | sort: "sort" | reverse %}

<div class="publication-list">

{% include publication_section.html
    title="Recent Preprints"
    filter="recent_preprints"
    papers=papers %}

{% include publication_section.html
    title="Peer-reviewed Articles"
    filter="peer_reviewed"
    papers=papers %}

{% include publication_section.html
    title="Published Books, Book Chapters & Reviews"
    filter="books"
    papers=papers %}

{% include publication_section.html
    title="Other than Quantum"
    filter="other"
    papers=papers %}

</div>



