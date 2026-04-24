function ApriIndice() {
  document.getElementById("indice").classList.toggle("indice_aperto");
  document.getElementById("dropdown").classList.toggle("dropdown_aperto");
}

function ApriAccessibilità() {
  document.getElementById("sidebar_right").classList.toggle("right_aperta");
}

document.addEventListener("click", e => {
  if (!e.target.closest("#indice") && !e.target.closest("#apri-indice-mobile")) {
    document.getElementById("indice").classList.remove("indice_aperto");
    document.getElementById("dropdown").classList.remove("dropdown_aperto");
  }
  if (!e.target.closest("#sidebar_right") && !e.target.closest("#apri-accessibilità-mobile")) {
    document.getElementById("sidebar_right").classList.remove("right_aperta");
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document.getElementById("indice").classList.remove("indice_aperto");
    document.getElementById("dropdown").classList.remove("dropdown_aperto");
    document.getElementById("sidebar_right").classList.remove("right_aperta");
  }
});

function AltezzaDropdown() {
  const bottom_titolo = document.querySelectorAll(".h1_indice")[0].getBoundingClientRect().bottom;
  document.querySelector("#dropdown").style.height = `calc(100vh - 1rem - ${bottom_titolo}px)`
}

function AltezzaContenutoDestra() {
  const bottom_titolo = document.querySelectorAll(".h1_indice")[1].getBoundingClientRect().bottom;
  document.querySelector("#contenuto_destra").style.height = `calc(100vh - 1rem - 15px - ${bottom_titolo}px)`
}

export function init(root) {
  root.querySelector("#apri-indice-mobile")?.addEventListener("click", ApriIndice);
  root.querySelector("#apri-accessibilità-mobile")?.addEventListener("click", ApriAccessibilità);

  if (window.innerWidth < 992) {
    AltezzaDropdown();
    AltezzaContenutoDestra();
  }
}
