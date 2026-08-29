/* Sottobosco — service worker
   Guscio in cache-first, dati meteo in network-first con ricaduta sulla cache. */

const V = "sottobosco-v3";
const GUSCIO = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./norme.js",
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

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Dati meteo: prima la rete, poi l'ultima risposta salvata
  if (url.hostname.endsWith("open-meteo.com")) {
    e.respondWith(
      fetch(req)
        .then(r => {
          const copia = r.clone();
          caches.open(V).then(c => c.put(req, copia));
          return r;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Tasselli della mappa e font: cache opportunistica, mai bloccante
  if (/tile\.openstreetmap\.org|opentopomap\.org|fonts\.(googleapis|gstatic)/.test(url.hostname)) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(r => {
        const copia = r.clone();
        caches.open(V).then(c => c.put(req, copia));
        return r;
      }).catch(() => hit))
    );
    return;
  }

  // Tutto il resto: guscio dell'app
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).catch(() => caches.match("./index.html")))
  );
});
