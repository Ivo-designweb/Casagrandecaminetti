# Situazione progetto — Sito vetrina Stufe & Caminetti Tirolesi

**Versione attuale:** 0.2
**Tipo progetto:** sito statico HTML/CSS/JS (nessun backend, nessuna PWA ancora)

## Cosa c'è
6 pagine collegate tra loro, stesso impianto grafico:
`index.html` (Home) · `chi-siamo.html` · `prodotti.html` · `servizi.html` · `dove-siamo.html` · `contatti.html`

Struttura file:
- `css/style.css` — tutti i token estetici (colori, font, spaziature) in un unico punto
- `js/immagini.js` — **unico file da modificare per sostituire le foto** (mappa chiave → indirizzo immagine)
- `js/main.js` — menu mobile + applicazione automatica delle immagini da `immagini.js` alle pagine

## Stato contenuti
- Testi: segnaposto tra `[parentesi quadre]` (nome attività, numeri, indirizzo, contatti) da sostituire con quelli reali.
- Foto: segnaposto fotografico reale (non più box grigi) preso da Wikimedia Commons, licenza libera CC, a tema stufe/caminetti/stufe tirolesi. Da sostituire con le foto vere del cliente prima della pubblicazione (basta modificare `js/immagini.js`).
- Form contatti: solo lato client, non ancora collegato a un invio email reale.
- Mappa "Dove siamo": ancora segnaposto, va incorporata una mappa reale (es. Google Maps) con l'indirizzo.

## Non ancora iniziato (fase 2)
Galleria "Realizzazioni" aggiornabile da smartphone (PWA + storage cloud tipo Firebase), così l'amico può aggiungere foto/testi dei lavori direttamente dal telefono. Discussa ma non sviluppata.

## Decisioni prese finora
- Hosting non ancora scelto → consigliato GitHub Pages o Netlify (gratuiti, compatibili con sito statico)
- Estetica: calda/artigianale (legno, terra, ottone, brace), tipografia slab serif + sans, motivo a intaglio tirolese come elemento distintivo
- Struttura pagine confermata dall'utente: Home, Chi siamo, Prodotti, Servizi, Dove siamo, Contatti
