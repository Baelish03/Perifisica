---
layout: default
title: Moto rettilineo - Perifisica
---

# Moto rettilineo

Il moto rettilineo è il modello più <strong>basilare</strong>, ma comunque molto rilevante, perché le sue applicazioni coinvolgono tutti quei sistemi che, pur essendo nello spazio tridimensionale, possono essere <em>appiattiti</em> su una dimensione. L'esempio più banale potrebbe essere un auto in corsa su un'autostrada senza curve o un treno sui binari, ma possiamo spaziare anche a tutti quei sistemi che coinvolgono l'avvicinamento o l'allontamento di due corpi, che sono sempre collegati da una retta congiungente:
 - due palle da biliardo che si urtano;
 - due elettroni che si respingono;
 - un corpo che cade a causa della gravità.

 Alla retta su cui giace il moto diamo un'origine ed un verso arbitrari, che chiamiamo <strong>sistema di riferimento</strong>. Nella fisica <em>classica</em> i risultati devono essere sempre invarianti a variazioni di sistema di riferimento. Infine per convenzione chiamiamo la coordinata spaziale $x$ e quella temporale $t$ e possiamo graficare le due coordinate in un piano cartesiano, detto <strong>diagramma orario</strong>.

## Velocità e accelerazione

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



## Moto rettilineo uniforme

La peculiarità del moto rettilineo uniforme è che la velocità è <strong>costante</strong> e di conseguenza l'accelerazione è <strong>nulla</strong>.
Abbiamo visto come si ricava la velocità istante per istante dalla posizione tramite la derivata, ora passiamo al viceversa noto che che $v(t) = v$ costante $\forall \ t$. 

$$ \begin{equation} \Delta x = \int_{x_0}^{x(t)} d\tilde{x} = \int_{t_0}^{t} v (\tilde{t}) \cdot d\tilde{t} \end{equation} $$

dove $\tilde{t}$ e $\tilde{x}$ rappresentano le variabili di integrazione, mentre $t$ un tempo generico e $x(t)$ la posizione corrispondente ad esso. Tenendo conto che $v$ costante esce dal segno di integrale si ottiene:

$$
\begin{equation} x(t) = x_0 + v \cdot (t -t_0) \end{equation}$$

Si può notare che riarrangiando i termini si trova

$$ v = \frac{x(t)-x_0}{t-t_0} = \frac{\Delta x}{\Delta t} = v_{media}$$

Quindi la velocità instantanea <strong>coincide</strong> con la velocità media solo nel <em>moto uniforme</em>, perché la posizione è una funzione <strong>lineare</strong> del tempo.

## Moto rettilineo unifromemente accelerato

Nel moto rettilineo uniformemente accelerato l'accelerazione è <strong>costante</strong> nel tempo e la velocità varia a causa dell'azione dell'accelerazione stessa:

$$ \begin{equation} v(t) = v_0 + a \cdot (t -t_0) \end{equation}$$

Ora si procede sostituendo questa formula in quella della posizione $(1)$ in modo da ricavare la posizione in funzione del tempo:

$$ \begin{aligned}
  \int_{x_0}^{x(t)} d \tilde{x} 
  &= \int_{t_0}^{t} v (\tilde{t}) \cdot d \tilde{t} = \int_{t_0}^{t} v_0 + a \cdot (\tilde{t} -t_0) d\tilde{t} = v_0 \int_{t_0}^{t} d\tilde{t} + a \int_{t_0}^{t} (\tilde{t} -t_0) d\tilde{t} = \\
  &= v_0 (t -t_0) + a \left(\frac{t^2}{2} - \frac{t_0^2}{2} - t_0 \cdot t + t_0^2 \right) = v_0 (t -t_0) + \frac{a}{2} \left(t^2 + t_0^2 - 2 t_0 \cdot t \right) = \\
  &= v_0 (t -t_0) + \frac{a}{2} (t -t_0 )^2
\end{aligned} $$

Si ottiene in conclusione:

$$ \begin{equation} x(t) = x_0 + v_0 (t -t_0) + \frac{a}{2} (t -t_0 )^2 \end{equation}$$

Quindi la posizione è una funzione <strong>quadratica</strong> nel tempo.

<div class="box-attenzione">
 Ci si può chiedere perché non si possa sostituire semplicemente in risultato trovato nell'equazione $(3)$ nella formula $(2)$. Il motivo è che $(2)$ è un caso specifico dell'integrazione $(1)$, che si ha ponendo la velocità costante. Questo nel moto uniformemente accelerato non è vero, quindi bisogna integrare nuovamente partendo dal caso generale.
</div>

Si mostra ora un'altra importante uguaglianza del moto rettilineo uniformemente accelerato:

$$ a = \frac{dv}{dt} = \frac{dv}{dx} \cdot \frac{dx}{dt} = \frac{dv}{dx} \cdot v \Longrightarrow a \cdot dx = v \cdot dv$$

Integrando su un intervallo definito tra due estremi si ha:

$$\begin{equation} \begin{gathered} \int_{x_0}^x a(\tilde{x}) \ d\tilde{x} = \int_{v_0}^v \tilde{v} \ d\tilde{v}\\
a \cdot (x -x_0) = \frac{v^2}{2} - \frac{v_0^2}{2}
\end{gathered} \end{equation} $$

dove si ricorda al lettore che $a(\tilde{x}) = a$ è costante.

<div class="box-attenzione">
 Ci si potrebbe chiedere come mai la derivata sia stata trattata come una frazione. In questo corso si userà spesso questa proprietà della derivata, che vale <strong>solo</strong> per la <strong>derivata prima</strong>. La dimostrazione necessiterebbe di una trattazione a sè.
</div>

### Caduta dei gravi

La caduta libera dei punti materiali è un moto uniformemente accelerato con accelerazione $g = 9.806 \ ms^{-2}$ diretta verso il basso<sup class="sidenote" style="cursor: pointer; position: relative;">?
    <span class="sidenote_text" style="display: none;">
    Questo valore è indicativo, in realtà esso è influenzato da altitudine e latitudine, secondo questa <a target="_blank" href="https://it.wikipedia.org/wiki/Accelerazione_di_gravit%C3%A0#Variazioni_locali_della_gravit%C3%A0_terrestre">formula</a>.
    </span>
</sup>.

Si possono analizzare singolarmente tutti i casi partendo dal più semplice fino al più completo.

#### Il corpo parte da fermo da un'altezza $h$

$$ \begin{cases} 
x(t) = h - \frac{1}{2} g t^2 \\
v(t) = -gt
\end{cases} \Rightarrow
\begin{cases}
t = \sqrt{\frac{2 (h -x(t))}{g}} \\
v(t) = -g \sqrt{\frac{2 (h -x(t))}{g}} = - \sqrt{2 g (h -x(t))}
\end{cases}
$$  

dove il segno della velocità indica che è diretta verso il basso e la quota quando arriva a terra è $x(t) = 0$, da cui si può ricavare la velocità finale e il tempo di volo.

#### Il corpo parte viene lanciato da un'altezza $h$ con una velocità $v_0$ verso il basso



## Moto vario


LO SCRIVO NEL CAPITOLO DEL MOTO SMORZTO IN CUI L'ACCELERAZIONE VARIA
Nel caso in cui anche quest'ultima varia si ha un <em>moto vario</em>, che non verrà affronteto perhé in assenza di un'espressione analitica per l'accelerazione, non esistono regole generiche e ogni caso va analizzato singolarmente


### Moto armonico semplice

### Moto smorzato esponenzialmente