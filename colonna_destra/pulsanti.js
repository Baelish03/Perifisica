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
    document.querySelector("#StandardContrast").checked = true;
  }

  if (dimensione === "big") {
    BigText();
    document.querySelector("#BigText").checked = true;
  }
  else {
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

function BigText() {
  localStorage.setItem("dimensione", "big");

  document.body.style.fontSize = "16pt";
}

function NormalText() {
  localStorage.setItem("dimensione", "");

  document.body.style.fontSize = "13pt";
}

export function init(root) {
  applyPreferences();

  document.querySelector("#contenuto_destra").style.maxHeight = window.innerHeight + "px";

  const ODbutton = root.querySelector("#OpenDyslexic");
  ODbutton?.addEventListener("click", OpenDyslexic);

  const SFbutton = root.querySelector("#StandardFont");
  SFbutton?.addEventListener("click", StandardFont);

  const HCbutton = root.querySelector("#HighContrast");
  HCbutton?.addEventListener("click", HighContrast);

  const SCbutton = root.querySelector("#StandardContrast");
  SCbutton?.addEventListener("click", StandardContrast);

  const BTbutton = root.querySelector("#BigText");
  BTbutton?.addEventListener("click", BigText);

  const NTbutton = root.querySelector("#NormalText");
  NTbutton?.addEventListener("click", NormalText);
}