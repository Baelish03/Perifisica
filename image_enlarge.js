function AllargaImmagine() {
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    background: black;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  `;

  const cross = document.createElement("button");
  cross.innerHTML = "&#x2715;";
  cross.style.cssText = `
    position: absolute;
    right: 10px;
    top: 10px;

    background: transparent;
    color: var(--primary);
    border-color: transparent;
    font-size: xxx-large;

    cursor: pointer;
  `;

  const img = document.createElement("img");
  img.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    position: absolute;
  `;

  overlay.appendChild(img);
  overlay.appendChild(cross);
  document.body.appendChild(overlay);

  document.querySelectorAll("img").forEach(i => {
    const img_id = i.getAttribute('id');
    if (img_id === 'foto_logo') {
      return
    }
    else {
      i.addEventListener("click", () => {
        img.src = i.src;
        overlay.style.display = "flex";
      });
    };
  });


  cross.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  /*overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });*/

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") overlay.style.display = "none";
  });
}

export function init() {
  AllargaImmagine();
}

