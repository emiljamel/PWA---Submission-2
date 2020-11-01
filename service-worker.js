const CACHE_NAME = 'soccer-v1';
const BASE_URL = 'https://api.football-data.org/v2';
const URL_TO_CACHES = [
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
  './',
  './manifest.json',
  './index.js',
  './index.html',
  './images/icon-192x192.png',
  './images/icon-512x512.png',
  './styles/materialize.min.css',
  './scripts/data/data-favorites.js',
  './scripts/data/data-standings.js',
  './scripts/data/data-teams.js',
  './scripts/libs/idb.js',
  './scripts/libs/materialize.min.js',
  './scripts/routes/routes.js',
  './scripts/routes/url-parser.js',
  './scripts/utils/sw-register.js',
  './scripts/view/pages/details.js',
  './scripts/view/pages/favorites.js',
  './scripts/view/pages/standings.js',
  './scripts/view/pages/teams.js',
  './scripts/view/App.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URL_TO_CACHES);
    })
  )
});

self.addEventListener('fetch', event => {
  if (event.request.url.indexOf(BASE_URL) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return fetch(event.request).then(response => {
          cache.put(event.request.url, response.clone());

          return response;
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then(response => {
        return response || fetch(event.request);
      })
    );
  }
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log(`[ServiceWorker]: cache ${cacheName} has been removed`);
            
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});