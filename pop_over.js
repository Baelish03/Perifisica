function PopOver() {
  var text_css =
    `height : auto;
      width : auto;
      max-width : 15vw;
      display: inline-block;
      position: absolute;
      background: var(--background-color);
      z-index: 9999;
      bottom: 1em;
      cursor: initial;
      `;

      // fai un bel box

  document.querySelectorAll(".sidenote").forEach(sup => {
    sup.style.cssText =
      `cursor: pointer;
      position: relative`;

    const span = sup.children[0]

    sup.addEventListener("click", (e) => {
      e.stopPropagation();
      if (span.style.display === "none") {
        span.style.cssText = text_css;
      }
      else {
        span.style.display = "none";
      }
    });

    document.addEventListener("click", e => {
      if (!span.contains(e.target) && !e.target.closest(".sidenote")) {
        span.style.display = "none";
      }
    });

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") span.style.display = "none";
    });
  });

}

export function init() {
  PopOver();
}

