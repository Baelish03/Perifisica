function Chevron(contentId, chevronId) {
  const content = document.getElementById(contentId);
  const chevron = document.getElementById(chevronId);

  const isOpen = content.classList.contains("show");
  console.log(isOpen);
  if (!isOpen) {
    chevron.style.transform = "rotate(0deg) translate(0rem, 0px)";
  } else {
    chevron.style.transform = "rotate(90deg) translate(+.4rem, 0px)";
  }
}

function Open1() {
  document.getElementById("content1").classList.toggle("show");
  Chevron("content1", "chevron1");
}

function Open2() {
  document.getElementById("content2").classList.toggle("show");
  Chevron("content2", "chevron2");
}

function OpenLatex() {
  document.getElementById("latex-content").classList.toggle("show");
  Chevron("latex-content", "latex-chevron");
}

/*
Rende l'indice della stessa lunghezza del corpo centrale della pagina.
Se il corpo è più corto della colonna destra, l'indice si uniforma alla 
  colonna destra.
*/
function LunghezzaIndice() {
  const middle = document.getElementsByClassName("middle")[0];
  const right = document.getElementsByClassName("right")[0];
  const dropdown = document.getElementById("dropdown");

  const middle_bottom = middle.getBoundingClientRect().bottom + window.scrollY;
  const right_bottom = right.getBoundingClientRect().bottom + window.scrollY;
  const dropdown_top = dropdown.getBoundingClientRect().top + window.scrollY;

  const height = Math.max(middle_bottom, right_bottom) - dropdown_top;
  dropdown.style.maxHeight = height + "px";
}

function ColoraElementoAttuale() {
  const paginaCorrente = location.pathname;

  document.querySelectorAll(".dropdown-content a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href) {
      return;
    }
    if (href === paginaCorrente) {
      link.classList.add("attivo");
    }
  });
}

export function init(root) {
  ColoraElementoAttuale();
  if (window.innerWidth > 992) {
    LunghezzaIndice();
  }
  else {
    document.getElementById("dropdown").style.maxHeight = "unset";
  }

  root.querySelector("#button1")?.addEventListener("click", Open1);

  root.querySelector("#button2")?.addEventListener("click", Open2);

  root.querySelector("#latex-button")?.addEventListener("click", OpenLatex);
}