function toggleSection(button) {
  const content = button.nextElementSibling; // il div .dropdown-content dopo il button
  const chevron = button.querySelector('.chevron');

  const isOpen = content.classList.contains("show");
  content.classList.toggle("show");

  chevron.style.transform = isOpen
    ? "rotate(0deg) translate(0rem, 0px)"
    : "rotate(90deg) translate(+.4rem, 0px)";
}

function ColoraElementoAttuale() {
  const paginaCorrente = location.pathname;

  document.querySelectorAll(".dropdown-content a").forEach(link => {
    if (link.getAttribute("href") === paginaCorrente) {
      link.classList.add("attivo");

      const content = link.closest('.dropdown-content');
      const button = content.previousElementSibling;
      const chevron = button.querySelector('.chevron');

      content.classList.add("show");
      chevron.style.transform = "rotate(90deg) translate(+.4rem, 0px)";
    }
  });
}

function LunghezzaIndice() {
  const top_titolo = document.querySelectorAll(".h1_indice")[0].getBoundingClientRect().top;
  const bottom_titolo = document.querySelectorAll(".h1_indice")[0].getBoundingClientRect().bottom;
  const margin_top = parseFloat(getComputedStyle(document.querySelectorAll(".h1_indice")[0]).marginTop, 10);
  const margin_bottom = parseFloat(getComputedStyle(document.querySelectorAll(".h1_indice")[0]).marginBottom, 10);

  const height = (bottom_titolo - top_titolo) + margin_top + margin_bottom;
  document.querySelector("#dropdown").style.height = `calc(100vh - ${height}px - 1rem)`;
}

export function init(root) {
  ColoraElementoAttuale();

  if (window.innerWidth > 992) {
    LunghezzaIndice();
  }

  root.querySelectorAll(".dropbutton").forEach(button => {
    button.addEventListener("click", () => toggleSection(button));
  });
}