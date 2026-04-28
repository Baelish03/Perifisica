function StickyTitles() {
  const article = document.querySelector('article');
  if (!article) {
    return;
  }

  const headings = article.querySelectorAll('h1, h2, h3');

  headings.forEach(heading => {
    const section = document.createElement('section');
    heading.parentNode.insertBefore(section, heading);
    section.appendChild(heading);

    while (
      section.nextSibling &&
      !['H1', 'H2', 'H3'].includes(section.nextSibling.nodeName)
    ) {
      section.appendChild(section.nextSibling);
    }
  });
}

export function init() {
  StickyTitles();
}