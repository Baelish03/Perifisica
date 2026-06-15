function setActive(index, results) {
  const items = results.querySelectorAll(".result");
  items.forEach(el => el.classList.remove("active"));

  if (index < 0) {
    return -1;
  }

  if (index >= items.length) index = items.length - 1;

  const el = items[index];
  el.classList.add("active");
  el.scrollIntoView({ block: "nearest" });
  return index;
}

function Search(input, results) {
  let pagefind;

  async function loadPagefind() {
    if (!pagefind) {
      pagefind = await import("/pagefind/pagefind.js");
      await pagefind.init();
    }
  }

  input.addEventListener("input", async () => {
    const query = input.value.trim();
    results.innerHTML = "";

    if (query.length < 1) {
      results.classList.remove("open");
      return;
    }

    await loadPagefind();
    const search = await pagefind.search(query);

    if (search.results.length === 0) {
      results.classList.remove("open");
      return;
    }

    const items = await Promise.all(
      search.results.slice(0, 10).map(r => r.data())
    );

    items.forEach(p => {
      const div = document.createElement("div");
      div.className = "result";
      div.innerHTML = `
        <a href="${p.url}">
          <strong>${p.meta.title}</strong><br>
          <small>${p.excerpt}</small>
        </a>
      `;
      results.appendChild(div);
    });

    results.classList.add("open");
  });
}


export function init() {
  let activeIndex = -1;
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");

  Search(input, results);

  input.addEventListener("keydown", e => {
    const items = results.querySelectorAll(".result");
    if (items.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(activeIndex + 1, results);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(activeIndex - 1, results);
    } else if (e.key === "Enter") {
      if (activeIndex >= 0) {
        e.preventDefault();
        const link = items[activeIndex].querySelector("a");
        if (link) link.click();
      }
    } else if (e.key === "Escape") {
      results.classList.remove("open");
      activeIndex = setActive(-1, results);
    }
  });

  document.addEventListener("click", e => {
    if (e.target.closest(".search-box")) {
      if (input.value.trim().length >= 1) {
        results.classList.add("open");
      } else {
        results.classList.remove("open");
      }
    }
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".search-box")) {
      results.classList.remove("open");
    }
  });
}
