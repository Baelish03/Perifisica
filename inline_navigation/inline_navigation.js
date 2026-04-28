function toggleTOC() {
  const body = document.getElementById('toc-body');
  const chevron = document.getElementById('chevron');
  body.classList.toggle('open');
  chevron.classList.toggle('open');
}

export function init() {
  toggleTOC();
}
