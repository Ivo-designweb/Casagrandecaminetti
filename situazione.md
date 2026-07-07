# Situazione progetto — Sito vetrina Stufe & Caminetti Tirolesi

**Versione attuale:** 0.3
**Tipo progetto:** sito statico HTML/CSS/JS (nessun backend, nessuna PWA ancora)

## Cosa c'è
6 pagine collegate tra loro, stesso impianto grafico:
`index.html` (Home) · `chi-siamo.html` · `prodotti.html` · `servizi.html` · `dove-siamo.html` · `contatti.html`

Struttura file:
- `css/style.css` — tutti i token estetici (colori, font, spaziature) in un unico punto
- `js/immagini.js` — **unico file da modificare per sostituire le foto** (mappa chiave → indirizzo immagine)
- `js/main.js` — menu mobile + applicazione automatica delle immagini da `immagini.js` alle pagine
- `img/*.svg` — illustrazioni segnaposto locali (vedi sotto)

## Correzione v0.3
Le immagini v0.2 (foto esterne da Wikimedia Commons) non venivano visualizzate: alcuni indirizzi
non erano verificabili/affidabili da questo ambiente. Sostituite con **illustrazioni SVG locali**
create su misura (`img/flame-hero.svg`, `workshop.svg`, `stufa-legna.svg`, `caminetto.svg`,
`stufa-tirolese.svg`), che non dipendono da internet e sono sempre visibili. Restano collegate
allo stesso sistema centralizzato: per mettere le foto vere basta modificare `js/immagini.js`
(si può usare sia un file locale in `img/` sia un indirizzo web).

## Stato contenuti
- Testi: segnaposto tra `[parentesi quadre]` (nome attività, numeri, indirizzo, contatti) da sostituire con quelli reali.
- Foto: illustrazioni SVG segnaposto (non foto reali) — da sostituire con le foto vere del cliente prima della pubblicazione, modificando `js/immagini.js`.
- Form contatti: solo lato client, non ancora collegato a un invio email reale.
- Mappa "Dove siamo": ancora segnaposto, va incorporata una mappa reale (es. Google Maps) con l'indirizzo.

## Non ancora iniziato (fase 2)
Galleria "Realizzazioni" aggiornabile da smartphone (PWA + storage cloud tipo Firebase), così l'amico può aggiungere foto/testi dei lavori direttamente dal telefono. Discussa ma non sviluppata.

## Decisioni prese finora
- Hosting non ancora scelto → consigliato GitHub Pages o Netlify (gratuiti, compatibili con sito statico)
- Estetica: calda/artigianale (legno, terra, ottone, brace), tipografia slab serif + sans, motivo a intaglio tirolese come elemento distintivo
- Struttura pagine confermata dall'utente: Home, Chi siamo, Prodotti, Servizi, Dove siamo, Contatti
- Immagini: preferire soluzioni locali (SVG/file propri) a link esterni non verificabili, per garantire affidabilità

