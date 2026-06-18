function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

import { includeHTML } from "./include_html.js";
await includeHTML();

// KaTeX: caricamento sequenziale in parallelo col Promise.all
const katexReady = loadScript('/katex/katex.min.js')
  .then(() => loadScript('/katex/contrib/auto-render.min.js'))
  .then(() => renderMathInElement(document.body, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true }
    ]
  }));

const [Search, Pulsanti, Indice, Mobile, Allarga, PopOver, InlineNav, StickyTitles] =
  await Promise.all([
    import("./barra_ricerca/search.js"),
    import("./colonna_destra/pulsanti.js"),
    import("./colonna_sinistra_indice/indice.js"),
    import("./mobile/mobile.js"),
    import("./image_enlarge.js"),
    import("./pop_over.js"),
    import("./sticky_titles.js"),
    import("./inline_navigation/inline_navigation.js"),
    katexReady]);

Search.init();
Pulsanti.init(document);
Indice.init(document);
Mobile.init(document);
Allarga.init();
PopOver.init();
InlineNav.init();
StickyTitles.init();

Prism.highlightAll();
