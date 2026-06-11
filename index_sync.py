from pathlib import Path
import os
from bs4 import BeautifulSoup
from bs4.formatter import HTMLFormatter
import copy

HTMLS_PATH = Path("./pages")
MAIN_PATH = Path("./")
FORMATTER = HTMLFormatter(indent=2)

def load_soup(path: Path) -> BeautifulSoup:
    return BeautifulSoup(path.read_text(encoding="utf-8"), "html5lib")

def sync_pages():
    index_path = MAIN_PATH / "index.html"
    index_html = index_path.read_text(encoding="utf-8")
    index_soup = BeautifulSoup(index_html, "html5lib")

    for page in HTMLS_PATH.rglob("*.html"):
        if os.path.getsize(page) == 0:
            page.write_text(str(index_soup))

        page_soup = load_soup(page)

        new_title = page_soup.title.string

        # Copia profonda dei figli di <article>, senza passare per stringa
        new_article_children = [copy.copy(child) for child in page_soup.article.children]

        merged = BeautifulSoup(index_html, "html5lib")
        merged.title.string = new_title
        merged.article.clear()
        for child in new_article_children:
            merged.article.append(child)

        # str() + formatter: indenta strutturalmente senza rompere il testo inline
        new_html = merged.decode(formatter=FORMATTER)

        if page.read_text(encoding="utf-8") != new_html:
            page.write_text(new_html, encoding="utf-8")
            print("✔ sincronizzato:", page.name)
        else:
            print("• già aggiornato:", page.name)

if __name__ == "__main__":
    sync_pages()