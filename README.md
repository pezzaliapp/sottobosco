# Sottobosco

Indice di buttata dei funghi in Italia. PWA che stima in tempo reale quando e dove vale la pena andare per funghi, calcolando le condizioni di fruttificazione dai dati meteo e dal bilancio idrico del suolo.

**App online:** https://pezzaliapp.github.io/sottobosco/

Gratuita, senza account, senza pubblicità, senza server proprio.

---

## Cosa fa

- **Mappa dinamica dell'Italia** con 50 comprensori vocati, colorati per indice di buttata del giorno.
- **Sonda un punto**: tocca un punto qualsiasi della mappa e l'app calcola l'indice esattamente lì, con la quota reale del terreno.
- **Previsione a sette giorni** con il giorno di picco atteso.
- **Stagionalità per quota**: quali specie cercare in questo mese a quell'altitudine.
- **Norme regionali** con stato di verifica esplicito e link alla fonte ufficiale.
- **Funziona offline** con l'ultimo rilevamento salvato.

## Il modello

Non esiste un sensore che misuri i funghi. L'indice 0–100 misura le condizioni che li fanno uscire:

| Peso | Fattore |
|------|---------|
| 30% | Pioggia d'innesco caduta 6–16 giorni fa |
| 22% | Temperatura media dei 10 giorni precedenti, ottimo a 14–15 °C |
| 20% | Bilancio idrico su 20 giorni: pioggia meno evapotraspirazione FAO |
| 10% | Presenza di un evento piovoso singolo significativo |
| 10% | Umidità mantenuta negli ultimi 5 giorni |
| 8% | Sbalzo termico fra la seconda e la prima settimana |

Tre freni moltiplicativi: gelate recenti, punte oltre 29–33 °C, dodici giorni quasi senza pioggia.

Lo stesso calcolo gira sui sette giorni di previsione, così la scheda indica il giorno migliore in arrivo.

I pesi sono nella funzione `indiceGiorno` in `index.html`. Se conosci bene una valle, tara la finestra d'innesco: in Appennino centrale funzionano bene 8–14 giorni, in abetaia d'alta quota anche 18–20.

## Norme regionali

`norme.js` è l'unico file da modificare per aggiornare le norme. Nessuna riga di codice va toccata.

La regola redazionale è rigida: **un campo si compila solo se verificato su fonte ufficiale.** Dove il dato manca, l'app dichiara che manca e rimanda alla scheda ISPRA della Regione, invece di mostrare un valore plausibile ma non controllato.

Stato attuale: 1 scheda verificata su 21 (Emilia-Romagna). Le altre riportano la sola fonte ufficiale e il badge *da validare*. Questo è voluto: le tariffe dei permessi non le fissa la Regione ma centinaia di enti locali, e vengono rideterminate ogni anno. Solo l'ente competente può certificare il proprio dato.

## Struttura

```
index.html              app completa: interfaccia, modello, mappa
norme.js                base dati normativa (l'unico file da aggiornare)
sw.js                   service worker, cache offline
manifest.webmanifest    manifest PWA
icons/                  icone 192, 512, maskable, apple-touch
DOSSIER-ENTI.md         dossier per l'adozione da parte di un ente pubblico
```

## Servizi usati

| Componente | Servizio | Note |
|---|---|---|
| Meteo e suolo | Open-Meteo | gratuito per uso **non commerciale**, senza chiave |
| Mappa scura | OpenStreetMap standard | scurita con filtro CSS, nessuna chiave |
| Mappa rilievo | OpenTopoMap | gratuita con attribuzione |
| Libreria mappa | Leaflet 1.9.4 | open source |

Una sola richiesta copre tutti i 50 comprensori, con cache di 3 ore.

**Attenzione per un uso commerciale o istituzionale:** la licenza gratuita di Open-Meteo copre solo l'uso non commerciale. Un contratto con un ente richiede il piano a pagamento. Anche i tasselli OpenStreetMap vanno sostituiti con un fornitore contrattualizzato oltre un certo volume. Dettagli in `DOSSIER-ENTI.md`.

## Aggiornare

Dopo ogni modifica ai file, alza la versione della cache in `sw.js`:

```js
const V = "sottobosco-v3";
```

Senza questo, i dispositivi che hanno già installato l'app continuano a servire la versione precedente.

## Privacy e avvertenze

L'app non crea account, non usa cookie, non ha statistiche né pubblicità, e l'autore non gestisce alcun server: nessun dato sugli utilizzi viene raccolto o conservato. La posizione è richiesta solo su azione esplicita ed è elaborata sul dispositivo; le coordinate vengono trasmesse al servizio meteo soltanto quando si chiede il calcolo per un punto specifico. Informativa completa nella scheda **Info e privacy** dell'app.

**Da sistemare prima di una pubblicazione istituzionale:** i caratteri tipografici sono caricati da Google Fonts, con trasmissione dell'indirizzo IP verso server extra-UE. Per un ente pubblico vanno ospitati sul proprio dominio. È l'unica dipendenza extra-europea del progetto.

## Limiti

La previsione è agronomica, non biologica. Non sa dove sia il micelio, non conosce l'esposizione del singolo versante, non distingue un castagneto pulito da uno abbandonato. Serve a decidere **quando** andare, non a garantire il cesto pieno.

**Nessuna app riconosce i funghi al posto tuo.** Prima di consumare il raccolto fallo controllare da un Ispettorato micologico dell'ASL.

---

Progetto open source di Alessandro Pezzali — parte dell'ecosistema PezzaliApp.
Rilasciato sotto licenza MIT.
