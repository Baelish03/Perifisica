function applyPreferences() {
  const font = localStorage.getItem("font");
  const contrasto = localStorage.getItem("contrasto");
  const dimensione = localStorage.getItem("dimensione");

  if (font === "OpenDyslexic") {
    OpenDyslexic();
    document.querySelector("#OpenDyslexic").checked = true;
  }
  else {
    document.querySelector("#StandardFont").checked = true;
  }

  if (contrasto === "high") {
    HighContrast();
    document.querySelector("#HighContrast").checked = true;
  }
  else {
    StandardContrast();
    document.querySelector("#StandardContrast").checked = true;
  }

  if (dimensione === "big") {
    BigText();
    document.querySelector("#BigText").checked = true;
  }
  else if (dimensione === "huge") {
    HugeText();
    document.querySelector("#HugeText").checked = true;
  }
  else {
    NormalText();
    document.querySelector("#NormalText").checked = true;
  }
}

function OpenDyslexic() {
  localStorage.setItem("font", "OpenDyslexic");
  document.body.style.fontFamily = 'OpenDyslexic, serif';
}

function StandardFont() {
  localStorage.setItem("font", "");
  document.body.style.fontFamily = 'Inter, sans-serif';
}

function HighContrast() {
  localStorage.setItem("contrasto", "high");

  document.querySelector(':root').style.setProperty('--text', '#ffffff');
  document.querySelector(':root').style.setProperty('--primary', '#00ffff');
  document.querySelector(':root').style.setProperty('--link', '#ffff00');
  document.querySelector(':root').style.setProperty('--background', '#1f1f1f');
  document.querySelector(':root').style.setProperty('--button-background', '#ffffff');
  document.querySelector(':root').style.setProperty('--search-background', '#1f1f1f');
}

function StandardContrast() {
  localStorage.setItem("contrasto", "");

  document.querySelector(':root').style.setProperty('--text', '#1f1f1f');
  document.querySelector(':root').style.setProperty('--primary', '#a82596');
  document.querySelector(':root').style.setProperty('--link', '#06608f');
  document.querySelector(':root').style.setProperty('--background', '#EEF3F6');
  document.querySelector(':root').style.setProperty('--button-background', '#1f1f1f');
  document.querySelector(':root').style.setProperty('--search-background', '#ffffff');

}

function HugeText() {
  localStorage.setItem("dimensione", "huge");
  document.documentElement.style.fontSize = "20px";
}

function BigText() {
  localStorage.setItem("dimensione", "big");
  document.documentElement.style.fontSize = "18px";
}

function NormalText() {
  localStorage.setItem("dimensione", "");
  document.documentElement.style.fontSize = "16px";
}


function LunghezzaAccessibilita() {
  const top_titolo = document.querySelectorAll(".h1_indice")[1].getBoundingClientRect().top;
  const bottom_titolo = document.querySelectorAll(".h1_indice")[1].getBoundingClientRect().bottom;
  const margin_top = parseFloat(getComputedStyle(document.querySelectorAll(".h1_indice")[1]).marginTop, 10);
  const margin_bottom = parseFloat(getComputedStyle(document.querySelectorAll(".h1_indice")[1]).marginBottom, 10);

  const height = (bottom_titolo - top_titolo) + margin_top + margin_bottom;
  document.querySelector("#contenuto_destra").style.height = `calc(100vh - 1rem - ${height}px)`;
}

export function init(root) {
  applyPreferences();
  LunghezzaAccessibilita();

  root.querySelector("#OpenDyslexic")?.addEventListener("click", OpenDyslexic);
  root.querySelector("#StandardFont")?.addEventListener("click", StandardFont);

  root.querySelector("#HighContrast")?.addEventListener("click", HighContrast);
  root.querySelector("#StandardContrast")?.addEventListener("click", StandardContrast);

  root.querySelector("#HugeText")?.addEventListener("click", HugeText);
  root.querySelector("#BigText")?.addEventListener("click", BigText);
  root.querySelector("#NormalText")?.addEventListener("click", NormalText);
}