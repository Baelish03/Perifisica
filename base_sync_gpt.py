from pathlib import Path
from bs4 import BeautifulSoup


HTMLS_PATH = Path("./pages")


def load_soup(path: Path) -> BeautifulSoup:
    return BeautifulSoup(path.read_text(encoding="utf-8"), "html.parser")


def sync_pages():
    index_path = HTMLS_PATH / "index.html"
    index_html = index_path.read_text(encoding="utf-8")

    index_soup = BeautifulSoup(index_html, "html.parser")

    for page in HTMLS_PATH.glob("*.html"):
        if page.name == "index.html":
            continue

        page_soup = load_soup(page)

        # estrai SOLO i dati variabili
        new_title = page_soup.title.string
        new_article = page_soup.article.decode_contents()

        # copia del template
        merged = BeautifulSoup(index_html, "html.parser")

        merged.title.string = new_title
        merged.article.clear()
        merged.article.append(BeautifulSoup(new_article, "html.parser"))

        new_html = str(merged)

        if page.read_text(encoding="utf-8") != new_html:
            page.write_text(new_html, encoding="utf-8")
            print("✔ sincronizzato:", page.name)
        else:
            print("• già aggiornato:", page.name)


if __name__ == "__main__":
    sync_pages()
