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

function ToggleCssTitle() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting && (entry.boundingClientRect.top >= 0 || entry.boundingClientRect.top <= 5)) {
          console.log("stuck");
          entry.target.classList.add('is-stuck');
        } else {
          console.log("unstack");
          entry.target.classList.remove('is-stuck');
        }
      });
    },
    { rootMargin: '-1px 0px 0px 0px', threshold: 1 }
  );

  const article = document.querySelector('article');
  article.querySelectorAll('h1, h2, h3').forEach(h => observer.observe(h));
}

export function init() {
  StickyTitles();
  ToggleCssTitle();
}