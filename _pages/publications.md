---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% assign papers = site.data.papers | sort: "sort" | reverse %}

<div class="pub-tools" id="pub-tools" hidden="hidden">
<div class="pub-search"><input type="search" id="pub-search" class="pub-search__input" placeholder="Search title, author, journal, topic or year" aria-label="Search publications" autocomplete="off"></div>
<div class="pub-chips" role="group" aria-label="Filter by status">
<button type="button" class="pub-chip is-active" data-status="all" aria-pressed="true">All</button>
<button type="button" class="pub-chip" data-status="preprint" aria-pressed="false">Preprint</button>
<button type="button" class="pub-chip" data-status="published" aria-pressed="false">Accepted / published</button>
</div>
<div class="pub-chips" id="pub-area-chips" hidden="hidden"></div>
<div class="pub-status-row"><span id="pub-count" aria-live="polite"></span><button type="button" id="pub-clear" class="pub-clear" hidden="hidden">Clear filters</button></div>
</div>

<div class="publication-list" id="pub-list">

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

<p id="pub-empty" class="pub-empty" hidden="hidden">No papers match your search. Try fewer words or clear the filters.</p>

</div>
