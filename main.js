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

const { Search }   = await import("./barra_ricerca/search.js");
const { init: Pulsanti } = await import("./colonna_destra/pulsanti.js");
const { init: Indice }   = await import("./colonna_sinistra_indice/indice.js");
const { init: Mobile }   = await import("./mobile/mobile.js");
const { init: Allarga }  = await import("./image_enlarge.js");
const { init: PopOver }  = await import("./pop_over.js");
const { init: StickyTitles } = await import("./sticky_titles.js") 
const { init: InlineNav }  = await import("./inline_navigation/inline_navigation.js");


Search();
Pulsanti(document);
Indice(document);
Mobile(document);
Allarga();
PopOver();
InlineNav();
StickyTitles();
