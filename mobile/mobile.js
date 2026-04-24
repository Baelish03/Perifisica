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
});

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.getElementById("indice").classList.remove("indice_aperto");
      document.getElementById("dropdown").classList.remove("dropdown_aperto");
      document.getElementById("sidebar_right").classList.remove("right_aperta");
    }
  });


function posiziona() {
  let lastScrollY = window.scrollY;
  const bottone = document.querySelector('.apri-indice-mobile');
  const colonna = document.querySelector('.left');
  const indice = document.querySelector('.indice');
  //const dropdown = document.querySelector('.dropdown')

  const titolo = document.querySelector('.h1_indice');

  const rect = bottone.getBoundingClientRect();
  //const rect_title_bot = dropdown.getBoundingClientRect().bottom;
  const scrollingDown = window.scrollY > lastScrollY;

  let top;
  if (rect.bottom <= 0) {
    // bottone uscito sopra: incollata in cima
    top = 0;
  } else if (scrollingDown && rect.bottom > window.innerHeight) {
    // bottone sotto la viewport: incollata in fondo? non dovrebbe succedere
    top = 0;
  } else {
    top = rect.bottom;
  }

  colonna.style.top = `${top}px`;
  colonna.style.height = `calc(100dvh - ${top}px)`;
  indice.style.height = `calc(100dvh - ${top}px)`;
  //dropdown.style.height = `calc(100dvh - ${rect_title_bot}px)`;
}

export function init(root) {
  root.querySelector("#apri-indice-mobile")?.addEventListener("click", ApriIndice);

  root.querySelector("#apri-accessibilità-mobile")?.addEventListener("click", ApriAccessibilità);

  /*if (window.innerWidth < 992) {
    posiziona();
    window.addEventListener('resize', posiziona);
    window.addEventListener('scroll', posiziona), { passive: true, capture: true };
  }*/
}
