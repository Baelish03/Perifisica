# Perifisica

## Collaborare su github
Per iniziare a lavorare su un progetto esistente, puoi clonare un repository dal tuo account GitHub utilizzando GitHub Desktop. 
Per farlo, fai clic sul pulsante Clone a Repository nella parte superiore dell'applicazione. 
Successivamente, verrà visualizzato un elenco dei tuoi repository GitHub. 
Seleziona il repository che desideri clonare e specifica la posizione in cui vuoi salvarlo sul tuo computer.

Questo è il link:

https://github.com/Baelish03/Perifisica

Una volta scaricata la cartella usate visual studio code per modificare il codice, mentre per visualizzare il risultato delle proprie modifiche è necessario usare Jekyll.
Inoltre, se volete usare la barra di ricerca, bisogna avviare anche Pagefind.
Jekyll compone il sito eliminando la composizione precedente e Pagefind lo indicizza sulla base di quello che ha creato Jekyll.

## Installare Jekyll

### Windows 
https://jekyllrb.com/docs/installation/windows/

### Linux
https://jekyllrb.com/docs/installation/other-linux/

## Installare Pagefind
https://pagefind.app/docs/installation/ e suggerisco di installarlo tramite python pip

## Avviare il sito
1. Apri un terminale nella cartella del sito
2. Per avviarlo senza barra di ricerca: `bundle exec jekyll serve` 
    Vi verrà resituito un link di questo tipo  `http://localhost:4000` da cui si può visitare il sito
3. Per la barra di ricerca bisogna fermare jekyll su terminale (CTRL+D su windows) e avviare pagefind 
`python3 -m pagefind --site _site --serve` che restituisce un nuovo link diverso dal precedente in cui la ricerca funzionerà.


## Struttura attuale della repository

- _data è una cartela di jekyll
    - indice.yml contiene l'ordine delle pagine, da qui attinge la navigazione nel footer e (non ancora fatto) attingerà indice.html.

- _includes contiene gli html che varranno caricati in maniera modulare per creare la pagina intera, essi vengono caricati in default e sono tutti componenti ripetuti in ogni pagina

    - barra_ricerca.html è molto semplice: ha solo un oggetto input su cui scrive ed uno su cui compariranno i risultati della ricerca.

    - colonna_destra.html sono le parti legate all'aspetto.

    - footer.html, attualmente contiene ben poco, c'è solo come placeholder. È tra le cose da finire.

    - indice.html è l'indice dei capitoli, l'ho abbozzato alla buona. Zaccaria ha preparato la lista dei capitoli, va trascritta nell'yml di _data ma verrà fatto mano a mano che le pagine vengono create.

    - inline navigation.html crea in alto nella pagina un table of content in stile latex, a meno che la pagina non abbia un unico capitolo come la pagina iniziale. L'algoritmo si basa sulla presenza di h1, h2, h3 e h4 negli html.

    - mobile.html contiene solo i pulsanti della versione mobile che sono nascosti in quella deshtop

- _layout è una cartella di jekyll
    - default.html fa da base a tutti gli html, in modo da tenere nelle varie pagine solo il testo e non il layout

- _sass è una cartella jekyll che contiene i css in formato sass. In pratica jekyll li compila in un unico file insieme durante la run. La cascata di .css ha questo ordine:

    - barra_ricerca.css
    - indice.css.
    - inline navigation.css
    - colonna_destra.css
    - footer.css
    - mobile.css, che descrive tutto lo stile in tutte le altre versioni (tablet, tv, smartphone).

- _site è la copia esatta del sito dopo che jekyll l'ha processata, è quello che va online e viene ricreata ogni volta che jekyll viene avviato.

- assets è una cartella di jekyll. Tutte le cartelle con il trattino basso iniziale vengono processate e hanno file che non finiranno direttamente nel sito, ma utili per comporlo. In assets sono presenti quei file da passare così come sono.
    - js è la cartella con tutti i javascript
        - barra_ricerca.js fa funzionare la barra con la navigazione da tastiera e chiama pagefind.js, che è la navigazione vera e propria.
        - colonna_destra.js semplicemente fa funzionare i pulsanti modificando il css.
        - image_enlarge.js rende le immagini a schermo intero quando vengono cliccate.
        - indice.js contiene le animazioni di apertura e chiusura delle tendine dell'indice e la colorazione automatica nell'indice del titoletto della pagina che si sta visitando.
        - inline navigation.js
        - mobile.js fa funzionare i pulsanti che ci sono nella versione mobile: la barra destra e sinistra nella versione mobile sono apribili mediane dei pulsantini laterali
        - pop-over.js gestisce i pop over, cioè le note che ho creato al posto delle note a piè di pagina.
        - sticky-titles.js gestisce i titoletti che si appiccicano in alto nella pagina.
    - main.js: gestisce tutti gli altri javascript, in maniera che tutto sia modulare: l'html chiama solo main e main chiama le funzioni dei vari js.
    - main.scss chiama i vari .scss in _sass
    - style.css è lo stile con priorità: il caricamento della pagina è per quanto possibile parallelizzato, ma in questo modo dò priorità allo stile generale e a quello del testo. Quello con più priorità in assoluto è inline nell'html.


- font
    - Inter: la cartella contiene tutti gli spessori e gli stili dell'inter, mentre gli unici file indispensabili per il sito sono i woff2.

    - Libre-Baskerville come prima, ma in questo caso è il serif per i titoli.

    - opendyslexic come prima, è il font per i dislessici, usato per cambiare aspetto.


- katex è una libreria per usare latex nei siti web, è molto leggera. attualmente sono importati nel sito katex.min.css e .js che sono la versione più leggera che copre solo le funzioni base  


- logo ha il logo in tutti i formati utili 
    - favicon.webp è l'icon piccolina prima del nome della scheda in alto

    - svg è il vettoriale in inkscape

    - xfc è per gimp, perché l'ho un po' modificato per la favicon. (La favicon deve essere quadrata e il logo era rettangolare)

    - il resto è del latex per scrivere il logo


- pages
    - sono le pagine vere e prorpie su cui scriveremo le informazioni. Grazie a Jekyll possono essere scritte in html o in markdown o in un misto dei due.


- prism è una libreria per la syntax highlight del codice 


- readme.md è questo file. È scritto in markdown, è un altro linguaggio di markup come latex o html


- run.sh sono i comandi che servono per jekyll e page find. volevo farci un file di avvio automatico, ma dato che sono due comandi in totale, è più un memo 
 
- index.html è il file della pagina principale. Il nome index è obligatorio ed è la pagina iniziale del sito.

## Compiti attuali

### Stile 

Lo stile del sito è semidefinitivo: è carino, ma sono sempre ben accette migliorie, sia come codice che come idee da implementare.

`IL LIMITE SONO LE IDEE`

Quindi non pensate: "non lo dico perché è troppo difficile", qualsiasi cosa può essere fatta perché CSS non è per nulla difficile


### Scrittura

Potete scegliere qualsiasi capitolo. Attualmente ho iniziato la parte di Latex, ma stavo pensando di spostarmi su fisica 1.


### Errori da correggere
1) dare le priorità per pagefind
