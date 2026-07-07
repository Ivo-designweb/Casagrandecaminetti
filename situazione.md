# Situazione progetto — Sito vetrina Stufe & Caminetti Tirolesi

**Versione attuale:** 0.4
**Tipo progetto:** sito statico HTML/CSS/JS — struttura piatta (nessuna sottocartella), nessun backend, nessuna PWA ancora (niente sw.js / manifest.js / impostazioni.html: non ancora sviluppati)
**Deploy:** pubblicato su Vercel tramite repository GitHub (caricamento manuale dei file)

## Cosa c'è
6 pagine collegate tra loro, stesso impianto grafico, TUTTE nella stessa cartella (nessuna sottocartella css/js/img):
`index.html` (Home) · `chi-siamo.html` · `prodotti.html` · `servizi.html` · `dove-siamo.html` · `contatti.html`

File di supporto (tutti nella stessa cartella dei file HTML):
- `style.css` — tutti i token estetici (colori, font, spaziature) in un unico punto
- `immagini.js` — **unico file da modificare per sostituire le foto** (mappa chiave → nome file immagine)
- `main.js` — menu mobile + applicazione automatica delle immagini da `immagini.js` alle pagine
- immagini: `flame-hero.svg`, `workshop.svg`, `stufa-legna.jpg`, `stufa-legna.svg` (non più usato), `caminetto.svg`, `stufa-tirolese.svg`

## Correzione v0.4 — struttura piatta
v0.3 usava sottocartelle (css/, js/, img/): dopo il deploy su Vercel via GitHub le immagini e lo
stile non si vedevano, perché caricando i file uno per uno dalla chat si perdeva la struttura a
cartelle attesa dai percorsi negli HTML. **Deciso con l'utente: struttura piatta**, tutti i file
nella stessa cartella, percorsi relativi senza prefissi (`style.css`, `main.js`, `immagini.js`,
`nomefile.jpg`). Se in futuro si aggiungono nuove immagini: caricarle nella stessa cartella degli
HTML e aggiungerle in `immagini.js` con il solo nome file (niente prefissi di cartella).

## Stato contenuti
- Testi: segnaposto tra `[parentesi quadre]` (nome attività, numeri, indirizzo, contatti) da sostituire con quelli reali.
- Foto: `stufa-legna.jpg` è una foto vera fornita dall'utente (attenzione: raffigura un caminetto moderno, non una stufa a legna — verificare se va bene così o spostata sulla famiglia "Caminetti"). Le altre sono ancora illustrazioni SVG segnaposto.
- Form contatti: solo lato client, non ancora collegato a un invio email reale.
- Mappa "Dove siamo": ancora segnaposto, va incorporata una mappa reale (es. Google Maps) con l'indirizzo.

## Non ancora iniziato (fase 2)
Galleria "Realizzazioni" aggiornabile da smartphone (PWA + storage cloud tipo Firebase), così l'amico può aggiungere foto/testi dei lavori direttamente dal telefono. Discussa ma non sviluppata. Quando si svilupperà la PWA andranno creati sw.js, manifest.js/manifest.json e una pagina impostazioni.html (con relativo tracciamento versione).

## Decisioni prese finora
- Hosting: Vercel via GitHub (deploy manuale dei file)
- Struttura file: PIATTA (nessuna sottocartella) per compatibilità con il caricamento manuale
- Estetica: calda/artigianale (legno, terra, ottone, brace), tipografia slab serif + sans, motivo a intaglio tirolese come elemento distintivo
- Struttura pagine confermata dall'utente: Home, Chi siamo, Prodotti, Servizi, Dove siamo, Contatti
- Immagini: preferire soluzioni locali (file propri) a link esterni non verificabili, per garantire affidabilità

