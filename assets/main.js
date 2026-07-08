function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

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
    import("./js/barra_ricerca.js"),
    import("./js/colonna_destra.js"),
    import("./js/indice.js"),
    import("./js/mobile.js"),
    import("./js/image_enlarge.js"),
    import("./js/pop_over.js"),
    import("./js/sticky_titles.js"),
    import("./js/inline_navigation.js"),
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
