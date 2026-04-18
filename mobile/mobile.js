function ApriIndice() {
  const indice = document.getElementById("indice");
  indice.classList.toggle("indice_aperto");

  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("dropdown_aperto");

  document.addEventListener("click", e => {
    if (!e.target.closest("#indice") && !e.target.closest("#apri-indice-mobile")) {
      indice.classList.remove("indice_aperto");
      dropdown.classList.remove("dropdown_aperto");
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      indice.classList.remove("indice_aperto");
      dropdown.classList.remove("dropdown_aperto");
    }
  });
}


function ApriAccessibilità() {
  const sidebar_right = document.getElementById("sidebar_right");
  sidebar_right.classList.toggle("right_aperta");

  document.addEventListener("click", e => {
    if (!e.target.closest("#sidebar_right") && !e.target.closest("#apri-accessibilità-mobile")) {
      sidebar_right.classList.remove("right_aperta");
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      sidebar_right.classList.remove("right_aperta");
    }
  });
}

export function init(root) {
  const AIMbutton = root.querySelector("#apri-indice-mobile");
  AIMbutton?.addEventListener("click", ApriIndice);

  const AAMbutton = root.querySelector("#apri-accessibilità-mobile");
  AAMbutton?.addEventListener("click", ApriAccessibilità);
}