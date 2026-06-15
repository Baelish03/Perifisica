window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
  },
  svg: {
    fontCache: 'global'
  },
  startup: {
    ready() {
      MathJax.startup.defaultReady();
    }
  }
};


// Caricamento dinamico MathJax
function loadMathJax() {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.async = true;
    script.onload = resolve;
    document.head.appendChild(script);
  });
}


import { includeHTML } from "./include_html.js";
await includeHTML();

// Carica MathJax e renderizza le formule già presenti nel DOM
await loadMathJax();
await MathJax.typesetPromise();

const [Search, Pulsanti, Indice, Mobile, Allarga, PopOver, InlineNav, StickyTitles] = 
  await Promise.all([
    import("./barra_ricerca/search.js"),
    import("./colonna_destra/pulsanti.js"),
    import("./colonna_sinistra_indice/indice.js"),
    import("./mobile/mobile.js"),
    import("./image_enlarge.js"),
    import("./pop_over.js"),
    import("./sticky_titles.js"),
    import("./inline_navigation/inline_navigation.js")]);

Search.init();
Pulsanti.init(document);
Indice.init(document);
Mobile.init(document);
Allarga.init();
PopOver.init();
InlineNav.init();
StickyTitles.init();

Prism.highlightAll();
