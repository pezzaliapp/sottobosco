# Sottobosco — dossier per l'adozione da parte di un ente pubblico

Documento di lavoro, 29 agosto 2026. Serve a decidere se e come portare l'app davanti a una Provincia, una Regione o un programma europeo. Contiene anche ciò che non funziona ancora: presentarlo a un ente senza questa parte è il modo più rapido per perdere la trattativa al secondo incontro.

---

## 1. Il problema che l'ente ha davvero

Un ente non compra un'app per i funghi. Compra la soluzione di un problema che gli costa già soldi.

**Il pronto soccorso.** Ogni autunno le intossicazioni da funghi generano accessi in emergenza, consulenze dei Centri antiveleni e ricoveri. Il costo è a carico del servizio sanitario regionale. Ogni raccoglitore che porta il cesto all'Ispettorato micologico invece che direttamente in padella è un accesso evitato.

**Il controllo del territorio.** I Carabinieri Forestali e la polizia provinciale fanno controlli a campione. La difesa più comune del sanzionato è "non sapevo". Un'app che mostra la norma applicabile al punto esatto in cui la persona si trova toglie quell'alibi e rende difendibile la sanzione.

**Il gettito dei permessi.** I tesserini sono un'entrata degli enti competenti. Chi non sa che il permesso esiste, non lo compra. Un canale digitale che spiega quale permesso serve e dove si acquista aumenta la base contribuente.

**La pressione sul bosco.** Nei fine settimana di buttata alcune aree ricevono un carico di raccoglitori che il sottobosco non regge. Sapere in anticipo dove si concentrerà la pressione permette di programmare presidi e informazione.

**L'obbligo di trasparenza.** Le norme regionali vivono in PDF poco accessibili. Renderle consultabili è già oggi un dovere degli enti, non una cortesia.

## 2. Che cosa si vende, esattamente

Tre livelli, con prezzi e responsabilità diverse.

**Livello 1 — app cittadino, gratuita.** Resta gratuita e senza pubblicità per il raccoglitore. È il canale di distribuzione, non il prodotto venduto. Nessun ente paga per qualcosa che i cittadini pagherebbero: paga perché quel canale raggiunge i cittadini.

**Livello 2 — scheda normativa validata.** L'ente compila e firma la propria scheda: permessi, tariffe, giorni, limiti, sanzioni, aree interdette, riferimenti degli Ispettorati micologici. L'app mostra la scheda con il nome dell'ente, la data di validazione e il link alla fonte. Questo è il prodotto: un'informazione normativa attribuibile e aggiornata.

**Livello 3 — cruscotto dell'ente.** Mappa della pressione prevista sui prossimi sette giorni, per programmare i controlli; statistiche anonime e aggregate di consultazione per area; esportazione dei dati per la relazione di fine stagione.

## 3. Perché la parte normativa è il prodotto, non un contorno

È il punto decisivo della trattativa e va detto per primo.

Nessun privato può garantire l'esattezza di 21 corpi normativi regionali che rimandano a centinaia di delibere locali rideterminate ogni anno. Le tariffe dei tesserini in Emilia-Romagna, per fare un esempio verificato, non le fissa la Regione: le fissano annualmente Comunità montane, Consorzi di parco, Province e Comuni. La stessa comparazione ufficiale di ISPRA, che è la fonte istituzionale di riferimento, riporta per quasi tutte le regioni un aggiornamento ad aprile 2021: cinque anni fa.

Questo si trasforma da debolezza in argomento di vendita. **L'ente è l'unico soggetto che può certificare il proprio dato.** Il prodotto gli offre l'infrastruttura per farlo, la responsabilità editoriale resta sua, e il suo nome compare accanto alla scheda. È la stessa logica dei portali di trasparenza.

Di conseguenza l'app è costruita con una regola rigida: **un campo non verificato non viene mostrato.** Dove manca il dato l'app dichiara che manca e rimanda alla fonte ufficiale. Alla consegna una sola regione su ventuno è compilata; le altre venti aspettano la firma di chi ha titolo per darla. In una demo questa non è una lacuna da nascondere: è la dimostrazione di come il sistema si comporta quando il dato non c'è.

## 4. Il concorrente

**Fungopass** (fungopass.it) fa già l'aggregazione normativa delle venti regioni, dichiara aggiornamenti al 2026, e si finanzia con affiliazione commerciale su attrezzatura. È rivolto al cittadino, non all'ente.

Le differenze da giocare in una gara: la previsione agronomica di buttata, che loro non hanno; l'attribuzione istituzionale del dato normativo, che un aggregatore privato non può offrire; l'assenza di monetizzazione sul cittadino, che per un ente pubblico è un requisito, non un vezzo. La loro esistenza dimostra che il bisogno è reale ed è già validato dal mercato.

## 5. Vincoli tecnici da risolvere prima di vendere

Sono tre e vanno affrontati, non nascosti.

**Licenza dei dati meteo.** Open-Meteo è gratuito solo per uso non commerciale, con limite di 10.000 chiamate al giorno e nessuna garanzia di continuità. Un contratto con un ente è uso commerciale: serve il piano a pagamento, 29 $ al mese per un milione di chiamate mensili, che include licenza commerciale, endpoint dedicato e obiettivo di disponibilità del 99,9%. Con una richiesta ogni tre ore per tutte le località, un milione di chiamate copre ampiamente uno scenario nazionale.

**Tasselli cartografici.** Oggi si usano quelli standard di OpenStreetMap, la cui politica d'uso non ammette applicazioni ad alto volume. Per un servizio istituzionale serve un fornitore contrattualizzato: MapTiler ha un piano gratuito da 100.000 caricamenti al mese e piani a pagamento sopra quella soglia.

**Continuità del fornitore.** Open-Meteo è mantenuto da un team molto piccolo. Per un contratto pubblico è un rischio da dichiarare in fase di offerta, con un piano di ricaduta: il codice del server è open source e autoinstallabile, e i dati sottostanti provengono dai servizi meteorologici nazionali.

Il costo di esercizio di base resta comunque nell'ordine di poche centinaia di euro l'anno. Il costo vero del servizio è il lavoro redazionale sulle norme e la manutenzione: è lì che va il prezzo.

## 6. Conformità richiesta a un fornitore della PA

**Protezione dei dati.** Oggi l'app non ha account, non ha server proprio e non raccoglie nulla: la posizione resta sul dispositivo e serve solo a ordinare le località per distanza. È la posizione di partenza migliore possibile. Se si aggiunge il cruscotto statistico del livello 3, servono base giuridica, informativa, valutazione d'impatto e nomina a responsabile del trattamento.

**Accessibilità.** Un servizio digitale della PA deve rispettare le linee guida AgID e lo standard europeo EN 301 549, ora rafforzati dall'European Accessibility Act. L'app nasce con contrasto elevato, navigazione da tastiera, riduzione del movimento e descrizioni testuali dei grafici, ma serve un audit formale e la dichiarazione di accessibilità.

**Riuso e open source.** Il Codice dell'amministrazione digitale impone il riuso del software acquistato dalla PA. Conviene assecondarlo: pubblicare il codice con licenza aperta e vendere il servizio, non la licenza. Un ente che sa di poter cambiare fornitore firma più volentieri.

**Modalità di acquisto.** Sotto le soglie, affidamento diretto tramite MePA. Per importi maggiori, procedura ordinaria o accordo quadro. Un ente parco o una comunità montana può partire con un affidamento diretto in poche settimane.

## 7. Canali di finanziamento europei plausibili

Da verificare bando per bando, con i riferimenti aggiornati al momento della domanda.

- **Sviluppo rurale (PSR/CSR regionali).** Interventi su servizi digitali per le aree rurali e valorizzazione dei prodotti del sottobosco. È il canale più diretto per una comunità montana.
- **LIFE.** Sottoprogramma natura e biodiversità: il monitoraggio della pressione di raccolta sugli ecosistemi forestali è tema ammissibile.
- **Interreg.** La micologia è transfrontaliera: Italia–Francia Alcotra, Italia–Svizzera, Italia–Slovenia, Italia–Austria. Un'app che copre versanti condivisi è un progetto naturalmente cooperativo.
- **Digital Europe.** Solo per una versione a scala europea, con più Stati membri coinvolti.

L'argomento europeo forte non è l'app in sé: è che il modello si replica in Francia, Spagna, Portogallo, Slovenia, Croazia e Romania, dove la raccolta è altrettanto diffusa e la frammentazione normativa altrettanto pesante.

## 8. Che cosa serve prima di presentarsi

1. **Compilare e validare una scheda regionale intera** con l'ente pilota. Una sola, ma completa e firmata: è la dimostrazione del prodotto.
2. **Pubblicare su HTTPS** con dominio proprio. Un ente non guarda una demo aperta da `file:///`.
3. **Attivare il piano commerciale dei dati meteo** e contrattualizzare i tasselli.
4. **Far rivedere il modello agronomico** a un'associazione micologica o a un dipartimento forestale, e citarne il nome. La credibilità scientifica non si autocertifica.
5. **Preparare la dichiarazione di accessibilità** e l'informativa privacy.
6. **Scegliere un ente pilota piccolo e motivato.** Una comunità montana con una sagra del fungo decide in un mese; una Regione impiega un anno.

## 9. Come impostare l'incontro

Non aprire con la tecnologia. Apri con la mappa dell'Italia che mostra dove sta buttando oggi, e con la domanda: quante persone entreranno in quei boschi questo fine settimana, e quante di loro sanno che serve il tesserino?

Poi mostra la scheda dell'Emilia-Romagna compilata accanto a una vuota, e di' che quella vuota si riempie solo con la loro firma.

Chiudi sul numero degli accessi in pronto soccorso della stagione precedente, che l'ente ha e tu no. Chiediglielo: è la domanda che trasforma una demo in un progetto.
