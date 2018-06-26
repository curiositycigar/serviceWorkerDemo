var cacheName = 'weatherApp-1';
var filesToCache = [
  '/',
  '/index.html',
  '/static/main.js',
  '/static/main.css',
  '/static/fetch.js',
  '/static/cityCode.js'
];

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] caching app shell');
      return cache.addAll(filesToCache);
    })
  )
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] activate');
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim()
});

self.addEventListener('fetch', function (e) {
  console.log('[ServiceWorker] Fetch ', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  )
});