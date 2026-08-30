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
- **Luna e credenze**: cosa dice la tradizione, cosa dicono i dati, e un conteggio sulle proprie uscite.
- **Le mie fungaie**: i tuoi posti segnati sulla mappa, con registrazione delle uscite in due tocchi. Dopo qualche uscita l'app tara l'indice su quel bosco specifico.
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

## Le mie fungaie

Il modello meteo non sa dove sia il micelio né com'è esposto il singolo versante: quello lo sa solo chi ci va. La funzione parte da lì.

Si segna un posto sulla mappa e, a ogni uscita, si registra in due tocchi l'esito: niente, primi sentori, buttata. L'app salva l'indice calcolato quel giorno e lo scarto rispetto al picco previsto. Dopo tre o più uscite mostra la soglia personale di quella fungaia — l'indice da cui in poi ha effettivamente prodotto — e se quel bosco anticipa o ritarda rispetto al modello generale.

**I dati restano sul dispositivo.** Non esiste un server dove finirebbero. Nel mondo dei funghi la segretezza delle fungaie non è un dettaglio tecnico: è la condizione perché qualcuno accetti di scriverle da qualche parte. Per lo stesso motivo ci sono esportazione e importazione in JSON, indispensabili al cambio di telefono perché svuotare i dati del sito cancella tutto.

## Luna e credenze

La convinzione che le fasi lunari governino la fruttificazione è radicata quanto contraddittoria: in alcune valli si aspetta la crescente, in altre la calante. La pagina riporta i dati invece delle opinioni.

Lo studio di riferimento è Egli, Ayer & Merlini, *More mushrooms under a full moon – myth or reality?*, Sydowia 63 (2011): 1.715 rilevamenti fra 1990 e 2007 in cinque aree permanenti svizzere, un solo micologo, inventario settimanale, carpofori marcati con blu di metilene per evitare doppi conteggi. Nessuna relazione con il ciclo lunare, valori di p fra 0,24 e 0,99, né sulle specie micorriziche né sulle saprofite. Gli autori hanno ripetuto l'analisi retrodatando di cinque giorni per cogliere l'innesco del carpoforo anziché la sua comparsa: stesso risultato.

Il passaggio più istruttivo riguarda però un altro lavoro. Nel 2000 Hirschmann trovò una correlazione su 1.800 verbali di consulenza micologica in 32 anni; nel 2002 Guiard, rianalizzando gli stessi dati, mostrò che il segnale veniva dalle abitudini di raccolta delle persone, non dai funghi.

La pagina riporta anche gli effetti lunari realmente documentati (organismi marini, animali notturni) e il caso aperto degli alberi, dove Zürcher pubblicò su *Nature* nel 1998 fluttuazioni del diametro del fusto correlate alle maree, non replicate da Vesala nel 2000.

**Il conteggio personale.** A ogni uscita registrata l'app salva la fase lunare calcolata in locale. Da dodici uscite in su mostra la percentuale di successo per quarto lunare sulle proprie fungaie. La fase non compare nella scheda delle località: se fosse visibile prima di decidere se uscire, il conteggio misurerebbe le aspettative dell'osservatore invece dei funghi.

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

## Versione e aggiornamenti

Versione corrente: **1.3.0**, mostrata nella testata accanto alla data del rilevamento e nella scheda Info e privacy.

L'app si aggiorna da sola. Il service worker serve il codice con strategia *rete prima*: `index.html`, `norme.js` e il manifest vengono sempre richiesti alla rete, e la cache interviene solo se il dispositivo è offline. Quando arriva un service worker nuovo, prende subito il controllo e la pagina si ricarica una volta sola. Nessuno deve svuotare cache a mano.

Dopo ogni modifica basta allineare due righe:

```js
// sw.js
const VERSIONE = "1.2.0";
// index.html
const APP_VER = "1.2.0";
const APP_DATA = "3 settembre 2026";
```

## Privacy e avvertenze

L'app non crea account, non usa cookie, non ha statistiche né pubblicità, e l'autore non gestisce alcun server: nessun dato sugli utilizzi viene raccolto o conservato. La posizione è richiesta solo su azione esplicita ed è elaborata sul dispositivo; le coordinate vengono trasmesse al servizio meteo soltanto quando si chiede il calcolo per un punto specifico. Informativa completa nella scheda **Info e privacy** dell'app.

L'hosting è GitHub Pages: GitHub registra nei propri log l'indirizzo IP dei visitatori, ed è dichiarato nell'informativa fra i destinatari.

**Da sistemare prima di una pubblicazione istituzionale:** due dipendenze comportano un trasferimento extra-UE, i caratteri da Google Fonts e la libreria Leaflet da unpkg. Entrambe si eliminano ospitando i file sul proprio dominio. I dati meteorologici e cartografici sono già europei.

## Limiti

La previsione è agronomica, non biologica. Non sa dove sia il micelio, non conosce l'esposizione del singolo versante, non distingue un castagneto pulito da uno abbandonato. Serve a decidere **quando** andare, non a garantire il cesto pieno.

**Nessuna app riconosce i funghi al posto tuo.** Prima di consumare il raccolto fallo controllare da un Ispettorato micologico dell'ASL.

---

Progetto open source di Alessandro Pezzali — parte dell'ecosistema PezzaliApp.
Rilasciato sotto licenza MIT.
