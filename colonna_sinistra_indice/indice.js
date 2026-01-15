function Chevron(contentId, chevronId) {
  const content = document.querySelector("#" + contentId);
  const chevron = document.querySelector("#" + chevronId);

  console.log(content);

  const isOpen = content.style.maxHeight;
  console.log(isOpen);
  if (isOpen) {
    content.style.maxHeight = null;
    chevron.style.transform = "rotate(0deg)";
    chevron.style.setProperty("left", "0rem");
    chevron.style.setProperty("top", "-.5rem");
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    chevron.style.transform = "rotate(90deg)";
    chevron.style.setProperty("left", ".5rem");
    chevron.style.setProperty("top", "0.5px");
  }
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function OpenTeoria() {
  document.getElementById("teoria-button").classList.toggle("show");
  Chevron("teoria-content", "teoria-chevron");
}

function OpenEsperimenti() {
  document.getElementById("esperimenti-button").classList.toggle("show");
  Chevron("esperimenti-content", "esperimenti-chevron");
}

function OpenLatex() {
  document.getElementById("latex-button").classList.toggle("show");
  Chevron("latex-content", "latex-chevron");
}

/*
function Chevron() {
  document.querySelectorAll(".accordion").forEach(accordion => {
    const button = accordion.querySelector(".dropbutton");
    const content = accordion.querySelector(".dropdown-content");
    const chevron = accordion.querySelector(".chevron");

    button.addEventListener("click", () => {
      const isOpen = content.style.maxHeight;
      if (isOpen) {
        content.style.maxHeight = null;
        chevron.style.transform = "rotate(0deg)";
        chevron.style.setProperty("left", "0rem");
        chevron.style.setProperty("top", "-.5rem");

      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        chevron.style.transform = "rotate(90deg)";
        chevron.style.setProperty("left", ".5rem");
        chevron.style.setProperty("top", "0.5px");
      }
    });
  });
}*/

export function init(root) {
  const teoria = root.querySelector("#teoria-button");
  teoria?.addEventListener("click", OpenTeoria);

  const esperimenti = root.querySelector("#esperimenti-button");
  esperimenti?.addEventListener("click", OpenEsperimenti);

  const latex = root.querySelector("#latex-button");
  latex?.addEventListener("click", OpenLatex);
}