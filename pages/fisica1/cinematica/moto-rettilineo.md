---
layout: default
title: Moto rettilineo - Perifisica

---

<h1> Moto rettilineo </h1>
 
 Il moto rettilineo è il modello più <strong>basilare</strong>, ma comunque molto rilevante, perché le sue applicazioni coinvolgono tutti quei sistemi che, pur essendo nello spazio tridimensionale, possono essere <em>appiattiti</em> su una dimensione. L'esempio più banale potrebbe essere un auto in corsa su un'autostrada senza curve o un treno sui binari, ma possiamo spaziare anche a tutti quei sistemi che coinvolgono l'avvicinamento o l'allontamento di due corpi, che sono sempre collegati da una retta congiungente:
 - due palle da biliardo che si urtano;
 - due elettroni che si respingono;
 - un corpo che cade a causa della gravità.

 Alla retta su cui giace il moto diamo un'origine ed un verso arbitrari, che chiamiamo <strong>sistema di riferimento</strong>. Nella fisica <em>classica</em> i risultati devono essere sempre invarianti a variazioni di sistema di riferimento. Infine per convenzione chiamiamo la coordinata spaziale $x$ e quella temporale $t$ e possiamo graficare le due coordinate in un piano cartesiano, detto <strong>diagramma orario</strong>.

<h2> Velocità e accelerazione</h2>

Prima di andare avanti è necessario introdurre due nozioni: la <strong>velocità</strong> e l'<strong>accelerazione</strong>. La prima viene spesso vista come la distanza percorsa $\Delta x$ in un lasso di tempo $\Delta t$, ma questa definizione non ci dà l'informazione massima del sistema, poiché non è noto in ogni istante quale è la velocità del corpo, ma solo per intervalli temporali grandi. Quindi quello che vogliamo studiare è la variazione per $\Delta t \rightarrow 0$, chiamata velocità <strong>istantanea</strong>, che si esprime come:

$$ v = \frac{dx}{dt} $$

Visivamente possiamo confrontare la velocità media e quella istantanea mettendo a paragone il diagramma orario delle due.

<figure>
  <picture>
    <source type="image/webp" srcset="./moto-rettilineo/posizione-3000w.webp 3000w">
    <img alt="Diagramma orario nei due casi" width="2323px" height="1017px" loading="lazy"
      src="./moto-rettilineo/posizione.png" srcset="./moto-rettilineo/posizione-3000w.png 3000w" />
  </picture>
  <figcaption>
    Posizioni nel caso discreto (sinistra) e continuo (destra) in funzione del tempo.
  </figcaption>
</figure>

Nel caso discreto si ha che la velocità media tra ogni coppia di punti sarà costante e diversa dalla successiva, mentre nel caso continuo si avrà una funzione che descrive l'andamento della velocità.

<figure>
  <picture>
    <source type="image/webp" srcset="./moto-rettilineo/velocita-3000w.webp 3000w">
    <img alt="Diagramma orario nei due casi" width="2342px" height="970px" loading="lazy"
      src="./moto-rettilineo/velocita.png" srcset="./moto-rettilineo/velocita-3000w.png 3000w" />
  </picture>
  <figcaption>
    Velocità nel caso discreto (sinistra) e continuo (destra) in funzione del tempo. Si può notare che la velocità media è nulla in un intervallo perché il corpo è andato avanti e poi è tornato al punto di partenza.
  </figcaption>
</figure>

Allo stesso modo si ricava l'accelerazione come <em>derivata temporale</em> della velocità:

$$ a = \frac{dv}{dt} = \frac{d^2x}{dt^2}$$

<h2> Moto rettilineo uniforme </h2>
