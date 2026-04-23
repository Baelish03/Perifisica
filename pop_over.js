function PopOver() {
  var text_css =
    `height : auto;
      width : max-content;
      font-size : 12px;
      max-width : 25vw;
      min-width : 15rem; 
      display: inline-block;
      position: absolute;
      z-index: 1;
      cursor: initial;
      border: 2px solid var(--primary);
      border-radius: 10px;
      box-sizing: border-box;
      box-shadow: 0px 8px 16px 0px var(--text);
      background-color: var(--search-background);
      color: var(--text);
      bottom: 0;
      right: 0;
      margin: 0px 0px 1.5em 0px;
      padding: 5px 10px;
      `;

  let currentOpen = null; // span del popover attualmente visibile
  let supOpen = null; // sup del popover attualmente colorato

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
        supOpen.style.color = "var(--text)"; // decolora il sup
      }

      if (span.style.display === "none") {
        span.style.cssText = text_css; // apri: applica gli stili del popover
        sup.style.color = "var(--primary)"; // colora il sup aperto attualmente 
        currentOpen = span;
        supOpen = sup;

        // controlla se il popover esce a sinistra e correggi
        var rect = span.getBoundingClientRect();
        if (rect.left < 5) {
          span.style.right = "auto";
          span.style.left = "0";
        }

        // controlla se il popover esce a destra dopo la correzione e mettilo al centro
        rect = span.getBoundingClientRect(); // aggiorna il rettangolo
        if (rect.right > window.innerWidth - 5) {
          span.style.right = "auto";
          span.style.left = "-7rem";
        }

      }
      else {
        span.style.display = "none"; // chiudi: toggle
        sup.style.color = "var(--text)"; // decolora il sup chiuso 
        currentOpen = null;
        supOpen = null;
      }
    });

    // chiudi il popover cliccando fuori
    /*document.addEventListener("click", e => {
      if (!span.contains(e.target) && !e.target.closest(".sidenote")) {
        span.style.display = "none";
        sup.style.color = "var(--text)"; // decolora il sup chiuso 
        if (currentOpen === span) {
          currentOpen = null;
          supOpen = null;
        }
      }
    });

    // chiudi il popover con Escape
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        span.style.display = "none";
        sup.style.color = "var(--text)"; // decolora il sup chiuso 
        if (currentOpen === span) {
          currentOpen = null;
          supOpen = null;
        }
      }
    });
  });*/


  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".sidenote")) {
      if (currentOpen) {
        currentOpen.style.display = "none";
        supOpen.style.color = "var(--text)";
        currentOpen = null;
        supOpen = null;
      }
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && currentOpen) {
      currentOpen.style.display = "none";
      supOpen.style.color = "var(--text)";
      currentOpen = null;
      supOpen = null;
    }
  });

}

export function init() {
  PopOver();
}

