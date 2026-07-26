---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% assign papers = site.data.papers | sort: "sort" | reverse %}

<div class="publication-list">

{% include publication_section.html
title="Recent preprints"
filter="recent_preprints"
papers=papers %}

{% include publication_section.html
title="Peer-reviewed articles"
filter="peer_reviewed"
papers=papers %}

{% include publication_section.html
title="Books / Book chapters / Reviews"
filter="books"
papers=papers %}

{% include publication_section.html
title="Other than quantum"
filter="other"
papers=papers %}

</div>



