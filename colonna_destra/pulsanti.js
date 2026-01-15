function OpenDyslexicFunc() {
  document.querySelector('body').style.fontFamily = 'OpenDyslexic, serif';
  /*const titles = ['h1', 'h2', 'h3', 'h4'];
  for (let x = 0; x < titles.length; i++) {
    const elements = document.querySelectorAll(titles[i]);
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.fontFamily = 'OpenDyslexic, serif';
    }
  }*/
}

function StandardFont() {
  document.querySelector('body').style.fontFamily = '';
  /*const titles = ['h1', 'h2', 'h3', 'h4'];
  for (let x in titles) {
    const elements = document.querySelectorAll(titles[x]);
    for (let i in elements) {
      elements[i].style.fontFamily = 'Inter, sans-serif';
    }
  }*/
}
  /*document.querySelectorAll('h1').style.fontFamily = 'Inter, sans-serif';
  document.querySelectorAll('h2').style.fontFamily = 'Inter, sans-serif';
  document.querySelectorAll('h3').style.fontFamily = 'Inter, sans-serif';
  document.querySelectorAll('h4').style.fontFamily = 'Inter, sans-serif';*/

function HighContrast(){
  document.querySelector(':root').style.setProperty('--text', '#ffffff');
  document.querySelector(':root').style.setProperty('--primary', '#00ffff');
  document.querySelector(':root').style.setProperty('--link', '#ffff00');
  document.querySelector(':root').style.setProperty('--background', '#1f1f1f');
  document.querySelector(':root').style.setProperty('--button-background', '#ffffff');
}

function StandardContrast(){
  document.querySelector(':root').style.setProperty('--text', '#1f1f1f');
  document.querySelector(':root').style.setProperty('--primary', '#70193D');
  document.querySelector(':root').style.setProperty('--link', '#191970');
  document.querySelector(':root').style.setProperty('--background', '#1919704F');
  document.querySelector(':root').style.setProperty('--button-background', '#000000');
}

function BigText(){
  document.querySelector('body').style.fontSize = "16pt";
}

function NormalText(){
  document.querySelector('body').style.fontSize = "13pt";
}