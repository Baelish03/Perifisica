export function Search(input, results) {
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
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  Search(input, results);

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

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      results.classList.remove("open");
    }
  });
}
