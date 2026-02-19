# Perifisica

## Collaborare su github
Per iniziare a lavorare su un progetto esistente, puoi clonare un repository dal tuo account GitHub utilizzando GitHub Desktop. 
Per farlo, fai clic sul pulsante Clone a Repository nella parte superiore dell'applicazione. 
Successivamente, verrà visualizzato un elenco dei tuoi repository GitHub. 
Seleziona il repository che desideri clonare e specifica la posizione in cui vuoi salvarlo sul tuo computer.

Questo è il link:

https://github.com/Baelish03/Perifisica

Una volta scaricata la cartella usate visual studio code e installate l'estensione "Live server" che vi aprirà l'html completo.
Questo perché se aprirete con il browser direttamente il file html, non viene caricato il javascript e la pagina esce senza indice, barra destra e barra di ricerca.

## Struttura attuale della repository

- barra_ricerca
 
    - barra_ricerca.html è molto semplice: ha solo un oggetto input su cui scrive ed uno su cui compariranno i risultati della ricerca

    - barra_ricerca.css contiene per lo più colori, dimensioni e sistemazioni grafiche

    - search.js è la funzione di ricerca vera e propria che chiama highlight.js

    - highlight.js evidenzia durante la ricerca la porzione di testo corrispondente alla ricerca

    - search-index.json è un database, come se fosse un excel (per intenderci) e associa titolo, collegamento locale della pagina html e contenuto. search.js cerca nel contenuto ese clicchi sul risultato il collegamento locale ti spedisce sulla nuova pagina.

- colonna destra

    - colonna_destra.css e .html sono le parti legate all'accessibilità. Intendevo mettere lì anche la pubblicità ma per ora non se ne parla altrimenti serve la partita iva

    - pulsanti.js semplicemente fa funzionare i pulsanti modificando il css


- colonna sinistra indice 

    - indice.html è l'indice dei capitoli, l'ho abbozzato alla buona. Zaccaria ha preparato la lista dei capitoli, va trascritta nell'html ma verrà fatto mano a mano che le pagine vengono create

    - stile_indice.css è lo stile dell'indice

    - indice.js contiene le animazioni di apertura e chiusura delle tendine dell'indice e la colorazione automatica nell'indice del titoletto della pagina che si sta visitando 

- Inter è il font sans-serif per il testo, l'unico file indispensabile per il sito è il woff2 che contiene il font compresso

- Libre-Baskerville come prima, ma in questo caso è il serif per i titoli.

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
