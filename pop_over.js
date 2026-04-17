function PopOver() {
  var text_css =
    `height : auto;
      width : max-content;
      font-size : 12px;
      max-width : 25vw;
      display: inline-block;
      position: absolute;
      z-index: 1;
      cursor: initial;
      border: 2px solid var(--primary);
      border-radius: 10px;
      box-sizing: border-box;
      background-color: var(--search-background);
      align-items: center;
      justify-content: center;
      transition: width 0.5s ease-in-out;
      color: var(--text);
      bottom: 0;
      right: 0;
      margin: 0px 0px 1.5em 0px;
      padding: 5px 10px;
      `;

  let currentOpen = null; // span del popover attualmente visibile

  document.querySelectorAll(".sidenote").forEach(sup => {
    sup.style.cssText =
      `cursor: pointer;
      position: relative`;
    const span = sup.children[0] // il popover è il primo figlio del sup

    sup.addEventListener("click", (e) => {
      e.stopPropagation(); // evita che il click raggiunga document e chiuda subito il popover

      // se c'è un altro popover aperto, chiudilo
      if (currentOpen && currentOpen !== span) {
        currentOpen.style.display = "none"; // chiudi il precedente
      }

      if (span.style.display === "none") {
        span.style.cssText = text_css; // apri: applica gli stili del popover
        currentOpen = span;
      } else {
        span.style.display = "none"; // chiudi: toggle
        currentOpen = null;
      }
    });

    // chiudi il popover cliccando fuori
    document.addEventListener("click", e => {
      if (!span.contains(e.target) && !e.target.closest(".sidenote")) {
        span.style.display = "none";
        if (currentOpen === span) currentOpen = null;
      }
    });

    // chiudi il popover con Escape
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        span.style.display = "none";
        if (currentOpen === span) currentOpen = null;
      }
    });
  });
}

export function init() {
  PopOver();
}

