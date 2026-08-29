/* =====================================================================
   Sottobosco — base dati normativa
   ---------------------------------------------------------------------
   Questo file è il solo punto da modificare per aggiornare le norme.
   Nessuna riga di codice dell'app va toccata.

   Regola redazionale: un campo si compila SOLO se verificato su fonte
   ufficiale. Se non è verificato resta null e l'app lo dichiara mancante,
   invece di mostrare un dato plausibile ma non controllato.

   stato: "verificato"  → campo controllato sulla fonte indicata alla data
          "da_validare" → scheda da compilare e firmare dall'ente competente
   ===================================================================== */

window.NORME = {
  versione: "2026-08-29",
  redazione: "bozza tecnica, non validata da un ente",

  /* Quadro nazionale: si applica ovunque, salvo norme regionali più severe. */
  nazionale: {
    legge: "Legge 23 agosto 1993, n. 352 — Norme quadro in materia di raccolta e commercializzazione dei funghi epigei freschi e conservati",
    url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1995-07-14;376",
    regolamento: "D.P.R. 14 luglio 1995, n. 376",
    principi: [
      "Le Regioni disciplinano con legge propria raccolta e commercializzazione, nel rispetto dei principi della legge quadro. Le Regioni a statuto speciale e le Province autonome di Trento e Bolzano dispongono di competenza esclusiva entro i limiti dei rispettivi statuti.",
      "Le Regioni esercitano le funzioni amministrative avvalendosi di Comuni, Province e Comunità montane, anche in collaborazione con le associazioni micologiche di rilevanza nazionale o regionale.",
      "La raccolta è vietata, salvo diversa disposizione degli organismi di gestione, nelle aree di parchi nazionali, riserve naturali e parchi naturali regionali individuate dai relativi enti.",
      "La raccolta è vietata nelle aree interdette dall'autorità forestale per motivi silvo-colturali e in altre aree di particolare valore naturalistico e scientifico individuate dagli organi regionali e locali.",
      "La raccolta è vietata nei giardini e nei terreni di pertinenza degli immobili a uso abitativo adiacenti, salvo che ai proprietari.",
      "Le Regioni possono disporre limitazioni temporali alla raccolta per motivi di salvaguardia dell'ecosistema.",
      "Le materie rimesse alla Regione comprendono autorizzazioni e agevolazioni, autorizzazioni in deroga per i residenti, limiti quantitativi per specie, comportamenti per non danneggiare strato umifero e micelio, divieti d'area, limitazioni temporali, autorizzazioni speciali per mostre e manifestazioni, vigilanza e sanzioni."
    ],
    fonte: "ISPRA — Network per lo studio della diversità micologica",
    fonte_url: "https://ndm.isprambiente.it/attivita/linee-guida-e-normativa/normativa-nazionale-funghi/",
    verificato_il: "2026-08-29",
    stato: "verificato"
  },

  /* Nota metodologica mostrata dall'app accanto a ogni scheda regionale. */
  avvertenza: "Le tariffe dei permessi e diversi limiti operativi non sono fissati dalla Regione ma dagli enti competenti sul territorio — Comuni, Unioni di Comuni, Comunità montane, enti parco — e sono rideterminati ogni anno. Una scheda regionale è quindi sempre un livello di approssimazione: il dato vincolante è quello dell'ente su cui si raccoglie.",

  regioni: {

    "Emilia-Romagna": {
      legge: "L.R. 2 aprile 1996, n. 6 — Disciplina della raccolta e della commercializzazione dei funghi epigei spontanei nel territorio regionale",
      legge_url: "https://demetra.regione.emilia-romagna.it/al/articolo?urn=er:assemblealegislativa:legge:1996;6",
      autorizzazione: "Obbligatoria. Tesserino conforme al modello regionale, rilasciato dagli enti competenti; validità giornaliera, settimanale, mensile o semestrale, sul territorio indicato nel tesserino.",
      chi_rilascia: "Comunità montane, Consorzi di gestione dei parchi, Province e Comuni; anche tramite esercizi pubblici e Centri di assistenza agricola convenzionati.",
      costo: null,
      costo_nota: "Importi determinati annualmente dagli enti competenti: verificare presso l'ente del territorio di raccolta.",
      limite: "3 kg al giorno per persona, di cui non più di 1 kg di Amanita caesarea (ovulo buono) e non più di 1 kg di Calocybe gambosa (prugnolo).",
      minori: "Consentita ai minori di 14 anni se accompagnati da persona munita di autorizzazione; il raccolto del minore si somma al quantitativo dell'accompagnatore.",
      giorni: "Martedì, giovedì, sabato e domenica.",
      orari: "Ore diurne, da un'ora prima del sorgere del sole a un'ora dopo il tramonto.",
      dove: "Nei boschi e nei terreni non coltivati, salvo divieto segnalato da apposite tabelle.",
      sanzioni: null,
      ispra: "https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-emilia-romagna.pdf",
      verificato_il: "2026-08-29",
      stato: "verificato"
    },

    "Toscana": {
      legge: "L.R. 22 marzo 1999, n. 16 — Raccolta e commercializzazione dei funghi epigei spontanei",
      legge_url: null,
      autorizzazione: "Obbligatoria su tutto il territorio regionale, tramite versamento del contributo alla Regione.",
      chi_rilascia: "Regione Toscana; l'autorizzazione vale sull'intero territorio regionale.",
      costo: "Residenti in Toscana: 13 € semestrale, 25 € annuale (12 mesi dal versamento). Riduzione del 50% per residenti in territori montani e per ragazzi 14–18 anni con attestato di corso micologico.",
      costo_nota: "Tariffe indicate come 2026 da fonte secondaria: da riconfermare sulla pagina ufficiale regionale prima della pubblicazione.",
      limite: null,
      minori: null,
      giorni: null,
      orari: null,
      dove: null,
      sanzioni: "Da 40 a 240 € secondo la gravità, con confisca dei funghi raccolti in violazione.",
      ispra: "https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-toscana.pdf",
      verificato_il: "2026-08-29",
      stato: "da_validare"
    },

    "Piemonte":        {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-piemonte.pdf", stato:"da_validare"},
    "Valle d'Aosta":   {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-valle-daosta.pdf", stato:"da_validare"},
    "Lombardia":       {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-lombardia.pdf", stato:"da_validare"},
    "Trentino":        {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-provincia-autonoma-trento.pdf", nota:"Provincia autonoma di Trento, competenza esclusiva. Aggiornamento ISPRA: aprile 2023.", stato:"da_validare"},
    "Alto Adige":      {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-provincia-autonoma-bolzano.pdf", nota:"Provincia autonoma di Bolzano, competenza esclusiva.", stato:"da_validare"},
    "Veneto":          {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-veneto.pdf", stato:"da_validare"},
    "Friuli":          {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-friuli-vg.pdf", stato:"da_validare"},
    "Liguria":         {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-liguria.pdf", stato:"da_validare"},
    "Umbria":          {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-umbria.pdf", stato:"da_validare"},
    "Marche":          {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-marche.pdf", stato:"da_validare"},
    "Lazio":           {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-lazio.pdf", stato:"da_validare"},
    "Abruzzo":         {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-abruzzo.pdf", stato:"da_validare"},
    "Molise":          {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-molise.pdf", stato:"da_validare"},
    "Campania":        {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-campania.pdf", stato:"da_validare"},
    "Puglia":          {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-puglia.pdf", stato:"da_validare"},
    "Basilicata":      {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-basilicata.pdf", stato:"da_validare"},
    "Calabria":        {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-calabria.pdf", stato:"da_validare"},
    "Sicilia":         {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-sicilia.pdf", stato:"da_validare"},
    "Sardegna":        {ispra:"https://www.isprambiente.gov.it/files/biodiversita/raccolta-dei-funghi-epigei-regione-sardegna.pdf", stato:"da_validare"}
  }
};
