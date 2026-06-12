from pathlib import Path
import os
import re
from bs4 import BeautifulSoup
from bs4.formatter import HTMLFormatter

HTMLS_PATH = Path("./pages")
MAIN_PATH = Path("./")
FORMATTER = HTMLFormatter(indent=2)

ARTICLE_RE = re.compile(r"<article\b[^>]*>.*?</article>", re.DOTALL | re.IGNORECASE)
TITLE_RE = re.compile(r"<title\b[^>]*>(.*?)</title>", re.DOTALL | re.IGNORECASE)


def extract_article_raw(html: str) -> str:
    match = ARTICLE_RE.search(html)
    if not match:
        raise ValueError("Nessun tag <article> trovato")
    return match.group(0)


def extract_title_raw(html: str) -> str:
    match = TITLE_RE.search(html)
    return match.group(1) if match else ""


def sync_pages():
    index_path = MAIN_PATH / "index.html"
    index_html = index_path.read_text(encoding="utf-8")

    for page in HTMLS_PATH.rglob("*.html"):
        if os.path.getsize(page) == 0:
            page.write_text(index_html, encoding="utf-8")

        page_html = page.read_text(encoding="utf-8")
        page_article_raw = extract_article_raw(page_html)
        page_title = extract_title_raw(page_html)

        # Sostituisce il title nell'index (testualmente, niente parser)
        new_html = TITLE_RE.sub(
            lambda m: m.group(0).replace(m.group(1), page_title, 1),
            index_html,
            count=1,
        )

        # Sostituisce l'article nell'index con quello originale della pagina,
        # senza passare per BeautifulSoup
        new_html = ARTICLE_RE.sub(lambda m: page_article_raw, new_html, count=1)

        if page_html != new_html:
            page.write_text(new_html, encoding="utf-8")
            print("✔ sincronizzato:", page.name)
        else:
            print("• già aggiornato:", page.name)


if __name__ == "__main__":
    sync_pages()