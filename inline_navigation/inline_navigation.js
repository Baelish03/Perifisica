  function slugify(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')   // rimuove caratteri speciali
      .replace(/\s+/g, '-');       // spazi → trattini
  }

function buildTOC() {
  const headings = document.querySelectorAll('h2, h3, h4');
  const list = document.getElementById('toc-list');
  const count = document.getElementById('toc-count');
  let h2counter = 0, h3counter = 0, h4counter = 0;

  headings.forEach(el => {
    // assegna id automatico se non ce l'ha già
    if (!el.id) {
      el.id = slugify(el.textContent);
    }

    const tag = el.tagName.toLowerCase();
    const li = document.createElement('li');
    li.classList.add('toc-' + tag);

    // numerazione gerarchica
    let prefix = '';
    if (tag === 'h2') {
      h2counter++; h3counter = 0; h4counter = 0;
      prefix = h2counter + ' — ';
    } else if (tag === 'h3') {
      h3counter++; h4counter = 0;
      prefix = h2counter + '.' + h3counter + ' ';
    } else if (tag === 'h4') {
      h4counter++;
      prefix = h2counter + '.' + h3counter + '.' + h4counter + ' ';
    }

    const a = document.createElement('a');
    a.href = '#' + el.id;
    a.textContent = prefix + el.textContent;
    li.appendChild(a);
    list.appendChild(li);
  });

  count.textContent = headings.length + ' sezioni';

  // nascondi il box se non ci sono heading
  if (headings.length === 0) {
    document.getElementById('toc-box').style.display = 'none';
  }
}

export function init() {
  // l'apertura del TOC è gestita da indice.js
  document.addEventListener('DOMContentLoaded', buildTOC);
}
