/* Site-wide enhancements: masthead state, reading-progress bar, back-to-top
   button, and the Publications search / filter. Plain JavaScript, no libraries. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Masthead: height variable + "scrolled" state ---------- */
  var masthead = document.querySelector(".masthead");

  function syncMasthead() {
    if (!masthead) { return; }
    document.documentElement.style.setProperty(
      "--masthead-h", masthead.offsetHeight + "px");
    masthead.classList.toggle("is-scrolled", window.pageYOffset > 8);
  }

  /* ---------- Reading-progress bar + back-to-top button ---------- */
  var bar = document.createElement("div");
  bar.className = "read-progress";
  bar.setAttribute("aria-hidden", "true");

  var toTop = document.createElement("button");
  toTop.type = "button";
  toTop.className = "to-top";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.innerHTML =
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" ' +
    'fill="none" stroke="currentColor" stroke-width="2.4" ' +
    'stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M12 19V5"></path><path d="M5 12l7-7 7 7"></path></svg>';
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  document.body.appendChild(bar);
  document.body.appendChild(toTop);

  var ticking = false;

  function update() {
    ticking = false;
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var y = window.pageYOffset || doc.scrollTop;
    var p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
    bar.style.transform = "scaleX(" + p + ")";
    toTop.classList.toggle("is-visible", y > 500);
    if (masthead) { masthead.classList.toggle("is-scrolled", y > 8); }
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { syncMasthead(); onScroll(); });
  window.addEventListener("load", function () { syncMasthead(); update(); });
  syncMasthead();
  update();

  /* ---------- Publications: search box + filter chips ---------- */
  var LABELS = {
    qec: "QEC", manybody: "Many-body", device: "Devices",
    measurement: "Measurement", entanglement: "Entanglement",
    network: "Networks", protocol: "Protocols", trappedion: "Trapped ions",
    discord: "Quantum discord", metrology: "Metrology",
    biophysics: "Biophysics", graph_states: "Graph states"
  };

  function prettyArea(key) {
    if (LABELS[key]) { return LABELS[key]; }
    var s = key.replace(/[_-]+/g, " ");
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function fold(s) {            /* lower-case, strip accents: "Müller" -> "muller" */
    s = (s || "").toLowerCase();
    return s.normalize ? s.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : s;
  }

  function initPublications() {
    var tools = document.getElementById("pub-tools");
    var list = document.getElementById("pub-list");
    if (!tools || !list) { return; }

    var items = [].slice.call(list.querySelectorAll(".publication-item"));
    var groups = [].slice.call(list.querySelectorAll(".pub-year-group"));
    var sections = [].slice.call(list.querySelectorAll(".pub-section"));
    var searchBox = document.getElementById("pub-search");
    var areaWrap = document.getElementById("pub-area-chips");
    var countEl = document.getElementById("pub-count");
    var clearBtn = document.getElementById("pub-clear");
    var emptyEl = document.getElementById("pub-empty");
    var statusChips = [].slice.call(tools.querySelectorAll("[data-status]"));

    var state = { q: "", status: "all", areas: {} };

    items.forEach(function (it) {
      it._areas = (it.getAttribute("data-areas") || "").split(/\s+/).filter(Boolean);
      it._text = fold(it.getAttribute("data-search"));
    });

    /* Build one chip per area tag found on the page, most frequent first */
    var counts = {};
    items.forEach(function (it) {
      it._areas.forEach(function (a) { counts[a] = (counts[a] || 0) + 1; });
    });
    Object.keys(counts)
      .sort(function (a, b) { return counts[b] - counts[a] || a.localeCompare(b); })
      .forEach(function (a) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "pub-chip";
        b.setAttribute("data-area", a);
        b.setAttribute("aria-pressed", "false");
        b.appendChild(document.createTextNode(prettyArea(a)));
        var n = document.createElement("span");
        n.className = "pub-chip__n";
        n.textContent = counts[a];
        b.appendChild(n);
        areaWrap.appendChild(b);
      });
    if (!Object.keys(counts).length) { areaWrap.style.display = "none"; }

    function apply() {
      var words = fold(state.q).split(/\s+/).filter(Boolean);
      var chosen = Object.keys(state.areas);
      var shown = 0;

      items.forEach(function (it) {
        var ok = (state.status === "all" || it.getAttribute("data-status") === state.status);
        if (ok && chosen.length) {
          ok = chosen.some(function (a) { return it._areas.indexOf(a) !== -1; });
        }
        if (ok && words.length) {
          ok = words.every(function (w) { return it._text.indexOf(w) !== -1; });
        }
        it.hidden = !ok;
        if (ok) { shown++; }
      });

      groups.forEach(function (g) {
        g.hidden = !g.querySelector(".publication-item:not([hidden])");
      });
      sections.forEach(function (s) {
        s.hidden = !s.querySelector(".publication-item:not([hidden])");
      });

      var filtered = !!(words.length || chosen.length || state.status !== "all");
      countEl.textContent = filtered
        ? "Showing " + shown + " of " + items.length + " papers"
        : items.length + " papers";
      clearBtn.hidden = !filtered;
      emptyEl.hidden = shown !== 0;
    }

    searchBox.addEventListener("input", function () {
      state.q = searchBox.value;
      apply();
    });

    statusChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        state.status = chip.getAttribute("data-status");
        statusChips.forEach(function (c) {
          var on = c === chip;
          c.classList.toggle("is-active", on);
          c.setAttribute("aria-pressed", on ? "true" : "false");
        });
        apply();
      });
    });

    areaWrap.addEventListener("click", function (e) {
      var chip = e.target.closest ? e.target.closest("[data-area]") : null;
      if (!chip) { return; }
      var a = chip.getAttribute("data-area");
      if (state.areas[a]) { delete state.areas[a]; } else { state.areas[a] = true; }
      var on = !!state.areas[a];
      chip.classList.toggle("is-active", on);
      chip.setAttribute("aria-pressed", on ? "true" : "false");
      apply();
    });

    clearBtn.addEventListener("click", function () {
      state = { q: "", status: "all", areas: {} };
      searchBox.value = "";
      [].slice.call(tools.querySelectorAll(".pub-chip")).forEach(function (c) {
        var isAll = c.getAttribute("data-status") === "all";
        c.classList.toggle("is-active", isAll);
        c.setAttribute("aria-pressed", isAll ? "true" : "false");
      });
      apply();
      searchBox.focus();
    });

    tools.hidden = false;       /* the filter bar stays hidden if JavaScript is off */
    apply();
  }

  initPublications();
})();
