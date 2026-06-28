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

## Struttura attuale della repository

- barra_ricerca
 
    - barra_ricerca.html è molto semplice: ha solo un oggetto input su cui scrive ed uno su cui compariranno i risultati della ricerca

    - barra_ricerca.css contiene per lo più colori, dimensioni e sistemazioni grafiche

    - search.js fa funzionare la barra con la navigazione da tastiera e chiama pagefind.js, che è la navigazione vera e propria.

- colonna destra

    - colonna_destra.css e .html sono le parti legate all'aspetto.

    - pulsanti.js semplicemente fa funzionare i pulsanti modificando il css.


- colonna sinistra indice 

    - indice.html è l'indice dei capitoli, l'ho abbozzato alla buona. Zaccaria ha preparato la lista dei capitoli, va trascritta nell'html ma verrà fatto mano a mano che le pagine vengono create.

    Vorrei implementarlo con jekyll in modo da rendere più semplice la risistemazione delle pagine, qualora ce ne sia bisogno.

    - stile_indice.css è lo stile dell'indice.

    - indice.js contiene le animazioni di apertura e chiusura delle tendine dell'indice e la colorazione automatica nell'indice del titoletto della pagina che si sta visitando.
    
- _data è una cartela di jekyll
    - indice.yml contiene l'ordine delle pagine, da qui attinge la navigazione nel footer e (non ancora fatto) attingerà indice.html.

- font
    - Inter: la cartella contiene tutti gli spessori e gli stili dell'inter, mentre gli unici file indispensabili per il sito sono i woff2.

    - Libre-Baskerville come prima, ma in questo caso è il serif per i titoli.

    - opendyslexic come prima, è il font per i dislessici, usato per cambiare aspetto.

- footer
    - footer .css e .html, attualmente contengono ben poco solo come placeholder. È tra le cose da fare.

- inline navigation
    - inline navigation .html, .css, .js creano in alto nella pagina un table of content in stile latex, a meno che la pagina non abbia un unico capitolo come la pagina iniziale. L'algoritmo si basa sulla presenza di h1, h2, h3 e h4 negli html.

- katex è una libreria per usare latex nei siti web, è molto leggera. attualmente sono importati nel sito katex.min.css e .js che sono la versione più leggera che copre solo le funzioni base  

- _layout è una cartella di jekyll
    - default.html

- logo ha il logo in tutti i formati utili 
    
    - favicon.webp è l'icon piccolina prima del nome della scheda in alto

    - svg è il vettoriale in inkscape

    - xfc è per gimp, perché l'ho un po' modificato per la favicon. (La favicon deve essere quadrata e il logo era rettangolare)

    - il resto è del latex per scrivere il logo

- mobile 
    - mobile.js fa funzionare i pulsanti che ci sono nella versione mobile: la barra destra e sinistra nella versione mobile sono apribili mediane dei pulsantini laterali

    - gli altri file definiscono lo stile della pagina per diversi tipi di dispositivi


- opendyslexic contiene il file del font (non è protetto da copyright)


- pages
    - sono le pagine vere e prorpie su cui scriveremo le informazioni


- readme.md è questo file. È scritto in markdown, è un altro linguaggio di markup come latex o html


- include_html.js è un file javascript e serve ad include un html in un altro, in maniera simile al comando \include di latex.
Questo è stato fatto perché l'indice a sinistra va messo in tutte le pagine quindi lo creo una volta sola e poi lo includo.
Stessa cosa è stata fatta per la colonna di destra e la barra di ricerca


- main.js: javascript parallelizza i comandi per risparmiare tempo, questo comporta che, ad esempio, il programma che fa funzionare i pulsanti a destra venga caricato prima che i pulsanti stessi siano aggiunti con include_html.js. main.js previene questo con await(), le altre funzioni invece vengono solo inizializzate e possono tranquillamente andare in parallelo.


- style.css è lo stile generale. Attualmente contiene font, le tre colonne, lo sfondo.

 
- index.html è il file della pagina principale. Il nome index è obligatorio ed è la pagina iniziale del sito.

- index_sync.py sincronizza tutte le pagine html rendendole uguali a index.html. Ovviamente questo non vale per article e title

- search-index-creation.py aggiorna il file search-index.json

## Compiti attuali

### Stile 

Lo stile del sito è semidefinitivo: è carino, ma sono sempre ben accette migliorie, sia come codice che come idee da implementare.

`IL LIMITE SONO LE IDEE`

Quindi non pensate: "non lo dico perché è troppo difficile", qualsiasi cosa può essere fatta perché CSS non è per nulla difficile


### Scrittura

`QUESTO È IL COMPITO PIÙ SEMPLICE DAL PUNTO DI VISTA DELLA PROGRAMMAZIONE`

Basta solo indentare bene, avere un bello stile, ogni tanto qualche parola colorata, ogni tanto qualche immagine carina (che posso fare io)

`non prendete da internet che c'è il copyright`


### Errori da correggere

1) finire il footer, con i bottoni per la navigazione avanti e indietro
falle con testo in blu e sfondo con transizione quando ci passi sopra, con una frecca viola con gradiente di sfondo che si allunga
per mobile niente transizione, colore fisso

ui per mobile da fare

sulla homepage la navigazione non va affatto

2) l'indice.html deve prendere le pagine dal .yml

3) i fetch di includeHTML devono essere implementati con jekyll

4) dare le priorità per pagefind

5) aggiornare il readme in modo che tutti possano compilare