/* Sottobosco — service worker
   ---------------------------------------------------------------
   Strategia:
   - codice dell'app (html, js, manifest) → RETE PRIMA, cache solo se offline.
     Così una nuova versione arriva sempre, senza svuotare nulla a mano.
   - icone, tasselli, font, librerie → cache prima, sono immutabili.
   - dati meteo → rete prima, cache come ricaduta offline.
   Il nuovo worker prende subito il controllo (skipWaiting + clients.claim)
   e la pagina si ricarica da sola. */

const VERSIONE = "1.3.0";
const V = "sottobosco-" + VERSIONE;

const GUSCIO = [
  "./",
  "./index.html",
  "./norme.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(V)
      .then(c => Promise.allSettled(GUSCIO.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(k => Promise.all(k.filter(n => n !== V).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", e => {
  if (e.data === "attiva-subito") self.skipWaiting();
});

const salva = (req, res) => {
  if (res && res.ok) {
    const copia = res.clone();
    caches.open(V).then(c => c.put(req, copia));
  }
  return res;
};

const retePrima = req =>
  fetch(req, { cache: "no-store" })
    .then(r => salva(req, r))
    .catch(() => caches.match(req));

const cachePrima = req =>
  caches.match(req).then(hit => hit || fetch(req).then(r => salva(req, r)));

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const stessaOrigine = url.origin === self.location.origin;

  if (url.hostname.endsWith("open-meteo.com")) {
    e.respondWith(retePrima(req));
    return;
  }

  const eCodice = req.mode === "navigate" ||
    (stessaOrigine && /\.(html|js|webmanifest)$/.test(url.pathname)) ||
    (stessaOrigine && url.pathname.endsWith("/"));

  if (eCodice) {
    e.respondWith(retePrima(req).then(r => r || caches.match("./index.html")));
    return;
  }

  e.respondWith(cachePrima(req).catch(() => caches.match("./index.html")));
});
