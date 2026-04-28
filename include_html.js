export async function includeHTML() {
    const elements = [...document.querySelectorAll("[include-html]")];

    await Promise.all(
        elements.map(async (el) => {
            const file = el.getAttribute("include-html");
            if (!file) return;

            const res = await fetch(file);
            if (!res.ok) console.error(`include_html: impossibile caricare ${file} (${res.status})`);
            el.innerHTML = res.ok
                ? await res.text()
                : "Page not found.";

            el.removeAttribute("include-html");
        })
    );
}