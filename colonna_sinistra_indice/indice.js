function Chevron(contentId, chevronId) {
  const content = document.getElementById(contentId);
  const chevron = document.getElementById(chevronId);

  const isOpen = content.classList.contains("show");
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

function LunghezzaIndice() {
  const top_titolo = document.querySelectorAll(".h1_indice")[0].getBoundingClientRect().top;
  const bottom_titolo = document.querySelectorAll(".h1_indice")[0].getBoundingClientRect().bottom;
  const margin_top = parseFloat(getComputedStyle(document.querySelectorAll(".h1_indice")[0]).marginTop, 10);
  const margin_bottom = parseFloat(getComputedStyle(document.querySelectorAll(".h1_indice")[0]).marginBottom, 10);

  const height = (bottom_titolo - top_titolo) + margin_top + margin_bottom;
  document.querySelector("#dropdown").style.height = `calc(100vh - ${height}px - 1rem)`;
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

      const content = link.closest('.dropdown-content');
      const button = content.previousElementSibling;   // il <button> che lo precede
      const chevron = button.querySelector('.chevron');
      content.classList.toggle("show");
      Chevron(content.id, chevron.id);
    }
  });
}


export function init(root) {
  ColoraElementoAttuale();
  if (window.innerWidth > 992) {
    LunghezzaIndice();
  }

  root.querySelector("#button1")?.addEventListener("click", Open1);

  root.querySelector("#button2")?.addEventListener("click", Open2);

  root.querySelector("#latex-button")?.addEventListener("click", OpenLatex);
}