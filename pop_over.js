function PopOver() {
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: absolute;
    background: white;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    height: 1rem;
    width: 1rem;
  `;

  const sidenote_text = document.querySelectorAll(".sidenote_text")[0];

  const text = document.createElement("p");
  text.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    position: absolute;
  `;
  text.innerHTML = sidenote_text.textContent;

  overlay.appendChild(text);
  document.body.appendChild(overlay);

  document.querySelectorAll(".sidenote").forEach(sup => {
    sup.style.cssText = 'cursor: pointer;';

    //const sup_top = sup.getBoundingClientRect().top;
    //const sup_left = sup.getBoundingClientRect().left; NON FUNZIONA, DÀ LA POSIZIONE RISPETTO ALLO SCHERMO

    console.log(sup_top);

    sup.addEventListener("click", () => {
      overlay.style.display = "flex";
      //overlay.style.left = sup_left + "px";
      //overlay.style.top = sup_top + "px";
    });
  });

  document.addEventListener("click", e => {
    if (!overlay.contains(e.target) && !e.target.closest(".sidenote")) {
      overlay.style.display = "none";
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") overlay.style.display = "none";
  });
}

export function init() {
  PopOver();
}

